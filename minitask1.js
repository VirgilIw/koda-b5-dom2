const input = document.querySelector("input");
const closeEye = document.querySelector("#close-eye");
const openEye = document.querySelector("#open-eye");
const openNavbar = document.querySelector("#open-nav");
const closeNavbar = document.querySelector("#close-nav");
const li = document.querySelectorAll("li");
const ul = document.querySelector("ul");
ul.style.display = "none";
closeNavbar.style.display = "none";
//

closeEye.addEventListener("click", () => {
  input.type = "text";
  input.style.fontSize = "10px";
  closeEye.style.display = "none";
  openEye.style.display = "block";
});
//
openEye.addEventListener("click", () => {
  input.type = "password";
  input.style.fontSize = "15px";
  openEye.style.display = "none";
  closeEye.style.display = "block";
});
//

openNavbar.addEventListener("click", () => {
  ul.style.display = "block";
  openNavbar.style.display = "none";
  closeNavbar.style.display = "block";
});

closeNavbar.addEventListener("click", () => {
  ul.style.display = "none";
  openNavbar.style.display = "block";
  closeNavbar.style.display = "none";
});

//
const mediaQuery = window.matchMedia("(min-width: 768px)");

const changeNavbarDisplay = (mq) => {
  const matches = typeof mq === "boolean" ? mq : mq.matches;

  if (matches) {
    // MODE DESKTOP
    if (openNavbar) openNavbar.style.display = "none";
    if (closeNavbar) closeNavbar.style.display = "none";

    if (ul) {
      ul.style.display = "flex"; // pakai flex untuk navbar desktop
      ul.style.gap = "20px";
      ul.style.flexWrap = "nowrap";
    }

    // li adalah NodeList -> loop
    li.forEach((item) => {
      item.style.display = "block"; // atau inline-block sesuai CSS kamu
    });
  } else {
    // MODE MOBILE
    if (openNavbar) openNavbar.style.display = "block";
    if (closeNavbar) closeNavbar.style.display = "none";

    if (ul) {
      ul.style.display = "none";
      // optional: reset styling yang hanya untuk desktop
      ul.style.gap = "";
      ul.style.flexWrap = "";
    }

    li.forEach((item) => {
      item.style.display = "block"; // supaya tiap item di mobile jadi baris (sesuaikan)
    });
  }
};

changeNavbarDisplay(mediaQuery);

// dan pasang listener agar responsif saat resize
mediaQuery.addEventListener("change", changeNavbarDisplay);
