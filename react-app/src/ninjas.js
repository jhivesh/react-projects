import React from "react";
import './Ninjas.css'
//================================================//
//In a functional component you cannot access props until passing it to the function
//destucturing
const Ninjas =({ninjas,deleteNinja }) => {
    //======================================//
    
    //console.log(ninjas)
        //map() - function ninjas to map to new variable ninjalist
        const ninjalist = ninjas.map(ninja => {
            if (ninja.age > 20){
                return (
                    <div className="ninja" key={ninja.id}>
                        <div> Name: {ninja.name}</div>
                        <div>Age : {ninja.age}</div>
                        <div>Belt :{ninja.belt}</div> 
                        
                            {/* anonymous arrow  function because a normal function will automatically fired whereas the arrow function when clicked */}
                        <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                    </div>
                    )
                    
            } else{
                return null
            }
            
        })
        
        return(
           <div className="ninja-list">
           
           {ninjalist}
                 
           </div>

        )
        //========================================//
    
}
//================================================//
export default Ninjas;