import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingInput() {
    
    const dispatch = useDispatch();
    const History = useHistory()
    const [feeling, setFeeling] = useState(0)


    const handleFeeling = () => {
        console.log('value of feeling is', feeling);
        dispatch({
            type: 'GET_FEELING',
            payload: feeling
        })

        History.push('/Understanding')
    }
    return (
        <>
        <div>
            <h3>How are you Feeling today?</h3>
            <label htmlFor="Feeling">  Number between 1 and 5</label>
            <input
               
                type="number"
                name="Feeling"
                min="1"
                max="5"
                onChange={(event) => setFeeling(event.target.value)}
            ></input>
            <button onClick={handleFeeling}>Next</button>
        </div>
        
        </>
    )

}



export default FeelingInput;


