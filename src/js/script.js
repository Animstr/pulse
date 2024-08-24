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
    const consultationModal = document.querySelector('[data-modal="consultation"]'),
        overlay = document.querySelector('.overlay'),
        buyModal = document.querySelector('[data-modal="buy"]'),
        thanksModal = document.querySelector('[data-modal="thanks"]'),
        buyBtns = document.querySelectorAll('[data-catalog="buy"]'),
        consultationBtns = document.querySelectorAll('[data-btn = "consultation"]'),
        thanksBtns = document.querySelectorAll('[data-btn="thanks"]'),
        buyInputs = document.querySelectorAll('[data-btn="thanks"]'),
        consultationInputs = document.querySelectorAll('[data-input="consultation"]'),
        closeBtns = document.querySelectorAll('.modal__close'),
        itemName = document.querySelectorAll('.card__name'),
        namePlace = document.querySelector('[data-name="itemName"]'),
        modal = document.querySelectorAll('.modal');

        function pressModalBtn (btns, btnsmodal) {
            btns.forEach((value, i) => {
                value.addEventListener('click', () =>{
                    overlay.style.display = 'block';
                    btnsmodal.style.display = 'block';
                    namePlace.replaceWith(itemName[i]);
                })
            });
        };
        function closeModalForms (form) {
            form.style.display = 'none';
            overlay.style.display = 'none';
        }

        /* function formChecking (btns) {
            btns.forEach((btn) => {
                btn.addEventListener('click', () =>{
                    console.log('hi')
                    thanksModal.style.display = 'block';
                    closeModalForms(buyModal);
                    closeModalForms(consultationModal);
                })
            })
        } */
        function closeModal () {
            closeBtns.forEach((btn) => {
                btn.addEventListener('click', () => {
                    closeModalForms(buyModal);
                    closeModalForms(consultationModal);
                    closeModalForms(thanksModal);
                })
            })
            overlay.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-modal') == '' || e.target == overlay){
                    closeModalForms(buyModal);
                    closeModalForms(consultationModal);
                    closeModalForms(thanksModal);
                }
            })
        }

        function numberMask(inputSelector) {
            var input = document.querySelectorAll(inputSelector);
            input.forEach((value) => {
                value.addEventListener("input", mask);
                value.addEventListener("focus", mask);
                value.addEventListener("blur", mask);
            
            })
            /***/
            function mask (event) {
                var blank = "+_ (___) ___-__-__";
                
                var i = 0;
                var val = this.value.replace(/\D/g, "").replace(/^8/, "7"); // <---
                
                this.value = blank.replace(/./g, function(char) {
                if (/[_\d]/.test(char) && i < val.length) return val.charAt(i++);
                
                return i >= val.length ? "" : char;
                });
                
                if (event.type == "blur") {
                if (this.value.length == 2) this.value = "";
                } else {
                setCursorPosition(this, this.value.length);
                }
            };
            
            /***/
            function setCursorPosition(elem, pos) {
                elem.focus();
                
                if (elem.setSelectionRange) {    
                elem.setSelectionRange(pos, pos);
                return;
                }
                
                if (elem.createTextRange) {    
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();      
                return;
                }
            }
        }
       
    numberMask('.tel');
    pressModalBtn(buyBtns, buyModal);
    pressModalBtn(consultationBtns, consultationModal);
    /* formChecking(buyBtns);
    formChecking(thanksBtns);*/
    closeModal();
    tabs();
    cardShowMore();
    slider();
    window.addEventListener('resize', () => {slider()})
})
