var typingBool = false;
var typingIdx = 0;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".Wellcome").text();

typingTxt = typingTxt.split(""); // 한글자씩 자른다. 

if (typingBool == false) {
  // 타이핑이 진행되지 않았다면 
  typingBool = true;
  var tyInt = setInterval(typing, 100); // 반복동작 
}

function typing() {
  if (typingIdx < typingTxt.length) {
    // 타이핑될 텍스트 길이만큼 반복 
    $(".typing").append(typingTxt[typingIdx]);
    // 한글자씩 이어준다. 
    typingIdx++;
  } else {
    //끝나면 반복종료 
    clearInterval(tyInt);
  }
}

// setTimeout(() =>
//   $(".typing")
//     .css('transition', '1.5s')
//     .css('font-size', '60px')
//     .css('opacity', '0')
//   , 5500);


// setTimeout(() =>
//   $(".first").css('display', 'none')
//   , 6200);

// setTimeout(() => 
// $(".maincontainer")
// .css('display','block')
// .css('transition','1.5s')
// .css('opacity','1')
// ,6700)


// setTimeout(() =>
//   $(".Bookpop")
//     .css('display', 'block')
//     .css('opacity', '1')
//   , 7100)

