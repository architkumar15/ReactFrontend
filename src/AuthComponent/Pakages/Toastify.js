import React from 'react'
import {toster , ToastContainer} from 'react-toastify'

export const Toastify = () => {

  return (
      <ToastContainer   
         position= "top-right"
      autoClose={4000}
      hideProgressBar={false}
      closeOnClick= {true}
      pauseOnHover= {true}
      draggable={true}
      progress={undefined}
      backgroundColor={'#5bc0de'}
      
      ></ToastContainer>
  )
}

 