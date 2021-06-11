import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import ThumbnailPlant from './ThumbnailPlant';


const styles = {
    root: {
        backgroundColor: 'teal',
        height: '150vh',
        width: '70vw',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white',
    },
    pictures: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

class PlantPalette extends Component {
    goToPlant = (id) => {
        this.props.history.push(`/plant/${id}`)
    }
    render() {
        const { allPlants, classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Which plant would you like to grow?</h1>
                    </nav>
                    <div className={classes.pictures}>
                        {allPlants.map(plant => (
                            <ThumbnailPlant {...plant} key={plant.id} handleClick={() => this.goToPlant(plant.id)} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PlantPalette);