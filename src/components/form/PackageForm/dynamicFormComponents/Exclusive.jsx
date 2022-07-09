import React from "react";

const Exclusive = ({
  exclusives,
  setExclusives,
  uuidv4,
  AddIcon,
  RemoveIcon,
  IconButton,
}) => {
  const handleAddExclusiveFields = () => {
    setExclusives([...exclusives, { id: uuidv4(), listItem: "" }]);
  };
  const handleChangeExclusivesInput = (id, event) => {
    const newInputFields = exclusives.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setExclusives(newInputFields);
  };

  const handleRemoveExclisiveFields = (id) => {
    const values = [...exclusives];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setExclusives(values);
  };
  return (
    <>
      {exclusives.map(({ id, listItem }) => {
        return (
          <div className="input-group" key={id}>
            <div className="form-group m-2">
              <div className="form-label">exclusive item</div>
              <input
                required
                type="text"
                name="listItem"
                className="form-control"
                placeholder="exclusive item"
                onChange={(event) => handleChangeExclusivesInput(id, event)}
              />
            </div>
            <div className="form-group">
              <IconButton
                disabled={exclusives.length === 1}
                onClick={() => handleRemoveExclisiveFields(id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddExclusiveFields}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Exclusive;
