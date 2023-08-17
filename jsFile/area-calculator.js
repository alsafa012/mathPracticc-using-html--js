
let PI =3.1416;
function getInputValue(id){
     const inpValue = document.getElementById(id);
     const valueString = inpValue.value;
     const finalValue = parseFloat(valueString);
     inpValue.value = '';
     return finalValue;
}
function display(id, value){
     const a = document.getElementById(id);
     a.innerText=value;
}
// function 

function calculateParallelogramArea(){
     const base = getInputValue('parallelogram-base')
     const height = getInputValue('parallelogram-height')

     if (isNaN(base) || isNaN(height)) {
        return  alert('Sorry, invalid input for parallelogram area');
          
     }
     // const area = base * height;
     // const dis = display('parallelogram-area',area);
     const dis = display('parallelogram-area',base*height);

     // const a =document.getElementById('parallelogram-area')
     // a.innerText=area


     calculationDisplay('parallelogram' , dis);



}
// Ellipse calculation
function calculateEllipseArea(){
     const a = getInputValue('ellipse-major-radius')
     const b = getInputValue('ellipse-minor-radius')
     const mul = PI*a*b;
     const ellipseArea =mul.toFixed(2);
     display('ellipse-area',ellipseArea);
     calculationDisplay('Ellipse',ellipseArea);
     
}
// triangle calculate
function calculateTriangleArea(){
     const b = getInputValue('triangle-base')
     const h = getInputValue('triangle-height')
     const areaTriangle = 0.5 * b * h;
     display('triangle-area',areaTriangle);
     calculationDisplay('Triangle',areaTriangle);
     
}
// rectangle calculate
function calculateRectangleArea(){
     const w = getInputValue('rectangle-width')
     const l = getInputValue('rectangle-length')
     const areaRectangle = w*l;
     display('rectangle-area',areaRectangle);
     calculationDisplay('Rectangle',areaRectangle);
     
}
// 


function calculationDisplay(name, value){
console.log(name ,' ', value);
const calculationEntry = document.getElementById('calculation-entry');
const countNumber = calculationEntry.childElementCount;
const p = document.createElement('h1');
p.classList.add('my-3')
// p.innerHTML= name + ' ' + value;
p.innerHTML=`${countNumber + 1} ${name} ${value} cm<sup>2</sup>
<button class="btn-sm btn btn-success "> clicked</button`;
calculationEntry.appendChild(p); 
}
