import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";




function UnderstandingInput() {

const dispatch = useDispatch();
const History = useHistory()
const [Understanding, setUnderstanding] = useState(0)

const handleUnderstanding = () => {
    dispatch({
        type:'GET_UNDERSTANDING',
        payload: Understanding
    })
    History.push('/Support')
}





    return(
        <>
        <div>
            <h3>How well are you Understanding the content?</h3>
            <label htmlFor="understanding">  Number between 1 and 5</label>
            <input
            
                type="number"
                name="understanding"
                min="1"
                max="5"
                onChange={(event) => setUnderstanding(event.target.value)}
            ></input>
            <button onClick={handleUnderstanding}>Next</button>
        </div>
        
        </>
    )
    
}

export default UnderstandingInput