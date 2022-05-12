let btn_active = document.querySelector('.menu-toogle');
let btnClose_desactive = document.querySelector('.btnClose');
let modal_header = document.querySelector('.modal-header');

btn_active.addEventListener('click',function(){  
    modal_header.classList.toggle('modal-header_active');
    document.body.style.overflow = "hidden";
});

btnClose_desactive.addEventListener('click', function(){
    modal_header.classList.toggle('modal-header_active');
    document.body.style.overflow = "initial";
});