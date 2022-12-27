$(document).ready(function () {

  let Notsikp = 
    setTimeout(() =>
      $(".typing")
        .css('transition', '1.5s')
        .css('font-size', '60px')
        .css('opacity', '0')
      , 5500)

    setTimeout(() =>
      $(".first").css('display', 'none')
      , 6200)
    setTimeout(() =>
      $(".maincontainer")
        .css('display', 'block')
        .css('transition', '1.5s')
        .css('opacity', '1')
      , 6500)
    setTimeout(() =>
      $(".Bookpop")
        .css('display', 'block')
        .css('opacity', '1')
      , 6700)
      
  var skip = false;
  $('.btnSkip').click(function () {
    skip = true;
    console.log(skip);
    $(".first").css('display', 'none')
    $(".maincontainer")
      .css('display', 'block')
      .css('transition', '1.5s')
      .css('opacity', '1')
    $(".Bookpop")
      .css('display', 'block')
      .css('opacity', '1')
  })

  if (skip == false) {
    clearTimeout(Notsikp);
  }


  $('.search').keydown(function (key) {
    if (key.keyCode == 13) {
      $('.searchResult').css('display', 'block')
      var pageNum = 1;
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: $(".search").val(), page: pageNum },
        headers: { Authorization: "KakaoAK 2ea1165ab482369d5648053d598b7012" }
      })
        .done(function (msg) {
          console.log(msg);
          for (var i = 0; i < 10; i++) {
            $(".result").append("<div><p><a href='" + msg.documents[i].url + "'>" + msg.documents[i].title + "</a>" + "<a href='" + msg.documents[i].url + "'>" + "<img src='" + msg.documents[i].thumbnail + "'/><br></p></div>");
          }
        });
      $(window).scroll(function () {
        if (Math.ceil($(window).scrollTop()) + $(window).height() >= $(document).height()) {
          pageNum++;
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: $(".search").val(), page: pageNum },
            headers: { Authorization: "KakaoAK 2ea1165ab482369d5648053d598b7012" }
          })
            .done(function (msg) {
              console.log(msg);
              for (var i = 0; i < 10; i++) {
                $(".result").append("<div><p><a href='" + msg.documents[i].url + "'>" + msg.documents[i].title + "</a>" + "<a href='" + msg.documents[i].url + "'>" + "<img src='" + msg.documents[i].thumbnail + "'/><br></p></div>");
              }
            });
        }
      });
    }
  })
  $('.close').click(function () {
    $('.Bookpop').css('display', 'none')
  })
})

let ran = Math.floor(Math.random() * 50 + 1)
let pageNum = ran;
console.log(ran);

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "프로그래밍", page: ran },
  headers: { Authorization: "KakaoAK 2ea1165ab482369d5648053d598b7012" },
})
  .done(function (msg) {
    console.log(msg);
    for (var i = 0; i < 10; i++) {
      $('.Book').append("<a href='" + msg.documents[i].url + "' targer = _blank>" + "<img src ='" + msg.documents[i].thumbnail + "'/>")
      console.log(ran);

    }
  })
  .done(function (msg) {
    console.log(msg);
    for (var i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 10);
      $('.Book').append("<a href='" + msg.documents[i].url + "<img src ='" + msg.documents[i].thumbnail + "'/>")
    }
  });