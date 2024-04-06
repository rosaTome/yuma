// imports
import "./style.scss";
import confetti, {Options} from "canvas-confetti"; // cmd and click options for list of types that can be on the object 

// CODE ALONG 01

// create our own options object 
const options : Options = {
  particleCount: 20,
  spread: 180,
  colors: ["#ee2fbe", "#abe2de", "#65ae3c"],
}

confetti(options);