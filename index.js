let amount = document.querySelector("#amount");
let tip = document.querySelector("#tip");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let totalPerPerson = document.querySelector(".result");
let noOfPeople = document.querySelector(".people");


console.log(typeof amount.value , typeof tip.value ,typeof noOfPeople.innerText)

const calculate = (totalAmt, totalTip,totalPeople) =>{
    if(isNaN(totalAmt) || isNaN(totalTip) || totalTip ==NaN || totalAmt ==undefined ||totalTip ==undefined){
        totalPerPerson.innerText = 0;
    }else{
        totalPerPerson.innerText = Math.round((totalAmt+(totalTip*totalAmt/100))/totalPeople);
    }
}

// calculate(100,10,2)

increment.onclick = () => {
    noOfPeople.innerText = parseInt(noOfPeople.innerText)+1;
    calculate(parseInt(amount.value),parseInt(tip.value),parseInt(noOfPeople.innerText))
}

decrement.onclick = () => {
    if(parseInt(noOfPeople.innerText) ==1){
    
    }else{
        noOfPeople.innerText = parseInt(noOfPeople.innerText)-1;
    }
    calculate(parseInt(amount.value),parseInt(tip.value),parseInt(noOfPeople.innerText))
}

amount.onkeyup =()=>calculate(parseInt(amount.value),parseInt(tip.value),parseInt(noOfPeople.innerText));
tip.onkeyup=() =>calculate(parseInt(amount.value),parseInt(tip.value),parseInt(noOfPeople.innerText));
totalPerPerson.innerText = 0;