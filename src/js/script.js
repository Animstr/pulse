document.addEventListener('DOMContentLoaded', () => {
    function slider(){
            const slidesField = document.querySelector(".slider__slider-inner"),
            slides = document.querySelectorAll(".slider__slide"),
            slideWindow = document.querySelector(".slider__slider-wraper"),
            container = document.querySelector('.container'),
            leftBtn = document.querySelector('.slider__prev-btn'),
            rightBtn = document.querySelector('.slider__next-btn'),
            blockWidth = container.clientWidth,
            sliderImg = document.querySelectorAll('.slider__img');

        let slideIndex = 1;
        let offset = 0;

        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = 'all .5s ease-in-out';
    

        slideWindow.style.overflow = 'hidden';

        slides.forEach(slide => {
            slide.style.width = `${container.clientWidth * 0.7}px`;
        });

        sliderImg.forEach(slide => {
            slide.style.width = `${container.clientWidth * 0.7}px`;
        });

        rightBtn.addEventListener('click', () => {
            if (slideIndex == (slides.length)){
                offset = 0;
                slidesField.style.transform = `translateX(${offset}px )`;
                slideIndex = 1;
            } else {
                offset = offset - blockWidth;

                slidesField.style.transform = `translateX(${offset}px )`
                slideIndex++;
            }
        })

        leftBtn.addEventListener('click', () => {
            if(slideIndex == 1 ){
                offset = -blockWidth * (slides.length - 1);
                slidesField.style.transform = `translateX(${offset}px )`;
                slideIndex = slides.length;
            } else {
                offset = offset + blockWidth;
                slidesField.style.transform = `translateX(${offset}px )`;
                slideIndex--;
            }
        })
    };
    function cardShowMore () {
        const back = document.querySelectorAll('.card__show-less'),
        moreDetailed = document.querySelectorAll('.card__show-more'),
        cardBack = document.querySelectorAll('.card__back'),
        cardFace = document.querySelectorAll('.card__face');

        back.forEach((value, i) => {
            value.addEventListener('click', (e) => {
                e.preventDefault();
                cardBack[i].classList.remove('card__back_active');
                cardFace[i].classList.add('card__face_active');
            });
        })

        moreDetailed.forEach((value, i) => {
            value.addEventListener('click', (e) => {
                e.preventDefault();
                cardFace[i].classList.remove('card__face_active');
                cardBack[i].classList.add('card__back_active');
            })
        })
    }

    function tabs () {
        const fitnesTub = document.querySelector('[data-fitnes]'),
        runTub = document.querySelector('[data-run]'),
        triathlonTub = document.querySelector('[data-triathlon]'),
        catalogFitnes = document.querySelector('.catalog__for-fitnes'),
        catalogRun = document.querySelector('.catalog__for-run'),
        catalogTriathlone = document.querySelector('.catalog__for-triathlon');

        fitnesTub.addEventListener('click', () => changeActive(triathlonTub, runTub, fitnesTub, catalogTriathlone, catalogRun, catalogFitnes));
        runTub.addEventListener('click', () => changeActive(fitnesTub, triathlonTub, runTub, catalogFitnes, catalogTriathlone, catalogRun));
        triathlonTub.addEventListener('click', () => changeActive(fitnesTub, runTub, triathlonTub, catalogFitnes, catalogRun, catalogTriathlone));

        function changeActive (removeOneTub, removeTwoTub, activeTub, removeOnecatlog, removeTwoCatalog, activeCatalog){
            removeOneTub.classList.remove('catalog_active');
            removeTwoTub.classList.remove('catalog_active');
            activeTub.classList.add('catalog_active');
            removeOnecatlog.classList.remove('catalog__cards_active');
            removeTwoCatalog.classList.remove('catalog__cards_active');
            activeCatalog.classList.add('catalog__cards_active');
        }
    }

    tabs();
    cardShowMore();
    slider();
    window.addEventListener('resize', () => {slider()})
})
