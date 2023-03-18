import React from 'react';

const SVGIcon = ({ Icon = {}, className = '', onClick = () => { } }) => {
    return (
        <Icon className={className} onClick={onClick} />
    );
};

export default SVGIcon;