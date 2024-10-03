
document.addEventListener("DOMContentLoaded", function () {
  // Кнопка "Показать больше"
  const toggleMoreButton = document.getElementById("toggleMore");
  const moreInfo = document.getElementById("moreInfo")

  toggleMoreButton.addEventListener("click", function () {
    if (moreInfo.style.display == "none") {
      moreInfo.style.display = "block";
      toggleMoreButton.textContent = "Скрыть";
    }
  }

\
  toggleMoreButton.addEventListener("click", function () {
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
      toggleMoreButton.textContent = "Скрыть";
    } else {
      moreInfo.style.display = "none";
      toggleMoreButton.textContent = "Показать больше";
    }
  });

\
  //Смена темы
  const themeSwitcher = document.getElementById("themeSwitcher");

\
  themeSwitcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  });

\
  // Проверка темы при загрузке страницы
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
  
\
  // Слайдер
  const images = ["project1.jpg", "project2.jpg", "project3.jpg"];
  let currentImageIndex = 0;

\
  const sliderImage = document.getElementById("sliderImage");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

\
  function updateSlider() {
    sliderImage.src = images[currentImageIndex];
  }

\
  prevButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateSlider();
  });

\
  nextButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSlider();
  });
});