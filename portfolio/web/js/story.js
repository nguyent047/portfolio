/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

console.log('Tweede javascriptbestand Project WEB Alyssa Nguyen');

var saveButton = document.querySelector('section button:first-of-type');
var rateButton = document.querySelector('section button:last-of-type');
var downloadButton = document.querySelector('section button:nth-of-type(2)');

function savedStory() {
    event.preventDefault();
    saveButton.classList.add('active');
}

saveButton.addEventListener('click', savedStory);

function downloadStory() {
    event.preventDefault();
    downloadButton.classList.add('active');
}

downloadButton.addEventListener('click', downloadStory);

function rateStory() {
    event.preventDefault();
    document.getElementById('rate').innerHTML = 'Beoordeeld';
}

rateButton.addEventListener('click', rateStory);