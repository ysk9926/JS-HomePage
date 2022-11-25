const main = document.querySelector("body");

function handleWindowSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 900 && windowWidth <= 1400) {
    main.classList.remove("size_2")
    main.classList.add("size_1")
  } else if(windowWidth > 1400) {
    main.classList.remove("size_1")
    main.classList.add("size_2")
  }else{
    main.classList.remove("size_1")
    main.classList.remove("size_2")
  }
}

window.addEventListener("resize", handleWindowSize);