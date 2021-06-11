import React, { Component } from 'react';
import Sun from './Sun'
import Water from './Water'
import Fertilizer from './Fertilizer'
import Button from '@material-ui/core/Button';
// import willPlantThrive from './simulationHelpers'
import plants from './plantData'
import WillThePlantThrive from './CommandPattern';


function locatePlant(id) {
    return plants.find(function (plant) {
        return plant.id === id
    })
}

class Plant extends Component {
    constructor (props) {
        super(props)
        this.state = {
            sun: 0,
            water: 0,
            fertilizer: 0, 
            thrived: null
        }
    }

    changeSunLevel = (level) => {
        // console.log(level)
        this.setState({ sun: level })
    }

    changeWaterLevel = (level) => {
        this.setState({ water: level })
    }

    changeFertilizerLevel = (level) => {
        this.setState({ fertilizer: level })
    }

    handleSubmit = (event) => {
        
        event.preventDefault()
        const plantId = this.props.match.params.id
        const foundPlant = locatePlant(plantId)
        const [sunArray, waterArray, fertArray] = [foundPlant.sun, foundPlant.water, foundPlant.fertilizer]
        const { sun, water, fertilizer } = this.state
        // analyze state data
        // const userInputConditions = [sun, water, fertilizer]
        // clean this up 
        const userSun = sun 
        const userWater = water 
        const userFert = fertilizer
        // call willPlantThrive function, that will take state 
        // for plant to thrive:
            // { sun: [4-12], water: [2-5], fert: [0.5-2] }
            // function will return thrive: true if in range
       const plantHealth = new WillThePlantThrive(userSun, userWater, userFert)
    //    console.time('test1')
       const health = plantHealth.execute(sunArray, waterArray, fertArray)
    //    console.timeEnd('test1')
        // console.log(plantHealth)
        // if plant thrives display 'Congratulations your St. Auggy is healthy and thriving!'
        // else display failure
        if (health) {
           this.setState({ thrived: true })
        } else {
            this.setState({ thrived: false })
        }
    }

    congratulationsJSX = () => {
        if (this.state.thrived === true) {
            return (
                <div>
                    <h1>Congratulations your {this.props.plant.name} is healthy and thriving!</h1>
                    <div>
                        <Button style={{ display: 'flex', margin: 'auto' }}
                            variant="contained"
                            color="secondary"
                            href="/"
                        >
                            Play Again
                        </Button>
                    </div>
                </div>
            )
        }
    }

    failureJSX = () => {
        if (this.state.thrived === false) {
            return (
                <div>
                    <h1>Sorry, your {this.props.plant.name} is now dead, try again next season!</h1>
                    <Button style={{ display: 'flex', margin: 'auto' }}
                        variant="contained"
                        color="secondary"
                        href="/"
                    >
                        Play Again
                        </Button>
                </div>
            )
        }
    }
    render() {
        const { sun, water, fertilizer, thrived } = this.state
        const { name } = this.props.plant
            if (thrived === true) 
                return (this.congratulationsJSX())
             else if (thrived === false)
                return (this.failureJSX())   
            return (
            <div>
                <h3 style={{ textAlign: 'center' }}>🌱{name}🍃</h3>
                <div>
                    <div style={{ width: '35%', margin: 'auto', padding: '2%' }}>
                        <Sun level={sun} changeSunLevel={this.changeSunLevel} />
                    </div>
                    <div style={{ width: '35%', margin: 'auto', padding: '2%' }}>
                        <Water level={water} changeWaterLevel={this.changeWaterLevel} />
                    </div>
                    <div style={{ width: '35%', margin: 'auto', padding: '2%' }}>
                        <Fertilizer level={fertilizer} changeFertilizerLevel={this.changeFertilizerLevel} />
                    </div>
                </div>
                <div>
                    <Button style={{ display: 'flex', margin: 'auto' }}
                        variant="contained"
                        color="secondary"
                        onClick={this.handleSubmit}
                    >
                        GROW IT!
                    </Button>
                </div>
            </div>
            )
        }
    }

export default Plant;