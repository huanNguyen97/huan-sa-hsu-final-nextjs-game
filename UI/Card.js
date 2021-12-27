// Import from react
import React from 'react';

const Card = () => {
    // Rendering template
    const TemplateRendering = () => {
        return (
            <div className="h-44 w-1/4 bg-red-400 rounded-lg">
                <p>haha</p>
            </div>
        );
    };

    return (
        <>
            <TemplateRendering />
        </>
    );
};

export default Card;