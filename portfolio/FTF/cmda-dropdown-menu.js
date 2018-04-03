
document.addEventListener("DOMContentLoaded", function () {
    function toggleCmdaMenu() {
        document.querySelector('.cmda-dropdown-menu ul').classList.toggle('show');
        document.querySelector('#cmda-dropdown-icon').classList.toggle('close-icon');
    }

    document.querySelector('#cmda-dropdown-icon').onclick = toggleCmdaMenu;
    document.querySelector('.cmda-dropdown-menu ul').onclick = toggleCmdaMenu;

});
