function getDay() {
    let currentTime = new Date();
    return `${currentTime.getFullYear()}${currentTime.getMonth()}${currentTime.getDate()}`;
}
function closeElement() {
    document.getElementById("fixed-tips").style.display = "none";
    document.cookie = `tips${getDay()}=1;path=/`;
}

(function () {
    let key = `tips${getDay()}`;
    let regex = new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*=\\s*([^;]*).*$)|^.*$`);
    if (document.cookie.replace(regex, "$1") != '1') {
        document.getElementById("fixed-tips").style.display = "block";
    }
})();

