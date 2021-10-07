import React from 'react';
import './index.scss';

const Timeline = ({ isLast }) => {

    return (
        <div className="timeline">
            <div className="dot" />
            {!isLast && <div className="line" />}
        </div>
    );
};

export default Timeline;