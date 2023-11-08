let menu = document.querySelector("#mob-menue");
let menuList = document.querySelector(".navbar_menue");
let navLog = document.querySelector("#navbar_logo");
let mobileMenu = () =>{
    menu.classList.toggle("is-active")
    menuList.classList.toggle("active")
}

menu.addEventListener("click", mobileMenu);

let highlightMenu = () =>{
    let elem =document.querySelector(".highlight");
    let homeMenue =document.querySelector("#home-page");
    let aboutMenue =document.querySelector("#about-page");
    let serviceMenue =document.querySelector("#services-bage");
    let scrollPos =window.scrollY

    if(window.innerWidth > 960 && scrollPos<600){
        homeMenue.classList.add("highlight")
        aboutMenue.classList.remove("highlight")
        
       return
    }
    else if(window.innerWidth > 960 && scrollPos<1400){
        aboutMenue.classList.add("highlight")
        homeMenue.classList.remove("highlight")
        serviceMenue.classList.remove("highlight")
        return
    }
    else if(window.innerWidth > 960 && scrollPos<2345){
        serviceMenue.classList.add("highlight")
        aboutMenue.classList.remove("highlight")
        return
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove("highlight")
    }
}
window.addEventListener("scroll", highlightMenu)
window.addEventListener("click", highlightMenu)

