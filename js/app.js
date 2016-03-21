//*** Working on moving both the enemy bugs and the character. The character should move by about 100 in each direction in order to keep it in the center of each box.
//The bugs should move in smaller increments to make the move faster. Then once both move, I need define intersection parameters so that the items don't collide.
//Then I need to defince edge of canvas parameters so the character doesn't move off the page.
//Then, I need to set the bugs to come back to the start, so that they continue to move across.



// Enemies our player must avoid
var Enemy = function(sprite, x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(sprite, x, y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Constructor function for Player
var Player = function(sprite, x, y) {
   this.x = x;
   this.y = y;
   this.sprite = 'images/char-horn-girl.png';
};

//creating a prototype chain so that all methods of Enemy exist in Player
Player.prototype = Object.create(Enemy.prototype);

//creating a handleInput method to accept allowedKeys
Player.prototype.handleInput = function () {
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [new Enemy(this, 10, 143), new Enemy(this, -10, 63), new Enemy(this, -50, 223)];

// Place the player object in a variable called player
var player = new Player(this, 200, 410);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
