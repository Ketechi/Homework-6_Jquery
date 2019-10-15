var moneyCOn = 0;

// Check number entered in the textbox
function currency() {
    currencySelector();
    var money = moneyCOn;

    if (!isNaN(money))
        document.getElementById("total").innerHTML = money;
    else if (isNaN(money))
        document.getElementById("total").innerHTML = "Please enter numbers only. Do not add more than 1 dot or letters";


}

// Change the icon and update currency
function currencySelector() {
    var questioned = document.getElementById("questioned").value;
    var answer = document.getElementById("answers").value;

    iconChange(questioned, "questionedIMG");
    iconChange(answer, "answersIMG");
}

// Check the currency selected
function iconChange(currency, iconID) {
    switch (currency) {
        case "USA":
            if (iconID == "questionedIMG")
                USA();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/USA.png';
            break;
        case "EUR":
            if (iconID == "questionedIMG")
                EUR();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/EUR.png';
            break;
        case "YEN":
            if (iconID == "questionedIMG")
                YEN();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/YEN.png';
            break;
        case "INDIAN":
            if (iconID == "questionedIMG")
                INDIAN();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/Indian.png';
            break;
        case "RUBLE":
            if (iconID == "questionedIMG")
                RUBLE();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/Ruble.png';
            break;
        case "BITCOIN":
            if (iconID == "questionedIMG")
                BITCOIN();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/BTC.png';
            break;
        case "MONERO":
            if (iconID == "questionedIMG")
                MONERO();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/Monero.png';
            break;
        case "LITECOIN":
            if (iconID == "questionedIMG")
                LITECOIN();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/LITECOIN.png';
            break;
        case "ETHEREUM":
            if (iconID == "questionedIMG")
                ETHEREUM();
            document.getElementById(iconID).src = '../../../../image/Assignments/Advance_Web_Design/Assignment_3/ETHEREUM.png';
            break;
    }
    document.getElementById("total").innerHTML = moneyCOn;
}

// Money currency converter
function USA() {

    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 0.901447;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 107.948;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 71.0152;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 64.2996;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 0.0000965371;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 0.013481;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 0.015;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 0.0055;
            break;
    }
}

function EUR() {
    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 1.10751 ;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 119.564 ;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 78.6492;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 71.2192 ;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 0.000107055 ;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 0.014645577035735208;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 0.016;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 0.0062;
            break;
    }
}

function YEN() {
    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 0.00926419 ;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 0.00836558 ;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 0.657903 ;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 0.595679 ;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 0.000000895727 ;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 0.00012177168053443155;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 0.00925626;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 0.000051;
            break;
    }
}

function INDIAN() {
    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 0.0140808;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 0.0127146;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 1.52037;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 0.905613;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 0.00000136226;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 0.000194;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 0.00020;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 0.000078;
            break;
    }
}

function RUBLE() {
    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 0.01563;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 0.01416;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 1.69;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 1.11714;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 0.0000015;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 0.000210;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 0.00021;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 0.000077;
            break;
    }
}

function BITCOIN() {
    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 10253.9;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 9220.84;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 1101642.08;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 727727.59;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 654239.14;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 133.41610;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 138.62;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 50.57;
            break;
    }
}

function MONERO() {
    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 73.967676;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 63.567820;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 8255.975867;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 5063.272246;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 4666.1842;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 0.007298;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 1.076698;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 0.12530;
            break;
    }
}

function LITECOIN() {
    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 71.1204;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 63.167911;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 8202.496808;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 5030.474302;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 4635.958417;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 0.007186;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 0.993168;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 0.364958;
            break;
    }
}

function ETHEREUM() {
    switch (document.getElementById("answers").value) {
        case "USA":
            moneyCOn = document.getElementById("numbers").value * 192.975;
            break;
        case "EUR":
            moneyCOn = document.getElementById("numbers").value * 173.361002;
            break;
        case "YEN":
            moneyCOn = document.getElementById("numbers").value * 22515.547016;
            break;
        case "INDIAN":
            moneyCOn = document.getElementById("numbers").value * 13808.463850;
            break;
        case "RUBLE":
            moneyCOn = document.getElementById("numbers").value * 12725.532497;
            break;
        case "BITCOIN":
            moneyCOn = document.getElementById("numbers").value * 0.019740;
            break;
        case "MONERO":
            moneyCOn = document.getElementById("numbers").value * 2.724340;
            break;
        case "LITECOIN":
            moneyCOn = document.getElementById("numbers").value * 2.746543;
            break;
        case "ETHEREUM":
            moneyCOn = document.getElementById("numbers").value * 1;
            break;
    }
}