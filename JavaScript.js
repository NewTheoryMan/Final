var aElems = document.getElementsByTagName('confirmation');

for (var i = 0, len = aElems.length; i < len; i++) {
    aElems[i].onclick = function () {
        return confirm("Are you sure you want to leave?");
    };
}