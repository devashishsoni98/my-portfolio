import React from 'react'
import { Link } from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md'
import { useState } from 'react';
import { useEffect } from 'react';

const GoBack = () => {
    const [isVisible , setIsVisible] = useState(false);

    const listenToScroll = () => {
        let heightToHidden = 280;
        const winScroll=
        document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        };
    };

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll);
        return() => window.removeEventListener('scroll', listenToScroll);
    }, []);
  return (
    <>
    {isVisible && (
    <Link className='back-button' to="/projects"><div className='gb-div'><MdArrowBack/></div></Link>
  )}
  </>
  )
}

export default GoBack