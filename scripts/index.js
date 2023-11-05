/*
Обработчик события клика мышки для изменения визуального 
отображение бургер-меню (бургер-меню -> крестик, крестик -> бургер-меню)
*/
function removeReloader (){
    document.querySelector("._preloader").remove()
}


setTimeout(removeReloader, 1300);

let flagBurgerMenu = 0;
document.querySelector(".navBurgerMenu").addEventListener("click", ()=>{
    document.querySelector(".navPage__container").classList.toggle("_visible");
    document.querySelector(".navBurgerMenu").classList.toggle("_active");

    if(flagBurgerMenu === 0){
        flagBurgerMenu = 1;
        disableScroll();
    }else if(flagBurgerMenu === 1){
        flagBurgerMenu = 0;
        enableScroll();
    }
});

document.querySelector(".navPage__container").addEventListener("click", (e)=>{
    if (e.target.className !== "navPage__list" && e.target.className !== "socialMediaList"){
        document.querySelector(".navPage__container").classList.toggle("_visible");
        document.querySelector(".navBurgerMenu").classList.toggle("_active");
        flagBurgerMenu = 0;
        enableScroll();
    }
});
/*
    Обработчик события клика мышки на кнопку "Читати більше" для отображения 
    скрытого текста в разделе "ПРО НАС"
*/
document.querySelector(".unHidingBtn")
.addEventListener("click", ()=>{
    document.querySelector("._unhiddenText")
    .classList.toggle("_visibleText");

    document.querySelector(".unHidingBtn")
    .classList.toggle("_hiddenText");

    document.querySelector(".hidingBtn")
    .classList.toggle("_visibleText");
});
/*
    Обработчик события клика мышки на кнопку "Приховати" для скрытия 
    текста в разделе "ПРО НАС"
*/
document.querySelector(".hidingBtn")
.addEventListener("click", ()=>{
    document.querySelector("._unhiddenText")
    .classList.toggle("_visibleText");

    document.querySelector(".unHidingBtn")
    .classList.toggle("_hiddenText");

    document.querySelector(".hidingBtn")
    .classList.toggle("_visibleText");
});
/*
    Обработчик события изменения размеров 
    экрана пользователя для корректировки контента
*/
addEventListener("resize", (e) =>{
    /*
        Корректное отображение скрытого контента в разделе "ПРО НАС"
    */
    document.querySelector(".hidingBtn")
    .classList.remove("_visibleText");

    document.querySelector(".unHidingBtn")
    .classList.remove("_hiddenText");

    document.querySelector("._unhiddenText")
    .classList.remove("_visibleText");
});
/* 
    Вспомогательный объект для отладки поведения событий
*/
const OBJECTSLightBoxBackdropImg = {
    member: "",
    arrImg: [
        "imgTowTruck1",
        "imgTowTruck2",
        "imgTowTruck3",
        "imgTowTruck4",
        "imgTowTruck5",
        "imgTowTruck6",
        "imgTowTruck7",
        "imgTowTruck8",
    ],
    arrMember: 0
}
/*
    Обработчик события для отображения скрытого элемента 
    light-box-backdrop__sectionOurWorks с картинками
*/
document.querySelector(".sectionOurWorks__imgList")
.addEventListener("click", (e)=>{
    if (e.target.className !== "sectionOurWorks__imgList"){

        if(OBJECTSLightBoxBackdropImg.member === ""){
            OBJECTSLightBoxBackdropImg.member = e.target.dataset.forlightBoxBackdrop;
            document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.add("selectedElementImg");
        }else{
            document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.remove("selectedElementImg");
            OBJECTSLightBoxBackdropImg.member = e.target.dataset.forlightBoxBackdrop;
            document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.add("selectedElementImg");
        }
        OBJECTSLightBoxBackdropImg.arrMember = OBJECTSLightBoxBackdropImg
        .arrImg.indexOf(OBJECTSLightBoxBackdropImg.member);

        document.querySelector(".light-box-backdrop__sectionOurWorks")
        .classList.add("light-box-backdrop__active");
    }

    document.querySelector(".light-box-backdrop__sectionOurWorks__btn-right").classList.remove("_displayNone");
    document.querySelector(".light-box-backdrop__sectionOurWorks__btn-left").classList.remove("_displayNone");

    
    if(OBJECTSLightBoxBackdropImg.arrMember >= OBJECTSLightBoxBackdropImg.arrImg.length - 1){
        document.querySelector(".light-box-backdrop__sectionOurWorks__btn-right")
        .classList.toggle("_displayNone")
    }

    if(OBJECTSLightBoxBackdropImg.arrMember <= 0){
        document.querySelector(".light-box-backdrop__sectionOurWorks__btn-left")
        .classList.toggle("_displayNone")
    }

    document.querySelector("." + OBJECTSLightBoxBackdropImg.member).scrollIntoView({
        behavior: "smooth",
        inline:"center"
    });
    disableScroll()
});
/*
    Обработчик события для добавления нужного src для light-box-backdrop__sectionOurWorks__img
*/
document.querySelector(".sectionOurWorks__imgList")
.addEventListener("mouseover", (e)=>{
    document.querySelector(".light-box-backdrop__sectionOurWorks__img")
    .src = e.target.src;
});
/*
    Обработчик события для сокрытия элемента 
    light-box-backdrop__sectionOurWorks с картинками
*/
document.querySelector(".light-box-backdrop__sectionOurWorks__btn-close")
.addEventListener("click", (e)=>{
    document.querySelector(".light-box-backdrop__sectionOurWorks").classList.remove("light-box-backdrop__active")
    enableScroll();
});

/*
    Обработчик события клика кнопки в лево элемента light-box-backdrop__sectionOurWorks
    для картинками отображения картинки
*/
document.querySelector(".light-box-backdrop__sectionOurWorks__btn-left")
.addEventListener("click", (e)=>{
    OBJECTSLightBoxBackdropImg.arrMember -= 1;

    if(document.querySelector("._displayNone")){
        document.querySelector(".light-box-backdrop__sectionOurWorks__btn-right")
        .classList.remove("_displayNone")
    };

    document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.toggle("selectedElementImg");
    
    OBJECTSLightBoxBackdropImg.member = OBJECTSLightBoxBackdropImg
    .arrImg[OBJECTSLightBoxBackdropImg.arrMember];

    document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.add("selectedElementImg");

    document.querySelector(".light-box-backdrop__sectionOurWorks__img")
    .src = document.querySelector("." + OBJECTSLightBoxBackdropImg.member).src;

    if(OBJECTSLightBoxBackdropImg.arrMember <= 0){
        document.querySelector(".light-box-backdrop__sectionOurWorks__btn-left")
        .classList.toggle("_displayNone")
    };

    document.querySelector("." + OBJECTSLightBoxBackdropImg.member).scrollIntoView({
        behavior: "smooth",
        inline:"center"
    });
});
/*
    Обработчик события клика кнопки в право элемента light-box-backdrop__sectionOurWorks
    для картинками отображения картинки
*/
document.querySelector(".light-box-backdrop__sectionOurWorks__btn-right")
.addEventListener("click", (e)=>{
    OBJECTSLightBoxBackdropImg.arrMember += 1;

    if(document.querySelector("._displayNone")){
        document.querySelector(".light-box-backdrop__sectionOurWorks__btn-left")
        .classList.remove("_displayNone")
    };

    document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.toggle("selectedElementImg");

    OBJECTSLightBoxBackdropImg.member = OBJECTSLightBoxBackdropImg
    .arrImg[OBJECTSLightBoxBackdropImg.arrMember];

    document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.add("selectedElementImg");

    document.querySelector(".light-box-backdrop__sectionOurWorks__img")
    .src = document.querySelector("." + OBJECTSLightBoxBackdropImg.member).src;

    if(OBJECTSLightBoxBackdropImg.arrMember >= OBJECTSLightBoxBackdropImg.arrImg.length - 1){
        document.querySelector(".light-box-backdrop__sectionOurWorks__btn-right")
        .classList.toggle("_displayNone")
    }

    document.querySelector("." + OBJECTSLightBoxBackdropImg.member).scrollIntoView({
        behavior: "smooth",
        inline:"center"
    });

});
/*
    Обработчик события клика по нижним картинкам раздела light-box-backdrop__sectionOurWorks
*/
document.querySelector(".light-box-backdrop__sectionOurWorks__list")
.addEventListener("click", (e)=>{

    if(e.target.localName === "img"){
        if(e.target.classList.contains("selectedElementImg")){
            return
        }
        document.querySelector(".light-box-backdrop__sectionOurWorks__img")
        .src = e.target.src;

        document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.remove("selectedElementImg");

        OBJECTSLightBoxBackdropImg.member = e.target.classList[0];

        document.querySelector("." + OBJECTSLightBoxBackdropImg.member).classList.add("selectedElementImg");

        OBJECTSLightBoxBackdropImg.arrMember = OBJECTSLightBoxBackdropImg
        .arrImg.indexOf(OBJECTSLightBoxBackdropImg.member);

        if(OBJECTSLightBoxBackdropImg.arrMember === OBJECTSLightBoxBackdropImg.arrImg.length - 1){
            document.querySelector(".light-box-backdrop__sectionOurWorks__btn-right")
            .classList.add("_displayNone");
            document.querySelector(".light-box-backdrop__sectionOurWorks__btn-left")
            .classList.remove("_displayNone");
        }else if (OBJECTSLightBoxBackdropImg.arrMember === 0){
            document.querySelector(".light-box-backdrop__sectionOurWorks__btn-left")
            .classList.add("_displayNone");
            document.querySelector(".light-box-backdrop__sectionOurWorks__btn-right")
            .classList.remove("_displayNone");
        }else{
        document.querySelector(".light-box-backdrop__sectionOurWorks__btn-right")
        .classList.remove("_displayNone");
        document.querySelector(".light-box-backdrop__sectionOurWorks__btn-left")
        .classList.remove("_displayNone");
        }
    }
    /*Плавный горизонтальный проскрол родителя */
    e.target.scrollIntoView({
        behavior: "smooth",
        inline:"center"
    });
});
function disableScroll (){
    let pagePosition = window.scrollY;
    document.querySelector("body").classList.add("disable-scroll");
    document.querySelector("body").dataset.position = pagePosition;
    document.querySelector("body").style.top = -pagePosition + "px";
};
function enableScroll (){
    let pagePosition = parseInt(document.querySelector("body").dataset.position, 10);

    document.querySelector("body").style.top = "auto";
    document.querySelector("body").classList.remove("disable-scroll");

    window.scroll({top: pagePosition, left: 0});

    document.querySelector("body").removeAttribute("data-position");
};