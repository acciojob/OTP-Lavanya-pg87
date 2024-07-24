//your JS code here. If required.
let inputs=document.getElementsByTagName('input');
console.log(inputs);
// window.addEventListener('load',()=>{
//     inputs[0].addEventListener('focus',targets);
// })
inputs[0].addEventListener('change',()=>{
    inputs[1].focus();
    if(inputs[0].value===""){
        inputs[0].focus();
    }
})
inputs[1].addEventListener('change',()=>{
    inputs[2].focus();
    if(inputs[1].value===""){
        inputs[0].focus();
    }
})
inputs[2].addEventListener('change',()=>{
    inputs[3].focus();
    if(inputs[2].value===""){
        inputs[1].focus();
    }
})
inputs[3].addEventListener('change',()=>{
    inputs[4].focus();
    if(inputs[3].value===""){
        inputs[2].focus();
    }
})
inputs[4].addEventListener('change',()=>{
    inputs[5].focus();
    if(inputs[4].value===""){
        inputs[3].focus();
    }
})
inputs[5].addEventListener('change',()=>{
    if(inputs[5].value===""){
        inputs[4].focus();
    }
})