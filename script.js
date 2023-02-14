`use strict`
const form = document.getElementById("form");

const password = document.getElementById("password-1");
const password2 = document.getElementById("password-2");




  form.addEventListener('submit',e=>{
  e.preventDefault();
  checkInput();
  
});
function checkInput(){
    const PassWord1 = password.value.trim();
    const  PassWord2  = password2.value.trim();


    if(PassWord1 === ''){
        setError(password,'password cannot be blank🙄');
    }else if(PassWord1.length < 8){
      setError(password,' password must be 8 characters');

    }
    else{
        setSuccess(password);
    }
  //   password 2
    if(PassWord2 === ''){
        setError(password2,'confirm password cannot be blank🙄');
    }else if(PassWord1 !== PassWord2)
    {
           setError(password2,'password does not match😥');
    }else{
        setSuccess(password2);
    }
    function setSuccess(input)
    {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
    }
   
    function setError(input,message){
        const formControl = input.parentElement;
        let msg= formControl.querySelector('small');
        msg.innerText= message;
        formControl.className = 'form-control error';
       
    }
   
}