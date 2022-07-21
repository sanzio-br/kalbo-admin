import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ProgressBar, Alert } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
const PostBlog = ({ isAuth }) => {
  const [state, setState] = useState({
    contentState: {},
  });
  const onContentStateChange = (contentState) => {
    setState({ contentState });
  };
  const { contentState } = state.contentState;
  const [photo, setPhoto] = useState(null);
  const [progress, setProgress] = useState();
  const [blog, setBlog] = useState({
    blogTitle: "",
  });
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  const handleChange = (event) => {
    // event.preventDefault();
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
        },
        (error) => {
          console.log(error);
        },
        () => {
          // complete function ....
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            function postevent() {
              addDoc(postsCollectionRef, {
                state,
                blog,
                url: downloadURL,
              });
              navigate("/blogs");
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
    <div className="container">
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
          <div className="form-group">
            <label className="form-label">Blog</label>
            <Editor
              initialContentState={contentState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperEditor"
              editorClassName="editorClassName"
              onContentStateChange={onContentStateChange}
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
