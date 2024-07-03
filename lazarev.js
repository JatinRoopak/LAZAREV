function landinganimation() {
    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: "0",
        duration: 0.3,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(-30%)",
        borderRadius: "50px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("#nav", {
        transform: "translateY(-50%)",
        opacity: "0",
        duration: 0.5,
        delay: -0.2,
    })
    tl.from("#page1 h1,#page1 p", {
        opacity: 0,
        duration: 0.2,
        stagger: 0.1
    })
    tl.from("#page1 #moving", {
        opacity: 0,
        duration: 0.2,
        transform: "translateY(50%)",
        stagger: 0.2
    })

}
landinganimation()

function locomotivescrolltriggercodepen() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
// locomotivescrolltriggercodepen()

function navanimation() {
    var nav = document.querySelector("#nav2")
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "23vh",
            stagger: {
                // amount: 0.5,
                duration: 0.5
            }
        });

        tl.set(".headbc h5", { display: "block" },);

        tl.from(".headbc h5 span", {
            y: 27,
            stagger: {
                amount: 0.5
            }
        });
    });

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".headbc h5 span", {
            y: 25,
            stagger: {
                amoutn: 0.2
            }
        });

        tl.set(".headbc h5", {
            display: "none",
        });

        tl.to("#nav-bottom", {
            height: "0px",
        });

        tl.to(".headbc h5 span", {
            y: 0,
            stagger: {
                amoutn: 0.2
            }
        });
    });
}
navanimation()

function page2anime() {
    var rightelems = document.querySelectorAll(".ele")

    rightelems.forEach(function (elem) {

        let img = elem.querySelector('.ele img');
        let isInside = false;

        elem.addEventListener("mouseenter", function () {
            isInside = true;
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
            document.addEventListener("mousemove", onMouseMove);
        })

        function onMouseMove(event) {

            const rect = elem.getBoundingClientRect();
            if (!isInside) {
                return;
            }
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
                isInside = false;
                gsap.to(img, {
                    opacity: 0,
                    scale: 0
                });
            }
            else {
                gsap.to(img, {
                    x: event.clientX - rect.left - img.clientWidth / 2,
                    y: event.clientY - rect.top - img.clientHeight / 2 - 70
                });
            }
        }

        elem.addEventListener("mouseleave", function () {
            isInside = false;
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            });
            document.removeEventListener("mousemove", onMouseMove);
        });
    });
}
page2anime()

function page3video() {
    var page3center = document.querySelector("#page3-center")
    var video = document.querySelector("#video")
    var showreel = document.querySelector('#showreel')

    page3center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            display: "flex",
            transform: "scaleX(1) scaleY(1)",
            borderRadius: "0",
            opacity: "1",

        })
        gsap.to(showreel, {
            display: "flex"
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            borderRadius: "40px",
            opacity: 0,
            display: "none",

        })
    })
}
page3video()

function pikaandnodo() {

    var rightpika = document.querySelector('.rightpika')
    var pikavideo = document.querySelector('#pikavideo')
    var pikaimg = document.querySelector('#pikaimg')
    rightpika.addEventListener('mouseenter', function () {
        pikavideo.play()
        gsap.to(pikaimg, {
            duration: 0,
            opacity: "0",
        })
        gsap.to(pikavideo, {
            duration: 0,
            opacity: "1"
        })
    });
    rightpika.addEventListener('mouseleave', function () {
        pikavideo.load()
        gsap.to(pikaimg, {
            duration: 0,
            opacity: "1"
        })
        gsap.to(pikavideo, {
            duration: 0,
            opacity: "0"
        })
    });

    var rightnodo = document.querySelector('.rightnodo')
    var nodovideo = document.querySelector('#nodovideo')
    var nodoimg = document.querySelector('#nodoimg')
    rightnodo.addEventListener('mouseenter', function () {
        nodovideo.play()
        gsap.to(nodoimg, {
            duration: 0,
            opacity: "0"
        })
        gsap.to(nodovideo, {
            duration: 0,
            opacity: "1"
        })
    });
    rightnodo.addEventListener('mouseleave', function () {
        nodovideo.load()
        gsap.to(nodoimg, {
            duration: 0,
            opacity: "1"
        })
        gsap.to(nodovideo, {
            duration: 0,
            opacity: "0"
        })
    });
}
pikaandnodo()

function pikaandnodoanimation() {
    var relem = document.querySelectorAll('.page5-elem #right')
    relem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[1], {
                opacity: "1",
                scale: "1"
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[1], {
                opacity: "0",
                scale: "0"
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[1], {
                x: dets.x - elem.getBoundingClientRect().x - 65,
                y: dets.y - elem.getBoundingClientRect().y - 60
            })
        })
    })
}
pikaandnodoanimation()