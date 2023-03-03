let grid=0;
const container=document.querySelector('.container');

function incubate(){
    let car=document.createElement('div');
    car.classList='box';
    return car;
}

function incubate2(){
    let car=document.createElement('div');
    car.classList='boxes';
    return car;
}
function generator2()
{ 
    //take input
    let input=document.querySelector('.myValue').value;
    if(Number(input)>50||Number(input)<=0){
        alert('nigga read it says 1 to 50');
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
             }
        });

    } 
};   



let submit=document.querySelector('.submit');
submit.addEventListener('click',generator2);




