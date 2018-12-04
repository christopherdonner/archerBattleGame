var character=$(".character")
var currentCharacter=0
var enemyCombatants=[]
var currentEnemy
var hitPoints
var enemyHitpoints


var character1 = {
    id: 1,
    name: "Freddy",
    hp: 120,
    currentCharacter: false,
    currentEnemy: false,
}

var character2 = {
    id: 1,
    name: "Daphne",
    hp: 100,
    currentCharacter: false,
    isCurrentEnemy: false,
}

var character3 = {
    id: 1,
    name: "Shaggy",
    hp: 150,
    currentCharacter: false,
    isCurrentEnemy: false,
}

var character4 = {
    id: 1,
    name: "Velma",
    hp: 80,
    currentCharacter: false,
    isCurrentEnemy: false,
}

var characterList=[character1, character2, character3, character4]

function moveTiles() 
    {
        var numberOfTiles;
        
    }

$(document).ready(function() 
{

$("#character1Name").append(character1.name)
$("#character1HP").append(`HP: ${character1.hp}`)

    $(".character").on("click", function()
    {
        console.log(`test ${this.id}`)
        console.log(currentCharacter)

        if (currentCharacter===0)
        {
            currentCharacter=this.id;
            console.log(currentCharacter)
                if(currentCharacter===1)
                    {
                        currentCharacter=character1;
                        $("#character1").clone().appendTo(".current_character")}
                else if (currentCharacter===2){currentCharacter=character2;}
                else if (currentCharacter===3){currentCharacter=character3;}
                else {currentCharacter=character4;}
            
            console.log(currentCharacter)
            console.log(this)
            
            $(".character").empty();
                for(i=1;i<characterList.length;i++)
                    {
                        if (currentCharacter!==characterList[i])
                            {
                                characterList[i]
                                //$(`#${id}`).
                            }
                    }
        }
    });
});

    $("#attack").on("click", function()
    {
        console.log("test")
    })
