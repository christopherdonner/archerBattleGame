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
    name: "Freddy",
    hp: 120,
    currentCharacter: false,
    isCurrentEnemy: false,
}

var character3 = {
    id: 1,
    name: "Freddy",
    hp: 120,
    currentCharacter: false,
    isCurrentEnemy: false,
}

var character4 = {
    id: 1,
    name: "Freddy",
    hp: 120,
    currentCharacter: false,
    isCurrentEnemy: false,
}

function moveTiles() 
    {
        var numberOfTiles;
        
    }

$(document).ready(function() 
{
    $(".character").on("click", function()
    {
        console.log(`test ${this.id}`)
        console.log(currentCharacter)
        if (currentCharacter===0)
        {
            currentCharacter=this.id;
                if(currentCharacter===1){currentCharacter=character1;}
                else if (currentCharacter===2){currentCharacter=character2;}
                else if (currentCharacter===3){currentCharacter=character3;}
                else {currentCharacter=character4;}
            
            console.log(currentCharacter)
            console.log(this)
            $(".character").empty();
                for(i=1;i<5;i++)
                    {
                        if (id!=currentCharacter)
                            {
                                //character
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
