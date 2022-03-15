const counterUp = window.counterUp.default
const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}
const IO = new IntersectionObserver( callback, { threshold: 1 } )
const el = document.querySelector( '.milhoes' )
IO.observe( el )


jQuery(document).ready(function($) {
var loading;
var step = $(".es_loading_popup .es_loading_bar").width() / 100;
var counter = 2;
var step_ind = 0;
var pause_ind = 0;
var counter_step = 100 / $(".es_loading_message_wrapper .es_loading_step").length;
$(".cta_opener").click(function(){
$(".es_loading_wrapper").css('display', 'flex');;
$(".es_loading_popup .es_loading_bar_active").css("width", counter + "%");
setTimeout(function() {
  loading = setInterval(function(){
    var ind = parseInt(counter / counter_step);
    if (ind > step_ind) {
      if (pause_ind < 20) {
        counter --;
      }
      else {
        pause_ind = 0;
        step_ind = ind;
      }
      pause_ind ++;
    }
    counter += 1.5;
    $(".es_loading_popup .es_loading_bar_active").css("width", counter + "%");
    if (ind >= $(".es_loading_message_wrapper .es_loading_step").length) {
      ind = $(".es_loading_message_wrapper .es_loading_step").length - 1;
    }
    console.log(ind);
    $(".es_loading_message_wrapper .es_loading_step").addClass("es_hide");
    $(".es_loading_message_wrapper .es_loading_step").eq(ind).removeClass("es_hide");
    if(counter >= 100) {
      var url = window.location.href;
	var url_param = '';
	if (url.includes('?')) {
		url_param = '&' + url.split("?")[1];
	}
  window.location.href='https://pay.kiwify.com.br/vgaGO1U/?origin=vnda' + url_param;
      clearInterval(loading);
    }
  }, 80);
}, 1000);
});
});

$(document).scroll(function () {
var y = $(this).scrollTop();
if (y > 1900) {
  $(".sticky_bar").fadeIn().css('display', 'flex');
} else {
  $(".sticky_bar").fadeOut();
}
});

document.addEventListener('DOMContentLoaded', (event) => {
	const quantityInStockSection = document.getElementById(
		'quantity-in-stock-section'
	);
	const quantityInStockAmount = document.getElementById(
		'quanity-in-stock-amount'
	);

	let count = Number(quantityInStockAmount.innerHTML);

	if (!Number.isNaN(count) && count != null) {
		setInterval(() => {
			if (count <= 0) {
				count = 0;
				quantityInStockSection.style.display = 'none';
			} else {
				count -= Math.floor(Math.random() * 5);
			}
			quantityInStockAmount.innerHTML = count;
		}, 8600);
	}
});

function setCookie(e, t, i) {
  var r = new Date();
  r.setTime(r.getTime() + 864e5 * i),
    (i = "expires=" + r.toUTCString()),
    (document.cookie = e + "=" + t + ";" + i + ";path=/");
}
function getCookie(e) {
  e += "=";
  var t = decodeURIComponent(document.cookie);
  t = t.split(";");
  for (var i = 0; i < t.length; i++) {
    for (var r = t[i]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(e)) return r.substring(e.length, r.length);
  }
  return "";
}
jQuery(document).ready(function($) {
var timer_min = parseInt(document.getElementById("es_timer-min").innerHTML),
  timer_sec = parseInt(document.getElementById("es_timer-sec").innerHTML),
  timer_min_txt = "",
  timer_sec_txt = "";
null != getCookie("timer_min") &&
  "" != getCookie("timer_min") &&
  (timer_min = parseInt(getCookie("timer_min"))),
  null != getCookie("timer_sec") &&
    "" != getCookie("timer_sec") &&
    (timer_sec = parseInt(getCookie("timer_sec")));
var timer = setInterval(function () {
  0 >= timer_sec
    ? 0 >= timer_min
      ? clearInterval(timer)
      : (timer_min--, (timer_sec = 59))
    : timer_sec--,
    (timer_min_txt = 10 > timer_min ? "0" + timer_min : timer_min),
    (timer_sec_txt = 10 > timer_sec ? "0" + timer_sec : timer_sec),
    (document.getElementById("es_timer-min").textContent = timer_min_txt),
    (document.getElementById("es_timer-sec").textContent = timer_sec_txt),
    (document.getElementById("es_timer").style.visibility = "visible"),
    setCookie("timer_min", timer_min, 365),
    setCookie("timer_sec", timer_sec, 365);
}, 1e3);
    });
  jQuery(document).ready(function($) {
    $(window).scroll(function(e) {
      var scrollh = $(window).height();
      if ($(this).scrollTop() > scrollh) {
        $(".second_row").addClass("appear");
      }
      else {
        $(".second_row").removeClass("appear");
      }
    });
    var proof_names = [
      "Maria S. Minas Gerais", "Jorge L. De Rio De Janeiro", "Raquel F. De Rio Grando do Sul", "Mário E. De Espírito Santo", "Martina J. De São Paulo", "Rosa M. De Rio Grande do Sul", "Diego I. De Maranhao", "Cristiane W. De. Santa Catarina", "Victor D. De Rio de Janeiro", "Cleber P. De Amazonas", "Jean X. De Goias", "Felipe F. De Roraima"
    ];
    var d = new Date();
    var i = d.getMilliseconds() % 5;
    setInterval(function(e) {
      $(".proof_popup .proof_name").text(proof_names[i]);
      $(".proof_popup").toggleClass("show");
      i = (i + 1) % 5;
    }, 10000);
  });
