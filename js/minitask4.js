const username = document.querySelector("#username");
const password = document.querySelector("#password");
const openEye = document.querySelector("#open-eye");
const closeEye = document.querySelector("#close-eye");
const getData = document.querySelector("#getData");
const form = document.querySelector("form");
const ambil = document.querySelector("#ambil");

openEye.style.display = "block";

openEye.addEventListener("click", () => {
  closeEye.style.display = "block";
  openEye.style.display = "none";
  password.type = "text";
});

closeEye.addEventListener("click", () => {
  openEye.style.display = "block";
  closeEye.style.display = "none";
  password.type = "password";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "" || password.value === "") {
    popUpModal("username or password can not empty");
    // console.log("username or password can not empty");
    return;
  }

  if (username.value.length < 5) {
    // console.log("username must more than 5 character");

    popUpModal("username must more than 5 character", "#16a34a");
    return;
  }

  window.localStorage.setItem("name", JSON.stringify(btoa(username.value)));
  window.localStorage.setItem("password", JSON.stringify(btoa(password.value)));

  // location.href = "login.html";
  username.value = "";
});

ambil.addEventListener("click", () => {
  const data = JSON.parse(localStorage.getItem("name"));
  console.log(atob(data));
});

// const object = {
//   username: username.value,
//   password: password.value,
// };

// getData.addEventListener("click", (e) => {
//   e.preventDefault();
//   const data1 = window.localStorage.getItem("name");
//   const data2 = window.localStorage.getItem("password");
//   console.log(data1, data2);
// });

const popUpModal = (message, color = "#ef4444") => {
  const modal = document.querySelector("#modal");
  modal.textContent = message;
  modal.style.backgroundColor = color;

  modal.classList.add("show");
  setTimeout(() => {
    modal.classList.remove("show");
  }, 3000);
};
