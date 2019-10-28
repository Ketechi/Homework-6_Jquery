$(function () {
    var availableNames = [
        'Carlos'
    ];
    $("#names").autocomplete({
        source: availableNames
    });
});


// Read file names and list them in a list
var file = "https://github.com/dominictarr/random-name/blob/master/first-names.txt";
$.get(file, function (txt) {
    var lines = txt.responseText.split("\n");
    for (var i = 0, len = lines.length; i < len; i++) {
        console.log(lines[i]);
    }
});