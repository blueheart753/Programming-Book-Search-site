$(document).ready(function () {
  $('#java').click(function(){
    $('#java').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#js').click(function(){
    $('#js').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#ts').click(function(){
    $('#ts').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#jsp').click(function(){
    $('#jsp').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#php').click(function(){
    $('#php').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#python').click(function(){
    $('#python').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#C').click(function(){
    $('#C').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#CP').click(function(){
    $('#CP').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#CS').click(function(){
    $('#CS').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#Unity').click(function(){
    $('#Unity').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#Ruby').click(function(){
    $('#Ruby').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#Swift').click(function(){
    $('#Swift').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#DB').click(function(){
    $('#DB').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#Unreal').click(function(){
    $('#Unreal').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })
  $('#html').click(function(){
    $('#html').css('background','#923bbbc7')
    .css('color','white')
    console.log(true)
  })

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