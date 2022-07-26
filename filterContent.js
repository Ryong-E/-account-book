import loadList from "./loadContent.js";
import { transactions } from "./addDeal.js";




// const sortHandler = document.querySelector("#choose-type")
// const inLog = document.getElementById("in-log")
// const outLog = document.getElementById("out-log")
// const allLog = document.getElementById("all-log")

// sortHandler.addEventListener('click', (e) => {
//     if (e.target === inLog) {
//         allLog.classList.remove('sort')
//         inLog.classList.add('sort')
//         outLog.classList.remove('sort')
//     }
//     else if (e.target === outLog) {
//         allLog.classList.remove('sort')
//         inLog.classList.remove('sort')
//         outLog.classList.add('sort')
//     }
//     else if (e.target === allLog) {
//         allLog.classList.add('sort')
//         inLog.classList.remove('sort')
//         outLog.classList.remove('sort')
//     }
// })

// allLog.addEventListener('click', loadList)
// outLog.addEventListener('click' ,loadList)
// inLog.addEventListener('click' ,loadList)





// function miusFilter() {
//     let htmllist = "";
//     document.querySelector("#add-list ul").innerHTML = ''
//     let data  = transactions.filter((elem) => elem.sendout == 1)
//     data.forEach((list) => {
//       if (list.amount === "") {
//         return;
//       }
//       let type = "";
//       let color = "";
//       let localeAmount = parseInt(list.amount);
//       localeAmount = localeAmount.toLocaleString("ko-KR");
  
//       const content = `<li><span>${list.Date.slice(0, 4)}.${list.Date.slice(4,6)}.${list.Date.slice(6, 8)}</span>
//       <div><span>${
//         list.content
//       }</span><span style="color:blue;">-${localeAmount}</span></div><div class="del-btn" data-num='${list.id}'><span data-num='${list.id}'>삭제</span></div></li>`;
//       htmllist += content;
//       document.querySelector("#add-list ul").innerHTML = htmllist;
//     });
//   }

//   function plusFilter() {
//     let htmllist = "";
//     document.querySelector("#add-list ul").innerHTML = ''
//     let data  = transactions.filter((elem) => elem.gather == 1)
//     data.forEach((list) => {
//       if (list.amount === "") {
//         return;
//       }
//       let type = "";
//       let color = "";
//       let localeAmount = parseInt(list.amount);
//       localeAmount = localeAmount.toLocaleString("ko-KR");
  
//       const content = `<li><span>${list.Date.slice(0, 4)}.${list.Date.slice(4,6)}.${list.Date.slice(6, 8)}</span>
//       <div><span>${
//         list.content
//       }</span><span style="color:red;">+${localeAmount}</span></div><div class="del-btn" data-num='${list.id}'><span data-num='${list.id}'>삭제</span></div></li>`;
//       htmllist += content;
//       document.querySelector("#add-list ul").innerHTML = htmllist;
//     });
//   }  