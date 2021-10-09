function preload() {

 classifier = ml5.imageClassifier('DoodleNet');   

}



function setup() 
{
Canvas = createCanvas(280, 280);
canvas.center();
background("white");
canvas.moueReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function clearCanvas() {
    background("white");
}

function draw() {
}
//Set stroke weight to 13
strokeWeight(13);
//Set stroke to black
stroke(0);
//If mouse is preesed, draw lines between previous and current mouse posistion
if (mouseIsPressed) {
line(pmouseX, pmouseY, mouseX, mouseY)
}

function classifyCanvas() {
classifier.classify(canvas, gotResult);

function gotResult(error, results) {
 if (error)
 console.error(error)
}
console.log(results);
document.getElementById(label).innerHTML = 'Label:' + results[0].label;

document.getElementById('confidence').innerHTML = 'Confidence' + Math.round(results[0].confidence * 100) + ''

classifier.classify(canvas, gotResult)
utterThis = new SpeechSynthesisUtterance(results[0].label)
synth.speak(utterThis);
}