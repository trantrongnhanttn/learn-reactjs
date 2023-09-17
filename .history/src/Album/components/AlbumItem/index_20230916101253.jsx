import React from "react";
import PropTypes from "prop-types";

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

function AlbumItem(props) {
  const { album } = props;
  return <div></div>;
}

export default AlbumItem;
