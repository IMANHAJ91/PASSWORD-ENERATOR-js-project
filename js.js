const empty='';
const uCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lCase='abcdefghijklmnopqrstuvwxyz';
const number='123456789';
const symbol='!@#$%^&*()_=-:;,~';


const p_length=document.getElementById('p-length');
const p_lower=document.getElementById('p-lower');
const p_upper=document.getElementById('p-upper');
const p_numbers=document.getElementById('p-numbers');
const p_symbol=document.getElementById('p-symbol');
const pass=document.getElementById('pass');
const submit=document.getElementById('submit');

submit.addEventListener('click',()=>{
   let initialPassword=empty;
   ( p_lower.checked)? initialPassword+=uCase: '';
   ( p_upper.checked)? initialPassword+=lCase: '';
   ( p_numbers.checked)? initialPassword+=number: '';
   ( p_lower.checked)? initialPassword+=symbol: '';
   pass.value=generatePass(initialPassword,p_length.value);

});
document.getElementById('copy').addEventListener('click',()=>{
if(pass.value==''){
    alert('generate pass word ');
}
else{
    pass.select();
    document.execCommand('copy');
    alert(" password has been copied")
}
});
function generatePass(init,len){
    var passWord='';
    for(var i=1 ; i<len ; i++)
    {
        passWord+=init.charAt(Math.floor(Math.random()*init.length));
    }
    return passWord;
}