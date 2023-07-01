import axios from 'axios';
import {useState, useEffect} from "react";

const ImageComponent = () => {
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    // Fetch the image path from the backend
    axios.get('http://localhost:5052/api/Sock/1')
      .then(response => setImagePath(response.data.image))
      .catch(error => console.error('Error fetching image path:', error));
    //setImagePath("public\\Image\\A1.jpg")
  }, []);

  return (
    <div>
      {imagePath ? (
        <img src={imagePath} alt="img" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageComponent;