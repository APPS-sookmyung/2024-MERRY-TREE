const acquiredOrnaments = JSON.parse(localStorage.getItem("acquiredOrnaments"));
const ornaments = document.querySelector(".ornaments");

acquiredOrnaments.forEach((imgSrc, index) => {
  const ornamentDiv = document.createElement("div");
  ornamentDiv.classList.add(`ornament_${index}`);
  const ornamentImg = document.createElement("img");
  ornamentImg.src = imgSrc;
  ornamentImg.alt = `ornament_${index}`;
  ornamentImg.draggable = false;
  ornamentDiv.appendChild(ornamentImg);
  ornaments.appendChild(ornamentDiv);
});

if (acquiredOrnaments.length > 3) {
  ornaments.style.gridTemplateRows = `reapeat(2, auto)`;
}

let selectedOrnament = null;

document.querySelectorAll(".ornaments div").forEach((div, index) => {
  console.log("Initializing div: div");
  div.addEventListener("click", () => {
    console.log(`Clicked div: ornament_${index}`);
    selectedOrnament = div;
    div.style.border = "2px solid blud";
    console.log("Selected Ornament:", selectedOrnament);
  });
});

document.querySelector(".tree").addEventListener("click", (event) => {
  if (!selectedOrnament) {
    console.log("No div seleceted to move");
    return;
  }

  console.log("Selected div for moving:", selectedOrnament);

  const tRect = event.currentTarget.getBoundingClientRect();
  const offsetX = event.clientX - tRect.left;
  const offsetY = event.clientY - tRect.top;
  console.log("Relative offset:", offsetX, offsetY);

  const img = selectedOrnament.querySelector("img");
  if (img) {
    img.style.position = "absolute";
    img.style.left = `${offsetX - img.width / 2}px`;
    img.style.top = `${offsetY - img.height / 2}px`;

    event.currentTarget.appendChild(img);

    selectedOrnament.style.border = "none";
    selectedOrnament = null;
  }
});

document.body.addEventListener("click", (event) => {
  const treeContainer = document.querySelector(".tree");
  if (treeContainer && treeContainer.contains(event.target)) {
    console.log(
      "Clicked inside t container, keeping selectedDiv:",
      selectedOrnament
    );
    return;
  }
  if (!event.target.closest(".ornaments") && selectedOrnament) {
    console.log("Clicked outside, clearing selectedDiv:", selectedOrnament);
    selectedOrnament.style.border = "none";
    selectedOrnament = null;
  }
});

document.getElementById("againButton").addEventListener("click", () => {
  location.reload();
});

// document.getElementById("messageButton").addEventListener("click", () => {
//   const message = prompt("메세지를 입력하세요:");
//   if (message) {
//     const depositoryOrnament = document.querySelector(".depository .ornaments");
//     const messageDiv = document.createElement("div");
//     messageDiv.textContent = message;
//     messageDiv.style.textAlign = "center";
//     messageDiv.style.marginTop = "20px";
//     messageDiv.style.width = "80%";
//     messageDiv.style.color = "rgb(234, 214, 214)";
//     messageDiv.style.fontSize = "25px";
//     depositoryOrnament.appendChild(messageDiv);
//   }
// });

document.getElementById("messageButton").addEventListener("click", () => {
  const depository = document.querySelector(".depository");

  const existingTextarea = depository.querySelector(".textarea-wrapper");
  if (existingTextarea) {
    existingTextarea.remove();
  }

  const wrapper = document.createElement("div");
  wrapper.className = "textarea-wrapper";

  const textarea = document.createElement("textarea");
  textarea.placeholder = "이곳에 적으세요.";
  wrapper.appendChild(textarea);

  depository.appendChild(wrapper);
});

const captureButton = document.querySelector(".captureButton");

captureButton.addEventListener("click", () => {
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach((button) => {
    button.style.display = "none";
  });

  captureButton.style.display = "none";
});

//내일: 이미지 그리고 다시 캡처, design textarea 추가, design 페이지 반응형, git 확인하기, 배포 확인하기, 썸네일 만들기, 영상 찍기, 폼 작성하기
