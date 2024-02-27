//first we can get all the elements that we are targeting
//second step would be validation call from the from on clicking
//third would be the validation function where first we would get the values of the element and then according to the values we will call the function seterror or noerror accordingly for the message to be displayed

const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("confirmpassword"); 
// const submit=document.getElementById("btn");//important

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateform();
});

validateform=()=>
{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmPasswordValue=confirmpassword.value.trim();

    //validate username
    if(usernameValue==='')
    { displayError(username,"Please provide a username");}
    else
    {noerror(username);}

    //validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailValue==='')
    displayError(email,"Please provide an email");
    else  if (!emailRegex.test(emailValue))
    displayError(email,"Please provide a valid email");
    else
    noerror(email);

    //validate password value
    if(passwordValue==='')
    { displayError(password,"Please provide a password");}
    else if(passwordValue.length <= 12)
    {
        displayError(password,"Please provide a password greater than 12 characters");    
    }
    else
    {noerror(password);}

    //validate confirm password value
    if(confirmPasswordValue==='')
    {displayError(confirmpassword,'Please confirm password')}
    else if(confirmPasswordValue !== passwordValue)
    displayError(confirmpassword,'Does not match original password')
    else
    noerror(confirmpassword);




};

displayError=(e,message)=>
{
    const inputControl= e.parentElement;
    const error=inputControl.querySelector(".error");
    error.innerText=message;

    inputControl.classList.add("error");
    inputControl.classList.remove("success");

}

noerror=(e)=>
{
    const inputControl= e.parentElement;
    const error=inputControl.querySelector(".error");
    error.innerText='';

    inputControl.classList.add("success");
    inputControl.classList.remove("error");

}

