


var mySwiper = new Swiper(".swiper-container", {
    speed: 500,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('.section-header', {
    rotate: {x: 0, y: 50, z: 0},
     duration: 1000 });
sr.reveal('.section-header2', {
    rotate: {x: 0, y: 50, z: 0},
    duration: 1000 });
sr.reveal('.cards-services', { duration: 1000 });
sr.reveal('.cards', { duration: 2000 });
sr.reveal('.swiper-wrapper', { duration: 1000 });
sr.reveal('.img-element', { duration: 1000 });
sr.reveal('.column-1', { duration: 1000 });
sr.reveal('.contact-box', { duration: 2000 });

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activateClass = "ativar";

        this.handleClick = this.handleClick.bind(this);

    }

    animatedLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
             ? (link.style.animation = "")
             : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');


        });
    }


    handleClick(){
        
        this.navList.classList.toggle(this.activateClass);
        this.mobileMenu.classList.toggle(this.activateClass);
        this.animatedLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu) {
        this.addClickEvent();
        }
        return this;
    }
    
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }



  function sendEmail(){
    Email.send({
                Host : "smtp.gmail.com",
                Username : "pedro.lsnobrega@gmail.com",
                Password : "1002pls11",
                To : 'pedro.lsnobrega@gmail.com',
                From : document.getElementById("email").value,
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
            message => alert(message)
            );
  }