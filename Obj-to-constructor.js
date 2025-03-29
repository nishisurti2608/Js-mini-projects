// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++
//     }
// }

function Gamer(name, score) {
  this.name = name;
  this.score = score;
  this.incrementScore = function () {
    this.score++;
  };
}

const dave = new Gamer("Dave", 0);
const sarah = new Gamer("Sarah", 0);
const kerry = new Gamer("Kerry", 0);
dave.incrementScore();
sarah.incrementScore();
sarah.incrementScore();
kerry.incrementScore();
kerry.incrementScore();
kerry.incrementScore();
console.log(dave);
console.log(sarah);
console.log(kerry);



/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/

function Character(name){
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const wizard = new Character('Merlin')
wizard.addItem('wand')
wizard.addItem('map')
wizard.addItem('potion')
