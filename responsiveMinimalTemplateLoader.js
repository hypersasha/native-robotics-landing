/**
 * Created by miguelferreira on 02/09/2017.
 */

var gameInstance = null;
var gameContainer = null;
var gameCanvas = null;
var loadingContainer = null;
var loadingText = null;
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

function dummyProgressFunction() {
}

function getCanvasSize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if(canvasAspectRatio) {
        var aspectWindowHeight = windowWidth / canvasAspectRatio;
        if(aspectWindowHeight > windowHeight) {
            windowWidth = windowHeight * canvasAspectRatio;
        }
        else {
            windowHeight = aspectWindowHeight;
        }
    }

    return {width:windowWidth,height:windowHeight};
}

function instantiateUnity(url,aspectRatio) {

    if(aspectRatio) {
        var aspectRatioComponents = aspectRatio.split(":");
        if(aspectRatioComponents.length != 2) {
            console.exception("Unity: Aspect Ratio tag doesn't follow the expect aspect ratio format A:B e.g. 16:9")
            return;
        }

        canvasAspectRatio = aspectRatioComponents[0]/aspectRatioComponents[1];
    }

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
