const user = document.querySelector(".login");
const loginInput = document.querySelector(".login_input");
const greeting = document.querySelector(".greeting");

const HIDDENCLASS = "hidden";
const USERNAMEKEY = "username";



function onLoginForm(event) {
    event.preventDefault();
    user.classList.add(HIDDENCLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAMEKEY, username);
    paintGreetings(username);
  }

function paintGreetings(username){
    greeting.innerText = `안녕하세요 ${username}님`;
    greeting.classList.remove(HIDDENCLASS);

}

const savedUsername = localStorage.getItem(USERNAMEKEY);

if (savedUsername === null){
    user.classList.remove(HIDDENCLASS);
    user.addEventListener("submit", onLoginForm);
} else {
    paintGreetings(savedUsername);
}
