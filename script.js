
let arrayLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arrayUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function generate() {
    let password = [];
    let checkUpperCase = document.getElementById("checkUp").checked;
    let checkLowerCase = document.getElementById("checkLow").checked;
    let checkNumbers = document.getElementById("checkNum").checked;
    if (!checkUpperCase && !checkLowerCase && !checkNumbers) {
        alert('Please Select A Checkbox');
        return '';
    }
    else{
    for (let i = 0; i < 13; i++) {
               
        if (checkUpperCase  && !checkLowerCase && !checkNumbers) {
            password.push(arrayUpperCase[Math.floor(Math.random() * 26)]);
            
        } 
        else if (checkUpperCase && checkLowerCase &&!checkNumbers) {
            let arrayLowUp = arrayLowerCase.concat(arrayUpperCase);
            password.push(arrayLowUp[Math.floor(Math.random() * 52)]);
            
        }
        else if (checkUpperCase && checkLowerCase && checkNumbers) {
            let arrayLowUp = arrayLowerCase.concat(arrayUpperCase);
            let arrayLowUpNum = arrayLowUp.concat(arrayNumbers);
            password.push(arrayLowUpNum[Math.floor(Math.random() * 62)]);
            
        }
        else if (!checkUpperCase && checkLowerCase && !checkNumbers) {
            password.push(arrayLowerCase[Math.floor(Math.random() * 26)]); 
            
        }
        else if (!checkUpperCase && checkLowerCase && checkNumbers) {
            let arrayLowNum = arrayLowerCase.concat(arrayNumbers);
            password.push(arrayLowNum[Math.floor(Math.random() * 36)]);
            
        }
        else if (!checkUpperCase && !checkLowerCase && checkNumbers) {
            password.push(arrayNumbers[Math.floor(Math.random() * 10)]);
            
        }
        else if (checkUpperCase && !checkLowerCase &&checkNumbers) {
            let arrayUpNum = arrayUpperCase.concat(arrayNumbers);
            password.push(arrayUpNum[Math.floor(Math.random() * 36)]);
            
        }
        
    };
    return password.map(String).join(''); 
        
    };   
 
};

function displayPassword() {
    document.getElementById('generatedText').value = generate();
};

document.addEventListener('DOMContentLoaded', function buttonClick() {
    document.getElementById('generateButton').addEventListener('click', displayPassword);
});

function copyPassword() {
    navigator.clipboard.writeText(document.getElementById('generatedText').value).then();
    alert('Password Copied');
};

document.addEventListener('DOMContentLoaded', function buttonClick() {
    document.getElementById('copyButton').addEventListener('click', copyPassword);
});

