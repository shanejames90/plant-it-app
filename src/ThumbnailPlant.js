import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
    root: {
        bacgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    picture: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        height: '30vh',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
        
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    miniPlant: {
        align: 'center',
    }
}

function ThumbnailPlant(props) {
    const { classes, name, image, handleClick } = props
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.picture}>
                <div className={classes.miniPlant}>
                    <img src={image} alt='plant' />
                </div>
            </div>
            <div>
                <h5 className={classes.title}>{name}</h5>
            </div>
        </div>
    )
}

export default withStyles(styles)(ThumbnailPlant)