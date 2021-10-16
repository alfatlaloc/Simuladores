import { useState } from 'react';
import Empresa from '../Classes/Empresa';

const useModal = (initState : Empresa ) => {
  const [isShowing, setIsShowing] = useState(false);
  const [Obj,setObject] = useState(initState);

  function toggle() {
    setIsShowing(!isShowing);
  }

  function changeObject(obj : Empresa )
  {
      setObject(obj);
  }

  return {
    isShowing,
    toggle,
    Obj,
    changeObject
  }
};

export default useModal;