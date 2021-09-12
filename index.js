const navSlide = () => {
    const burger = document.querySelector('.burger');
    let nav = document.querySelector('.dropdown');
    const links = document.querySelectorAll('.dropdown div');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('dropdown-active');
    });

    links.forEach((link)=>{
        link.style.animation = `linkfade 3s`;
    });
}

navSlide();