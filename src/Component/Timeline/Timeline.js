import React from 'react';
import './index.scss';

const Timeline = ({ isLast, ...props }) => {

    return (
        <div className="timeline" {...props}>
            <div className="dot" />
            {!isLast && <div className="line" />}
        </div>
    );
};

export default Timeline;