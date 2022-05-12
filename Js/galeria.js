const menuItens = document.querySelectorAll('.options a')

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdClick)
})

function scrollToIdClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;

    window.scroll({
     top: section,
     behavior: "smooth"    
    });
}

let imagens = document.querySelectorAll('.image_select');
let modal = document.querySelector('.modal');
let modalimg = document.querySelector('#modal-img');
let btnClose = document.querySelector('#close');
let BtnLeft = document.querySelector('#left');
let BtnRight = document.querySelector('#right');
let srcVal="";


for(let i = 0 ; i<imagens.length ; i++){
    imagens[i].addEventListener('click',function(){  
    srcVal = imagens[i].getAttribute('src');
    modalimg.setAttribute('src', srcVal);
    modal.classList.toggle('modal_active');
    document.body.style.overflow = "hidden";
    do{ 
        let qnt = i;
        BtnRight.addEventListener('click', function(){
        qnt+=1;
        if(qnt>=6){
            qnt=0;
        }
        srcVal = imagens[qnt].getAttribute('src');
        modalimg.setAttribute('src', srcVal);
        });   
        
        BtnLeft.addEventListener('click', function(){
        qnt-=1;
        if(qnt<=-1){
            qnt=5;
        }
        srcVal = imagens[qnt].getAttribute('src');
        modalimg.setAttribute('src', srcVal);   
    });
}while(qnt!=7);
    });
    } 

    btnClose.addEventListener('click', function(){
        modal.classList.toggle('modal_active');
        document.body.style.overflow = "initial";
    });


let imagens1 = document.querySelectorAll('.image_select-1');
let modal1 = document.querySelector('.modal-1');
let modalimg1 = document.querySelector('#modal-img-1');
let btnClose1 = document.querySelector('#close-1');
let BtnLeft1 = document.querySelector('#left-1');
let BtnRight1 = document.querySelector('#right-1');
let srcVal1 ="";


for(let i = 0 ; i<imagens1.length ; i++){
    imagens1[i].addEventListener('click',function(){  
    srcVal1 = imagens1[i].getAttribute('src');
    modalimg1.setAttribute('src', srcVal1);
    modal1.classList.toggle('modal-1_active');
    document.body.style.overflow = "hidden";
    do{ 
        let qnt1 = i;
        BtnRight1.addEventListener('click', function(){
        qnt1+=1;
        if(qnt1>=18){
            qnt1=0;
        }
        srcVal1 = imagens1[qnt1].getAttribute('src');
        modalimg1.setAttribute('src', srcVal1);
        });   
        
        BtnLeft1.addEventListener('click', function(){
        qnt1-=1;
        if(qnt1<=-1){
            qnt1=18;
        }
        srcVal1 = imagens1[qnt1].getAttribute('src');
        modalimg1.setAttribute('src', srcVal1);   
    });
}while(qnt!=19);
    });
    } 

    btnClose1.addEventListener('click', function(){
        modal1.classList.toggle('modal-1_active');
        document.body.style.overflow = "initial";
    });

    let imagens2 = document.querySelectorAll('.image_select-2');
    let modal2 = document.querySelector('.modal-2');
    let modalimg2 = document.querySelector('#modal-img-2');
    let btnClose2 = document.querySelector('#close-2');
    let BtnLeft2 = document.querySelector('#left-2');
    let BtnRight2 = document.querySelector('#right-2');
    let srcVal2 ="";
    
    
    for(let i = 0 ; i<imagens2.length ; i++){
        imagens2[i].addEventListener('click',function(){  
        srcVal2 = imagens2[i].getAttribute('src');
        modalimg2.setAttribute('src', srcVal2);
        modal2.classList.toggle('modal-2_active');
        document.body.style.overflow = "hidden";
        
        do{ 
            let qnt2 = i;
            BtnRight2.addEventListener('click', function(){
            qnt2+=1;
            if(qnt2>=8){
                qnt2=0;
            }
            srcVal2 = imagens2[qnt2].getAttribute('src');
            modalimg2.setAttribute('src', srcVal2);
            });   
            
            BtnLeft2.addEventListener('click', function(){
            qnt2-=1;
            if(qnt2<=-1){
                qnt2=8;
            }
            srcVal2 = imagens2[qnt2].getAttribute('src');
            modalimg2.setAttribute('src', srcVal2);   
        });
    }while(qnt!=9);
        });
        } 
    
        btnClose2.addEventListener('click', function(){
            modal2.classList.toggle('modal-2_active');
            document.body.style.overflow = "initial";
        });
    
    