const cardArray = [
  {
    name: "ball1",
    img: "./img/ball.png",
  },
  {
    name: "ball2",
    img: "./img/ball.png",
  },
  {
    name: "candy1",
    img: "./img/candy.png",
  },
  {
    name: "candy2",
    img: "./img/candy.png",
  },
  {
    name: "gingerman1",
    img: "./img/gingerman.png",
  },
  {
    name: "gingerman2",
    img: "./img/gingerman.png",
  },
  {
    name: "snowman1",
    img: "./img/snowman.png",
  },
  {
    name: "snowman2",
    img: "./img/snowman.png",
  },
  {
    name: "socks1",
    img: "./img/socks.png",
  },
  {
    name: "socks2",
    img: "./img/socks.png",
  },
  {
    name: "star1",
    img: "./img/star.png",
  },
  {
    name: "star2",
    img: "./img/star.png",
  },
];

const NewCardArray = shuffle(cardArray);

//const cardFronts = document.querySelectorAll(".cardFront");
const cardBacks = document.querySelectorAll(".cardBack");

let clickedCard = [];
let cardFrontInFalse = [];
let firstCardBack;
let secondCardBack;
let firstCardFront;
let secondCardFront;
let acquiredOrnaments = [];
let isProcessing = false;

cardArray.forEach((element, index) => {
  if (index < cardBacks.length) {
    const img = document.createElement("img");
    img.src = element.img;
    img.id = element.name;
    cardBacks[index].id = element.name;
    cardBacks[index].appendChild(img);
  }
});

// const synchCardSize = () => {
//   cardFronts.forEach((cardFront, index) => {
//     const cardBack = cardBacks[index];

//     const frontWidth = cardFront.offsetWidth;
//     const frontHeight = cardFront.offsetHeight;

//     cardBack.style.width = `${frontWidth}px`;
//     cardBack.style.height = `${frontHeight}px`;
//   });
// };

// synchCardSize();
// window.addEventListener("resize", synchCardSize);

const cardClick = (index) => {
  if (isProcessing) return;

  const cardFrontOfCol = document.querySelectorAll(".col")[index].children[0];
  const cardBackOfCol = document.querySelectorAll(".col")[index].children[1];

  if (cardBackOfCol.style.display === "block") return;

  const col = document.querySelectorAll(".col")[index];
  cardBackOfCol.style.display = "block";
  cardFrontOfCol.style.display = "none";
  clickedCard.push(cardBackOfCol);
  cardFrontInFalse.push(cardFrontOfCol);
  console.log(clickedCard);
  firstCardBack = clickedCard[0];
  secondCardBack = clickedCard[1];
  firstCardFront = cardFrontInFalse[0];
  secondCardFront = cardFrontInFalse[1];

  if (clickedCard.length === 2) {
    isProcessing = true;

    const card1 = clickedCard[0].id;
    const card2 = clickedCard[1].id;
    console.log("카드가 두 장 클릭됐습니다");

    if (
      (card1 === "ball1" && card2 === "ball2") ||
      (card1 === "ball2" && card2 === "ball1") ||
      (card1 === "candy1" && card2 === "candy2") ||
      (card1 === "candy2" && card2 === "candy1") ||
      (card1 === "gingerman1" && card2 === "gingerman2") ||
      (card1 === "gingerman2" && card2 === "gingerman1") ||
      (card1 === "snowman1" && card2 === "snowman2") ||
      (card1 === "snowman2" && card2 === "snowman1") ||
      (card1 === "socks1" && card2 === "socks2") ||
      (card1 === "socks2" && card2 === "socks1") ||
      (card1 === "star1" && card2 === "star2") ||
      (card1 === "star2" && card2 === "star1")
    ) {
      console.log("같은 카드입니다");
      col.onclick = null;
      acquiredOrnaments.push(firstCardBack.querySelector("img").src);
      cardFrontInFalse = [];
      clickedCard = [];
      isProcessing = false;
    } else {
      console.log("다른 카드입니다.");
      setTimeout(() => {
        firstCardBack.style.display = "none";
        secondCardBack.style.display = "none";
        firstCardFront.style.display = "block";
        secondCardFront.style.display = "block";

        cardFrontInFalse = [];
        clickedCard = [];
        isProcessing = false;
      }, 500);
    }
  }
};

let countdown = 13;
const timer = document.querySelector(".time");

const countdownInterval = setInterval(() => {
  timer.textContent = countdown;
  countdown--;

  if (countdown < 0) {
    clearInterval(countdownInterval);
    timer.textContent = "종료";
  }
}, 1000);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

setTimeout(() => {
  localStorage.setItem("acquiredOrnaments", JSON.stringify(acquiredOrnaments));
  window.location.href = "ornament.html";
}, 13000);
