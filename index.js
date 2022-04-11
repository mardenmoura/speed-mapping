let spaceship = {
    veloticy: 0,
    speedup: function(acceleration){
        this.veloticy += acceleration
    }
}

function registrerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave"))
}

function acelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedup(acceleration)
    if (spaceship.veloticy > spaceship.maxVelocity) {
        alert( "VELOCIDADE MÁXIMA ULTRAPASSADA!") +
        "\nVelovidade da nave: " + spaceship.veloticy + "km/s" +
        "\nVelocidade máxima da nave: " + spaceship.maxVelocity + "km/s"
    }
}

function stop(){
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " 
    + spaceship.veloticy + "km/s" + "\nVel.Máxima da nave: " + spaceship.maxVelocity + "km/s")
    spaceship.veloticy = 0
}

function showMenu(){
    let chosenOption
    do {
        chosenOption = prompt ("Você deseja:\n1 - Acelerar\n2 - Parar")
        switch(chosenOption){
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida")        
        }
    } while(chosenOption != "2")
}

registrerSpaceship()
showMenu()