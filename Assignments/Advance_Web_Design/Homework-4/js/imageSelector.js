let locations = {
    images: {
            Mountain: function () {
                document.getElementById('imageSelected').src = 'image/1_Mountain.gif';
                locations.descriptions.Mountain();
                locations.landmarks.Mountain();
            },
            Aurora: function () {
                document.getElementById('imageSelected').src = 'image/1_Aurora.gif';
                locations.descriptions.Aurora();
                locations.landmarks.Aurora();
            },
            Statue: function () {
                document.getElementById('imageSelected').src = 'image/1_Statue.gif';
                locations.descriptions.Statue();
                locations.landmarks.Statue();
            }
    },

    sizes: {
            small: function () {
                document.getElementById('imageSelected').style.height = "300px";
                document.getElementById('imageSelected').style.width = "25%";
            },
            medium: function () {
                document.getElementById('imageSelected').style.height = "500px";
                document.getElementById('imageSelected').style.width = "45%";
            },
            large: function () {
                document.getElementById('imageSelected').style.height = "700px";
                document.getElementById('imageSelected').style.width = "65%";
            },
            setSize: function () {
                let selected = document.getElementById('sizes').value;

                switch (selected) {
                    case 'SM':
                        locations.sizes.small();
                        break;
                    case 'MD':
                        locations.sizes.medium();
                        break;
                    case 'LG':
                        locations.sizes.large();
                        break;
                }
            }
    },

    descriptions: {
        Mountain: function () {
            document.getElementById('description').innerHTML = 'Wild lands in Australia.'
        },
        Aurora: function () {
            document.getElementById('description').innerHTML = 'Alaska\'s famous Aurora.'
        },
        Statue: function () {
            document.getElementById('description').innerHTML = 'New York city\'s famous Statue of Liberty.'
        }
    },

    landmarks: {
        Mountain: function () {
            document.getElementById('maps').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001849.4316336176!2d148.78788944879324!3d-35.36345528511013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b234b038cf2dd5d%3A0x5e23945ff8d761b8!2sSnowy%20Mountains!5e0!3m2!1sen!2sus!4v1569427849086!5m2!1sen!2sus';
        },
        Aurora: function () {
            document.getElementById('maps').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108853.01031718863!2d-147.66493089184416!3d64.76751936847535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x51325c908d3c2a5b%3A0x14f075bfe623af68!2sThe%20Aurora%20Chasers%20by%20Ronn%20%26%20Marketa%20Murray!5e0!3m2!1sen!2sus!4v1569428150808!5m2!1sen!2sus';
            },
        Statue: function () {
            document.getElementById('maps').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.306387423317!2d-74.04668908414591!3d40.68924937933434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1569428285018!5m2!1sen!2sus';
        },
        MapHover: function () {
            document.getElementById('maps').style.width = '700px';
            document.getElementById('maps').style.height = '300px';
        },
        mapOut: function () {
            document.getElementById('maps').style.width = '200px';
            document.getElementById('maps').style.height = '100px';
        }
    }
};
