function prepareEventHandlers() {


// main variables
var navBanner = document.getElementById("banner");
var navPrep = document.getElementById("navPrep");
var navBreeds = document.getElementById("navBreeds");
var navAdopt = document.getElementById("navAdopt");
var mainPrep = document.getElementById("preparation");
var mainBreed = document.getElementById("breeds");
var mainAdopt = document.getElementById("adoption");
var foreword = document.getElementById("foreword");

// advertisement variables
var suppliesImg = document.getElementById("suppliesImage");
var factsImg = document.getElementById("catFactsImage");
var videoImg = document.getElementById("videosImage");
var adContSupplies = document.getElementById("supplyChecklist");
var adContFacts = document.getElementById("funFacts");
var adContVideo = document.getElementById("videos");


// remove all main content items
function removeMain() {
    mainPrep.style.display = "none";
    mainBreed.style.display = "none";
    mainAdopt.style.display = "none";
    adContSupplies.style.display = "none";
    adContFacts.style.display = "none";
    adContVideo.style.display = "none";
    foreword.style.display = "none";

}

// onclick events!
navBanner.onclick = function() {
    removeMain();
    foreword.style.display = "block";
}

navPrep.onclick = function() {
    removeMain();
    mainPrep.style.display = "block";
}
navBreeds.onclick = function() {
    removeMain();
    mainBreed.style.display = "block";
}
navAdopt.onclick = function() {
    removeMain();
    mainAdopt.style.display = "block";
}
suppliesImg.onclick = function() {
    removeMain();
    adContSupplies.style.display = "block";
}
factsImg.onclick = function() {
    removeMain();
    adContFacts.style.display = "block";
}
videoImg.onclick = function() {
    removeMain();
    adContVideo.style.display = "block";
}


// window onload
}
window.onload = function() {
    prepareEventHandlers();
}
