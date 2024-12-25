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
