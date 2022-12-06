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
      $('.book').append("<a href='" + msg.documents[i].url + "' targer = _blank>" + "<img src ='" + msg.documents[i].thumbnail + "'/>")
      console.log(ran);

    }
  })
  .done(function (msg) {
    console.log(msg);
    for (var i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 10);
      $('.book').append("<a href='" + msg.documents[i].url + "<img src ='" + msg.documents[i].thumbnail + "'/>")
    }
  });


$(document).ready(function () {
  $('.search').keydown(function (key) {
    if (key.keyCode == 13) {
      $('.maincontainer').css('display', 'none')
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
            $(".result").append("<p><a href='" + msg.documents[i].url + "'>" + msg.documents[i].title + "</a></p>");
            $(".result").append("<a href='" + msg.documents[i].url + "'>" + "<img src='" + msg.documents[i].thumbnail + "'/><br>");
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
                $(".result").append("<p><a href='" + msg.documents[i].url + "'>" + msg.documents[i].title + "</a></p>");
                $(".result").append("<a href='" + msg.documents[i].url + "'>" + "<img src='" + msg.documents[i].thumbnail + "'/><br>");
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
