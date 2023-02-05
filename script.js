const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = button.getAttribute("id");
    let text = display.value;

    switch (value) {
      case "clear":
        display.value = "";
        break;
      case "backspace":
        display.value = text.substring(0, text.length - 1);
        break;
      case "equals":
        display.value = eval(text);
        break;
      default:
        display.value += value;
        break;
    }
  });
});
