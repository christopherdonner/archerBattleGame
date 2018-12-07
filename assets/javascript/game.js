var character=$(".character")
var possibleEnemies=$("#possibleEnemies")
var currentCharacter=""
var currentEnemy=""
var enemyCombatants=[]
//var hitPoints
//var enemyHitpoints


var character1 = {
    id: 1,
    name: "Freddy",
    hp: 120,
    isCurrentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true,
    attackPower: 9,
    currentAttackPower: 9,
    counterAttackPower: 18

}

var character2 = {
    id: 2,
    name: "Daphne",
    hp: 100,
    isCurrentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true,
    attackPower: 7,
    currentAttackPower: 7,
    counterAttackPower: 9
}

var character3 = {
    id: 3,
    name: "Shaggy",
    hp: 150,
    isCurrentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true,
    attackPower: 8,
    currentAttackPower: 8,
    counterAttackPower: 22
}

var character4 = {
    id: 4,
    name: "Velma",
    hp: 80,
    isCurrentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true,
    attackPower: 11,
    currentAttackPower: 11,
    counterAttackPower: 18
}

var characterList=[character1, character2, character3, character4]

var characterObject = {
    "character1": character1,
    "character2": character2,
    "character3": character3,
    "character4": character4
}

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

function enemySelect(){
$(".character").on("click", function()
        {
            //console.log("possibleEnemies")
            console.log(`${currentCharacter.id} ${characterObject[this.id]}`)
            if(currentCharacter.id!=characterObject[this.id])
            {
            //console.log(characterList)
            console.log(`this.id ${this.id}`)
            //console.log(currentCharacter)
            if(currentEnemy==="")
                {
                for(i=0;i<enemyCombatants.length+1;i++)
                {   
            
                console.log(this.id)
                currentEnemy=characterObject[this.id];
                console.log(currentEnemy)
                    if(currentEnemy===characterList[i])
                    {
                        character1.isCurrentEnemy=true;
                        console.log(currentEnemy.name);
                        console.log(`${currentCharacter.name} VS ${currentEnemy.name}`)
                        //console.log(typeof(currentEnemy))
                        console.log(currentEnemy.name)
                        
                        $(`#character${i+1}.character`).clone().appendTo("#currentEnemy").attr("id", "currentEnemy")
                        //$("#character1.character").attr("id", "currentEnemy")
                        $(`#character${i+1}.character`).empty()
                    }
                }
            }
        }
            //console.log(`${currentCharacter.name} VS ${currentEnemy.name}`)
        })
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

for(i=0;i<characterList.length;i++)
{
$(`#character${i+1}Name`).text(characterList[i].name)
console.log(characterList[i].name)
$(`#character${i+1}HP`).text(`HP: ${characterList[i].hp}`)
console.log(characterList[i].hp)
}

    $(".character").on("click", function()
    {
        //console.log(`test ${this.id}`)
        //console.log(currentCharacter)

        if (currentCharacter==="")
        {
            currentCharacter=this.id;
                if(currentCharacter==="character1")
                    {
                        currentCharacter=character1;
                        character1.isCurrentCharacter=true
                        enemyCombatants=["character2","character3","character4"]
                        $("#character1").clone().appendTo(".current_character").attr("class", "current_character")
                        $("#character1").empty();
                        for(i=0;i<enemyCombatants.length;i++)
                            {   
                                //if(enemyCombatants.)
                                $(`#${enemyCombatants[i]}`).clone().appendTo("#possibleEnemies")
                                $(`#${enemyCombatants[i]}`).empty();
                            }
                    }
                else if (currentCharacter==="character2")
                    {
                            currentCharacter=character2;
                            character2.isCurrentCharacter=true;
                            enemyCombatants=["character1","character3","character4"]
                            $("#character2").clone().appendTo(".current_character")
                            $("#character2").empty();
                            for(i=0;i<enemyCombatants.length;i++)
                            {   
                                $(`#${enemyCombatants[i]}`).clone().appendTo("#possibleEnemies")
                                $(`#${enemyCombatants[i]}`).empty();
                               // $("#character2").clone().appendTo(".current_character")
                                //$("#character2").empty()
                            }
                        }        
                else if (currentCharacter==="character3")
                {
                    currentCharacter=character3;
                    character3.isCurrentCharacter=true
                    enemyCombatants=["character1","character2","character4"]
                    $("#character3").clone().appendTo(".current_character")
                    $("#character3").empty();
                    for(i=0;i<enemyCombatants.length;i++)
                        {   
                            $(`#${enemyCombatants[i]}`).clone().appendTo("#possibleEnemies")
                            $(`#${enemyCombatants[i]}`).empty();
                        }
                }
                else  if (currentCharacter==="character4")
                {
                    currentCharacter=character4;
                    character4.isCurrentCharacter=true
                    enemyCombatants=["character1","character2","character3"]
                    $("#character4").clone().appendTo(".current_character")
                    $("#character4").empty();
                    for(i=0;i<enemyCombatants.length;i++)
                        {   
                            //if(enemyCombatants.isAlive===true){
                            $(`#${enemyCombatants[i]}`).clone().appendTo("#possibleEnemies")
                            $(`#${enemyCombatants[i]}`).empty();
                            //}
                        }
                }
            
            console.log(`Current Character: ${currentCharacter.name}`)
            console.log(enemyCombatants)
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

        enemySelect();
        /*
        $(".character").on("click", function()
        {
            //console.log("possibleEnemies")
            console.log(`${currentCharacter.id} ${characterObject[this.id]}`)
            if(currentCharacter.id!=characterObject[this.id])
            {
            //console.log(characterList)
            console.log(`this.id ${this.id}`)
            //console.log(currentCharacter)
            if(currentEnemy==="")
                {
                for(i=0;i<enemyCombatants.length+1;i++)
                {   
            
                console.log(this.id)
                currentEnemy=characterObject[this.id];
                console.log(currentEnemy)
                    if(currentEnemy===characterList[i])
                    {
                        character1.isCurrentEnemy=true;
                        console.log(currentEnemy.name);
                        console.log(`${currentCharacter.name} VS ${currentEnemy.name}`)
                        //console.log(typeof(currentEnemy))
                        console.log(currentEnemy.name)
                        
                        $(`#character${i+1}.character`).clone().appendTo("#currentEnemy").attr("id", "currentEnemy")
                        //$("#character1.character").attr("id", "currentEnemy")
                        $(`#character${i+1}.character`).empty()
                    }
                }
            }
        }
            //console.log(`${currentCharacter.name} VS ${currentEnemy.name}`)
        })*/
    })
    });
   
    
//});

    $("#attack").on("click", function()
    {
        console.log("attack!")
        //currentCharacter.hp-=10;
        console.log(currentCharacter.hp)
        
        $("#eventLog").text(`${currentCharacter.name} hits ${currentEnemy.name} for ${currentCharacter.currentAttackPower}`);
        $("#eventLog").append(`<br>${currentEnemy.name} hits ${currentCharacter.name} for ${currentEnemy.counterAttackPower}<br>`);
        currentCharacter.hp-=currentEnemy.counterAttackPower
        currentEnemy.hp-=currentCharacter.currentAttackPower
        console.log(`currentEnemy ${currentEnemy.id}`)
        console.log(currentEnemy.hp)
        console.log(currentCharacter.id)
        $(`#character${currentCharacter.id}HP`).text(`HP: ${currentCharacter.hp}`);
        //$(`#${currentCharacter.id}HP`).text(`HP: ${currentCharacter.hp}`);
        $(`#character${currentEnemy.id}HP`).text(`HP ${currentEnemy.hp}`)
        currentCharacter.currentAttackPower+=currentCharacter.attackPower;
            if(currentCharacter.hp<=0)
            {
                alert('you lose!')
            }
            if(currentEnemy.hp<=0)
            {
                $("#currentEnemy").empty()
                $("#eventLog").html(`${currentEnemy.name} defeated!<br>Choose your next opponent!`)
                currentEnemy.isAlive=false;
                currentEnemy=""
                enemySelect();
            }
    })
