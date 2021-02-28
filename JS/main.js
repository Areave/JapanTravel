(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if ( window.pageYOffset > 50 ) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}())


(function() {
    const burger = document.querySelector('.burger');
    const close = document.querySelector('.header_nav_close');
    
    burger.addEventListener('click', () => {
        console.log(1);
        const nav = document.querySelector('.header_nav');
        nav.classList.add('header_nav_active');
    });

    close.addEventListener('click', () => {        
        const nav = document.querySelector('.header_nav');
        nav.classList.remove('header_nav_active');
        console.log(2);
    });

}());



