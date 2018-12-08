var character=$(".character")
var possibleEnemies=$("#possibleEnemies")
var currentCharacter=""
var currentEnemy=""
var enemyCombatants=[]
var img="<img>"


var character1 = {
    id: 1,
    name: "Stirling",
    hp: 120,
    isCurrentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true,
    attackPower: 9,
    currentAttackPower: 9,
    counterAttackPower: 12

}

var character2 = {
    id: 2,
    name: "Lana",
    hp: 100,
    isCurrentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true,
    attackPower: 12,
    currentAttackPower: 12,
    counterAttackPower: 9
}

var character3 = {
    id: 3,
    name: "Ray",
    hp: 130,
    isCurrentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true,
    attackPower: 8,
    currentAttackPower: 8,
    counterAttackPower: 13
}

var character4 = {
    id: 4,
    name: "Pam",
    hp: 140,
    isCurrentCharacter: false,
    isCurrentEnemy: false,
    isAlive: true,
    attackPower: 11,
    currentAttackPower: 11,
    counterAttackPower: 11
}

var characterList=[character1, character2, character3, character4]

var characterObject = {
    "character1": character1,
    "character2": character2,
    "character3": character3,
    "character4": character4
}

function enemySelect()
{
$(img).css("border-color", "red")
$(".character").on("click", function()
    {
        
        if(currentCharacter.id!=characterObject[this.id])
            {
                if(currentEnemy==="")
                {
                    for(i=0;i<enemyCombatants.length+1;i++)
                        {   
                            currentEnemy=characterObject[this.id];
                            if(currentEnemy===characterList[i])
                        {
                        characterList[i].isCurrentEnemy=true;
                        $(`#character${i+1}.character`).clone().appendTo("#currentEnemy").attr("id", "currentEnemy")
                        $(`#character${i+1}.character`).empty()
                    }  
                }
            }
        }
        })
}

function drawCharacters()
{
for(i=0;i<characterList.length;i++)
{
$(`#character${i+1}Name`).text(characterList[i].name)
$(`#character${i+1}HP`).text(`${characterList[i].hp}`)
}
}

function reset()
{
    currentEnemy="";
    currentCharacter="";
    for(i=0;i<characterList.length;i++){
        characterList[i].isAlive=true;
        characterList[i].isCurrentCharacter=false;
        characterList[i].isCurrentEnemy=false;
    }
    /*for(i=0;i<characterList.length;i++)
    {
        $(`#character${i+1}Name`).remove();
        $(`#character${i+1}HP`).remove();
    }*/
    character1.hp=120;
    character2.hp=100;
    character3.hp=130;
    character4.hp=140;
    //$("#currentCharacter").clear();
    drawCharacters();
    location.reload();
}

$(document).ready(function() 
{

drawCharacters();

//Character Select
$("#eventLog").text("Choose your character!")
    $(".character").on("click", function()
    {
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
                            $(`#${enemyCombatants[i]}`).clone().appendTo("#possibleEnemies")
                            $(`#${enemyCombatants[i]}`).empty();
                        }
                }
        }
    $("#eventLog").text("Choose your opponent!")
    enemySelect();
   
    })
});

$("#attack").on("click", function()
    {
        if(currentCharacter!="" && currentEnemy!="")
        {
        $("#eventLog").text(`${currentCharacter.name} hits ${currentEnemy.name} for ${currentCharacter.currentAttackPower}`);
        $("#eventLog").append(`<br>${currentEnemy.name} hits ${currentCharacter.name} for ${currentEnemy.counterAttackPower}<br>`);
        currentCharacter.hp-=currentEnemy.counterAttackPower
        currentEnemy.hp-=currentCharacter.currentAttackPower
        $(`#character${currentCharacter.id}HP`).text(`${currentCharacter.hp}`);
        $(`#character${currentEnemy.id}HP`).text(`HP ${currentEnemy.hp}`)
        currentCharacter.currentAttackPower+=currentCharacter.attackPower;
            if(currentCharacter.hp<=0)
            {
                alert('you lose!')
                reset();
            }
            if(currentEnemy.hp<=0)
            {
                $("#currentEnemy").empty()
                $("#eventLog").html(`${currentEnemy.name} defeated!<br>Choose your next opponent!`)
                currentEnemy.isAlive=false;
                currentEnemy=""
                enemySelect();
            }
        }
    })

$("#reset").on("click", function(){
    console.log("reset")
    reset();
})
