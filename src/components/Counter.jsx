import React, { useState } from "react";

const Counter = () => {
    const [likes, setLikes] = useState(0);

    function minus() {
        setLikes(likes - 1);
    }

    function plus() {
        setLikes(likes + 1);
    }
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={minus}>minus</button>
            <button onClick={plus}>plus</button>
        </div>
    );
};

export default Counter;
