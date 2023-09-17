import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: "Remix Việt Ngày Nay",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/a/7/1/7a7136815903ef6b8ec358dd10dbae47.jpg",
    },
    {
      id: 2,
      name: "Nhạc Trẻ Vinahouse",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/e/8/c/9e8c67c23bace04d5e0e99b850ced883.jpg",
    },
    {
      id: 3,
      name: "EDM Remix",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/1/1/a/a11a5c43ddcbbde167ab9ba3c90e6090.jpg",
    },
    {
      id: 4,
      name: "Remix 50: Zing Choice",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/0/2/2/002212df89c3a2cc6c4caff37b63be95.jpg",
    },
    {
      id: 5,
      name: "TikTok Remix",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/7/e/f/a7eff06ffdc4981ebd498674c5502220.jpg",
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;
