function paintList(){
  let htmllist = ""
  const contentList = localStorage.getItem("history")
  const test = JSON.parse(contentList)
  test.forEach((list) => {
    let type = ""
    let color = ""
    let localeAmount = parseInt(list.amount)
    localeAmount = localeAmount.toLocaleString('ko-KR')
    console.log(localeAmount)

    if (list.gather == 0) {
      type = "-"
      color = 'style="color:blue;"'
    } else if (list.gather == 1) {
      type = "+"
      color = 'style="color:red;"'
    }
    const content = `<li><span>${list.Date.slice(0, 4)}.${list.Date.slice(
      4,
      6
    )}.${list.Date.slice(6, 8)}</span>
    <div><span>${list.content}</span><span ${color}>${type}${localeAmount}</span></div></li>`
    htmllist += content
    document.querySelector("#add-list ul").innerHTML = htmllist
  })
}

export default paintList;