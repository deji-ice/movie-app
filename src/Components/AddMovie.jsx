import React, { useState } from 'react';
import { Card, CardImg } from 'reactstrap';
import add from './add+board+new+plus+icon-1320186882821780394_0.svg';

import Modal from './ModalComp';

function AddMovie ({ handleAdd }) {
  const [visible, setVisible] = useState(false);
  const switchV = () => setVisible(!visible);
  return (
    <div style={{background:'black', width:"6rem", height:"6rem", overflow:"visible", margin:"0"}}>
      <h6 style={{ color:'white', margin:"0", padding: "0"}} >Add Movie</h6>
        <CardImg
          style={{ height: `6rem`, width: `6rem`, display:'flex', paddingBottom:'1rem', margin:"0"}}
          src={add}
          alt='Card image cap'onClick={() => setVisible(true)}/>
      {visible && (<Modal isOpen={visible} toggle={switchV} handleAdd={handleAdd} />)}
    </div>
  );
};

export default AddMovie;