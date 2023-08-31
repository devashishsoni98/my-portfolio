import React, { useEffect, useState } from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const GoTop = () => {

    const [isVisible , setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    };

    const listenToScroll = () => {
        let heightToHidden = 350;
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
    <div className='top-btn' onClick={goToBtn}>
        <span><BsFillArrowUpCircleFill/></span>
    </div>
  )}
  </>
)}

export default GoTop
