const btnLogOut = document.querySelector("#btn-logout");

btnLogOut.addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  location.replace("minitask4.html");
});
