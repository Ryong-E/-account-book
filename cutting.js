function cutingInput(object) {
  if (object >= 'a' || object <= 'z' || object >= "A" || object <= "Z"){
    object.value = object.value.slice(0,object.maxLength)
  }
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}
