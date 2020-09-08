var gameInstance = null;
var gameContainer = null;
var gameCanvas = null;
var runtimeInitialized = false;
var canvasAspectRatio = false;

function handleResize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    console.log("window.innerHeight "+window.innerHeight);

    if(gameCanvas != null) {
        var canvasSize = getCanvasSize();
        gameCanvas.width = canvasSize.width;
        gameCanvas.height = canvasSize.height - 48;
    }

    gameContainer.style.height = (windowHeight - 48) +"px";
}

document.addEventListener("DOMContentLoaded", function(event) {
    gameContainer = document.body.querySelector("#gameContainer");
    window.addEventListener("resize", handleResize);
    handleResize();
});


function OnRuntimeIntialized() {
    runtimeInitialized = true;
    gameCanvas = gameInstance.container.querySelector("canvas");
    gameCanvas.style.width = null;
    gameCanvas.style.height = null;
    handleResize();
}


function getCanvasSize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    return {width:windowWidth,height:windowHeight};
}

function instantiateUnity(url) {

    var canvasSize = getCanvasSize();

    gameInstance = UnityLoader.instantiate("gameContainer", url,  {
        width:canvasSize.width,
        height: canvasSize.height,
        margin: 0,
        onProgress: UnityProgress,
        Module: {
            onRuntimeInitialized: OnRuntimeIntialized
        }});
}
