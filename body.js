const lozad_loader = lozad(); // lazy loads elements with default selector as '.lozad'
lozad_loader.observe();

function showContent() {
  document.getElementById("aparecer1").style.display = "flex";
  document.getElementById("aparecer1").style.visibility = "visible";
  document.getElementById("aparecer2").style.display = "flex";
  document.getElementById("aparecer2").style.visibility = "visible";
  document.getElementById("aparecer3").style.display = "flex";
  document.getElementById("aparecer3").style.visibility = "visible";
  document.getElementById("aparecer4").style.display = "flex";
  document.getElementById("aparecer4").style.visibility = "visible";
  document.getElementById("aparecer5").style.display = "flex";
  document.getElementById("aparecer5").style.visibility = "visible";
  document.getElementById("aparecer6").style.display = "flex";
  document.getElementById("aparecer6").style.visibility = "visible";
  document.getElementById("aparecer7").style.display = "flex";
  document.getElementById("aparecer7").style.visibility = "visible";
  document.getElementById("aparecer8").style.display = "flex";
  document.getElementById("aparecer8").style.visibility = "visible";
  document.getElementById("aparecer9").style.display = "flex";
  document.getElementById("aparecer9").style.visibility = "visible";
  document.getElementById("aparecer10").style.display = "flex";
  document.getElementById("aparecer10").style.visibility = "visible";
}

var executeWhenReachedPagePercentage = function (percentage, callback) {
  if (typeof percentage !== "number") {
    console.error(
      "First parameter must be a number, got",
      typeof percentage,
      "instead"
    );
  }

  if (typeof callback !== "function") {
    console.error(
      "Second parameter must be a function, got",
      typeof callback,
      "instead"
    );
  }

  function getDocumentLength() {
    var D = document;
    return Math.max(
      D.body.scrollHeight,
      D.documentElement.scrollHeight,
      D.body.offsetHeight,
      D.documentElement.offsetHeight,
      D.body.clientHeight,
      D.documentElement.clientHeight
    );
  }

  function getWindowLength() {
    return (
      window.innerHeight ||
      (document.documentElement || document.body).clientHeight
    );
  }

  function getScrollableLength() {
    if (getDocumentLength() > getWindowLength()) {
      return getDocumentLength() - getWindowLength();
    } else {
      return 0;
    }
  }

  var scrollableLength = getScrollableLength();

  window.addEventListener(
    "resize",
    function () {
      scrollableLength = getScrollableLength();
    },
    false
  );

  function getCurrentScrolledLengthPosition() {
    return (
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop
    );
  }

  function getPercentageScrolled() {
    if (scrollableLength == 0) {
      return 100;
    } else {
      return (getCurrentScrolledLengthPosition() / scrollableLength) * 100;
    }
  }

  var executeCallback = (function () {
    var wasExecuted = false;
    return function () {
      if (!wasExecuted && getPercentageScrolled() > percentage) {
        wasExecuted = true;
        callback();
      }
    };
  })();

  if (
    getDocumentLength() == 0 ||
    (getWindowLength() / getDocumentLength()) * 100 >= percentage
  ) {
    callback();
  } else {
    window.addEventListener("scroll", executeCallback, false);
  }
};

const params = new URLSearchParams(window.location.search);
const pular = params.get("skipvideo") || "1";
if (pular == "true") {
  showContent();
  executeWhenReachedPagePercentage(50, function () {
    fbq("trackCustom", "VisualizouLP [50%]");
  });
  executeWhenReachedPagePercentage(75, function () {
    fbq("trackCustom", "VisualizouLP [75%]");
  });
} else {
  const res = tempo_mostrar * 1000;
  setTimeout(function () {
    showContent();
    executeWhenReachedPagePercentage(50, function () {
      fbq("trackCustom", "VisualizouLP [50%]");
    });
    executeWhenReachedPagePercentage(75, function () {
      fbq("trackCustom", "VisualizouLP [75%]");
    });
  }, res);

  console.log("mostrar_conteudo");
}

//5 mins
setTimeout(function () {
  fbq("trackCustom", "AssistiuVideo [5min]");
}, 300000);
//10 mins
setTimeout(function () {
  fbq("trackCustom", "AssistiuVideo [5min]");
}, 600000);

jQuery(document).ready(function ($) {
  $(".whatsapp_link").attr(
    "href",
    "https://api.whatsapp.com/send?phone=" +
      whatsapp_link +
      "&text=Ol%C3%A1%2C%20assisti%20o%20aul%C3%A3o%20do%20MVO%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
  );
  $(".main-cta").attr("href", checkout_link);
});

var swiperReviews = new Swiper("#slider-reviews", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  grabCursor: true,
  a11y: false,
  spaceBetween: 28,
  loop: true,
  centeredSlides: true,
  allowTouchMove: true,
  navigation: {
    nextEl: ".next-reviews",
    prevEl: ".previous-reviews",
  },
  breakpoints: {
    0: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      spaceBetween: 28,
    },
    480: {
      /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 28,
    },
    767: {
      /* when window >= 767px - webflow tablet */ slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28,
    },
    992: {
      /* when window >= 988px - webflow desktop */ slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28,
    },
  },
});

const button = document.getElementById("whatsapp-lead");
button.addEventListener(
  "click",
  function () {
    fbq("track", "Whatsapp Lead");
  },
  false
);



function setCookie(d, c, b) {
  var a = new Date();
  a.setTime(a.getTime() + 864e5 * b);
  b = "expires\x3d" + a.toUTCString();
  document.cookie = d + "\x3d" + c + ";" + b + ";path\x3d/";
}
function getCookie(d) {
  d += "\x3d";
  var c = decodeURIComponent(document.cookie);
  c = c.split(";");
  for (var b = 0; b < c.length; b++) {
    for (var a = c[b]; " " == a.charAt(0); ) a = a.substring(1);
    if (0 == a.indexOf(d)) return a.substring(d.length, a.length);
  }
  return "";
}
var timer_min = parseInt(document.getElementById("es_timer-min").innerHTML),
  timer_sec = parseInt(document.getElementById("es_timer-sec").innerHTML),
  timer_min_txt = "",
  timer_sec_txt = "";
null != getCookie("timer_min") &&
  "" != getCookie("timer_min") &&
  (timer_min = parseInt(getCookie("timer_min")));
null != getCookie("timer_sec") &&
  "" != getCookie("timer_sec") &&
  (timer_sec = parseInt(getCookie("timer_sec")));
var timer = setInterval(function () {
  0 >= timer_sec
    ? 0 >= timer_min
      ? clearInterval(timer)
      : (timer_min--, (timer_sec = 59))
    : timer_sec--;
  timer_min_txt = 10 > timer_min ? "0" + timer_min : timer_min;
  timer_sec_txt = 10 > timer_sec ? "0" + timer_sec : timer_sec;
  document.getElementById("es_timer-min").textContent = timer_min_txt;
  document.getElementById("es_timer-sec").textContent = timer_sec_txt;
  document.getElementById("es_timer").style.visibility = "visible";
  setCookie("timer_min", timer_min, 365);
  setCookie("timer_sec", timer_sec, 365);
}, 1e3);