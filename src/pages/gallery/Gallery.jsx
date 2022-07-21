import { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../firebase-config";
export const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "gallery/");
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  console.log(imageUrls);
  return (
    <div className="container">
      <h1 className="h-2 headers">Photo gallery</h1>
      <div className="row">
        {imageUrls.map((imageUrl) => {
          return (
            <div className="col-md-3 col-sm-6" key={imageUrl}>
              <div className="project-item">
                <div className="overlay-container">
                  <img src={imageUrl} alt="" className="gallery-thumb-img" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
