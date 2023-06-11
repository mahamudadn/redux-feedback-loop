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
 
    



}











export default Success;
