import React from 'react';
import Card from './Card.jsx';
import data from './data.json';

function Projects() {
    return (
        <div className="card-container">
            {data.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </div>
    );
}

export default Projects;
