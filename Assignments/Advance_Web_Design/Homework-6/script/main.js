var planet = 1; // counter of planets
var planetName = ''; // used to extract the number from planet 'name'
var previousPlanet = '#planet1'; // save the name of previous planet to hide it later
var currentPlanet = ''; // store the current selected planet to show it
var timer = 500; // time that takes to fadeIn & fadeOut

// Jquery code
$(document).ready(  function() {
    // Hide all planets at the start of the page
    for (i = 0; i < 9; i++)
        $('#planet' + i).hide();
    $('#planet1').show();

    //Change planets to the left
    $('#left').click( function() {
        planet-= 1;

        if (planet <= 0) {
            planet = 1;
            alert('You cannot go more to the left');
        }
        else {
            changePlanet()
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
            changePlanet()
        }
    } );

    // Changes planets when clicked
    $('.thumbnailImg').click(function () {

        // Extract the number from the 'name' on the thumbnails
        planetName = $(this).attr('name');
        planet = parseInt(planetName.replace(/^\D+/g, ''));

        changePlanet()
    })
} );

// change the planet images based on ID
function changePlanet() {
    currentPlanet = '#planet' + planet;

    $(previousPlanet).fadeOut(timer);
    $('#details').fadeOut(timer, function () {
        $(currentPlanet).fadeIn(timer);
        $('#details').fadeIn(timer);

        switch (currentPlanet) {
            case '#planet1':
                $('#name').html('Earth');
                $('#story').html('Earth is the third planet from the Sun and is the largest of the terrestrial planets and is the only known planet to support life.');
                $('#age').html('4.543 billion years old');
                $('#size').html('6,371 km');
                $('#temp').html('-81F to 114F');
                $('#fact').html('Fun Fact: Earth is the only planet not named after a god.');
                break;
            case '#planet2':
                $('#name').html('Jupiter');
                $('#story').html('Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets combined.');
                $('#age').html('4.503 billion years old');
                $('#size').html('69,911.513 km');
                $('#temp').html('-150F to -260F');
                $('#fact').html('Fun Fact: Jupiter is the fourth brightest object in the solar system.');
                break;
            case '#planet3':
                $('#name').html('Mars');
                $('#story').html('Mars is the second smallest planet in the solar system and is a terrestrial planet with a thin atmosphere composed of carbon dioxide.');
                $('#age').html('4.603 billion years old');
                $('#size').html('3,389.5 km');
                $('#temp').html('-220F to 68F');
                $('#fact').html('Fun Fact: Pieces of Mars have fallen to Earth.');
                break;
            case '#planet4':
                $('#name').html('Mercury');
                $('#story').html('Mercury is the closest planet to the Sun and due to its proximity it is not easily seen except during twilight.');
                $('#age').html('4.503 billion years old');
                $('#size').html('2,439.7 km');
                $('#temp').html('-279F to 801F');
                $('#fact').html('Fun Fact: Your weight on Mercury would be 38% of your weight on Earth.');
                break;
            case '#planet5':
                $('#name').html('Neptune');
                $('#story').html('Neptune is the eighth planet from the Sun, making it the most distant in the solar system. ');
                $('#age').html('4.503 billion years old');
                $('#size').html('24,622 km');
                $('#temp').html('-360F to -3284F');
                $('#fact').html('Fun Fact: A year on Neptune lasts 165 Earth years.');
                break;
            case '#planet6':
                $('#name').html('Saturn');
                $('#story').html('Saturn is the second largest planet and is best known for its fabulous ring system.');
                $('#age').html('4.503 billion years old');
                $('#size').html('58,232 km');
                $('#temp').html('-170F to -280F');
                $('#fact').html('Fun Fact: Saturn has more moons than any other planet.');
                break;
            case '#planet7':
                $('#name').html('Uranus');
                $('#story').html('Uranus is tipped over on its side with an axial tilt of 98 degrees. It is often described as “rolling around the Sun on its side.');
                $('#age').html('4.503 billion years old');
                $('#size').html('25,362 km');
                $('#temp').html('1,070F to 8,540F');
                $('#fact').html('Fun Fact: Uranus is often referred to as an “ice giant” planet.');
                break;
            case '#planet8':
                $('#name').html('Venus');
                $('#story').html('Venus is the second planet from the Sun and is the second largest terrestrial planet.');
                $('#age').html('4.503 billion years old');
                $('#size').html('6,051.8 km');
                $('#temp').html('870F to 872F');
                $('#fact').html('Fun Fact: Venus is often called the Earth’s sister planet. ');
                break;
        }
    });

    previousPlanet = currentPlanet;
}

