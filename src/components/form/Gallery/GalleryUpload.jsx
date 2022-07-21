import React, { useState } from "react";
import { storage } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function GalleryUpload(){
  let navigate =useNavigate();
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    const promises = [];
    images.map((image) => {
      var storagePath = "gallery/" + image.name;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        }
      );
    });

    Promise.all(promises)
      .then(() => navigate('/gallery'))
      .catch((err) => console.log(err));
      
  };

  console.log("images: ", images);
return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input
        type="file"
        accept="image/x-png,image/gif,image/jpeg"
        multiple
        onChange={handleChange}
      />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <br />
    </div>
  );
};
