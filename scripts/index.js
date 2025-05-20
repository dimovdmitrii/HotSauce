const cookiesBanner = document.querySelector(".cookies_banner");
const cookiesAccept = document.querySelector(".accept");
const cookiesReject = document.querySelector(".reject");

function hideCookiesSettings() {
  cookiesBanner.style.display = "none";
}

cookiesAccept.addEventListener("click", hideCookiesSettings);
cookiesReject.addEventListener("click", hideCookiesSettings);
