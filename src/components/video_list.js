import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect} />
    )
  })
  // props is anargument here but in a class, props is available as class's props property (ie referencedas this.props instead)
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
