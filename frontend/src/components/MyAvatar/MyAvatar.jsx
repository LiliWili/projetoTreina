import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import './MyAvatar.css';

function MyAvatar() {
    const [preview, setPreview] = useState("https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setPreview(URL.createObjectURL(file));
    };
}
    return (
        <>
            <label htmlFor="upload-avatar">
                <Image id="image" src={preview} roundedCircle/>
            </label>
            <input type="file" id="upload-avatar" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }}/>
        </>
    );
}

export default MyAvatar;