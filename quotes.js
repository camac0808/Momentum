const quotes = [{
  quote: "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라",
  author: "탈무드"
}, {
  quote: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다",
  author: "베토벤"
}, {
  quote: "가난은 가난하다고 느끼는 곳에 존재한다",
  author: "에머슨"
}, {
  quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라",
  author: "나딘 스테어"
}, {
  quote: "인간의 삶 전체는 단지 한 순간에 불과하다 인생을 즐기자",
  author: "플루타르코스"
}, {
  quote: "인생이란 학교에는 불행 이란 훌륭한 스승이 있다. 그 스승 때문에 우리는 더욱 단련되는 것이다",
  author: "프리체"
}]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
