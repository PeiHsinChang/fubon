const notificationSwitch = document.getElementById("notification-switch");
const notificationText = document.getElementById("notification-text");
notificationSwitch.addEventListener("click", (e) => {
  const classList = notificationText.classList;
  if (classList.value.includes("hide")) {
    notificationText.className = "content-3-1";
  } else {
    notificationText.className = "content-3-1 hide";
  }
});

$(document).ready(function () {
  $(".cards").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
  });
});
