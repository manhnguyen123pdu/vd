var nut = document.querySelectorAll('.nut ul li')
var slide = document.querySelectorAll('.item1')
var next = document.querySelector('.phai')
var forw = document.querySelector('.trai')

// auto slide
var tg = setInterval(function () {
    var slht = document.querySelector('.hien')
    for (ptht = 0; slht = slht.previousElementSibling; ptht++) { }
    for (k = 0; k < nut.length; k++) {
        nut[k].classList.remove('xam')
        slide[k].classList.remove('hien')
    }
    if (ptht < 2) {
        slide[ptht].nextElementSibling.classList.add('hien')
        nut[ptht].nextElementSibling.classList.add('xam')
        ptht = ptht + 1
    }
    else if (ptht == 2) {
        slide[0].classList.add('hien')
        nut[0].classList.add('xam')

    }
}, 5000)


// phim duowi
for (i = 0; i < nut.length; i++) {
    nut[i].onclick = function () {
        clearInterval(tg)
        for (k = 0; k < nut.length; k++) {
            nut[k].classList.remove('xam')
            slide[k].classList.remove('hien')
        }
        this.classList.add('xam')
        var sl = this;
        for (vtn = 0; sl = sl.previousElementSibling; vtn++) { }
        slide[vtn].classList.add('hien')
    }
}



// hai ben
next.onclick = function () {
    clearInterval(tg)
    var slht = document.querySelector('.hien')
    for (ptht = 0; slht = slht.previousElementSibling; ptht++) { }
    for (k = 0; k < nut.length; k++) {
        nut[k].classList.remove('xam')
        slide[k].classList.remove('hien')
    }
    if (ptht < 2) {
        slide[ptht].nextElementSibling.classList.add('hien')
        nut[ptht].nextElementSibling.classList.add('xam')
        ptht = ptht + 1
    }
    else if (ptht == 2) {
        slide[0].classList.add('hien')
        nut[0].classList.add('xam')

    }

}
forw.onclick = function () {
    clearInterval(tg)
    var slht = document.querySelector('.hien')
    for (ptht = 0; slht = slht.previousElementSibling; ptht++) { }
    for (k = 0; k < nut.length; k++) {
        nut[k].classList.remove('xam')
        slide[k].classList.remove('hien')
    }
    if (ptht > 0) {
        slide[ptht].previousElementSibling.classList.add('hien')
        nut[ptht].previousElementSibling.classList.add('xam')
        ptht = ptht - 1
    }
    else if (ptht == 0) {
        slide[2].classList.add('hien')
        nut[2].classList.add('xam')

    }

}

var user2 =document.querySelector('.user2')
var user__black =document.querySelector('.user__black')
var user__overlay =document.querySelector('.user__overlay')
var user__content =document.querySelector('.user__content')
var overlay__menu =document.querySelector('.overlay__menu')
var btn__overmenu =document.querySelector('.btn__overmenu')
var menu__black =document.querySelector('.menu__black')
var nav1 =document.querySelector('.nav1')
var slides=document.querySelector('.slide')
user2.onclick=function(){
    user__overlay.classList.add("hien1")
    console.log('fg')
}
user__black.onclick=function(){
    user__overlay.classList.remove('hien1')
    console.log('fg')
}
btn__overmenu.onclick=function(){
    overlay__menu.classList.add("hien1")
}
menu__black.onclick=function(){
    overlay__menu.classList.remove("hien1")
    console.log('kkk')
}

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset)
    console.log(slides.offsetTop)
    if(slides.offsetTop<window.pageYOffset){
     nav1.classList.add('fix')
    }
    else{
        nav1.classList.remove('fix')
    }
    
})