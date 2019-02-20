window.onload = function() {
  //setParagraphLines();

  windowSize();
  mobSwipe();

  $("#viewChooser").click(function() {
    chooseViewOfArticles();
  });

  $('#search').click(function(){
    $('.header-search_mob').toggle(100);
  });

  $("#menu").click(function() {
    $(".nav").toggle(150);

    if (this.innerHTML == "arrow_back") {
      this.innerHTML = "menu";
    } else {
      this.innerHTML = "arrow_back";
    }
  });

  $("#hotclicker").click(function() {
    $(".hot-news").slideToggle(150);
  });

  document.getElementsByClassName("content")[0].onwheel = function(e) {
    if (e.deltaY > 0) {
      $(".content-header")[0].style.setProperty("top", "-50px");
    } else {
      $(".content-header")[0].style.setProperty("top", "0px");
    }
  };
};

window.onresize = function() {
  windowSize();
};

function mobSwipe() {
  var touchstartY = 0;
  var touchendY = 0;

  var gesuredZone = document.getElementsByClassName("content")[0];

  gesuredZone.addEventListener(
    "touchstart",
    function(event) {
      touchstartX = event.screenX;
      touchstartY = event.screenY;
    },
    false
  );

  gesuredZone.addEventListener(
    "touchend",
    function(event) {
      touchendX = event.screenX;
      touchendY = event.screenY;
      handleGesure(touchendY, touchstartY);
    },
    false
  );
}

function handleGesure(touchendY, touchstartY) {
  if (touchendY < touchstartY) {
    $(".content-header")[0].style.setProperty("top", "-65px");
  }
  if (touchendY > touchstartY) {
    $(".content-header")[0].style.setProperty("top", "0px");
  }
  if (touchendY == touchstartY) {
  }
}

function windowSize() {
  var articleButtonNames = document.getElementsByClassName("article__btn-text");

  if ($(window).width() <= "500") {
    $(".nav").hide(10);
    $(".hot-news").hide(10);
  } else {
    $(".nav").show(10);
    $(".hot-news").show(10);
  }

  articleWidthChecker();

  if ($(".article").width() >= "200") {
    Array.prototype.forEach.call(articleButtonNames, function(el) {
      el.style.setProperty("display", "block");
    });
  } else {
    Array.prototype.forEach.call(articleButtonNames, function(el) {
      el.style.setProperty("display", "none");
    });
  }
}

function setParagraphLines() {
  var rnd;
  var elem;
  var articles = document.getElementsByClassName("article");

  for (item = 0; item < articles.length; item++) {
    rnd = Math.floor(Math.random() * 5 + 3);

    elem = document.getElementsByClassName("article-paragraph")[item];
    elem.style.setProperty("-webkit-line-clamp", rnd);
  }
} //регулирует кол-во строчек в посиах

function chooseViewOfArticles() {
  $(".article-wrapper").toggleClass("article-wrapper-mini");
  $(".article-img").toggleClass("article-img-mini");
  $(".article-img-wrapper").toggleClass("article-img-wrapper-mini");
  $(".article").toggleClass("article-mini");

  // var articleButtonNames = document.getElementsByClassName("article__btn-text");

  // if ($(window).width() >= "600") {
  //   Array.prototype.forEach.call(articleButtonNames, function(el) {
  //   });
  // } else {
  //   Array.prototype.forEach.call(articleButtonNames, function(el) {
  //   });
  // }

  articleWidthChecker();
  chooseIcon();
}

function articleWidthChecker() {
  var articleButtonNames = document.getElementsByClassName("article__btn-text");
  if ($(".article").width() <= "300") {
    for (item = 0; item < articleButtonNames.length; item++) {
      // if (articleButtonNames[item].style.display == "block") {
      articleButtonNames[item].style.display = "block";
      //} else {
      //articleButtonNames[item].style.display = "block";
      // }
    }
  } else {
    for (item = 0; item < articleButtonNames.length; item++) {
      // if (articleButtonNames[item].style.display == "block") {
      articleButtonNames[item].style.display = "none";
      //} else {
      //articleButtonNames[item].style.display = "block";
      // }
    }
  }
}

function chooseIcon() {
  var chooser = document.getElementById("viewChooser");

  if (chooser.innerHTML == "view_module") {
    chooser.innerHTML = "view_list";
  } else {
    chooser.innerHTML = "view_module";
  }
}
