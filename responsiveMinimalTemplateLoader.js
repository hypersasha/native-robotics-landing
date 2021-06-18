var unityInstance = null;
var gameContainer = null;
var gameCanvas = null;
var runtimeInitialized = false;

function handleResize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    console.log("window.innerHeight "+window.innerHeight);

    const nearRes = getClosestRes(window.innerWidth / window.innerHeight);
    console.log('Resolution is near to', nearRes);

    if(gameCanvas != null) {
        var canvasSize = getCanvasSize();
        gameCanvas.width = (canvasSize.height - 48) * nearRes;
        gameCanvas.height = canvasSize.height - 48;
    }

    gameContainer.style.height = (windowHeight - 48) +"px";
}

document.addEventListener("DOMContentLoaded", function(event) {
    gameContainer = document.body.querySelector("#gameContainer");
    window.addEventListener("resize", handleResize);
    handleResize();
});

function getClosestRes(goal) {
    const resolutions = [1.33, 1.66, 1.77];
    return resolutions.reduce(function (prev, curr){
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    })
}


function OnRuntimeIntialized() {
    runtimeInitialized = true;
    gameCanvas = unityInstance.container.querySelector("canvas");
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

    unityInstance = UnityLoader.instantiate("gameContainer", url,  {
        width: canvasSize.height * 1.67,// canvasSize.width,
        height: canvasSize.height,
        margin: 0,
        onProgress: UnityProgress,
        Module: {
            onRuntimeInitialized: OnRuntimeIntialized
        }});
}
