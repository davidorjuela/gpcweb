window.onload = function (){
    let logo = document.getElementById("logo");
    window.onscroll = function() {
        if (window.scrollY>110){
        logo.style.position= 'fixed';
        logo.style.top= '-0.7rem';
        logo.style.left= '-0.7rem';
        }
        else if(window.scrollY<10){
            logo.style.position= 'relative';
            logo.style.top= '0';
            logo.style.left= '-0';
        }
    }

    logo.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}
