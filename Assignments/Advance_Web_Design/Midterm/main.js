let midterm = {
    part_3: {
        changeText: function () {
            document.getElementById('header').innerHTML = document.getElementById('headerText').value;
            ;
        }
    },
    Part_4: {
        colorChange: function () {
            // document.getElementById('header').style.color = document.getElementById('colorGet').value;

            if (document.getElementById('colorGetBackground').value != document.getElementById('colorGet').value) {
                switch (document.getElementById('colorGet').value) {
                    case 'R':
                        document.getElementById('header').style.color = 'red';
                        break;
                    case 'G':
                        document.getElementById('header').style.color = 'green';
                        break;
                    case 'B':
                        document.getElementById('header').style.color = 'blue';
                        break;
                    case 'W':
                        document.getElementById('header').style.color = 'whitesmoke';
                        break;
                }
            }
            else
                alert('Your cannot use the same color as Background Color')
        },
        backgrounfColor: function () {
            if (document.getElementById('colorGet').value != document.getElementById('colorGetBackground').value) {
                switch (document.getElementById('colorGetBackground').value) {
                    case 'R':
                        document.getElementById('header').style.backgroundColor = 'red';
                        break;
                    case 'G':
                        document.getElementById('header').style.backgroundColor = 'green';
                        break;
                    case 'B':
                        document.getElementById('header').style.backgroundColor = 'blue';
                        break;
                    case 'W':
                        document.getElementById('header').style.backgroundColor = 'whitesmoke';
                        break;
                }
            }
            else
                alert('Your cannot use the same color as Text Color')
        }
    }
}