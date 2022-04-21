import React from "react";

const FilterBTN = ({name, index, items}) => {
  return (
    <>
      <div className="form-check">
        <input
          type="radio"
          id={`${name}-${index}`}
          name={name}
          className="form-check-input"
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`} >{items}</label>
      </div>
    </>
  );
};

export default FilterBTN;
