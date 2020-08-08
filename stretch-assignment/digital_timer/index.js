
const header = document.querySelector('.heading')
header.textContent = `Timer`
header.style.textAlign='center'

const digits = document.querySelectorAll('.digits .digit')
const buttonStart = document.createElement('button');
buttonStart.textContent = 'start'
const buttonClear = document.createElement('button');
buttonClear.textContent = 'Clear'
const buttonContainer = document.createElement('div')
buttonContainer.appendChild(buttonStart)
buttonContainer.appendChild(buttonClear)
const digitsContainer = document.querySelector('.digits')
digitsContainer.appendChild(buttonContainer)
//styles for buttons
const nice = {padding:'2%',fontSize:'2rem'}
buttonStart.style.padding='5%';
buttonStart.style.margin='3%';
buttonStart.style['border-radius'] = '10px';
buttonStart.style.fontSize='1.5rem';


buttonClear.style.padding='5%';
buttonClear.style.margin='3%';
buttonClear.style['border-radius'] = '10px';
buttonClear.style.fontSize='1.5rem';

buttonContainer.style.textAlign='center'
digitsContainer.style.backgroundColor='#584750'
digitsContainer.style.padding='10%'
let secondTens=0;
let secondOnes =0;
let msHundreds=0;
let msTens =0;
let interval = null;
interval = setInterval((e)=>{

    secondOnes = secondOnes+1;

},1000)

digits[0].textContent = secondTens;
digits[1].textContent = secondOnes;
digits[2].textContent = ':';
digits[3].textContent = msHundreds;
digits[4].textContent = msTens;