const Itinerary = ({
  itinerary,
  setItinerary,
  uuidv4,
  AddIcon,
  RemoveIcon,
  IconButton,
}) => {
  const handleAddFields = () => {
    setItinerary([
      ...itinerary,
      { id: uuidv4(), heading: "", description: "" },
    ]);
  };
  const handleRemoveFields = (id) => {
    const values = [...itinerary];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setItinerary(values);
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = itinerary.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setItinerary(newInputFields);
  };
  return (
    <>
      {itinerary.map(({ id, heading, description }) => {
        return (
          <div key={id}>
            <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
              <div className="col-lg-6 wow ">
                <div className="form-group m-2">
                  <div className="form-label">Heading</div>
                  <input
                    required
                    type="text"
                    name="heading"
                    className="form-control"
                    value={heading}
                    onChange={(event) => handleChangeInput(id, event)}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow ">
                <div className="form-group m-2">
                  <div className="form-label">Description</div>
                  <textarea
                    required
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(event) => handleChangeInput(id, event)}
                  />
                </div>
              </div>
            </div>
            <div className="add-sub-btns">
              <IconButton
                disabled={itinerary.length === 1}
                onClick={() => handleRemoveFields(id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Itinerary;
