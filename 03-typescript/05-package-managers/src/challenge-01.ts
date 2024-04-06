// imports
import "./style.scss";
import confetti, {Options} from "canvas-confetti";

// selectors
const confettiButton = document.querySelector("#confetti-button");

// CHALLENGE 01

// MY ANSWER 

// function fireConfetti() {
//   const options = {
//     particleCount: 20,
//     spread: 180,
//     colors: ["#ee2fbe", "#abe2de", "#65ae3c"],
//     angle: Math.random() * 360, // Random angle within 360 degrees
//     spread: Math.random() * 360 // Random spread within 360 degrees
//   };
//   confetti(options);
// }

// document.getElementById("fireButton").addEventListener("click", fireConfetti);

// null check
if (!confettiButton) {
  throw new Error ("Issues with selectors");
}

const getRandomNumberInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const fireConfetti = () => {
  const confettiOptions: Options = {
    particleCount: getRandomNumberInRange(50, 100),
    angle: getRandomNumberInRange(55, 125),
    spread: getRandomNumberInRange(50, 70),
    origin: { y: 0.6 },
    colors: ["#ee2fbe", "#abe2de", "#65ae3c"],
  };

  confetti(confettiOptions);
};

const handleConfettiPress = () => {
  fireConfetti();
};

confettiButton.addEventListener("click", handleConfettiPress);