const Inclusive = ({
  inclusives,
  setInclusives,
  uuidv4,
  AddIcon,
  RemoveIcon,
  IconButton,
}) => {
  const handleChangeInclusiveInput = (id, event) => {
    const newInputFields = inclusives.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInclusives(newInputFields);
  };
  const handleAddInclusiveFields = () => {
    setInclusives([...inclusives, { id: uuidv4(), listItem: "" }]);
  };
  const handleRemoveInclisiveFields = (id) => {
    const values = [...inclusives];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInclusives(values);
  };
  return (
    <>
      {inclusives.map(({ id, listItem }) => {
        return (
          <div className="input-group" key={id}>
            <div className="form-group m-2">
              <div className="form-label">Inclusive item</div>
              <input
                required
                type="text"
                name="listItem"
                className="form-control"
                placeholder="Inclusive item"
                onChange={(event) => handleChangeInclusiveInput(id, event)}
              />
            </div>
            <div className="form-group">
              <IconButton
                disabled={inclusives.length === 1}
                onClick={() => handleRemoveInclisiveFields(id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddInclusiveFields}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Inclusive;
