import { useState } from 'react';
import Popup from './Popup';

function Categories() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setShowPopup(true)}>
        Pop-Up
      </button>
      <Popup show={showPopup} setShow={setShowPopup} />
    </div>
  );
}

export default Categories;
