import { transactions } from "./addDeal.js";

function calculateContent(){
    let total = 0
    let minusAmount = 0
    let plusAmount = 0
    for (let i = 0; i < transactions.length; i++){
        if (transactions[i].sendout == 1){
            minusAmount += transactions[i].amount * -1
        }
        else if(transactions[i].sendout == 0){
            plusAmount += parseInt(transactions[i].amount)
        }
    }
    total = (plusAmount + minusAmount).toLocaleString('ko-KR')
    minusAmount = minusAmount.toLocaleString('ko-KR')
    plusAmount = plusAmount.toLocaleString('ko-KR')
    document.querySelector("#total-status").innerHTML = total
    document.querySelector("#out-num").innerHTML = minusAmount
    document.querySelector("#in-num").innerHTML = plusAmount
}

export default calculateContent;