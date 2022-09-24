// https://www.omnicalculator.com/health/vital-capacity

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const vitalcapacityRadio = document.getElementById('vitalcapacityRadio');
const ageRadio = document.getElementById('ageRadio');
const heightRadio = document.getElementById('heightRadio');

let vitalcapacity;
let age = v1;
let height = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

vitalcapacityRadio.addEventListener('click', function() {
  variable1.textContent = 'Age';
  variable2.textContent = 'Height';
  age = v1;
  height = v2;
  result.textContent = '';
});

ageRadio.addEventListener('click', function() {
  variable1.textContent = 'Vital capacity';
  variable2.textContent = 'Height';
  vitalcapacity = v1;
  height = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Vital capacity';
  variable2.textContent = 'Age';
  vitalcapacity = v1;
  age = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(vitalcapacityRadio.checked)
    result.textContent = `Vital capacity = ${computevitalcapacity().toFixed(2)}`;

  else if(ageRadio.checked)
    result.textContent = `Age = ${computeage().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;
})

// calculation

// For males: Vital capacity = height * (27.63 - 0.112 * age)

// For females: Vital capacity = height * (21.78 - 0.101 * age)

function computevitalcapacity() {
  return (Number(height.value) * (27.63 - 0.112 * Number(age.value))) / 1000;
}

function computeage() {
  return (Number(vitalcapacity.value) * 1000) / (27.63 * Number(height.value) - 0.112 * Number(height.value));
}

function computeheight() {
  return (Number(vitalcapacity.value) * 1000) / (27.63 - 0.112 * Number(age.value));
}