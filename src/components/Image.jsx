// imports React
import React from 'react';
// imports image from images folder
import image from '../images/cat.avif';

// image added
function AddImage() {
  // returns image passed in on line 2, with alt text
  return <img src={image} alt="sphynx cat yawning" />;
}

// export so that it can be used in other files
export default AddImage;