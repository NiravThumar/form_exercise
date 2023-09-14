
const form = document.getElementById('myForm');
const check = document.getElementById('exampleCheck1');
const submit = document.getElementById('submit');
const checkHelp = document.getElementById('checkHelp');
const success = document.getElementById('success');

// disabeled submit onload and uncheck checbox

window.addEventListener('load', function() {
    submit.classList.add('disabled');
    check.checked = false; // Check the checkbox
    success.classList.add('d-none');

  });


//   function to check on submit in input value is present or not based on it styling apply
function checkValidity(elem,elemHelp){
    if(elem.value.length == 0){
        elem.style.border = "1px solid red";   
        elemHelp.classList.remove('d-none');
    
    } else{
        elem.style.border = "1px solid #86b7fe";
        elemHelp.classList.add('d-none');
    }
}

// monitor checkbox based on that enable submit button
check.addEventListener('change',()=>{    
        submit.classList.toggle('disabled');
    
})

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('exampleInputEmail1');
    const passwd = document.getElementById('exampleInputPassword1');
    const profileHelp = document.getElementById('profileHelp');
    const emailHelp = document.getElementById('emailHelp');
    const passwdHelp = document.getElementById('passwdHelp');
    const imageFileInput = document.getElementById('exampleInputfile');
    // const imageFile = imageFileInput.files[0];
  

    checkValidity(email,emailHelp);
    checkValidity(passwd,passwdHelp);
   
    if ( imageFileInput.files.length) {
        profileHelp.classList.add('d-none');
    }
    else{
        profileHelp.classList.remove('d-none');

    }
    if(email.value && passwd.value && imageFileInput.files.length ){
        success.classList.remove('d-none');
    }

})
