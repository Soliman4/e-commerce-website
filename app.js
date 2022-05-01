
let menu = document.querySelector('#menu-btn');
let navbarlinks = document.querySelector('.header .navbar .links');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbarlinks.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbarlinks.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('.header .navbar').classList.add('active');
    }else{
        document.querySelector('.header .navbar').classList.remove('active');
    }

};

const social = [ 'Leave it to the pros' ,'lets do it','Lets start:)'];
let count = 0;
let index = 0;
let currenttext ='';
let letter = '';

(function type(){
    if(count === social.length){
        count = 0
    }
    currenttext = social[count];
    letter = currenttext.slice(0, ++index);

    document.querySelector('.span').textContent = letter;
    if(letter.length === currenttext.length){
        count++;
        index = 0;
    }
    setTimeout(type , 250);
}());
