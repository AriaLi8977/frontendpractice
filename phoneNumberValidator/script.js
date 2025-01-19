const numberToCheck = document.getElementById("user-input");
const buttonCheck = document.getElementById("check-btn");
const buttonClear = document.getElementById("clear-btn");
const display = document.getElementById("results-div");


const validateNumber = number => {
  if(number === ""){
    alert("Please provide a phone number");
    return;
  }
  const phoneRegex = new RegExp(/^(1\s?)?(\([0-9]{3}\)|[0-9]{3})(\s|\-)?([0-9]{3})(\s|\-)?([0-9]{4})$/gm
  );
  
  display.innerHTML += phoneRegex.test(number)?`<p class="valid">Valid US number: ${number}</p>`:`<p class="invalid">Invalid US number: ${number}</p>`;
}

buttonCheck.addEventListener('click',()=>{
  validateNumber(numberToCheck.value);
  numberToCheck.value='';
})

buttonClear.addEventListener('click',()=>{
  display.innerHTML = '';
})
