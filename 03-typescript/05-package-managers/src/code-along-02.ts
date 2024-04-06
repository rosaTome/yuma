// import
import "./style.scss";
import ColorThief from "colorthief";

// selectors 
const dogImage = document.querySelector<HTMLImageElement>("#dog-image");

// null check
if (!dogImage) {
  throw new Error("Issue with selectors");
};

const colorThief = new ColorThief();

// create a function on image load that does the colorthief get color 
const onImageLoad = () => {
    const color = colorThief.getColor(dogImage);
    // console.log("color", color);
    document.body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};

if(dogImage.complete){
    onImageLoad();
} else {
    dogImage.addEventListener("load", onImageLoad);
};