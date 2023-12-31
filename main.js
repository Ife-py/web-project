// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.queryselector('nav').classlist.toggle('windows-scroll ', winodw.scrollY > 0)
})

// show hidden faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i ');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        } else {
            icon.className = "uil uil-plus"
        }
    })
})


//show hidden nav menu
const menu = document.querySelector(".nav__menu ");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
// console.log(menu[0]);

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})

//close nav menu
const closeNav=()=>{
    menu.style.display = "none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}

closeBtn.addEventListener('click', closeNav)