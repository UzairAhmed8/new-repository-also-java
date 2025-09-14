let userPrompt = prompt("Please fill up ur name over here \n eg: User1234 \n numbers are included ");
let userName = userPrompt;

if(userPrompt == ""){
    alert("Please Fill up The correct way")
}else{
    alert("You can proceed now")
    alert("welcome " + userName)
}

function proceedTonextPage(){
    let userEmail = document.getElementById("emailInp").value;
    let userPass = document.getElementById("passInp").value;
    let userRegion = document.getElementById("selectRegion").value;

    if(userEmail == userEmail && userPass == userPass && userRegion == userRegion){
        alert("Your Email: " + userEmail + "\n Your Region: " + userRegion);
    }else{
        alert("PLEASE FILL THOROUGHLY")
    }
    return
}