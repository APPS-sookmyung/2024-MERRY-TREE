// const displayOrnament = localStorage.getItem('acquiredOrnament');
// document.querySelector('.ornaments').classList.add(displayOrnament);

// const ornaments = document.querySelector('.ornaments img');
// const acquiredOrnaments = localStorage.getItem('acquiredOrnaments');
// ornamentClass.src = displayOrnament

// const cardBacks = document.querySelectorAll('.cardBack');

// cardArray.forEach((element, index) => {
//     if (index < cardBacks.length) {
//         const img = document.createElement('img');
//         img.src = element.img;
//         img.id = element.name;
//         cardBacks[index].id = element.name;
//         cardBacks[index].appendChild(img);
//         }
//     })

const acquiredOrnaments = JSON.parse(localStorage.getItem("acquiredOrnaments"));
const ornaments = document.querySelector(".ornaments");

console.log(acquiredOrnaments);

acquiredOrnaments.forEach((imgSrc, index) => {
  const ornamentDiv = document.createElement("div");
  ornamentDiv.classList.add(`ornament_${index}`);
  const ornamentImg = document.createElement("img");
  ornamentImg.src = imgSrc;
  ornamentImg.alt = `ornament_${index}`;
  ornamentDiv.appendChild(ornamentImg);
  ornaments.appendChild(ornamentDiv);
});
