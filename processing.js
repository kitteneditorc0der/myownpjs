var fillColor, strokeColor, strokeweight,
width = window.innerHeight, height = window.innerHeight,
mouseX, mouseY,
fontSize, textalign, fontFamily,
CENTER = "center", LEFT = "left", RIGHT = "right";
var draw = function() {}, mouseDragged = function() {}, mouseClicked = function() {}, mousePressed = function() {}, mouseReleased = function() {}, 
color = function(r, g, b) {
    return "rgb(" + r + ", " + g + ", " + b + ")"
},
fill = function(r, g, b) {
    fillColor = color(r, g, b);
},
stroke = function(r, g, b) {
    strokeColor = color(r, g, b);
},
strokeWeight = function(weight) {
    strokeweight = weight;
},
noStroke = function() {
    strokeColor = 0;
    strokeweight = 0;
},
frameCount = 0,
ellipse = function(x, y, w, h) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.backgroundColor = fillColor;
    div.style.border = strokeweight + "px solid " + strokeColor;
    div.style.left = x - (w / 2) + "px";
    div.style.top = y - (h / 2) + "px";
    div.style.width = w + "px";
    div.style.height = h + "px";
    div.style.borderRadius = "50%";
    document.body.appendChild(div);
},
rect = function(x, y, w, h, r) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.backgroundColor = fillColor;
    div.style.border = strokeweight + "px solid " + strokeColor;
    div.style.borderRadius = (r?r:0) + "px";
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.style.width = w + "px";
    div.style.height = h + "px";
    document.body.appendChild(div);
},
background = function(r, g, b) {
    noStroke();
    fill(r, g, b);
    rect(0, 0, width, height);
},
line = function(x1, y1, x2, y2) {
    document.body.innerHTML += 
    '<svg width="' + width + '" height="' + height + '" style="position: absolute; left: 0; top: 0;"><line x1="' + x1 + '" y1=' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" style="stroke: ' + strokeColor + '; stroke-width: ' + strokeweight + ';" /></svg>';
},
triangle = function(x1, y1, x2, y2, x3, y3) {
    document.body.innerHTML +=
    '<svg width="' + width + '" height="' + height + '" style="position: absolute; left: 0; top: 0;"><polygon points="' + x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3 + '" style="fill: ' + fillColor + '; stroke: ' + strokeColor + '; stroke-width: ' + strokeweight + ';" /></svg>';
},
quad = function(x1, y1, x2, y2, x3, y3, x4, y4) {
    document.body.innerHTML +=
    '<svg width="' + width + '" height="' + height + '" style="position: absolute; left: 0; top: 0;"><polygon points="' + x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3 + ' ' + x4 + ',' + y4 + '" style="fill: ' + fillColor + '; stroke: ' + strokeColor + '; stroke-width: ' + strokeweight + ';" /></svg>';
},
debug = function() {
    console.log.apply(console, arguments);
},
text = function(txt, x, y) {
    var span = document.createElement("span");
    span.textContent = txt;
    span.style.color = fillColor;
    span.style.fontSize = fontSize;
    span.style.fontFamily = fontFamily;
    span.style.position = "absolute";
    span.style.left = x + "px";
    span.style.top = y + "px";
    document.body.appendChild(span);
},
textFont = function(ff, fs) {
    fontFamily = ff;
    fontSize = (fs?fs:0) + "px";
},
textSize = function(fs) {
    fontSize = fs + "px";
};
window.setInterval(function() {
    frameCount++;
    draw();
    document.body.addEventListener("mousemove", function(event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    });
}, frameCount);
