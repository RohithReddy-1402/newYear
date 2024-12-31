import { useState } from 'react'


import "./index.css"
function App() {
  return (
    <>
      <div className='m-0 overflow-auto flex flex-col '>
        <div>
        <img style={{width:"300px",position:"absolute"}}  id={'img'} src='https://img.freepik.com/premium-vector/set-realistic-flying-balloons-isolated-multicolored-helium-balloon-group-balloon_320857-1144.jpg?w=740'></img></div>
        <div id={'img2'} className='flex flex-col ' style={{marginTop:"40px",position:"absolute"}}>
          <img style={{width:"300px"}}  src='https://img.freepik.com/premium-vector/set-realistic-flying-balloons-isolated-multicolored-helium-balloon-group-balloon_320857-1144.jpg?w=740'></img>
        
          <div ><p style={{fontSize:"120px",marginLeft:"110px",marginTop:"-50px"}}>5</p></div></div>
        <div id={'year'} style={{ fontSize:"120px",position:"absolute",left:"25%",top:"50%"}}>
          2 0 2  <span id={"img1"} className={'absolute ml-8'}> 4</span>
          
          
        </div>
      </div>
    </>
  )
}

export default App
