import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function CommentInput() {

    const dispatch = useDispatch();
    const History = useHistory();
    const [comment, setComment] = useState(0)

    const handleComment = () => {
        dispatch({
            type:'GET_COMMENT',
            payload: comment
        })
        History.push('/review')
    }




    return(
        <>
        
        <div>
        <h3>Any Comments you want to leave?</h3>
                <label htmlFor="comment">Enter Comments Here!</label>
                <input
                    type="text"
                    name="comment"
                    onChange={(event) => setComment(event.target.value)}
                ></input>
                <button onClick={handleComment}>Next</button>
        </div>
        </>
    )
    
}

export default CommentInput;