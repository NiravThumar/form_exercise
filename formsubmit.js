const myForm = document.getElementById('myForm');

myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let email = document.getElementById('exampleInputEmail1');
    
    let formData = new FormData(myForm);
    
    for (const entry of formData) {
        const [name, value] = entry;
        console.log(`Field Name: ${name}, Value: ${value}`);
      }
    console.log(typeof formData);

    

})