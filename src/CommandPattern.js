class SunCommand {
    constructor(userSunInput) {
        this.userSunInput = userSunInput
    }

    execute(array) {
        // take in solutions array 
        // check if user input is in that array 
        return array.includes(this.userSunInput)
        }
    }

class WaterCommand {
    constructor(userWaterInput) {
        this.userWaterInput = userWaterInput
    }

    execute(array) {
        return array.includes(this.userWaterInput)
    }
}

class FertCommand {
    constructor(userFertInput) {
        this.userFertInput = userFertInput
    }

    execute(array) {
        return array.includes(this.userFertInput)
    }
}

class WillThePlantThrive {
    constructor(userSunInput, userWaterInput, userFertInput) {
        this.sunCommand = new SunCommand(userSunInput)
        this.waterCommand = new WaterCommand(userWaterInput)
        this.fertCommand = new FertCommand(userFertInput)
    }

    execute(arraySunSolution, arrayWaterSolution, arrayFertSolution) {
        const optimalSun = this.sunCommand.execute(arraySunSolution)
        const optimalWater = this.waterCommand.execute(arrayWaterSolution)
        const optimalFert = this.fertCommand.execute(arrayFertSolution)
        return optimalSun && optimalWater && optimalFert
    }
}

export default WillThePlantThrive