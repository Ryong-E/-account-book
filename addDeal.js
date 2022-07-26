import loadList from "./loadContent.js";
import calculateContent from "./total.js";
import { load, askForName, paintUser } from "./askName.js";





const add = document.querySelector("#add-pay-log");
const year = document.querySelector("#add-date-input :nth-child(1)");
const month = document.querySelector("#add-date-input :nth-child(2)");
const day = document.querySelector("#add-date-input :nth-child(3)");
const gather = document.querySelector("#add-content-button :nth-child(1)");
const sendout = document.querySelector("#add-content-button :nth-child(2)");
const submitButton = document.querySelector("#add-submit-delete1 button");
const showme = document.querySelector(".add-top-container");
const closeButton = document.querySelector("#add-submit-delete2");
let localStorageTranscation = JSON.parse(localStorage.getItem("history"));
export let transactions =
  localStorage.getItem("history") == null ? [] : localStorageTranscation


  firstIn()
function firstIn(){
load();
loadList()
calculateContent();
}


add.addEventListener("click", (e) => {
  e.preventDefault();
  showme.classList.remove("show");
  document.querySelector(".middle-top-container").classList += " adding";
  document.querySelector(".middle-container").classList += " adding";
});


gather.on = 0;
sendout.on = 0;
gather.addEventListener("click", gatherFor);
sendout.addEventListener("click", sendoutFor);
submitButton.addEventListener("click", submitAdd);
closeButton.addEventListener("click", closeAdd);

// 버튼 눌렀을 떄 양쪽 확인해서 적용
function gatherFor() {
  if (gather.on == 0) {
    gather.style.backgroundColor = "#7fd1ae";
    gather.on = 1;
    if (sendout.on == 1) {
      sendout.style.backgroundColor = "#cdd0d5";
      sendout.on = 0;
    }
  } else if (gather.on == 1) {
    gather.style.backgroundColor = "#cdd0d5";
    gather.on = 0;
  }
}
// 버튼 눌렀을 떄 양쪽 확인해서 적용
function sendoutFor() {
  if (sendout.on == 0) {
    sendout.style.backgroundColor = "#7fd1ae";
    sendout.on = 1;
    if (gather.on == 1) {
      gather.style.backgroundColor = "#cdd0d5";
      gather.on = 0;
    }
  } else if (sendout.on == 1) {
    sendout.style.backgroundColor = "#cdd0d5";
    sendout.on = 0;
  }
}

//제출 버튼 클릭시 이벤트
function submitAdd(e) {
  e.preventDefault();
  const id = Math.floor(Math.random() * 1000000)
  const transaction = {
    id,
    Date: `${year.value}${month.value}${day.value}`,
    gather: gather.on,
    sendout: sendout.on,
    content: document.querySelector("#add-content-input input").value,
    amount: document.querySelector("#add-amount-input input").value,
  };
  transactions.push(transaction);
  //빈 입력값으로 초기화
  year.value = "";
  month.value = "";
  day.value = "";
  document.querySelectorAll("#add-date-input input").value = "";
  gather.on = 0;
  gather.style.backgroundColor = "#cdd0d5";
  sendout.on = 0;
  sendout.style.backgroundColor = "#cdd0d5";
  document.querySelector("#add-content-input input").value = "";
  document.querySelector("#add-amount-input input").value = "";

  //로컬 스토리지에 입력한 값 추가하기
  updateTranscation();
  closeAdd()
  loadList();
  calculateContent();
}

export const updateTranscation = () => {
  localStorage.setItem("history", JSON.stringify(transactions));
};



function closeAdd(){
  showme.classList.add("show");
  document.querySelector(".middle-top-container").classList.remove("adding");
  document.querySelector(".middle-container").classList.remove("adding");
}




function delList(e){
  transactions = transactions.filter((res) => res.id !== Number(e.target.dataset.num))
  updateTranscation()
  loadList()
  calculateContent()
}



const b = document.querySelector('#add-list')
b.addEventListener('click',delList)





const sortHandler = document.querySelector("#choose-type")
const inLog = document.getElementById("in-log")
const outLog = document.getElementById("out-log")
const allLog = document.getElementById("all-log")

sortHandler.addEventListener('click', (e) => {
    if (e.target === inLog) {
        allLog.classList.remove('sort')
        inLog.classList.add('sort')
        outLog.classList.remove('sort')
        loadList()
    }
    else if (e.target === outLog) {
        allLog.classList.remove('sort')
        inLog.classList.remove('sort')
        outLog.classList.add('sort')
        loadList()
    }
    else if (e.target === allLog) {
        allLog.classList.add('sort')
        inLog.classList.remove('sort')
        outLog.classList.remove('sort')
        loadList()
    }
})