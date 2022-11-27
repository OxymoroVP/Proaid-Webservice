import React, { useRef, useEffect, useState } from "react";
import Avatar from './Avatar'
import SupportWindow from './SupportWindow';


const SupportEngine = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
   
    useEffect(() =>{
        function handleClickoutside(event) {
            if (ref.current && !ref.current.contains(event.target)){
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickoutside);
        return () => {
            document.removeEventListener("mousedown", handleClickoutside)
        };
    }, [ref])
  
    return (
        <div ref={ref}>
            <SupportWindow
                visible={visible}
            />

            <Avatar
                onClick={() => setVisible(true)}
                style={{ 
                    position: 'fixed', 
                    bottom: '24px', 
                    right: '24px'
                }}
            />       
        </div>
    )
}

export default SupportEngine;

