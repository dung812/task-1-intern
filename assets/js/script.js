window.addEventListener("load", () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const boxImgs = document.querySelectorAll(".box-img");
    const lengthBoxImgs = boxImgs.length - 1;

    setInterval(function () {
        boxImgs.forEach(function(boxElement) {
            if (boxElement.classList.contains("active")) 
                boxElement.classList.remove("active");
        });
        const boxElement = boxImgs[getRandomInt(0,lengthBoxImgs)];
        boxElement.classList.add("active");
    },3000);


});
