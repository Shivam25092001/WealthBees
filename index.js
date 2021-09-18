const navSlide = () => {
    const burger = document.querySelector('.burger');
    const dropdowm = document.querySelector('.dropdown');
    const links = document.querySelectorAll('.dropdown button');
    

    burger.addEventListener('click', ()=>{
        dropdowm.classList.toggle('dropdown-active');

        links.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `linkfade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            
        });

        burger.classList.toggle('toggle');
    });


    
}

navSlide();



//nav-bar backgroung coloring
const nav = document.querySelector('.Logo');
const logbutton = document.querySelector('.login button');
window.addEventListener('scroll', ()=>{
    const section2 = document.querySelector('.section-2').getBoundingClientRect();
    if(section2.top <= 30){
        nav.classList.add('nav-bg');
    }
    if(section2.top >= 30){
        nav.classList.remove('nav-bg');
    }
});






const carouselSlide= document.querySelector('.carousel-slide');
const carouselImages=document.querySelectorAll('.carousel-slide img');

//Buttons