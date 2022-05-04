window.addEventListener("load", function () {
    viewSlide(".trip img");
});

function viewSlide(className, slideNo = -1) {
    const imgArray = document.querySelectorAll(className);
    imgArray[0].style.display = "block";
    imgArray[0].src = imgArray[0].dataset.src;
    console.log(imgArray[0])
    console.log(imgArray[0].dataset)
    console.log(imgArray[0].src)


    setInterval(() => {
        if (slideNo >= 0) {
            imgArray[slideNo].style.display = "none";
        }
        slideNo++;
        if (slideNo >= imgArray.length) {
            slideNo = 0;
        }
        if (imgArray[slideNo].src == "") {
            //未ロード画像はロードする
            imgArray[slideNo].src = imgArray[slideNo].dataset.src;
        }
        imgArray[slideNo].style.display = "block";
    }, 5000);

    // let msec = document.getElementById('slide_speed').max - document.getElementById('slide_speed').value;
    // setTimeout(function(){viewSlide(className, slideNo);}, msec);
}