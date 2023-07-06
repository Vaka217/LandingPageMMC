import React from 'react';
import logo from '../assets/logo.svg';
import { TailSpin } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] bg-slate-100'>
        <img src={logo} alt="Logo" className="h-1/4 mb-8" />
        <TailSpin
            height="150"
            width="150"
            color="rgb(12 74 110)"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
  );
};

export default Loading;