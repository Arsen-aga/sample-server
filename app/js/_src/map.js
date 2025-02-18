// map

const wrapMaps = document.querySelectorAll(".wrapMap");
if (wrapMaps) {
  wrapMaps.forEach((wrapMap) => {
    wrapMap.onclick = function () {
      this.children[0].removeAttribute("style");
    };
    wrapMap.onmouseleave = function () {
      this.children[0].style.pointerEvents = "none";
    };
  });
}

function lazyLoadMap() {
  // Проверяем, есть ли элемент с id "map" на странице
  const mapElement = document.querySelector(".map");
  if (mapElement) {
    // Создаем экземпляр Intersection Observer
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Когда элемент видим на экране, загружаем API Яндекс карты асинхронно
          const script = document.createElement("script");
          script.src =
            "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=0333b546-e4cd-4422-b583-f1193f0144a4&_v=20240321151130";
          script.async = true;
          script.onload = function () {
            // Когда скрипт загружен, вызываем функцию инициализации карты
            ymaps.ready(initializeMap);
          };
          document.body.appendChild(script);
          // Отключаем наблюдение за элементом, чтобы не загружать карту повторно при последующих доскроллах
          observer.unobserve(mapElement);
        }
      });
    });

    // Начинаем наблюдение за элементом
    observer.observe(mapElement);
  }
}

function initializeMap() {
  const mapElement = document.querySelector(".map");
  const coord = mapElement.dataset.coord.split(", ");
  ymaps.ready(function () {
    const myMap = new ymaps.Map(
      mapElement,
      {
        center: coord,
        zoom: 14,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    const destinations = {
      "Санкт-Петербург, д. Санино, Никольский пер.4": coord,
    };

    const myPlacemark = new ymaps.Placemark(
      destinations["Санкт-Петербург, д. Санино, Никольский пер.4"],
      {
        hintContent: "Офис Лестниц",
        balloonContent: "Санкт-Петербург, д. Санино, Никольский пер.4",
      },
      {
        iconLayout: "default#image",
        iconImageSize: [30, 35],
        iconImageOffset: [-5, -38],
      }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable("scrollZoom");

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // myMap.behaviors.disable("drag");
    }
  });
  // Ваш код инициализации карты здесь
}

// Вызываем функцию ленивой загрузки карты после загрузки DOM
document.addEventListener("DOMContentLoaded", lazyLoadMap);
