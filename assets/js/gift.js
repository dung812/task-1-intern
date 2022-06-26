window.addEventListener("load", () => {

    // handler create random gift
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const giftLength = gifts.length - 1;
    const randomGift = gifts[getRandomInt(0, giftLength)];

    createGift(randomGift);


    function createGift(data) {
        let template = `  <div class="gift-name--box">${data.name}</div>
                            <img src="./assets/img/${data.src}" alt="" class="box-img-large gift-img-normal mt-32">`;
        if (data.id === 1) { // Case Túi rút thêm style xoay 20 độ
            template = `  <div class="gift-name--box">${data.name}</div>
                            <img src="./assets/img/${data.src}" alt="" class="box-img-large gift-img-normal mt-32" style="transform: rotate(20deg)">`;
        }
 

        const boxWrap = document.querySelector(".box-random-gift__normal");
        boxWrap.innerHTML = template;
        // boxWrap.insertAdjacentElement("afterbegin", template);
    }

    // handler video ninja animation 
    const videoBg = document.getElementById("background-video");
    videoBg.addEventListener("ended", () => {
        videoBg.style.display = "none";
        const gift = document.querySelector(".box-random-gift__normal");
        gift.classList.add("fadeout");
    });



});