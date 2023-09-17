import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

function AlbumItem({ album }) {
  return (
    <div className="album">
      <div>
        <img src={album.thumbnailUrl} alt={album.name} />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default AlbumItem;
