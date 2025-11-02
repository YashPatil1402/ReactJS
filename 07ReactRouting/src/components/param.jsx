import React from 'react';
import { useParams } from 'react-router';

const Param = () => {
    const {id} =useParams();
    return (
        <div>
            param :{id}
        </div>
    );
}

export default Param;
