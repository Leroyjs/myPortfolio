//the appearance of blocks
(function () {
    function instagramCircleOpeningAnimation() {
        function SVGCircle(elem) {
            let circleLength = elem.getTotalLength();

            this.setStrokeDasharrayInPercent = function () {
                let strokeDasharray = '';

                for (i = 0; i < arguments.length; i++) {
                    strokeDasharray +=
                        (arguments[i] / 100) * circleLength + ' ';
                }

                elem.style.strokeDasharray = strokeDasharray;
            };

            this.setStrokeRotate = function (deg) {
                elem.style.transform = 'rotate(' + deg + 'deg)';
                elem.style.transformOrigin = '100px 100px';
            };
        }

        let instagramCircle = document.querySelector('#instagramCircle');
        let SVGCircleInstance = new SVGCircle(instagramCircle);
        let dasharrayArray = [];
        let count = 4;
        let deg = -120;

        let load = setInterval(
            () => {
                if (count > 0) {
                    dasharrayArray.unshift(count);
                    dasharrayArray.unshift(4 - count);
                    count -= 0.3;
                } else {
                    dasharrayArray.unshift(0);
                    dasharrayArray.unshift(4);
                }

                SVGCircleInstance.setStrokeRotate(deg);
                deg += 1.278947;
                SVGCircleInstance.setStrokeDasharrayInPercent(
                    ...dasharrayArray,
                    0,
                    100
                );

                if (dasharrayArray.length > 76) {
                    clearInterval(load);
                }
            },

            20
        );
    }

    function mySkillsAppear() {
        (function () {
            const appearBlocks = document.querySelectorAll(
                '.my-skills_appear-block-0'
            );

            let count = 0;

            const appearInterval = setInterval(
                () => {
                    appearBlocks[count].style.paddingTop = '0px';
                    count++;

                    if (count >= appearBlocks.length) {
                        clearInterval(appearInterval);
                    }
                },

                200
            );
        })();

        (function () {
            const appearBlocks = document.querySelectorAll(
                '.my-skills_appear-block-1'
            );

            let count = 0;

            const appearInterval = setInterval(
                () => {
                    if (count >= appearBlocks.length) {
                        clearInterval(appearInterval);
                    }

                    if (appearBlocks[count]) {
                        appearBlocks[count].style.paddingTop = '0px';
                        count++;
                    }

                    if (appearBlocks[count]) {
                        appearBlocks[count].style.paddingTop = '0px';
                        count++;
                    }

                    if (appearBlocks[count]) {
                        appearBlocks[count].style.paddingTop = '0px';
                        count++;
                    }
                },

                150
            );
        })();

        (function () {
            const appearBlocks = document.querySelectorAll(
                '.my-skills_appear-block-2'
            );

            let count = 0;

            const appearInterval = setInterval(
                () => {
                    if (count >= appearBlocks.length) {
                        clearInterval(appearInterval);
                    }

                    if (appearBlocks[count]) {
                        appearBlocks[count].style.paddingTop = '0px';
                        count++;
                    }

                    if (appearBlocks[count]) {
                        appearBlocks[count].style.paddingTop = '0px';
                        count++;
                    }
                },

                300
            );
        })();
    }

    function appearanceOfTitle(appearBlock) {
        appearBlock.style.paddingTop = '20px';
    }

    function appearScroll(appearBlock, callback, border) {
        let flag = true;
        const wrapper = document.querySelector('#wrapper');

        wrapper.addEventListener('scroll', () => {
            let appearTop = appearBlock.getBoundingClientRect();
            let vh = document.documentElement.clientHeight;
            let appearValue = appearTop.top - vh * border;

            if (appearValue <= 0 && flag) {
                callback();
                flag = false;
            }
        });
    }

    function appearanceOfFooterLogo() {
        function SVGLogo(elem) {
            let circleLength = 506;

            this.setStrokeDasharrayInPercent = function (percent) {
                elem.style.strokeDasharray =
                    (percent / 100) * circleLength + ' ' + circleLength;
            };
        }

        const footerLogo = document.querySelector('#footerLogo');
        const SVGCircleInstance = new SVGLogo(footerLogo);
        let percen = 0;

        const footerLogoInterval = setInterval(
            () => {
                SVGCircleInstance.setStrokeDasharrayInPercent(percen);
                percen++;

                if (percen > 250) {
                    clearInterval(footerLogoInterval);
                }
            },

            10
        );
    }

    // //moving circles
    // function appearanceOfCircle() {
    //     const circles = document.querySelectorAll('.circle_small');
    //     circles.forEach((circle) => {
    //         circle.style.opacity = 1;
    //     });

    //     const algorithm = [
    //         {
    //             y: [8, -8, -8, 8],
    //             x: [10, -20, 10, -12],
    //         },

    //         {
    //             y: [-30, 10, -7, 3],
    //             x: [-29, 20, -5, -7],
    //         },

    //         {
    //             y: [10, 10, -7, 3],
    //             x: [-29, 20, -10, -7],
    //         },

    //         {
    //             y: [5, 4, -7, 3],
    //             x: [-20, 3, -10, -7],
    //         },

    //         {
    //             y: [0, 0, 0, 0],
    //             x: [0, 0, 0, 0],
    //         },
    //     ];
    //     let count = 0;

    //     const appearanceOfCircleInterval = setInterval(
    //         () => {
    //             circles.forEach((item, index) => {
    //                 item.style.transform = `translate(${algorithm[count].x[index]}vw, ${algorithm[count].y[index]}vh)`;
    //             });
    //             count++;

    //             if (count >= algorithm.length) {
    //                 clearInterval(appearanceOfCircleInterval);
    //             }
    //         },

    //         100
    //     );
    // }
    // appearScroll(approachCircles, appearanceOfCircle, 0.75);

    // function appearanceOfCircle() {
    //     const circles = document.querySelectorAll('.circle_small');
    //     circles.forEach((circle) => {
    //         circle.style.opacity = 1;
    //     });

    //     const algorithm = [
    //         {
    //             y: [8, -8, -8, 8],
    //             x: [10, -20, 10, -12],
    //         },

    //         {
    //             y: [-30, 10, -7, 3],
    //             x: [-29, 20, -5, -7],
    //         },

    //         {
    //             y: [10, 10, -7, 3],
    //             x: [-29, 20, -10, -7],
    //         },

    //         {
    //             y: [5, 4, -7, 3],
    //             x: [-20, 3, -10, -7],
    //         },

    //         {
    //             y: [0, 0, 0, 0],
    //             x: [0, 0, 0, 0],
    //         },
    //     ];
    //     let count = 0;

    //     const appearanceOfCircleInterval = setInterval(
    //         () => {
    //             circles.forEach((item, index) => {
    //                 item.style.transform = `translate(${algorithm[count].x[index]}vw, ${algorithm[count].y[index]}vh)`;
    //             });
    //             count++;

    //             if (count >= algorithm.length) {
    //                 clearInterval(appearanceOfCircleInterval);
    //             }
    //         },

    //         100
    //     );
    // }

    function appearanceOfCircle() {
        let interval = 10;
        let deg = 0;
        const circles = document.querySelectorAll('.circle_small circle');
        const span = document.querySelectorAll('.circle__text-wrapper span');

        circles.forEach((circle) => {
            circle.style.opacity = 1;
        });

        function SVGLogo(elem) {
            let circleLength = 700;

            this.setStrokeDasharrayInPercent = function (percent) {
                elem.style.strokeDasharray =
                    (percent / 100) * circleLength + ' ' + 200;
            };

            this.setStrokeRotate = function (deg) {
                elem.style.transform = 'rotate(' + deg + 'deg)';
                elem.style.transformOrigin = '100px 100px';
            };
        }

        span.forEach((item) => {
            item.style.marginTop = 0;
        });

        circles.forEach((item, index) => {
            const SVGCircleInstance = new SVGLogo(item);
            let percen = 0;

            if (index < 2) {
                interval += 4;
            } else {
                interval -= 2;
            }

            SVGCircleInstance.setStrokeRotate(deg);
            deg += 120;

            const circlesInterval = setInterval(
                () => {
                    SVGCircleInstance.setStrokeDasharrayInPercent(percen);
                    percen++;

                    if (percen >= 100) {
                        clearInterval(circlesInterval);
                    }
                },

                interval
            );
        });
    }

    const titles = document.querySelectorAll('.title_appearance');
    const instagramCircle = document.querySelector('#instagramCircle');
    const mySkills = document.querySelector('.my-skills');
    const approachCircles = document.querySelector('.approach_circles');
    const footerLogo = document.querySelector('#footerLogo');

    titles.forEach((item) => {
        appearScroll(item, () => appearanceOfTitle(item), 0.95);
    });
    appearScroll(instagramCircle, instagramCircleOpeningAnimation, 0.75);
    appearScroll(mySkills, mySkillsAppear, 0.95);
    appearScroll(approachCircles, appearanceOfCircle, 0.75);
    appearScroll(footerLogo, appearanceOfFooterLogo, 0.8);
})();

// blinking symbols
(function () {
    let symbol = document.querySelectorAll('.symbol');

    setInterval(
        () => {
            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            symbol[randomInteger(0, symbol.length - 1)].classList.toggle(
                'invisible'
            );
        },

        80
    );
})();

// scroll anchors
(function () {
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 600,
        framesCount = 120;
    const wrapper = document.querySelector('#wrapper');

    anchors.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // closing the menu
            const menuBtn = document.querySelector('.menu-btn');
            const menu = document.querySelector('.menu');
            const moreAbout = document.querySelector('.more-about');
            if (moreAbout.classList.contains('more-about_active')) {
                document.querySelector('.my-photo').click();
            }
            menuBtn.classList.remove('menu-btn_active');
            menu.classList.remove('menu_active');

            // body.classList.remove('container_no-scroll');

            // getting anchor coordinates
            let coordY =
                document
                    .querySelector(item.getAttribute('href'))
                    .getBoundingClientRect().top + wrapper.scrollTop;
            // scroll

            if (coordY > wrapper.scrollTop - coordY) {
                let scrollBy = coordY / framesCount;

                let scroller = setInterval(
                    function () {
                        if (scrollBy > wrapper.scrollTop - coordY && !end) {
                            wrapper.scrollBy(0, scrollBy);
                        } else {
                            wrapper.scrollTo(0, coordY);
                            clearInterval(scroller);
                        }
                    },

                    animationTime / framesCount
                );
            }

            if (coordY < wrapper.scrollTop - coordY) {
                let scrollBy = (wrapper.scrollTop - coordY) / framesCount;

                let scroller = setInterval(
                    function () {
                        if (scrollBy < wrapper.scrollTop - coordY && !end) {
                            wrapper.scrollBy(0, -scrollBy);
                        } else {
                            wrapper.scrollTo(0, coordY);
                            clearInterval(scroller);
                        }
                    },

                    animationTime / framesCount
                );
            }

            // end
            let end = false;

            setTimeout(
                () => {
                    end = true;

                    if (item.classList.contains('menu__link_more-about')) {
                        setTimeout(
                            () => {
                                const myPhoto = document.querySelector(
                                    '.my-photo'
                                );
                                myPhoto.click();
                            },

                            200
                        );
                    }
                },

                animationTime
            );
        });
    });
})();

// inputs
(function () {
    (function () {
        const inputs = document.querySelectorAll('.group input');

        inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                if (input.value === '') {
                    input.classList.remove('group_active');
                } else {
                    input.classList.add('group_active');
                }

                input.addEventListener('blur', () => {
                    if (input.value === '') {
                        input.classList.remove('group_active');
                    }
                });
            });
        });
    })();

    window.addEventListener('DOMContentLoaded', function () {
        function setCursorPosition(pos, elem) {
            elem.focus();
            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }

        function mask(event) {
            var matrix = '+7 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
            def.length >= val.length && (val = def);

            matrix = matrix.replace(/[_\d]/g, function (a) {
                return val.charAt(i++) || '_';
            });
            this.value = matrix;
            i = matrix.lastIndexOf(val.substr(-1));
            i < matrix.length && matrix != this.defaultValue
                ? i++
                : (i = matrix.indexOf('_'));
            setCursorPosition(i, this);
        }

        const input = document.querySelector('#lead__phone');
        const input2 = document.querySelector('#lead__interested-in');
        const input3 = document.querySelector('#lead__name');
        const button = document.querySelector('.lead button');

        button.addEventListener('click', (e) => {
            e.preventDefault();

            if (input.value === '') {
                const errorBlock = document.querySelector('.group__error');
                errorBlock.style.visibility = 'visible';
                errorBlock.style.opacity = '1';
                button.classList.remove('lead_active');
            } else {
                const buttonInner = document.querySelector('.button__inner');
                const buttonSpans = document.querySelectorAll(
                    '.button__inner span'
                );

                if (
                    !(input.value.split('_').length > 1 || input.value === '')
                ) {
                    buttonSpans.forEach((span) => {
                        span.style.marginTop = '-44px';
                        span.style.marginBottom = '22px';
                    });
                    button.classList.add('lead_done');
                    buttonInner.style.paddingTop = '0';
                    // mail to
                    const form = `name=${input3}&phone=${input}&header=${input2}`;
                    fetch('/mail.php', {
                        method: 'POST',
                        body: form,
                    });
                } else {
                    const errorBlock = document.querySelector('.group__error');
                    errorBlock.style.visibility = 'visible';
                    errorBlock.style.opacity = '1';
                    button.classList.remove('lead_active');
                }
            }
        });

        input.addEventListener('click', () => {
            if (input.value === '') {
                input.value = '+7 (___) ___-____';
                input.setSelectionRange(4, 4);
            }
        });

        input.addEventListener('keyup', () => {
            if (!(input.value.split('_').length > 1 || input.value === '')) {
                const errorBlock = document.querySelector('.group__error');

                errorBlock.style.visibility = 'hidden';
                errorBlock.style.opacity = '0';
                button.classList.add('lead_active');
            }
        });

        input.addEventListener('blur', () => {
            if (input.value === '+7 (___) ___-____') {
                input.value = '';
            }

            if (input.value.split('_').length > 1 || input.value === '') {
                const errorBlock = document.querySelector('.group__error');
                errorBlock.style.visibility = 'visible';
                errorBlock.style.opacity = '1';
                button.classList.remove('lead_active');
            } else {
                const errorBlock = document.querySelector('.group__error');
                errorBlock.style.visibility = 'hidden';
                errorBlock.style.opacity = '0';
                button.classList.add('lead_active');
            }
        });
        input.addEventListener('input', mask, false);
    });
})();

// preloader
(function () {
    let instagramCircle = document.querySelector('#preloaderLogo');
    const preloader = document.querySelector('.preloader');
    let SVGCircleInstance = new SVGLogo(instagramCircle);
    let percentLoad = 0;
    let images = document.images;
    let imagesTotalCount = images.length - 1;
    let imagesLoadedCount = 0;
    let percent = 0;
    let fakePercen = 0;
    let isEnd = false;
    let i = 0;
    const body = document.body;
    body.classList.add('no-scroll');

    let loadPrelader = setInterval(
        () => {
            imagesClone = new Image();
            imagesClone.onload = imageLoaded;
            imagesClone.onerror = imageLoaded;
            imagesClone.src = images[i].src;

            i++;
        },

        100
    );

    // start
    function start() {
        function socalLinksStart() {
            const socialLinks = document.querySelectorAll('.social-links a');
            let count = 0;

            let startInterval = setInterval(
                () => {
                    socialLinks[count].firstElementChild.style.marginTop =
                        '-18px';

                    count++;

                    if (count >= socialLinks.length) {
                        clearInterval(startInterval);
                    }
                },

                200
            );
        }

        function arrowStart() {
            const arrow = document.querySelector('.arrow');

            arrow.style.bottom = '38px';
            arrow.style.opacity = '1';
        }

        function annotationStart() {
            const lines = document.querySelectorAll(
                '.annotation .annotation__line'
            );
            let count = 0;

            const annotationInterval = setInterval(
                () => {
                    lines[count].style.paddingTop = '0px';
                    count++;

                    if (count >= lines.length) {
                        clearInterval(annotationInterval);
                    }
                },

                180
            );
        }

        function appearanceOfH1() {
            const titleLines = document.querySelectorAll(
                '#title-0 .title__hidden-block'
            );
            titleLines[0].style.paddingTop = '0';

            setTimeout(
                () => {
                    titleLines[1].style.paddingTop = '0';
                },

                300
            );
        }

        setTimeout(
            () => {
                appearanceOfH1();
            },

            400
        );

        setTimeout(
            () => {
                arrowStart();
                socalLinksStart();
                annotationStart();
            },

            1000
        );
    }

    function SVGLogo(elem) {
        let circleLength = 506;

        this.setStrokeDasharrayInPercent = function (percent) {
            elem.style.strokeDasharray =
                (percent / 100) * circleLength + ' ' + circleLength;
        };
    }

    function imageLoaded() {
        imagesLoadedCount++;
        percent = (100 / imagesTotalCount) * imagesLoadedCount;
        if (fakePercen < percent) {
            let loadPreladerFake = setInterval(
                () => {
                    fakePercen++;
                    SVGCircleInstance.setStrokeDasharrayInPercent(fakePercen);

                    if (fakePercen >= percent) {
                        clearInterval(loadPreladerFake);

                        if (fakePercen >= 100 && !isEnd) {
                            isEnd = true;
                            siteHasLoaded();
                        }
                    }
                },

                60
            );
            if (percent >= 100 || i >= imagesTotalCount) {
                clearInterval(loadPrelader);
            }
        }
    }

    function siteHasLoaded() {
        const preloaderLogo = document.querySelector('.preloader__logo');
        let countBlink = 0;

        blinking(2, 50, () =>
            blinking(4, 120, () =>
                blinking(5, 250, () => blinking(7, 50, () => blinking_end()))
            )
        );

        function blinking(maxCountBlink, timeInterval, nextInterval) {
            let blinkingInterval = setInterval(
                () => {
                    countBlink++;
                    preloaderLogo.classList.toggle('invisible');

                    if (countBlink >= maxCountBlink) {
                        clearInterval(blinkingInterval);
                        nextInterval();
                    }
                },

                timeInterval
            );
        }

        function blinking_end() {
            setTimeout(
                () => {
                    const preloader = document.querySelector('.preloader');
                    preloader.classList.add('preloader_done');
                    start();
                    body.classList.remove('no-scroll');
                },

                800
            );
        }
    }
})();

// menu activation
(function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const body = document.body;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('menu-btn_active');
        menu.classList.toggle('menu_active');
        body.classList.toggle('no-scroll');
    });
})();

// quick order
(function () {
    const input = document.querySelector('#lead__interested-in');
    const annotationLinkApp = document.querySelector('#annotation__link-app');
    const annotationLinkSites = document.querySelector(
        '#annotation__link-sites'
    );

    annotationLinkApp.addEventListener('click', () => {
        input.value = 'WEB - приложение';
        input.classList.add('group_active');
    });

    annotationLinkSites.addEventListener('click', () => {
        input.value = 'Сайт';
        input.classList.add('group_active');
    });
})();

//smooth scroll
// $(document).ready(function () {
//     $('#wrapper').smoothWheel();
// });

// more about
(function () {
    let flag = true;
    let scroll;
    const myPhoto = document.querySelector('.my-photo');
    const arrow = document.querySelector('.more-about__arrow');
    const moreAbout = document.querySelector('.more-about');
    const main = document.querySelector('.more-about__main');
    const title = document.querySelector('.more-about__title');
    const content = document.querySelector('.more-about__content');
    const container = document.querySelector('.container');
    const wrapper = document.querySelector('.wrapper');
    const instagramCircle = document.querySelector('#instagramCircle');

    myPhoto.addEventListener('click', () => {
        if (flag) {
            scroll = wrapper.scrollTop;
            flag = false;
        } else {
            flag = true;
        }

        moreAbout.classList.toggle('more-about_active');
        container.style.top = -scroll + 'px';
        container.classList.toggle('container_no-scroll');
        wrapper.scrollTo(0, scroll);
        instagramCircle.classList.toggle('instagramCircle_active');

        if (flag) {
            title.classList.remove('more-about__title_active');
            content.classList.remove('more-about__content_active');
            arrow.classList.remove('more-about__arrow_active');
        } else {
            main.classList.add('more-about__main_active');
        }

        setTimeout(
            () => {
                if (!flag) {
                    title.classList.add('more-about__title_active');
                    content.classList.add('more-about__content_active');
                    arrow.classList.add('more-about__arrow_active');
                } else {
                    main.classList.remove('more-about__main_active');
                }
            },

            500
        );
    });

    arrow.addEventListener('click', () => {
        if (flag) {
            scroll = wrapper.scrollTop;
            flag = false;
        } else {
            flag = true;
        }

        moreAbout.classList.toggle('more-about_active');
        container.style.top = -scroll + 'px';
        container.classList.toggle('container_no-scroll');
        wrapper.scrollTo(0, scroll);
        instagramCircle.classList.toggle('instagramCircle_active');

        if (flag) {
            title.classList.remove('more-about__title_active');
            content.classList.remove('more-about__content_active');
            arrow.classList.remove('more-about__arrow_active');
        } else {
            main.classList.add('more-about__main_active');
        }

        setTimeout(
            () => {
                if (!flag) {
                    title.classList.add('more-about__title_active');
                    content.classList.add('more-about__content_active');
                    arrow.classList.add('more-about__arrow_active');
                } else {
                    main.classList.remove('more-about__main_active');
                }
            },

            500
        );
    });
})();

// appearance of the header overlay

// cursor
(function () {
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
        navigator.userAgent
    );

    if (!isMobile) {
        let coordinates = {
            x: 0,
            y: 0,
        };

        let isFixed = false;
        cursorMain = document.querySelector('.cursor');
        cursorSub = document.querySelector('.cursor__sub');
        cursorSubEllipse = document.querySelector('.cursor__sub ellipse');

        document
            .querySelector('.wrapper')
            .addEventListener('mousemove', (e) => {
                cursorMain.style.left = e.pageX - 7 + 'px';
                cursorMain.style.top = e.pageY - 7 + 'px';

                if (!isFixed) {
                    coordinates.x = e.pageX - 29;
                    coordinates.y = e.pageY - 29;
                }

                cursorSub.style.opacity = 1;
                cursorMain.style.opacity = 1;
            });

        document.querySelector('.menu').addEventListener('mousemove', (e) => {
            cursorMain.style.left = e.pageX - 7 + 'px';
            cursorMain.style.top = e.pageY - 7 + 'px';

            if (!isFixed) {
                coordinates.x = e.pageX - 29;
                coordinates.y = e.pageY - 29;
            }

            cursorSub.style.opacity = 1;
            cursorMain.style.opacity = 1;
        });

        document.body.addEventListener('mouseleave', () => {
            cursorSub.style.opacity = 0;
            cursorMain.style.opacity = 0;
        });

        const time = 15;
        const interval = 1;

        requestAnimationFrame(cursorMove);

        function cursorMove() {
            const x = cursorSub.getBoundingClientRect().x;
            const y = cursorSub.getBoundingClientRect().y;
            const diffX = Math.abs(x - coordinates.x);
            const diffY = Math.abs(y - coordinates.y);

            if (!isFixed) {
                cursorSubEllipse.style.ry =
                    19.5 -
                    (diffX / (time / interval) + diffY / (time / interval)) /
                        1.2 +
                    'px';
                cursorSubEllipse.style.rx =
                    19.5 +
                    (diffX / (time / interval) + diffY / (time / interval)) /
                        1.8 +
                    'px';
                cursorSubEllipse.style.transform =
                    'rotate(' +
                    Math.atan((y - coordinates.y) / (x - coordinates.x)) * 45 +
                    'deg)';
            }

            if (x > coordinates.x) {
                cursorSub.style.left = x - diffX / (time / interval) + 'px';
            }

            if (x < coordinates.x) {
                cursorSub.style.left = x + diffX / (time / interval) + 'px';
            }

            if (y > coordinates.y) {
                cursorSub.style.top = y - diffY / (time / interval) + 'px';
            }

            if (y < coordinates.y) {
                cursorSub.style.top = y + diffY / (time / interval) + 'px';
            }
            requestAnimationFrame(cursorMove);
        }

        // setInterval(() => {
        //     const x = cursorSub.getBoundingClientRect().x;
        //     const y = cursorSub.getBoundingClientRect().y;
        //     const diffX = Math.abs(x - coordinates.x);
        //     const diffY = Math.abs(y - coordinates.y);

        //     if (!isFixed) {
        //         cursorSubEllipse.style.ry =
        //             19.5 -
        //             (diffX / (time / interval) + diffY / (time / interval)) /
        //                 1.2 +
        //             'px';
        //         cursorSubEllipse.style.rx =
        //             19.5 +
        //             (diffX / (time / interval) + diffY / (time / interval)) /
        //                 1.8 +
        //             'px';
        //         cursorSubEllipse.style.transform =
        //             'rotate(' +
        //             Math.atan((y - coordinates.y) / (x - coordinates.x)) * 45 +
        //             'deg)';
        //     }

        //     if (x > coordinates.x) {
        //         cursorSub.style.left = x - diffX / (time / interval) + 'px';
        //     }

        //     if (x < coordinates.x) {
        //         cursorSub.style.left = x + diffX / (time / interval) + 'px';
        //     }

        //     if (y > coordinates.y) {
        //         cursorSub.style.top = y - diffY / (time / interval) + 'px';
        //     }

        //     if (y < coordinates.y) {
        //         cursorSub.style.top = y + diffY / (time / interval) + 'px';
        //     }
        // }, interval);

        // cursor sticker
        const stickers = document.querySelectorAll('.cursor__sticker');
        let onSticker = false;
        let positionTimer;

        stickers.forEach((sticker) => {
            sticker.addEventListener('mouseenter', (e) => {
                const input = document.querySelector('.group input:focus');

                if (!(input === sticker)) {
                    isFixed = true;
                    onSticker = true;
                    cursorSubEllipse.style.transition = '0.1s ry, 0.1s rx';

                    positionTimer = setInterval(
                        () => {
                            coordinates.x =
                                e.target.getBoundingClientRect().x +
                                e.target.getBoundingClientRect().width * 0.5 -
                                29;
                            coordinates.y =
                                e.target.getBoundingClientRect().y +
                                e.target.getBoundingClientRect().height * 0.5 -
                                29;
                            cursorSubEllipse.style.ry = 29.5 + 'px';
                            cursorSubEllipse.style.rx = 29.5 + 'px';
                        },

                        0
                    );
                }
            });

            sticker.addEventListener('mouseleave', (e) => {
                clearInterval(positionTimer);
                onSticker = false;
                cursorSubEllipse.style.ry = 19.5 + 'px';
                cursorSubEllipse.style.rx = 19.5 + 'px';

                setTimeout(
                    () => {
                        if (!onSticker) {
                            isFixed = false;
                            cursorSubEllipse.style.transition = '0s ry, 0s rx';
                        }
                    },

                    100
                );
            });

            sticker.addEventListener('click', (e) => {
                clearInterval(positionTimer);
                onSticker = false;
                cursorSubEllipse.style.ry = 19.5 + 'px';
                cursorSubEllipse.style.rx = 19.5 + 'px';

                setTimeout(
                    () => {
                        if (!onSticker) {
                            isFixed = false;
                            cursorSubEllipse.style.transition = '0s ry, 0s rx';
                        }
                    },

                    100
                );
            });
        });

        // cursor sticker input
        const stickerInputs = document.querySelectorAll(
            '.cursor__sticker_input'
        );
        const cursorPoint = document.querySelector('.cursor__point');

        stickerInputs.forEach((sticker, index) => {
            sticker.addEventListener('mouseenter', (e) => {
                const input = document.querySelector('.group input:focus');

                if (!(input === sticker)) {
                    cursorMain.classList.add('cursor_no-shadow');
                    cursorPoint.classList.add('cursor__point_input');
                }
            });

            sticker.addEventListener('mouseleave', (e) => {
                cursorMain.classList.remove('cursor_no-shadow');
                cursorPoint.classList.remove('cursor__point_input');
            });

            sticker.addEventListener('mousemove', (e) => {
                const input = document.querySelector('.group input:focus');

                if (input === sticker) {
                    cursorMain.classList.add('cursor_no-shadow');
                    cursorPoint.classList.add('cursor__point_input');
                }
            });
        });

        //cursor my-works
        const navBlockLeft = document.querySelector(
            '.my-works__nav-block_left'
        );
        const navBlockRight = document.querySelector(
            '.my-works__nav-block_right'
        );

        navBlockRight.addEventListener('mousemove', (e) => {
            const isEnd = navBlockRight.classList.contains(
                'my-works__nav-block_end'
            );

            if (!isEnd) {
                cursorPoint.classList.add('cursor__arrow_right');
                cursorMain.classList.add('cursor_no-shadow');
            }
        });

        navBlockLeft.addEventListener('mousemove', (e) => {
            const isEnd = navBlockRight.classList.contains(
                'my-works__nav-block_end'
            );

            if (!isEnd) {
                cursorPoint.classList.add('cursor__arrow_left');
                cursorMain.classList.add('cursor_no-shadow');
            }
        });

        navBlockRight.addEventListener('mouseleave', (e) => {
            cursorMain.classList.remove('cursor_no-shadow');
            cursorPoint.classList.remove('cursor__arrow_right');
        });

        navBlockLeft.addEventListener('mouseleave', (e) => {
            cursorMain.classList.remove('cursor_no-shadow');
            cursorPoint.classList.remove('cursor__arrow_left');
        });
    }
})();

//my works
(function () {
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
        navigator.userAgent
    );
    console.log(isMobile);
    const myWorks = document.querySelector('.my-works');
    const myWorksCases = document.querySelector('.my-works__cases');
    const wrapper = document.querySelector('#wrapper');
    const navBlockLeft = document.querySelector('.my-works__nav-block_left');
    const navBlockRight = document.querySelector('.my-works__nav-block_right');
    let appearTop = myWorks.getBoundingClientRect();
    let vh = document.documentElement.clientHeight;
    let vw = document.documentElement.clientWidth;
    let scrollValue;
    let position = vw;
    let slideNumber = 0;
    let caseBlock = document.querySelectorAll('.my-works__case');
    let caseWidth = caseBlock[0].offsetWidth;
    let caseMargin = +getComputedStyle(caseBlock[0]).marginRight.slice(0, -2);
    let sumCaseWidth = caseWidth + caseMargin;
    let steps = [
        vw / 2 - caseWidth / 2,
        vw / 2 - caseWidth / 2 - sumCaseWidth,
        vw / 2 - caseWidth / 2 - sumCaseWidth * 2,
        vw / 2 - caseWidth / 2 - sumCaseWidth * 3,
        vw / 2 - caseWidth / 2 - sumCaseWidth * 4,
    ];
    let rightFlag = true;
    let leftFlag = true;

    let offset = 0;
    if (isMobile) {
        const arrows = document.querySelectorAll('.my-works__nav-block');
        const casesWrapper = document.querySelector('.my-works__cases-wrapper');
        const caseGit = document.querySelector('.my-works__case-git');
        arrows.forEach((item) => {
            item.style.display = 'none';
        });
        caseGit.style.marginRight = '0px';
        myWorksCases.style.left = `${vw / 2 - caseWidth / 2}px`;
        casesWrapper.style.overflowX = 'auto';
    }
    window.addEventListener('resize', () => {
        appearTop = myWorks.getBoundingClientRect();
        vh = document.documentElement.clientHeight;
        vw = document.documentElement.clientWidth;
        scrollValue;
        position = vw;
        slideNumber = 0;
        caseBlock = document.querySelectorAll('.my-works__case');
        caseWidth = caseBlock[0].offsetWidth;
        caseMargin = +getComputedStyle(caseBlock[0]).marginRight.slice(0, -2);
        sumCaseWidth = caseWidth + caseMargin;
        steps = [
            vw / 2 - caseWidth / 2,
            vw / 2 - caseWidth / 2 - sumCaseWidth,
            vw / 2 - caseWidth / 2 - sumCaseWidth * 2,
            vw / 2 - caseWidth / 2 - sumCaseWidth * 3,
            vw / 2 - caseWidth / 2 - sumCaseWidth * 4,
        ];
    });
    function сalculatePositionOfCases() {
        appearTop = myWorks.getBoundingClientRect();
        vh = document.documentElement.clientHeight;
        scrollValue = (appearTop.top - vh) / vh;

        position = offset + vw / 2 - vw * -scrollValue * 0.3;
        if (scrollValue < 0 && scrollValue > -2) {
            myWorksCases.style.left = position + 'px';
        }

        if (position > steps[0]) {
            slideNumber = 0;
        } else if (steps[0] > position && steps[1] < position) {
            slideNumber = 1;
        } else if (steps[1] > position && steps[2] < position) {
            slideNumber = 2;
        } else if (steps[2] > position && steps[3] < position) {
            slideNumber = 3;
        } else if (steps[3] > position && steps[4] < position) {
            slideNumber = 4;
        }

        if (!isMobile) сalculateOpacityAndScaleOfCases();
    }

    function сalculateOpacityAndScaleOfCases() {
        steps.forEach((item, index, array) => {
            if (index != array.length - 1) {
                let opacity = 3 / (1 + Math.abs(item - position) / 100);
                let scale = 1 / (1 + Math.abs(item - position) / 8000);

                if (opacity > 1) opacity = 1;
                caseBlock[index].style.opacity = opacity;

                if (scale < 0.9) scale = 0.9;
                caseBlock[index].style.transform = 'scale(' + scale * 1.1 + ')';
            }
        });
    }

    function сalculatePositionOfCasesArrow(direction) {
        let count = 0;

        let oneStep = 0;

        if (direction < 0 && steps[slideNumber] != undefined) {
            oneStep = (steps[slideNumber] - position) / 60;

            if (
                Math.abs(oneStep) < 2.5 &&
                steps[slideNumber + 1] != undefined
            ) {
                oneStep = (steps[slideNumber + 1] - position) / 60;
            }
        }

        if (direction > 0 && steps[slideNumber - 1] != undefined) {
            oneStep = (steps[slideNumber - 1] - position) / 60;

            if (
                Math.abs(oneStep) < 2.5 &&
                steps[slideNumber - 2] != undefined
            ) {
                oneStep = (steps[slideNumber - 2] - position) / 60;
            }
        }

        requestAnimationFrame(measure);

        function measure() {
            if (count < 30) offset += (oneStep * count) / 15;
            if (count >= 30) offset += (oneStep * (60 - count)) / 15;
            count++;
            сalculatePositionOfCases();

            if (count <= 60) {
                requestAnimationFrame(measure);
            }
        }
    }

    navBlockLeft.addEventListener('click', () => {
        if (leftFlag) {
            leftFlag = false;

            setTimeout(
                () => {
                    leftFlag = true;
                },

                800
            );
            сalculatePositionOfCasesArrow(1);
        }
    });

    navBlockRight.addEventListener('click', () => {
        if (rightFlag) {
            rightFlag = false;

            setTimeout(
                () => {
                    rightFlag = true;
                },

                800
            );
            сalculatePositionOfCasesArrow(-1);
        }
    });

    wrapper.addEventListener('scroll', () => {
        сalculatePositionOfCases();
    });

    // my works more about scrolling
    let Req;
    function scrolling(index) {
        const moreAboutScnWrapper = document.querySelectorAll(
            '.more-about-my-works__scn-wrapper'
        )[index];
        // const width = moreAboutScnWrapper.getBoundingClientRect().width;
        Req = requestAnimationFrame(scrollingAnimation);

        let positionScnWrapper = 0;
        function scrollingAnimation() {
            const newNode = moreAboutScnWrapper.firstElementChild;
            const firstWidth =
                newNode.getBoundingClientRect().width +
                +getComputedStyle(newNode).marginRight.slice(0, -2);
            if (-positionScnWrapper >= firstWidth) {
                positionScnWrapper += firstWidth;
                newNode.remove();
                moreAboutScnWrapper.append(newNode);
            }
            positionScnWrapper -= 2;
            moreAboutScnWrapper.style.left = positionScnWrapper + 'px';

            Req = requestAnimationFrame(scrollingAnimation);
        }
    }
    // my works more about pop up
    const moreAboutButton = document.querySelectorAll(
        '.text-block__more-about'
    );
    const moreAboutWrapper = document.querySelectorAll(
        '.more-about-my-works__wrapper'
    );
    const container = document.querySelector('.container');
    const moreAboutBlock = document.querySelectorAll('.more-about-my-works');
    const moreAboutArrow = document.querySelectorAll(
        '.more-about-my-works__arrow'
    );
    let scroll;
    moreAboutButton.forEach((item, index) => {
        moreAboutArrow[index].addEventListener('click', (e) => {
            cancelAnimationFrame(Req);

            container.style.top = -scroll + 'px';
            container.classList.remove('container_no-scroll');
            wrapper.scrollTo(0, scroll);
            setTimeout(() => {
                moreAboutWrapper[index].classList.remove(
                    'more-about-my-works__wrapper_active'
                );
            }, 300);
            moreAboutBlock[index].classList.remove(
                'more-about-my-works_active'
            );
        });
        item.addEventListener('click', (e) => {
            e.preventDefault();

            scrolling(index);
            scroll = wrapper.scrollTop;

            container.style.top = -scroll + 'px';
            container.classList.add('container_no-scroll');
            wrapper.scrollTo(0, scroll);
            moreAboutWrapper[index].classList.add(
                'more-about-my-works__wrapper_active'
            );
            setTimeout(() => {
                moreAboutBlock[index].classList.add(
                    'more-about-my-works_active'
                );
            }, 500);
        });
    });
})();
