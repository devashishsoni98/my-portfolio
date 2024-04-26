import React, { useEffect } from 'react';

const Blob = () => {
    useEffect(() => {
        const blob = document.getElementById("blob");

        const handlePointerMove = event => {
            const { clientX, clientY } = event;

            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 20, fill: "forwards" });
        };

        document.body.addEventListener("pointermove", handlePointerMove);

        return () => {
            document.body.removeEventListener("pointermove", handlePointerMove);
        };
    }, []); 

    return (
        <div id="blob"></div>
    );
};

export default Blob;
