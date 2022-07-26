import { transactions } from "./addDeal.js";


function loadList() {
  const inone = document.getElementById("in-log")
  const outone = document.getElementById("out-log")
  const all = document.getElementById("all-log")
  let htmllist = "";
  let type = "";
  let color = "";
  let data;
  data = transactions.sort(function (a,b){
    const namea = a.Date;
    const nameb = b.Date;
    if (namea < nameb){
      return -1
    }
    if (namea > nameb){
      return 1
    }
    return 0
  })

  if (inone.classList.contains('sort')){
    data  = transactions.filter((elem) => elem.gather === 1)
  }
  else if (outone.classList.contains('sort')){
    data  = transactions.filter((elem) => elem.sendout === 1)
  }
  else{
    data = transactions
  }
  document.querySelector("#add-list ul").innerHTML = ''
  data.forEach((list) => {
    if (list.amount === "") {
      return;
    }
    let localeAmount = parseInt(list.amount);
    localeAmount = localeAmount.toLocaleString("ko-KR");

    if (list.gather == 0) {
      type = "-";
      color = 'style="color:blue;"';
    } else if (list.gather == 1) {
      type = "+";
      color = 'style="color:red;"';
    }
    const content = `<li><span>${list.Date.slice(0, 4)}.${list.Date.slice(4,6)}.${list.Date.slice(6, 8)}</span>
    <div><span>${
      list.content
    }</span><span ${color}>${type}${localeAmount}</span></div><div class="del-btn" data-num='${list.id}'><span data-num='${list.id}'>삭제</span></div></li>`;
    htmllist += content;
    document.querySelector("#add-list ul").innerHTML = htmllist;
  });
}

export default loadList;
