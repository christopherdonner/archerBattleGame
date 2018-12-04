var character=$(".character")
var currentCharacter=""
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
    isAlive: true

}

var character2 = {
    id: 2,
    name: "Daphne",
    hp: 100,
    currentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true
}

var character3 = {
    id: 3,
    name: "Shaggy",
    hp: 150,
    currentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true
}

var character4 = {
    id: 4,
    name: "Velma",
    hp: 80,
    currentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true
}

var characterList=[character1, character2, character3, character4]

function moveTiles() 
    {
        var numberOfTiles;
        
    }

function drawCombatants()
    {
        for(i=0;i<enemyCombatants.length;i++)
        {
            
        }
    }

$(document).ready(function() 
{
/*
    for(i=0;i<characterList.length;i++)
    {
        console.log(characterList[i])
        $(`#${characterList[i]}Name`).append(character1.name)
        $(`#${characterList[i]}HP`).append(`HP: ${character1.hp}`)
    }
*/

$("#character1Name").append(character1.name)
$("#character1HP").append(`HP: ${character1.hp}`)

$("#character2Name").append(character2.name)
$("#character2HP").append(`HP: ${character2.hp}`)

$("#character3Name").append(character3.name)
$("#character3HP").append(`HP: ${character3.hp}`)

$("#character4Name").append(character4.name)
$("#character4HP").append(`HP: ${character4.hp}`)

    $(".character").on("click", function()
    {
        //console.log(`test ${this.id}`)
        //console.log(currentCharacter)

        if (currentCharacter==="")
        {
            console.log(this.id)
            currentCharacter=this.id;
            console.log(currentCharacter)
                if(currentCharacter==="character1")
                    {
                        currentCharacter=character1;
                        enemyCombatants=["character2","character3","character4"]
                        $("#character1").clone().appendTo(".current_character")
                        $("#character1").empty();
                        for(i=0;i<enemyCombatants.length;i++)
                            {   
                                console.log(enemyCombatants[i])
                                $(`#${enemyCombatants[i]}`).clone().appendTo("#possibleEnemies")
                                $(`#${enemyCombatants[i]}`).empty();
                            }
                    }
                else if (currentCharacter==="character2")
                    {
                            currentCharacter=character2;
                            enemyCombatants=["character1","character3","character4"]
                            $("#character2").clone().appendTo(".current_character")
                            $("#character1").empty();
                            $("#character2").empty();
                            $("#character3").empty();
                            $("#character4").empty();
                            
                    }
                else if (currentCharacter===3){currentCharacter=character3;}
                else {currentCharacter=character4;}
            
            console.log(currentCharacter.name)
            //console.log(this)
            
            //$(".character").empty();
                /*for(i=1;i<characterList.length;i++)
                    {
                        if (currentCharacter!==characterList[i])
                            {
                                characterList[i]
                                //$(`#${id}`).
                            }
                    }
                    */
        }
    });
});

    $("#attack").on("click", function()
    {
        console.log("attack!")
    })
