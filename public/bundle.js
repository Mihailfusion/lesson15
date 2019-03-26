/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

window.addEventListener("DOMContentLoaded", function () {
  'use strict';

  var tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js");

  tabs();
  timer();
  modal();
  form();
  slider();
  calc();
});

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('input', function () {
    this.value = this.value.replace(/^0/, '');
    personsSum = +this.value;
    total = daysSum * personsSum * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });
  restDays.addEventListener('input', function () {
    this.value = this.value.replace(/^0/, '');
    daysSum = +this.value;
    total = daysSum * personsSum * 4000;

    if (persons.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  var message = {
    loading: ' Загрузка...',
    success: ' Спасибо! Скоро мы с вами свяжемся!',
    failure: ' Что-то пошло не так'
  };
  var form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input')[0],
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  input.onkeyup = function () {
    this.value = this.value.replace(/[^(\d)|(,)?+]/g, "");
  };

  var formContact = document.getElementById('form'),
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
      var formData = new FormData(elem);
      var obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);

      function postData() {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
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
        for (var i = 0; i < elem.length; i++) {
          elem[i].value = '';
        }

        setTimeout(function () {
          statusMessage.innerHTML = '';
        }, 3000);
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        statusMessage.innerHTML = message.success;
        clearInput();
      }).catch(function () {
        statusMessage.innerHTML = message.failure;
      }).then(function () {
        return clearInput();
      });
    });
  }

  sendForm(form);
  sendForm(formContact);
}

module.exports = form;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var more = document.querySelector('.more'),
      click = document.querySelector('#about'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  function showModal(a) {
    overlay.style.display = 'block';
    a.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }

  click.addEventListener('click', function (event) {
    if (event.target && event.target.matches('.description-btn') || event.target == more) {
      showModal(event.target);
    }
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
}

module.exports = modal;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    return plusSlides(-1);
  });
  next.addEventListener('click', function () {
    return plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (e) {
    for (var i = 1; i < dots.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) currentSlide(i);
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.add('show');
      tabContent[b].classList.remove('hide');
    }
  };

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadline = '2019-04-01';

  function getTimeRemaning(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  ;

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaning(endtime);

      if (t.hours < 10) {
        hours.textContent = '0' + t.hours;
      } else {
        hours.textContent = t.hours;
      }

      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes;
      } else {
        minutes.textContent = t.minutes;
      }

      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      } else {
        seconds.textContent = t.seconds;
      }

      if (t.total < 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  ;
  setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });