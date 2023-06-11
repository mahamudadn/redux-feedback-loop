import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success(params) {

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
        
        <h1>FEEDBACK SUCCESSFULL</h1>

        <button onClick={Reset}> You Can Leave New feedback again</button>
        
        </>
    )



}











export default Success;
