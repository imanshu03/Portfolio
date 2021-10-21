import React from 'react';
import { ReactComponent as InfinityLoader } from '../../Assets/Infinity.svg';
import './index.scss';

const Loader = () => {

    return (
        <div id="loader">
            <InfinityLoader />
        </div>
    );
};

export default Loader;