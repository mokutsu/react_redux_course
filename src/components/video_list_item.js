import React from 'react';
// essentially the same as feeding in props {video: video} into {video: video}, and rename the property as a var name
// with props, {video: video, onVideoSelect: onVideoSelect}

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li
      className='list-group-item col-md-12'
      onClick={() => { onVideoSelect(video)}}
    >
      <div className='video-list media'>
        <div className='media-left'>
          <img src={imageUrl} alt="" className='media-object' />
        </div>

        <div className='media-body'>
          <div className='media-heading'>
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
