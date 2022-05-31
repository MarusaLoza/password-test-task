
function checkParams() {
    let inpSymbol = document.querySelector('.inpSymbol').value;
    let inpFromTo = document.querySelector('.inpFromTo').value;
    let inpPassword = document.querySelector('.inpPassword').value;
    let btn = document.querySelector('.btn');
    if(inpSymbol.length != 0 && inpFromTo.length != 0 && inpPassword.length != 0) {
      btn.removeAttribute('disabled')
    }
}

let passedCountVal = 0;
let faildCountVal = 0;

function checkPassword() {
    let inpSymbol = document.querySelector('.inpSymbol').value.toUpperCase();
    let inpFrom = document.querySelector('#inpFrom').value;
    let inpTo = document.querySelector('#inpTo').value;
    let correct = document.querySelector('.correct');
    let uncorrect = document.querySelector('.uncorrect');
    let inpPassword = document.querySelector('.inpPassword').value.toUpperCase();

    if(inpPassword.includes(inpSymbol)){
       let arrRes = inpPassword.split('').filter(letter => letter === inpSymbol);
       if(inpFrom >= inpTo){
            if(arrRes.length <= Number(inpFrom) && arrRes.length >= Number(inpTo)) {
                correct.style.display = "block";
                uncorrect.style.display = "none";
                passedCountVal++;
                updatePaseDisplay();
                return
            } else{
                correct.style.display = "none";
                uncorrect.style.display = "block";
                faildCountVal++;
                updateFailDisplay();
                return
            }
       }
       if(inpFrom <= inpTo){
            if(arrRes.length >= Number(inpFrom) && arrRes.length <= Number(inpTo)) {
                correct.style.display = "block";
                uncorrect.style.display = "none";
                passedCountVal++;
                updatePaseDisplay();
                return
            } else{
                correct.style.display = "none";
                uncorrect.style.display = "block";
                faildCountVal++;
                updateFailDisplay();
                return
            }
       }

    } else{
        correct.style.display = "none";
        uncorrect.style.display = "block";
        faildCountVal++;
        updateFailDisplay();
        return
    }
}


function updateFailDisplay() {
    document.getElementById("faildCount").innerHTML = faildCountVal;
}
function updatePaseDisplay() {
    document.getElementById("passedCount").innerHTML = passedCountVal;
}