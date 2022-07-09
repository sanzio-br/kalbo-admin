import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from "../../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ProgressBar, Alert } from "react-bootstrap";
const PostBlog = ({ isAuth }) => {
  const [photo, setPhoto] = useState(null);
  const [progress, setProgress] = useState();
  const [blog, setBlog] = useState({
    blogTitle: "",
    blogPost: "",
  });
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/admin/login");
    }
  });
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setBlog({ ...blog, [event.target.name]: value });
  };
  const addlist = async (event) => {
    event.preventDefault();
    try {
      var storagePath = "blogs/" + photo.name;

      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, photo);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progrss function ....
          const progressValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressValue);
          console.log("Upload is " + progressValue + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          // complete function ....
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            function postevent() {
              addDoc(postsCollectionRef, {
                blog,
                url: downloadURL,
              });
              navigate("/admin/blogs");
            }
            postevent();
          });
        }
      );
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <h5 className="text-center">Post A blog</h5>
      <div className="form">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="form-group m-2">
            <label className="form-label">Title</label>
            <input
              required
              name="blogTitle"
              type="text"
              className="form-control"
              placeholder="Enter the title of the blog"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="form-group m-2">
            <label className="form-label">Blog post</label>
            <textarea
              required
              name="blogPost"
              cols="30"
              rows="10"
              className="form-group"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow ">
            <div className="form-group m-2">
              <label className="form-label">Blog post cover Photo</label>
              <input
                type="file"
                name="coverImage"
                className="form-control"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(event) => {
                  setPhoto(event.target.files[0]);
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow ">
            <div className="rendering">
              {progress === 100 && (
                <Alert variant="success">Package Posted successfully</Alert>
              )}
              {progress !== 100 && <ProgressBar now={progress} />}
            </div>
          </div>
        </div>
        <div className=" post-btn row row-50 align-items-center justify-content-center justify-content-xl-between">
          <button className="btn " type="submit" onClick={addlist}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBlog;
