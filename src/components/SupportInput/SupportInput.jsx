import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function SupportInput() {

    const dispatch = useDispatch();
    const History = useHistory();
    const [support, setSupport] = useState(0)

    const handleSupport = () => {
        dispatch({
            type:'GET_SUPPORT',
            payload: support
        })
        History.push('/comment')
    }




    return(
        <>
        
        <div>
            <h3>How well are you being Supported?</h3>
            <label htmlFor="Support">  Number between 1 and 5</label>
            <input
            
                type="number"
                name="Support"
                min="1"
                max="5"
                onChange={(event) => setSupport(event.target.value)}
            ></input>
            <button onClick={handleSupport}>Next</button>
        </div>
        </>
    )
    
}

export default SupportInput;