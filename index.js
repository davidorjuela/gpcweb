window.onload = function (){
    let logo = document.getElementById("logo");
    window.onscroll = function() {
        if (window.scrollY>70){
        logo.style.position= 'fixed';
        logo.style.top= '-.7rem';
        logo.style.left= '-1.2rem';
        }
        else if(window.scrollY<20){
            logo.style.position= 'relative';
            logo.style.top= '0';
            logo.style.left= '-0';
        }
    }

    logo.addEventListener('click', () => {
        const myInterval = setInterval(() => {
            window.scrollTo(0, window.scrollY/1.1);
            if(window.scrollY<1){clearInterval(myInterval);}
        }, 15);
    });
}
scrollY