import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";
import "./styles.scss";

AlbumList.propTypes = {
  albumList: PropTypes.array,
};

AlbumList.defaultProps = {
  albumList: [],
};

function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <AlbumItem album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
