import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

function AlbumItem({ album }) {
  return (
    <div className="album">
      <p>{album.name}</p>
    </div>
  );
}

export default AlbumItem;
