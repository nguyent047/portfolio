/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

console.log('Tweede javascriptbestand Project WEB Alyssa Nguyen');

var settingsAside = document.querySelector('aside');
var gearAside =
settingsAside.querySelector('button');
var accountSettingsP = settingsAside.querySelector('p');
var accountSettingsA = settingsAside.querySelector('a');


function openSettings() {
    event.preventDefault();
    accountSettingsP.classList.toggle('active');
    accountSettingsA.classList.toggle('active');
}

gearAside.addEventListener('click', openSettings);