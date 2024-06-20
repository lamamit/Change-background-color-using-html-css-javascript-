

const section = document.querySelector('.sec');
const button = document.querySelector('.btn');

let newColor;

button.addEventListener('click', (e) =>  {

       e.preventDefault();
       newColor = document.querySelector('.newColor-input').
       value;
       section.style.background = newColor;

});



