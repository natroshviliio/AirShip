
var cloudOne = document.getElementById('cloudOne');
var cloudTwo = document.getElementById('cloudTwo');
var cloudThree = document.getElementById('cloudThree');
var cloudFour = document.getElementById('cloudFour');
var cloudFewth = document.getElementById('cloudFewth');
var cloudSixth = document.getElementById('cloudSixth');

var planets = document.getElementById('planets');
var randomPlanet = 1;
var randomPlanetTop = 0;

var player = document.getElementById('player');
var bullet = document.getElementById('bullet');

var forceOfGravity = 10;
var liftingForce = 0.022;
var ffa = 1.4;
var isSpaceKeyDown = false;


var gameBoard = document.getElementById('gameBoard');
var colorChange = 1;
var gameBoardMaxWidth = parseInt(getComputedStyle(gameBoard).getPropertyValue('width'));

setInterval(function () {
    cloudOne.style.top = Math.floor(Math.random() * 380) + 20 + "px";
}, 4000);

setInterval(function () {
    cloudTwo.style.top = Math.floor(Math.random() * 380) + 20 + "px";
}, 4500);

setInterval(function () {
    cloudThree.style.top = Math.floor(Math.random() * 380) + 20 + "px";
}, 4200);

setInterval(function () {
    cloudFour.style.top = Math.floor(Math.random() * 380) + 20 + "px";
}, 5000);

setInterval(function () {
    cloudFewth.style.top = Math.floor(Math.random() * 380) + 20 + "px";
}, 5500);

setInterval(function () {
    cloudSixth.style.top = Math.floor(Math.random() * 380) + 20 + "px";
}, 3200);

setInterval(function () {
    if (colorChange == 1) {
        gameBoard.style.backgroundColor = '#001d2d';
        colorChange = 2;
    }
    else {
        gameBoard.style.backgroundColor = '#0098ff';
        colorChange = 1;
    }
}, 30000)


setInterval(function () {
    randomPlanet = Math.floor(Math.random() * 5) + 1;
    randomPlanetTop = Math.floor(Math.random() * 550) - 100;
    switch (randomPlanet) {
        case 1:
            planets.style.backgroundImage = "url('objects/Planets/bluePlanet.png')";
            planets.style.width = '400px';
            planets.style.height = '400px';
            planets.style.top = randomPlanetTop + 'px';
            break;
        case 2:
            planets.style.backgroundImage = "url('objects/Planets/pinkPlanet.png')";
            planets.style.width = '200px';
            planets.style.height = '200px';
            planets.style.top = randomPlanetTop + 'px';
            break;
        case 3:
            planets.style.backgroundImage = "url('objects/Planets/orangePlanet.png')";
            planets.style.width = '300px';
            planets.style.height = '300px';
            planets.style.top = randomPlanetTop + 'px';
            break;
        case 4:
            planets.style.backgroundImage = "url('objects/Planets/yellowPlanet.png')";
            planets.style.width = ' 150px';
            planets.style.height = '150px';
            planets.style.top = randomPlanetTop + 'px';
            break;
        case 5:
            planets.style.backgroundImage = "url('objects/Planets/orangePlanetHat.png')";
            planets.style.width = ' 800px';
            planets.style.height = '800px';
            planets.style.top = randomPlanetTop - 250 + 'px';
            break;
    }
}, 25000);


function PlayerModel() {
    setInterval(function () {
        if (isSpaceKeyDown == false) {
            ffa -= 0.001
            forceOfGravity += (forceOfGravity * liftingForce) / ffa;
            player.style.top = forceOfGravity + 'px';
            player.style.backgroundImage = "url('objects/mainObjects/warship.png')";
            if (forceOfGravity < 0.9) {
                forceOfGravity = 1;
            }
            else if (forceOfGravity > 300) {
                ffa = 2.2;
            }
        }
        else {
            ffa = 1.4;
            forceOfGravity -= (forceOfGravity * liftingForce) * 0.8;
            player.style.top = forceOfGravity + 'px';
            player.style.backgroundImage = "url('objects/mainObjects/warshipActive.png')";
        }
    }, 10);


}

var bull = 1;
var shootSpeed = 0;
returnBullet = false;


function Shoot() {
    returnBullet = true;
    shootSpeed = 0.0005;
    var bulletTop = 110 + parseInt(getComputedStyle(player).getPropertyValue('top'));
    var bulletLeft = 160 + parseInt(getComputedStyle(player).getPropertyValue('left'));


    var shoot = setInterval(function () {
        bullet.style.top = bulletTop + 'px';
        bullet.style.left = (bulletLeft + bull) + 'px';

        bullet.style.display = 'block';

        bull += shootSpeed + bull / 2;

        var bulletMaxLeft = parseInt(getComputedStyle(bullet).getPropertyValue('left'));

        if (bulletMaxLeft > gameBoardMaxWidth) {
            bull = 1;
            bullet.style.top = bulletTop + 'px';
            bullet.style.left = bulletLeft + 'px';
            bullet.style.display = 'none';
            clearInterval(shoot);
        }
        console.log(bulletMaxLeft + " " + gameBoardMaxWidth);
    }, 10);


}

addEventListener('click', function (e) {
        Shoot();
})


document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case ' ':
            isSpaceKeyDown = true;
            break;

    }
})


document.addEventListener("keyup", function (e) {
    switch (e.key) {
        case ' ':
            isSpaceKeyDown = false;
            ffa = 1.4;
            break;

    }
})


function StartGame() {
    PlayerModel();
}

StartGame();



setInterval(function () {
    document.getElementById('posY').innerHTML = "Y: " + forceOfGravity;
    document.getElementById('planetsRandom').innerHTML = "random of planets: " + randomPlanet;
    document.getElementById('planetsY').innerHTML = "planet Y: " + randomPlanetTop;
    document.getElementById('bulIntegration').innerHTML = "bullet integration X: " + bull;
}, 10);




