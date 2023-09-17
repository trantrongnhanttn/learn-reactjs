import React from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  return <div></div>;
}

export default TodoForm;
