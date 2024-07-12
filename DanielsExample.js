const body = document.getElementsByTagName("body")[0];
body.setAttribute("style", "background-color:blue;");
const header = document.getElementsByTagName("h1")[0];
header.setAttribute("style", "color:white;");
const div = document.createElement("div");
div.setAttribute("style",
"width:100px;height:100px;background-color:white;position:absolute;");
body.appendChild(div);
const button1 = document.createElement("button");
button1.innerText = "Move Left";
body.append(button1);
const button2 = document.createElement("button");
button2.innerText = "Move Right";
body.appendChild(button2);
let marginLeft = 0;
button1.addEventListener("click", function () {
marginLeft -= 10;
div.style.marginLeft = marginLeft + "px";
console.log("you clicked on Move Left");
});
button2.addEventListener("click", function () {
marginLeft += 10;
div.style.marginLeft = marginLeft + "px";
console.log("you clicked on Move Right");
});