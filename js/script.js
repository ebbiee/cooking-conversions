//business logic
function millilitersToGram(inputtedNumber) {
  return inputtedNumber * 1 + "g";
}
function gramToMilliliters(inputtedNumber) {
  return inputtedNumber / 1 + "ml";
}
function millilitersToTablespoons(inputtedNumber) {
  return inputtedNumber / 14.787 + "tbsps";
}
function tablespoonsToMilliliters(inputtedNumber) {
  return inputtedNumber * 14.787 + "ml";
}
function millilitersToKilogram(inputtedNumber) {
  return inputtedNumber / 1000 + "kg";
}
function kilogramToMilliliters(inputtedNumber) {
  return inputtedNumber * 1000 + "ml";
}
function millilitersToLitres(inputtedNumber) {
  return inputtedNumber / 1000 + "L";
}
function litresToMillilitres(inputtedNumber) {
  return inputtedNumber * 1000 + "ml";
}
function gramToKilogram(inputtedNumber) {
  return inputtedNumber / 1000 + "kg";
}
function kilogramToGram(inputtedNumber) {
  return inputtedNumber * 1000 + "g";
}
function gramToTablespoons(inputtedNumber) {
  return inputtedNumber / 15 + "tbsps";
}
function tablespoonsToGram(inputtedNumber) {
  return inputtedNumber * 15 + "g";
}
function gramToLitres(inputtedNumber) {
  return inputtedNumber / 1000 + "L";
}
function litresToGram(inputtedNumber) {
  return inputtedNumber * 1000 + "g";
}
function kilogramToLitres(inputtedNumber) {
  return inputtedNumber * 1 + "L";
}
function litresToKilogram(inputtedNumber) {
  return inputtedNumber * 1 + "kg";
}
function kilogramToTablespoons(inputtedNumber) {
  return inputtedNumber * 67.628 + "tbsps";
}
function tablespoonsToKilogram(inputtedNumber) {
  return inputtedNumber / 67.628 + "kg";
}
function litresToTablespoons(inputtedNumber) {
  return inputtedNumber * 66.6667 + "tbsps";
}
function tablespoonsToLitres(inputtedNumber) {
  return inputtedNumber / 66.667 + "L";
}

//user interface logic
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();

    let firstMeasurement = $("#firstMeasurement").val();
    let secondMesurement = $("#secondMeasurement").val();
    let inputtedNumber = $("#userInput").val();
    console.log(firstMeasurement);
    console.log(secondMesurement);
    console.log(inputtedNumber);
    if (firstMeasurement === "milliliters" && secondMesurement === "liters") {
      let result = millilitersToLitres(inputtedNumber);
      $("#answer").html(result);
      console.log(result);
    } else if ( firstMeasurement === "liters" && secondMesurement === "milliliters") {
      let result = litresToMillilitres(inputtedNumber);
      $("#answer").html(result);
    }
    if (firstMeasurement === "Kilogram" && secondMesurement === "Gram") {
      let result = kilogramToGram(inputtedNumber);
      $("#answer").html(result);
    } else if (firstMeasurement === "Gram" && secondMesurement === "Kilogram") {
      let result = gramToKilogram(inputtedNumber);
      $("#answer").html(result);
    }
    if (firstMeasurement === "milliliters" && secondMesurement === "Gram"){
      let result = millilitersToGram(inputtedNumber)
      $("#answer").html(result);
    } else if (firstMeasurement === "Gram" && secondMesurement === "milliliters"){
      let result = gramToMilliliters(inputtedNumber)
      $("#answer").html(result);
    }
    if (firstMeasurement === "milliliters" && secondMesurement === "Tablespoons"){
      let result = millilitersToTablespoons(inputtedNumber);
      $("#answer").html(result);
    } else if (firstMeasurement === "Tablespoons" && secondMesurement === "milliliters"){
      let result = tablespoonsToMilliliters(inputtedNumber);
      $("#answer").html(result);
    }
    if (firstMeasurement === "milliliters" && secondMesurement === "Kilogram"){
      let result = millilitersToKilogram(inputtedNumber);
      $("#answer").html(result);
    } else if (firstMeasurement === "Kilogram" && secondMesurement === "milliliters"){
      let result = kilogramToMilliliters(inputtedNumber);
      $("#answer").html(result);
    }
    if (firstMeasurement === "Gram" && secondMesurement === "Tablespoons"){
      let result = gramToTablespoons(inputtedNumber);
      $("#answer").html(result);
    } else if (firstMeasurement === "Tablespoons" && secondMesurement === "Gram"){
      let result = tablespoonsToGram(inputtedNumber)
      $("#answer").html(result);
    }
    if (firstMeasurement === "Gram" && secondMesurement === "liters"){
      let result = gramToLitres(inputtedNumber);
      $("#answer").html(result);
    } else if (firstMeasurement === "liters" && secondMesurement === "Gram"){
      let result = litresToGram(inputtedNumber)
      $("#answer").html(result);
    }
    if (firstMeasurement === "Kilogram" && secondMesurement === "liters"){
      let result = kilogramToLitres(inputtedNumber);
      $("#answer").html(result);
    } else if (firstMeasurement === "liters" && secondMesurement === "Kilogram"){
      let result = litresToKilogram(inputtedNumber)
      $("#answer").html(result);
    }
    if (firstMeasurement === "Kilogram" && secondMesurement === "Tablespoons"){
      let result = kilogramToTablespoons(inputtedNumber);
      $("#answer").html(result);
    } else if (firstMeasurement === "Tablespoons" && secondMesurement === "Kilogram"){
      let result = tablespoonsToKilogram(inputtedNumber)
      $("#answer").html(result);
    }
    if (firstMeasurement === "liters" && secondMesurement === "Tablespoons"){
      let result = litresToTablespoons(inputtedNumber);
      $("#answer").html(result);
    } else if (firstMeasurement === "Tablespoons" && secondMesurement === "liters"){
      let result = tablespoonsToLitres(inputtedNumber)
      $("#answer").html(result);
    }



  });
});
