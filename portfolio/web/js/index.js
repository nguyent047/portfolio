/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

console.log('Javascriptbestand Project WEB Alyssa Nguyen');

/* Filter Form */
var filterForm = document.querySelector('body > form:nth-of-type(1)');
var themesButton = filterForm.querySelector('button:nth-of-type(1)');
var themesFS = filterForm.querySelector('fieldset:nth-of-type(1)');
var sortButton = filterForm.querySelector('button:nth-of-type(2)');
var sortFS = filterForm.querySelector('fieldset:nth-of-type(2)');

function showThemesFS() {
    event.preventDefault();
    themesFS.classList.toggle('active');
    sortFS.classList.remove('active');
}

themesButton.addEventListener('click', showThemesFS);

function showSortFS() {
    event.preventDefault();
    sortFS.classList.toggle('active');
    themesFS.classList.remove('active');
}

sortButton.addEventListener('click', showSortFS);