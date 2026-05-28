var slideIndex = 1;
var timer = 0;

showSlides(slideIndex);
makeTimer(); // Создаем интервал

function plusSlides(n) {
  showSlides(slideIndex += n);
  makeTimer(); // Пересоздаем интервал после ручного переключения
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  makeTimer(); // Пересоздаем интервал после ручного переключения
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function makeTimer() {
  clearInterval(timer); // Очистим предыдущий интервал
  timer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000); // 3000 миллисекунд = 3 секунды
}

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращает перезагрузку страницы

  // Собираем значения из полей
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const review = document.getElementById('review').value;

  // Проверяем заполнены ли все поля
  if (name && phone && email && review) {
    // Если заполнены, показываем окно с сообщением
    alert('Ваш отзыв отправлен!');
    
    // Очищаем форму
  e.preventDefault();
  e.target.reset();
  }
});