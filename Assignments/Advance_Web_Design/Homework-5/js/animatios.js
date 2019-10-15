let animations = {

    start: {

        box: function (id, direction,turns,size, time) {
            anime({
                targets: "#" + id,
                translateX: direction,
                rotate: turns + "turn",
                scale: size,
                delay: time,
                duration: 2000
            })
        }

    },

    color: {

        colorChange: function () {
            document.getElementById("colorPicker").click();
        },

        colorReceiver: function () {
            let color = document.getElementById('colorPicker').value
            document.getElementById("box1").style.backgroundColor = color;
            setColor(color);
        }
    }
};

animations.start.box('box1', 150, 1, 1.3, 1000);
animations.start.box('box2', -150, -1, 1.3, 1000);