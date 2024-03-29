import React from 'react'
import './loader.scss'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Loader = ({loading,popUpText,popUpClass,setShowPopUp}) => {

  const handleClose = () =>{
    setShowPopUp(false);
  }

  return (
    <div className='loader-overlay'>
        <div className='loader-container'>
            {
                loading ? (
                <p className='loader'></p>
                ):(
                    <>
                        <div className='close-icon' onClick={()=>handleClose()}>
                            <CloseIcon/>
                        </div>
                        {
                            popUpClass == "success" ? 
                            <div className={`loader-icon ${popUpClass}`}>
                                <CheckCircleIcon/>
                            </div>
                            :
                            <div className={`loader-icon ${popUpClass}`}>
                                <CancelIcon/>
                            </div>
                            
                        }
                        <p>{popUpText}</p>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Loader