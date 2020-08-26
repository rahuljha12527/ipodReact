import React, { Component } from 'react';

class Artists extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const styles={
    aritstContainer:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
    },
    imageContainer:{
        height:'65%',
        width:'35%',
        borderRadius:'50%',
        backgroundImage:'url(%(artistImage))',
        backgroundSize:'cover',
        backgroundPosition:'center',
        alignSelf:'center'
    },

    image:{
        width:'2rem',
        height:'2rem'
    },

    

    
}

export default Artists;