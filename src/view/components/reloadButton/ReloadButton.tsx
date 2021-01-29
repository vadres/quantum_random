import React, { useState } from 'react';
import ReloadSVG from './ReloadSVG';
import { ReloadContainer } from './styles';

interface Props {
  onClick: Function 
}

const ReloadButton: React.FC<Props> = ({ onClick  }) => {
  const [ cRotate, setCRotate ] = useState("")
  
  const handleClick = (onClick: Function) => {
    if (cRotate === "") {
      setCRotate("rotate")

      setTimeout(() => {
        setCRotate("")
      }, 1700)

      onClick()
    }

    
  }

  return (
    <ReloadContainer onClick={() => handleClick(onClick)}>
       <ReloadSVG className={cRotate} width={65} height={65} />
    </ReloadContainer>
  )
}


export default ReloadButton;