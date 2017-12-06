function components() {

    var hamburger = document.querySelector('.nav__hamburger');
    var menu = document.querySelector('.nav__menu');
    var menuActive = document.querySelector('.nav__menu--open');

    function openMenu(e) {
        menu.classList.toggle('nav__menu--open')
    };

    hamburger.addEventListener('click', openMenu)



    var jobBtn = document.querySelector('.job__btn--open');
    var hideBox = document.querySelector('.jobs__hide-box');


    function openMore(e) {
        //console.log(e)
        hideBox.classList.toggle('jobs__addition')
    };

    jobBtn.addEventListener('click', openMore)
    
}

components();