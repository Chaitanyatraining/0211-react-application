import React from 'react'
import './Styles.css'
import stylesModule from './stylescss.module.css'

function StylingComp() {

  const styles = {
    InternalBtnStyles :{
      padding:"30px",
      backgroundColor:"lightGreen",
      border:'none',
      color:'white',
      fontSize:"20px"
    },
    btnStyles:{

    }
  }

  return (
    <div>
      {/* 
          inline
          internal
          external
          module
      */}
        <h2>Stylings</h2>
        <button style={{
          padding:"30px",
          backgroundColor:"lightblue",
          border:'none',
          color:'white',
          fontSize:"20px",
          margin:"0px 10px"
          }}
          >Inline Button</button>

          <button style={styles.InternalBtnStyles}>Internal BTN</button> 
          <button className='external-btn'>External Css</button>
          {/* <button className='module-btn'>module Css</button> */}
          <button className={stylesModule.modulecss}>module Css</button>
          <button className="btn btn-primary">Boostrap Btn</button>
          
    </div>
  )
}

export default StylingComp