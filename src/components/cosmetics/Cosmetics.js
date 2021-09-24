import React, { useEffect, useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics,setcosmetics] = useState([]);
    useEffect(()=>{
        fetch('./cosmetics.json')
        .then(res=>res.json())
        .then(data=>setcosmetics(data));

        },[])

    return (


        <div>
            <h3>Show Cosmetics</h3>
            {cosmetics.map(cosmetic=>console.log(cosmetic))}

            {
                cosmetics.map(cosmetic=><Cosmetic key={cosmetic._id} cosmetic={cosmetic}></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmetics;