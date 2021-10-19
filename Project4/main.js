$(document).ready(function () {

    // ===========Openvideo============//
    const src = $('#box-1').attr('src');

    $('.btn-playvideo, .video-popup').on('click', function () {
        if ($('.video-popup').hasClass('open')) {
            $('.video-popup').removeClass('open');
            $('#box-1').attr('src', '');
        } else {
            $('.video-popup').addClass('open');
            if ($('#box-1').attr('src') == "") {
                $('#box-1').attr('src', src);
            }
        }
    })
    //===============Preload=====================
    $(window).on('load', function () {
        $('.preload').fadeOut(2500);

    })
    // ==============navbar shrink================

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 90) {
            $('.navbar').addClass('navbar-shrink');
        } else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });


    // ================= To top button===========
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.to-top').fadeIn(1000);
            $('.to-top').css('opacity', '1');
        } else {
            $('.to-top').fadeOut();
        }
    });
    $('.to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });

    // ==========Navbar collapse===================
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })


    //===================feature carousel===========
    $(".features-carousel").owlCarousel({
        autoplay: true,
        autoplaytimeout: 100,
        items: 2,
        center: true,
        nav: true,
        loop: true,
        lazyLoad: true,
        responsive: {
            359: {
                items: 1,
            },
            600: {
                items: 3,
            },
        }
    });

    // ====================== app carousel===============
    $(".app-carousel").owlCarousel({
        autoplay: true,
        autoplaytimeout: 100,
        items: 2,
        center: true,
        nav: true,
        loop: true,
        lazyLoad: true,
        responsive: {
            359: {
                items: 1,
            },
            600: {
                items: 3,
            },
        }
    });




    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                // - 70 is the offset/top margin
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 70
                    // scrollTop: $(hash).offset().top - 3.875
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
                    if (history.pushState) {
                        history.pushState(null, null, hash);
                    } else {
                        window.location.hash = hash;
                    }
                });
                return false;
            } // End if
        });

});
function realtimeClock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var amPm = (h > 12) ? "PM" : "AM";

    h = (h > 12) ? (h - 12) : h;

    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);

    document.getElementById("clock").innerHTML =
        h + " : " + m + " : " + s + " : " + amPm;

    var l = setTimeout(realtimeClock, 500);
}

let pro = document.getElementById("progress");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let proHeight = (window.pageYOffset / totalHeight) * 100;
    pro.style.height = proHeight + '%';
}



//  ================Toast menu==================
function toast({ title = "", message = "", type = "info", duration = 5000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fas fa-code",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease 2s, fadeOut linear 2s ${delay}s forwards`;

        toast.innerHTML = `
                      <div class="toast__icon">
                         <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
        main.appendChild(toast);
    }
}
function showSuccessToast() {
    toast({
        title: "Welcom to Speedcubers",
        message: "Get started !",
        type: "success",
        duration: 5000
    });
}
function a() {
    showSuccessToast();
}
// =========================== Form modal================
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form-1');


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    var check = true;
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();




    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {

        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');

    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');

    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');

    } else {
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
