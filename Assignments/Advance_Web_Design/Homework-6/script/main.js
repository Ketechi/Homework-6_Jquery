var planet = 1;

// Jquery code
$(document).ready(  function() {
    //Change planets to the left
    for (i = 0; i < 9; i++)
        $('#planet' + i).hide();

    $('#planet1').show();

    $('#left').click( function() {
        planet-= 1;

        if (planet <= 0) {
            planet = 1;
            alert('You cannot go more to the left')
        }
        else {
            $('#planet' + planet).show();
            $('#planet' + (planet + 1)).hide();
        }

    } );

//Change planets to the right
    $('#right').click( function() {
        planet+= 1;

        if (planet >= 9) {
            planet = 8;
            alert('You cannot go more to the right')
        }
        else {
            $('#planet' + planet).show();
            $('#planet' + (planet - 1)).hide();
        }
    } );
} );

