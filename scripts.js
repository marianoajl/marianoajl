const bgcolor = document.getElementById("header-box");
const border = document.getElementById("border");
const colorbox = document.getElementById("color-box");
const body = document.getElementById ("body");
const firsticon = document.getElementById("a");
const secondicon = document.getElementById("b");
const thirdicon = document.getElementById("c");
const borderbottom = document.getElementById("border-bottom");

const button_black = document.getElementById("button-black");
const button_brown = document.getElementById("button-brown");
const button_red = document.getElementById("button-red");
const button_orange = document.getElementById("button-orange");
const button_yellow = document.getElementById("button-yellow");
const button_green = document.getElementById("button-green");
const button_blue = document.getElementById("button-blue");
const button_violet = document.getElementById("button-violet");
const button_grey = document.getElementById("button-grey");
const button_white = document.getElementById("button-white");

let button_colors = [button_black, button_brown, button_red, button_orange, button_yellow, button_green, button_blue, button_violet, button_grey, button_white];

button_black.addEventListener("click", () => {
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-black");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-black");
    border.classList.replace("border-black", "border-white");
    colorbox.classList.replace("border-black", "border-white");
    borderbottom.classList.replace("h1-black", "h1-white");
    firsticon.classList.replace("a-black", "a-white");
    secondicon.classList.replace("a-black", "a-white");
    thirdicon.classList.replace("a-black", "a-white");
})

button_brown.addEventListener("click", () => {
    for(const button of button_colors){
        if (button === button_brown){
        button_brown.classList.add("no-button");
        }else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-brown");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-brown");
    border.classList.replace("border-white", "border-black");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white","a-black");
    secondicon.classList.replace("a-white","a-black");
    thirdicon.classList.replace("a-white","a-black");
})

button_red.addEventListener("click", () => {
    for (const button of button_colors) {
        if (button === button_red) {
            button_red.classList.add("no-button");
        } else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-red");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-red");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
})

button_orange.addEventListener("click", () => {
    for (const button of button_colors) {
        if (button === button_orange) {
            button_orange.classList.add("no-button");
        } else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-orange");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-orange");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
})

button_yellow.addEventListener("click", () => {
    for (const button of button_colors) {
        if (button === button_yellow){
            button_yellow.classList.add("no-button");
        } else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-yellow");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-yellow");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
})

button_green.addEventListener("click", () => {
    for (const button of button_colors) {
        if (button === button_green) {
            button_green.classList.add("no-button");
        } else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-green");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-green");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
})

button_blue.addEventListener("click", () => {
    for (const button of button_colors) {
        if (button === button_blue) {
            button_blue.classList.add("no-button");
        } else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-blue");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-blue");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
})

button_violet.addEventListener("click", () => {
    for (const button of button_colors) {
        if (button === button_violet) {
            button_violet.classList.add("no-button");
        } else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-violet");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-violet");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
})

button_grey.addEventListener("click", () => {
    for (const button of button_colors) {
        if (button === button_grey) {
            button_grey.classList.add("no-button");
        } else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-grey");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-grey");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
})

button_white.addEventListener("click", () => {
    for (const button of button_colors) {
        if (button === button_white) {
            button_white.classList.add("no-button");
        } else button.classList.remove("no-button");
    }
    /*bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-white");*/
    body.classList.remove(...body.classList);
    body.classList.add("bg-white");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
})

/*  N U E V A   F O R M A   D E   D E S A R R O L L A R  */

/*colorbox.addEventListener("click", (e) => {
    console.log(e.target.textContent);

if(e.target.textContent == 0){
    bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-black");
    border.classList.replace("border-black", "border-white");
    colorbox.classList.replace("border-black", "border-white");
    borderbottom.classList.replace("h1-black", "h1-white");
    firsticon.classList.replace("a-black", "a-white");
    secondicon.classList.replace("a-black", "a-white");
    thirdicon.classList.replace("a-black", "a-white");
} else {
    button.classList.remove("no-button");
}
if(e.target.textContent == 1){
    button_brown.classList.add("no-button");
    bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-brown");
    border.classList.replace("border-white", "border-black");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
} else {
    button.classList.remove("no-button");
}
if (e.target.textContent == 2){
    button_red.classList.add("no-button");
    bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-red");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
} else { 
    button.classList.remove("no-button");
}
if (e.target.textContent == 3) {
    button_orange.classList.add("no-button");
    bgcolor.classList.remove(...bgcolor.classList);
    bgcolor.classList.add("header-box", "bg-orange");
    colorbox.classList.replace("border-white", "border-black");
    firsticon.classList.replace("a-white", "a-black");
    secondicon.classList.replace("a-white", "a-black");
    thirdicon.classList.replace("a-white", "a-black");
} else {
    button.classList.remove("no-button");
}


})*/