
function switchSlider(){
  if (document.body.classList.contains("dark-theme")){
    if (document.getElementById('sliderImage').classList.contains('slDark')) {
      document.getElementById('sliderImage').classList.remove('slDark')
    }
    document.getElementById('sliderImage').classList.add('slLight')
    }else{
      if (document.getElementById('sliderImage').classList.contains('slLight')) {
        document.getElementById('sliderImage').classList.remove('slLight')
      }
      document.getElementById('sliderImage').classList.add('slDark')
    }
}

document.addEventListener("DOMContentLoaded", function () {
  // Кнопка "Показать больше"
  const toggleMoreButton = document.querySelector("#toggleMore");
  const moreInfo = document.querySelector("#moreInfo")


  toggleMoreButton.addEventListener("click", function () {
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
      toggleMoreButton.textContent = "Скрыть";
    } else {
      moreInfo.style.display = "none";
      toggleMoreButton.textContent = "Показать";
    }
  });

  //Смена темы
  const themeSwitcher = document.getElementById("themeSwitcher");


  themeSwitcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
    switchSlider();
  });
  


  // Проверка темы при загрузке страницы
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
document.onload = switchSlider();
  

  // Слайдер
  const images = ["./assest/Проект 1.png", "./assest/Проект 2.png", "./assest/Проект 3.png"];
  let currentImageIndex = 0;

  const text = ["Сайт для ресторана Gerícht", "Первая версия портфолио", "Вакантное место для проекта"];
  let currentTextIndex = 0;

  const sliderImage = document.getElementById("sliderImage");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");


  function updateSlider() {
    sliderImage.src = images[currentImageIndex];
  }


  prevButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    currentTextIndex = (currentTextIndex - 1 + text.length) % text.length;
    document.getElementById("text").innerHTML = "<p>" + text[currentTextIndex] + "</p>";
    updateSlider();
  });


  nextButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    currentTextIndex = (currentTextIndex + 1 + text.length) % text.length;
    document.getElementById("text").innerHTML = "<p>" + text[currentTextIndex] + "</p>";
    updateSlider();
  });

  //const but = document.querySelector(".header__name");

});