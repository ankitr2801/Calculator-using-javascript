const input = document.getElementById('input-box');
const buttons = document.querySelectorAll(".sub-button");


let  string = '';
// console.log(string);

let inputArray = Array.from(buttons);
console.log(input.value);
inputArray.forEach(function (subbuttons){
 subbuttons.addEventListener('click', function(e){
     if(e.target.value == '='){
        string = eval(string);
        input.value = string;
    }  else if (e.target.value == 'AC'){
           string = '';
           input.value = 0;
    } else if(e.target.value == 'DEL'){
        string = string.slice(0,-1)
        input.value = string;
    }
    
    else {
        string += e.target.value;
        input.value = string;
    }
  
 })
})

// const input = document.getElementById('input-box');
// const buttons = document.querySelectorAll(".sub-button");

// let string = '';

// let inputArray = Array.from(buttons);
// inputArray.forEach(subbuttons => {
//   subbuttons.addEventListener('click', (e) => {
//     if (e.target.value == '=') {
//       string = eval(string);
//       input.value = string;
//     } else if (e.target.value == 'AC') {
//       string = '';
//       input.value = '0';
//     } else if (e.target.value == 'DEL') {
//       string = string.slice(0, -1); // Remove the last character
//       input.value = string;
//     } else {
//       string += e.target.value;
//       input.value = string;
//     }
//   })
// });