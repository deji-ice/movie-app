import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';
import add from './add+board+new+plus+icon-1320186882821780394_0.svg';

import Modal from './ModalComp';

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div style={{background:'black', width:"6rem", height:"6rem", overflow:"visible", margin:"0"}}>
      <h6 style={{ color:'white', margin:"0", padding: "0"}} >Add Movie</h6>
        <CardImg
          style={{ height: `6rem`, width: `6rem`, display:'flex', paddingBottom:'1rem', margin:"0"}}
          src={add}
          alt='Card image cap'
          onClick={() => setShow(true)}
        />
      {show && (
        <Modal isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
    </div>
  );
};
AddMovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default AddMovie;