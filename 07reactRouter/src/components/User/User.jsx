import React from "react";
import { useParams } from "react-router-dom"; // where the parameters values are stored
function User(){

    const {userid} = useParams()
    return (
        <div className="text-center">User: {userid} </div>
    )
}

export default User