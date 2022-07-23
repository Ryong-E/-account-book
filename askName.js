export function load() {
  const currentUser = localStorage.getItem("USER_LS");
  if (currentUser === null) {
    askForName();
  } else if (currentUser == "null") {
    askForName();
  } else {
    paintUser(currentUser);
  }
}

export function askForName() {
  const user = prompt("사용자 분의 성함을 입력해주세요.");
  localStorage.setItem("USER_LS", user);
  paintUser(user);
}

export function paintUser(user) {
  let paint = document.querySelector("#sum-total > p > span");
  paint.innerHTML = user;
}


// function cutingMonthInput(object) {
//   if (object.value.length > object.maxLength) {
//     object.value = object.value.slice(0, object.maxLength);
//   }
//   if (object.value < 0 || object.value > 12) {
//     alert("1이상 12이하의 숫자만 입력이 가능합니다!");
//     object.value = "";
//   }
// }
// function cutingDateInput(object) {
//   if (object.value.length > object.maxLength) {
//     object.value = object.value.slice(0, object.maxLength);
//   }
