import { transactions } from "./addDeal.js";


function loadList() {
  let htmllist = "";
  document.querySelector("#add-list ul").innerHTML = ''
  transactions.forEach((list) => {
    if (list.amount === "") {
      return;
    }
    let type = "";
    let color = "";
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
