window.addEventListener("load", () => {

    // handler create random gift
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const giftLength = gifts.length - 1;
    const randomGift = gifts[getRandomInt(0, giftLength)];
    // const randomGift = gifts[2]; 

    createGift(randomGift);

    function createGift(data) {
        let templateNormalGift = `
            <p class="title-gift">Chúc mừng bạn đã nhận được phần quà</p>
            <div class="grid wide">
                <div class="row box-wrapper__center" style="width: 100%">
                    <div class="col l-12 m-12 c-12">
                        <div class="box-random-gift__normal">
                            <div class="gift-name--box">${data.name}</div>
                            <img src="./assets/img/${data.src}" alt="anh-qua-tang" class="box-img-large gift-img-normal mt-32">
                        </div>
                    </div>
                </div>
            </div>`;

        let templateSpecialGift =  `
            <p class="title-gift bold">tuyệt vời,</p>
            <p class="title">Bạn đã nhận được phần quà đặc biệt</p>
            <div class="grid wide">
                <div class="row box-wrapper__center">
                    <div class="col l-12 m-12 c-12">
                        <div class="box-random-gift">
                            <div class="gift-name--box gift-name--box__large">${data.name}</div>
                            <div class="light-container-large">
                                <div class="light-large horizontal left"></div>
                                <div class="light-large horizontal right"></div>  
                                <div class="light-large vertical top"></div>
                                <div class="light-large vertical bottom"></div>
                                <div class="light-large horizontal half-left"></div>
                                <div class="light-large horizontal half-right-1"></div>
                                <div class="light-large horizontal half-right-2"></div>
                                <div class="light-large vertical half-top"></div>
                                <div class="light-large vertical half-bottom-1"></div>
                                <div class="light-large vertical half-bottom-2"></div>
                                <div class="light-large horizontal half-bottom-3"></div>  
                                <div class="light-large horizontal half-bottom-4"></div>  
                            </div>
                            <img src="./assets/img/${data.src}" alt="anh-qua-tang" class="box-img-large">
                        </div>
                    </div>
                </div>
            </div> `;

        if (data.id === 1) { // Case Túi rút thêm style xoay 20 độ
            templateNormalGift = `
                <p class="title-gift">Chúc mừng bạn đã nhận được phần quà</p>
                <div class="grid wide">
                    <div class="row box-wrapper__center" style="width: 100%">
                        <div class="col l-12 m-12 c-12">
                            <div class="box-random-gift__normal">
                                <div class="gift-name--box">${data.name}</div>
                                <img src="./assets/img/${data.src}" alt="anh-qua-tang" class="box-img-large gift-img-normal mt-32" style="transform: rotate(20deg)">
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        if (data.id === 7) {
            const Wrap = document.querySelector(".wrapper");
            Wrap.innerHTML = templateSpecialGift;
        }
        else {
            const Wrap = document.querySelector(".wrapper");
            Wrap.innerHTML = templateNormalGift;
        }
     }

    // handler video ninja animation 
    const videoBg = document.getElementById("background-video");
    videoBg.addEventListener("ended", () => {
        videoBg.style.display = "none";
        const gift = document.querySelector(".box-random-gift__normal");
        const SpecialGift = document.querySelector(".box-random-gift");
        if (gift) {
            gift.classList.add("fadeout");
        }
        if (SpecialGift) {
            SpecialGift.classList.add("fadeout");
        }
    });

});