import './Cosmetic.css'
import React from 'react';
import { addtoStorage, removeFromStroge} from '../../utilities/Storage';

const Cosmetic = (props) => {
const {_id,price,name,email}=props.cosmetic;

const AddStroage=(id)=>{
    
    addtoStorage(id);
}

const RemoveStoage=(id)=>{
    console.log('click me');
    removeFromStroge(id);
   

}


    return (
        <div className="cosmetic">
            <h3>Id: {_id}</h3>

            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <p>Price: {price}</p>


            <button onClick={()=>AddStroage(_id)} style={{backgroundColor:'crimson',padding:'10px',color:'white'}}>Add to Cart</button>

            <button onClick={()=>RemoveStoage(_id)} style={{backgroundColor:'crimson',padding:'10px',color:'white'}}>Remove</button>

            

            
        </div>
    );
};

export default Cosmetic;