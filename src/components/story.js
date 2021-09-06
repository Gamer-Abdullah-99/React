import React from 'react';

export default function Story({ storyTitle, moral, story }) {
    return (
        <div>
            <h1>{storyTitle}</h1>
            <h3>{moral}</h3>
            <p>{story}</p>
        </div>
    )
}