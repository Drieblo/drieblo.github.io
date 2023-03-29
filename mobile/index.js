let op = 1;
let minh = 100;

let isShowed = false;
let isShowed2 = false;
let isShowed3 = false;
let isShowed4 = false;

// if($('body').css('width') < 1370) {
//     $('#anim').css('display', 'none');
//     console.log("HIDE");
// }

$('#anim').attr('draggable', false);
$('#logo').attr('draggable', false);
$('#about_anim').attr('draggable', false);
$('#wrk_img').attr('draggable', false);

$('#title').animate({opacity: '1'}, 1000);
$('#description').animate({opacity: '1'}, 1000);
$('#anim').animate({opacity: '1'}, 2000);

particlesJS("particles-js", {
    "particles": {
        "number": {
        "value": 71,
        "density": {
            "enable": true,
            "value_area": 1000
        }
        },
        "color": {
        "value": "#ff00ff"
        },
        "shape": {
        "type": "circle",
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
        "polygon": {
            "nb_sides": 3
        },
        "image": {
            "src": "",
            "width": 100,
            "height": 100
        }
        },
        "opacity": {
        "value": 0.2,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
        },
        "size": {
        "value": 19.728691040806815,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
});

function scroll(scrl) {
    $("HTML, BODY").animate({
        scrollTop: scrl
    }, 2000);
}

addEventListener('scroll', () => {
    if(window.scrollY > 800) {
        if(!isShowed) {
            $('#about_title').animate({opacity: '1'}, 1000);
            $('#about_description').animate({opacity: '1'}, 1000);
            $('#about_anim').animate({opacity: '1'}, 2000);

            isShowed = true;
        }
    }
    if(window.scrollY > 1600) {
        if(!isShowed2) {
            $('.w_table').animate({opacity: '1'}, 1000);

            isShowed2 = true;
        }
    }
    if(window.scrollY > 2400) {
        if(!isShowed3) {
            $('.prj_table').animate({opacity: '1'}, 1000);

            isShowed3 = true;
        }
    }
    if(window.scrollY > 3200) {
        if(!isShowed4) {
            $(".contact_container").animate({opacity: '1'}, 1000);

            isShowed4 = true;
        }
    }
});