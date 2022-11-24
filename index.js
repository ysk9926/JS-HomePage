// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const main = document.querySelector("h2");

console.log(main)
const superEventHandler = {
  handleMainClick: function () {
    main.innerText = "클릭하셨습니다";
    main.style.color = colors[0];
  },

  handleMainMouseleve: function () {
    main.innerText = "마우스가 사라졌습니다";
    main.style.color = colors[1];
  },

  handleMainMouseenter: function () {
    main.innerText = "마우스가 여기 있습니다";
    main.style.color = colors[2];
  },

  handleWindowResize: function () {
    main.innerText = "창 사이즈를 바꿨습니다";
    main.style.color = colors[3];
  }
};

main.addEventListener("click", superEventHandler.handleMainClick);
main.addEventListener("mouseenter", superEventHandler.handleMainMouseenter);
main.addEventListener("mouseleave", superEventHandler.handleMainMouseleve);
window.addEventListener("resize", superEventHandler.handleWindowResize);
