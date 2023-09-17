import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    return e.target.value;
  }

  return (
    <form>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;
