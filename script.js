function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    
    
    }
    function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    
    }
    
    function validateForm(){
    var returnval = true;
    clearErrors();
    
    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short!");
        returnval = false;
    }
    
    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    
    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
        seterror("email", "*Email length is too long!");
        returnval = false;
    }
    
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    
    if (phone == 123456789){
        seterror("phone", "*Phone number cannot be 123456789!");
        returnval = false;
    }
    
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 8){
    
        seterror("pass", "*Password is not strong, should contain atleast 8 characters!");
        returnval = false;
    }
    if (password == "password"){
    
        seterror("pass", "*Password cannot be password!");
        returnval = false;
    }
    if (password == name){
    
    seterror("pass", "*Password cannot be username!");
    returnval = false;
    }
    
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    
    return returnval;
    }
    