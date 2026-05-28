var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
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

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращает перезагрузку страницы

  // Собираем значения из полей
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const review = document.getElementById('review').value;

  // Проверяем заполнены ли все поля
  if (name && phone && email && review) {
    // Если заполнены, показываем окно с сообщением
    alert('Ваш отзыв отправлен!');
    
    // Очищаем форму
    document.getElementById('form').reset();
  }
});


function score() {
    var test = document.getElementById('test');
    var elements = test.getElementsByTagName('input');
    var maxScore = countMaxScore(elements);

    var userScore = 0;
    var queName;
    var answers;
    var i = 0;
    while (i < elements.length) {
        queName = elements[i].getAttribute('name');
        answers = [];
        while (i < elements.length && elements[i].getAttribute('name') == queName) {
            answers[answers.length] = elements[i];
            i++;
        }
        if (answers.length > 0) {
            if (answers[0].getAttribute('type') == 'radio' || answers[0].getAttribute('type') == 'checkbox') {
                userScore += radioCheckAnswer(answers);
            } else if (answers[0].getAttribute('type') == 'text') {
                userScore += textAnswer(answers[0]);
            }
        }
    }
    

    var message;
    if (userScore >= 7) {
        message = "Вы хорошо знаете «Смешариков»";
    } else if (userScore >= 4) {
        message = "Вы вполне неплохо знаете мультсериал";
    } else {
        message = "Вам точно следует пересмотреть мультсериал";
    }

    alert("Ваш результат: " + userScore + "\nМаксимум баллов можно было получить: " + maxScore + "\n" + message);
}

function countMaxScore(elements) {
  var tmpScore = 0;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute('data-true')) {
      tmpScore += parseInt(elements[i].getAttribute('data-true'));
    }
  }
  return tmpScore;
}
function radioCheckAnswer(answers) {
  var tmpScore = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].hasAttribute('data-true') && answers[i].checked) {
      tmpScore += parseInt(answers[i].getAttribute('data-true'));
    }
    else if (!answers[i].hasAttribute('data-true') && answers[i].checked) {
      tmpScore -=1;
    }
  }
  return tmpScore;
}
function textAnswer(answer) {
  var tmpScore = 0;
  var correct = answer.getAttribute('data-ans').toLowerCase();
  if (answer.value.toLowerCase() == correct) {
    tmpScore += parseInt(answer.getAttribute('data-true'));
  }
  return tmpScore;
}

