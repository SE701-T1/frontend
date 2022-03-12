import React from 'react';

export default function Page({ title, description }) {
    return (
        <React.Fragment>
            <p>{title}</p>
            <p>{description}</p>
        </React.Fragment>
    );
}