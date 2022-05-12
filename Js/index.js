let btn = document.querySelector('.btn');
let modal1 = document.querySelector('.modal');

btn.addEventListener('click',function(){  
    modal1.classList.toggle('modal-1_active');
});

modal1.addEventListener('click', function(){
    modal1.classList.toggle('modal-1_active');
});