const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const conPassword = document.querySelector("#con_password");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const dob = document.querySelector("#dob");
const submit = document.querySelector("#submit");

// submit.addEventListener("click", (e) => {
//   // alert("submit clicked");
// //   e.preventDefault();
//   // console.log(firstName);
//   if (
//     firstName.value.trim() === "" ||
//     lastName.value.trim() === "" ||
//     password.value.trim() === "" ||
//     conPassword === "" ||
//     email === "" ||
//     phone === "" ||
//     dob === ""
  //   ) {
//     alert("please fill details")
//   } else {
//     console.log("ho gaya bhai");
//   }
// });

firstName.addEventListener("blur",() => {
    if(firstName.value.trim() === ""){
        firstName.setAttribute('placeholder','please enter First name');
        // firstName.classList.remove("firstName");
        firstName.classList.add("change");
        // firstName.style.borderColor = "red";
        // firstName.style.border
        // firstName.id = 'changedId';
    }   
})

lastName.addEventListener("blur",() => {
    if(lastName.value.trim() === ""){
        lastName.setAttribute('placeholder','please enter Last name');
        lastName.classList.add("change");
    }   
})

username.addEventListener("blur",() => {
    if(username.value.trim() === ""){
        username.setAttribute('placeholder','please enter user name');
        username.classList.add("change");
    }   
})

phone.addEventListener("blur", () => {
    if (phone.value.trim() === "" || phone.value.trim() !== "/^\d+$/") {
        phone.setAttribute('placeholder','please enter valid number');
        phone.classList.add("change");
        // console.log(phone.value);
    }
    // if(phone.value.trim() !== "/^\d+$/"){
    //     phone.classList.remove("firstName");
    //     phone.classList.add("change");
    //     phone.
    // }
    if(phone.value.trim().length != 10){
        console.log("phone.value: " , phone.value );
        phone.classList.add("change");
        phone.value = "" ;
        phone.setAttribute('placeholder','please enter valid number');
        console.log(phone.value);
    }
})

email.addEventListener("blur", ()=>{
    if(email.value.trim() === ""){
      email.setAttribute('placeholder', 'please enter valid email');
      email.classList.add("change");
    }  
});

password.addEventListener("blur", ()=>{
  if(password.value.trim() === ""){
    password.setAttribute('placeholder', 'please enter password');
    password.classList.add("change");
  }
  if(password.value.length < 6 || password.value.length > 10 ){
    password.value = "";
    password.setAttribute('placeholder', 'password should be between 6 to 10 digits');
    password.classList.add("change");
  } 
});

conPassword.addEventListener("blur", ()=>{
    if(conPassword.value.trim() === ""){
        conPassword.setAttribute('placeholder', 'please enter password');
        conPassword.classList.add("change");
    }if(conPassword.value.trim() !== password.value.trim()){
        conPassword.value = "";
        conPassword.setAttribute('placeholder', 'please enter same password');
        conPassword.classList.add("change");
    }  
});

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    registerForm = document.getElementById("registerForm");

    const formData = new FormData(registerForm);
    let formValues = {};

    formData.forEach(function(value, key){
        formValues[key] = value;
    });
      console.log(formValues);
})