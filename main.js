// change navbar styles on scroll

window.addEventListener('scroll',() => {
    document.queryselector('nav').classlist.toggle('windows-scroll ',winodw.scrollY>  0)
})

// show hidden faq answer

const faqs= document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon
        const icon =faq.querySelector('.faq__icon i ');
        if(icon.className==='uil uil-plus'){
            icon.className='uil uil-minus'
        }else{
            icon.className="uil uil-plus"
        }
    })
})