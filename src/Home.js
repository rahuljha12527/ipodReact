import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div style={styles.homeScreen} id="home-screen">
                  <div style={style.menuList} id="menuList">
                     <div style={styles.titleBar}>
                        <p style={{fontWeight:"bold"}}>iPod</p>
                           <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"> </img>
                     </div>

                     <ListGroup style={}>
                         <ListGroup.Item>
                             Now Playing
                         </ListGroup.Item>
                         <ListGroup.Item>
                             Music
                         </ListGroup.Item>
                         <ListGroup.Item>
                             Games
                         </ListGroup.Item><ListGroup.Item>
                             Settings
                         </ListGroup.Item>
                     </ListGroup>
                  </div>
                
                <div style={styles.imageContainer} id="image-container">

                </div>
            </div>
        );
    }
}

const styles={
    homeScreen:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },

    menuList :{
        height:'100%',
        width:"50%",
        boxShadow:'10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex:'1'
    },
    imageContainer:{
        height:"100%",
        width:'50%',
        backgroundImage:'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
        backgroundSize:'cover',
        backgroundPosition:'center',
        borderRadius:'0 12px 12px 0'
    },
    titleBar:{
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage:'linear-gradient(0deg,rgb(123,132,140),transparent)',
        borderBottom:'1px solid #6c757d',
        padding:'1px 5px 10px 8px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    battery:{
       width:'20px',
       height:'20px',
    }

}

export default Home;