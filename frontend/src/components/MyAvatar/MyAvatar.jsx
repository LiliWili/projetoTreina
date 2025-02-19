import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import './MyAvatar.css';
import imgAvatar from '../../assets/usuario.png';

function MyAvatar() {
    const sessionAvatar = sessionStorage.getItem('avatar');
    const [avatar, setAvatar] = useState(sessionAvatar || imgAvatar);

    useEffect(() => {
        if (avatar !== imgAvatar) {
            sessionStorage.setItem('avatar', avatar);
        }
    }, [avatar]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAvatar(imageUrl);
            sessionStorage.setItem('avatar', imageUrl);
        }
    };

    return (
        <>
            <label htmlFor="upload-avatar">
                <Image id="image" src={avatar} roundedCircle/>
            </label>
            <input type="file" id="upload-avatar" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }}/>
        </>
    );
}

export default MyAvatar;
