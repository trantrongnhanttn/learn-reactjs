import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

function AlbumItem(props) {
  const { album } = props;
  return (
    <div className="album">
      <img src="{album.thumbnailUrl}" />
      <p>{album.name}</p>
    </div>
  );
}

export default AlbumItem;
