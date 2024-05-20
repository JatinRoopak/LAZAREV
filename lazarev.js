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
            y: 25,
            stagger: {
                amount: 0.6
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
// navanimation()

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

    page3center.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            display:"flex",
            transform: "scaleX(1) scaleY(1)",
            borderRadius:"0",
            opacity:"1",
        
    })
    gsap.to(showreel,{
        display:"flex"
    })
})
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform: "scaleX(0.7) scaleY(0)",
            borderRadius: "40px",
            opacity: 0,
            display:"none",

    })
})
}
page3video()