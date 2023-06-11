import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function Review() {


    const History = useHistory();
    const dispatch = useDispatch();
    const feelingReducer = useSelector(store => store.feelingReducer)
    const understandingReducer = useSelector(store => store.understandingReducer)
    const supportReducer = useSelector(store => store.supportReducer)
    const commentReducer = useSelector(store => store.commentReducer)


    const handleSubmit = (event) => {
        console.log('feedback to send is feedbackreview');

        axios.post('/feedback', {
            feeling:feelingReducer,
            understanding:understandingReducer,
            support:supportReducer,
            comments:commentReducer
        })
        .then (response => {
            History.push('/success')

        }) 
    }

    

    return (
        <div>
            <h3>Here's Your Feedback!</h3>
            <table>
                <tbody>
                    <tr >
                        <td>How you're feeling:</td>
                        <td>{feelingReducer}</td>
                    </tr>
                    <tr >
                        <td>How well you understand the material:</td>
                        <td>{understandingReducer}</td>

                    </tr>
                    <tr >
                        <td>How supported you feel:</td>
                        <td>{supportReducer}</td>
                        
                    </tr>
                    <tr >
                        <td>Your Comments:</td>
                        <td>{commentReducer}</td>      
                    </tr>
                </tbody>
            </table>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )




}

export default Review;