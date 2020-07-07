import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const CreateColorForm = ({addColor}) => {
  const history = useHistory()
  const handleSubmit = evt => {
    // do something with the data submitted
    evt.preventDefault();
    console.log("Check out state ->", formData);
    addColor(formData)
    history.push('/')
  };

  const [formData, setFormData] = useState({
    color: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  // end handleChange

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Add a new color!</button>
    </form>
  );
};
// end

export default CreateColorForm;
