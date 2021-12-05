const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-btn");
const outputBox=document.querySelector("#output-box");

function checkBirthDateIsLucky(){
    var dob=dateOfBirth.value;
    var sum=CalculateSum(dob);
    compareValues(sum,luckyNumber.value)
}

function CalculateSum(dob){
    dob=dob.replaceAll("-"," ");
    let sum=0;

    for (let i=0; i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    };
    return sum;
};

function compareValues(sum,luckyNumber){
    if (sum%luckyNumber===0){
        outputBox.innerText="Your Birthday is Lucky 🤗";
    
    }else{
        outputBox.innerText="Your Birthday is  not Lucky 😔";
    }
}

checkButton.addEventListener("click",checkBirthDateIsLucky);