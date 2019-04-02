window.onload = function () {
    let control = {
        red: getColor("red"),
        green: getColor("green"),
        blue: getColor("blue"),
        setColors: function () {
            return "RGB(" + this.red + "," + this.green + "," + this.blue + ")";
        }
    };
    console.log(control.setColors());
    document.querySelector("#scena").style.backgroundColor = control.setColors();
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "range") {
            inputs[i].onchange = function () {
                let color = this.getAttribute("id");
                switch (color) {
                    case "red":
                        control.red = getColor("red");
                        break;
                    case "green":
                        control.green = getColor("green");
                        break;
                    case "blue":
                        control.blue = getColor("blue");
                        break;
                }
                document.querySelector("#scena")
                        .style.backgroundColor = control.setColors();
            };
        }
    }
};
function getColor(color) {
    return document.querySelector("#" + color).value;
}
