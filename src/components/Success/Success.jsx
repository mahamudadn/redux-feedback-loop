import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {

    const dispatch = useDispatch();
    const History = useHistory();


    const Reset = () => {
        dispatch({
            type: 'CLEAR',
            payload: []
        })
        History.push('/')
    }
 
    return(

        <>
        
        <h1>You Sent Your Feedback</h1>

        <button onClick={Reset}> You Can Leave New feedback again</button>
        
        </>
    )



}











export default Success;
