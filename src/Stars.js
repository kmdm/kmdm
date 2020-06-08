import React from 'react';

export default function Stars(props)
{
    return (
        <p className={"ratings rating-" + props.rating}>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
        </p>
    );
}