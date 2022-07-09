import React from "react";

const PackagePhotos = ({ setFile }) => {
  return (
    <div>
      <div className="input-group">
        <div className="form-group">
          <label className="form-label">Cover Photo</label>
          <input
            required
            type="file"
            name="coverImage"
            className="form-control"
            accept="image/x-png,image/gif,image/jpeg"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagePhotos;
