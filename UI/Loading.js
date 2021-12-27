// Import from reactjs
import React from 'react';
import Loader from "react-loader-spinner";

const Loading = (props) => {
    return (
        <div className="flex justify-center">
            <Loader
                type={props.type}
                color={props.color}
                height={`${props.height}`}
                width={`${props.width}`}
            />
        </div>
    );
};

export default Loading;