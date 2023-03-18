let grid=0;
const container=document.querySelector('.container');

function incubate(){
    let car=document.createElement('div');
    car.classList='box';
    return car;
}

function incubate2(){
    let car=document.createElement('div');
    car.classList=`boxes`;
    car.id=`box${grid}`
    return car;
}
function generator2()
{ 
    //take input
    let input=document.querySelector('.myValue').value;
    if(Number(input)>50||Number(input)<=0){
        alert('change your number to something between 1 and 50 ,Thanks');
    }
    //use the input number to do 2 loops one for lines the other for the items on a line
    else if(Number(input)<=50)
    {
       container.innerHTML='';
       for(let i=0 ;i<Number(input);i++)
         {
            container.appendChild(incubate());
          }
    //the outer loop will create a main div structure and the elements will be feed into the div by the secound loop
       let lines=document.querySelectorAll('.box');
        lines.forEach(element => 
          {
            for(let i=0 ;i<Number(input);i++)
             {
               element.appendChild(incubate2());
               grid++
             }
        });
       
    } 
};   



let submit=document.querySelector('.submit');
submit.addEventListener('click',generator2);


let drawer=document.querySelector('.draw');
let eraser=document.querySelector('.erase');
let color=document.querySelector('.randomColor');
let boxes=[...document.querySelectorAll('.boxes')];//frame for how many boxes i have


//global eventlistener


function adder(){
  let boxes=[...document.querySelectorAll('.boxes')];//frame for how many boxes i have
  boxes.forEach(box => {
    box.addEventListener('mouseover',consoler)
    function consoler(){
          box.style.backgroundColor='black';
    }
  });
}

function remover(){
  let boxes=[...document.querySelectorAll('.boxes')];//frame for how many boxes i have
  boxes.forEach(box => {
    box.addEventListener('mouseover',consoler)
    function consoler(){
          box.style.backgroundColor='white';
    }
  });
}
function rando()
{
  let a=Math.floor(Math.random()*10);
  if(a===0){return 'blue'}
  if(a===1){return 'red'}
  if(a===2){return 'green'}
  if(a===3){return 'purple'}
  if(a===4){return 'brown'}
  if(a===5){return 'orange'}
  if(a===6){return 'yellow'}
  if(a===7){return 'gray'}
  if(a===8){return 'pink'}
  if(a===9){return 'gold'}
 
}
function painter(){
  let boxes=[...document.querySelectorAll('.boxes')];//frame for how many boxes i have
  boxes.forEach(box => {
    box.addEventListener('mouseover',consoler)
    function consoler(){
          
          box.style.backgroundColor=rando();
    }
  });
}

drawer.addEventListener('click',adder);
eraser.addEventListener('click',remover);
color.addEventListener('click',painter);


