//business logic
function millilitersToGram(inputtedNumber){
  return inputtedNumber * 1;
}
function gramToMilliliters(inputtedNumber) {
  return inputtedNumber / 1
}
function millilitersToTablespoons(inputtedNumber){
  return inputtedNumber / 14.787
}
function tablespoonsToMilliliters(inputtedNumber){
  return inputtedNumber * 14.787
}
function millilitersToKilogram(inputtedNumber){
  return inputtedNumber / 1000
}
function kilogramToMilliliters(inputtedNumber){
  return inputtedNumber * 1000;
}
function millilitersToLitres(inputtedNumber){
  return inputtedNumber / 1000
}
function litresToMillilitres(inputtedNumber){
  return inputtedNumber * 1000
}
function gramToKilogram (inputtedNumber){
  return inputtedNumber / 1000; 
}
function kilogramToGram(inputtedNumber){
  return inputtedNumber * 1000;
}
function gramToTablespoons(inputtedNumber){
  return inputtedNumber / 15
}
function tablespoonsToGram(inputtedNumber){
  return inputtedNumber * 15
}
function gramToLitres(inputtedNumber){
  return inputtedNumber / 1000
}
function litresToGram(inputtedNumber){
 return inputtedNumber * 1000
}
function kilogramToLitres(inputtedNumber){
  return inputtedNumber * 1
}
function litresToKilogram(inputtedNumber){
  return inputtedNumber * 1
}
function kilogramToTablespoons(inputtedNumber){
  return inputtedNumber * 67.628
}
function tablespoonsToKilogram(inputtedNumber){
  return inputtedNumber / 67.628
}
function litresToTablespoons(inputtedNumber){
  return inputtedNumber * 66.6667
}
function tablespoonsToLitres(inputtedNumber){
  return inputtedNumber / 66.667
}



//user interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
  })
});