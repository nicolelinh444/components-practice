import React from 'react';
import image from '../images/cat.avif';

console.log(image);

function AddImage() {
  return <img src={image} alt="sphynx cat yawning" />;
}

export default AddImage;