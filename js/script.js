//business logic
function gramToKilogram (inputtedNumber){
  return inputtedNumber / 1000 
}




//user interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
  })
});