let colors = {
    1: "blue",
    2: "red",
    3: "pink",
    4: "green",
    5: "cyan",
    6: "black",
    7: "grey",
    8: "yellow",
    9: "magenta",
    10: "darkblue",
    11: "darkred",
    12: "darkgreen",
    13: "darkgrey",
    14: "darkmagenta",
    15: "darkorange",
    16: "darkcyan",
    17: "darkkhaki",
    18: "khaki",
    19: "antiquewhite",
    20: "white"
};

let numberPicker = document.getElementById("Spin");
let currentColor = "";
numberPicker.onchange = function(){

    let chosenColor = colors[this.value];

        if(currentColor != ""){
        document.body.classList.remove(currentColor);
    }

    document.body.classList.add(chosenColor);

    currentColor = chosenColor;


}