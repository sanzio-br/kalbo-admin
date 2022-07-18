import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import Itinerary from "./dynamicFormComponents/itinerary";
import Inclusive from "./dynamicFormComponents/Inclusive";
import Exclusive from "./dynamicFormComponents/Exclusive";
import PackagePhotos from "./filesUpload/PackagePhotos";
import FormTop from "./FormTop";
import { Alert, ProgressBar } from "react-bootstrap";
// db
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const PostPackage = ({ isAuth }) => {
  const postsCollectionRef = collection(db, "events");
  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  const [itinerary, setItinerary] = useState([
    { id: uuidv4(), heading: "", description: "" },
  ]);
  const [inclusives, setInclusives] = useState([
    { id: uuidv4(), listItem: "" },
  ]);
  const [exclusives, setExclusives] = useState([
    { id: uuidv4(), listItem: "" },
  ]);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [packageData, setPackageData] = useState({
    currency:"",
    destination: "",
    description: "",
    price: "",
    startDate: "",
    endDate: "",
    location: "",
    maxPeople:null,
    minPeople:null,
    days: null,
  });
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setPackageData({ ...packageData, [event.target.name]: value });
  };
  const addlist = async (event) => {
    event.preventDefault();
    try {
      var storagePath = "uploads/" + file.name;

      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

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
                packageData,
                title: `${packageData.days} Days to ${packageData.destination}`,
                itinerary: itinerary,
                inclusives: inclusives,
                exclusives: exclusives,
                url: downloadURL,
              });
              navigate("/safari-packages");
            }
            postevent();
          });
        }
      );
    } catch (error) {
      throw error;
    }
  };
  console.log(packageData);
  return (
    <div className="container form">
      <form action="" onSubmit={addlist}>
      <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="form-group m-2">
            <label className="form-label">Type of package</label>
            <select id="" name="packageType" className="form-select" required onChange={handleChange}>
              <option>Select package type</option>
              <option value="Domestic packages" >Domestic packages</option>
              <option value="International package" >International package</option>
              <option value="Beach packages" >Beach packages</option>
              <option value="Safari Packages">Safari Packages</option>
              <option value="honey moon packages">honey moon packages</option>
            </select>
          </div>
        </div>
        <FormTop handleChange={handleChange}/>
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow ">
            <div className="form-group m-2">
              <label className="form-label">Start date</label>
              <input
                type="month"
                name="startDate"
                id=""
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-6 wow ">
            <div className="form-group m-2">
              <label className="form-label">End Date</label>
              <input
                type="month"
                name="endDate"
                id=""
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow "></div>
          <div className="col-lg-6 wow "></div>
        </div>
        <h5>Itinerary</h5>
        <Itinerary
          itinerary={itinerary}
          setItinerary={setItinerary}
          uuidv4={uuidv4}
          IconButton={IconButton}
          RemoveIcon={RemoveIcon}
          AddIcon={AddIcon}
        />
        <h5>inclusives and exclusives</h5>
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow ">
            <div className="inclusives">
              <span>Inclusives</span>
              <Inclusive
                inclusives={inclusives}
                setInclusives={setInclusives}
                uuidv4={uuidv4}
                IconButton={IconButton}
                RemoveIcon={RemoveIcon}
                AddIcon={AddIcon}
              />
            </div>
          </div>
          <div className="col-lg-6 wow ">
            <div className="exclusives">
              <span>Exclusives</span>
              <Exclusive
                exclusives={exclusives}
                setExclusives={setExclusives}
                uuidv4={uuidv4}
                IconButton={IconButton}
                RemoveIcon={RemoveIcon}
                AddIcon={AddIcon}
              />
            </div>
          </div>
        </div>
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow ">
            <PackagePhotos setFile={setFile} />
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
        <div className="post-btn row row-50 align-items-center justify-content-center justify-content-xl-between">
          <button className="btn ">Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostPackage;
