class Game{
    constructor(){}
    getgameState(){
        var gameStateReference = database.ref('gameState')
        gameStateReference.on("value",function(data){
            gameState = data.val()
        }) 
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getPlayerCount()
            form = new Form()
            form.display()

        }
    }
}