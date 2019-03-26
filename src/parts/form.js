function form() {
  let message = {
    loading: ' Загрузка...',
    success: ' Спасибо! Скоро мы с вами свяжемся!',
    failure: ' Что-то пошло не так'
  };

  let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input')[0],
    statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  input.onkeyup = function () {
    this.value = this.value.replace(/[^(\d)|(,)?+]/g, "");
  };

  let formContact = document.getElementById('form'),
    inputContact = formContact.getElementsByTagName('input');
  inputContact[1].onkeyup = function () {
    this.value = this.value.replace(/[^(\d)|(,)?+]/g, "");
  };

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);
      statusMessage.style.paddingTop = '20px';
      statusMessage.style.color = '#c78030';
    
      let formData = new FormData(elem);
      let obj = {};

     
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      let json = JSON.stringify(obj);
  
        
        function postData() {
          return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState == 200 && request.status < 300) {
              resolve();
            } else {
              reject();
            }
          };
          request.send(json);
        });
      }

      function clearInput() {
        for (let i = 0; i < elem.length; i++) {
          elem[i].value = '';
        }
        setTimeout(() => {
          statusMessage.innerHTML = '';
        }, 3000);
      }

      postData(formData)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => {
          statusMessage.innerHTML = message.success;
          clearInput();
        })
        .catch(() => {
          statusMessage.innerHTML = message.failure;
        })
        .then(() => clearInput());
    });
  }
  sendForm(form);
  sendForm(formContact);
  
}

module.exports = form;