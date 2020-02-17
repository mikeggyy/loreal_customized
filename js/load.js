window.addEventListener('load', function () {
    document.querySelector('#name_folder').value = window.localStorage.getItem('name_folder') ? window.localStorage.getItem('name_folder') : '';
});