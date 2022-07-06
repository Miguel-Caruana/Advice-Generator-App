// import axios from "../node_modules/axios/lib/axios.js";

const generatedAdvice = document.querySelector(".generatedAdvice");
const generatedAdviceId = document.querySelector(".adviceId");
const rollDiceButton = document.querySelector(".rolldicecircle");

async function getAdviceData() {
  try {
    let response = await (
      await fetch("https://api.adviceslip.com/advice")
    ).json();
    generatedAdvice.innerHTML = `"${response.slip.advice}"`;
    generatedAdviceId.innerText = `# ${response.slip.id}`;
  } catch (errors) {
    alert("Invalid retrieval of data " + errors);
  }
}

getAdviceData();
rollDiceButton.addEventListener("click", getAdviceData);
