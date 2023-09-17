import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";

AlbumList.propTypes = {
  albumList: PropTypes.array,
};

AlbumList.defaultProps = {
  albumList: [],
};

function AlbumList(props) {
  const { albumList } = props;
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <AlbumItem album={album} />
      ))}
    </ul>
  );
}

export default AlbumList;
