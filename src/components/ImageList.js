import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map(image => {
        return <ImageCard  key={image.id} image={image} />
    });
    if (!images || images.length === 0) {
        return <div className="no-list">no images found</div>
    }
    return <div className="image-list">{images}</div>;
};

export default ImageList; 