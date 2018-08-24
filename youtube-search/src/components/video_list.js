/**
 * Contains the video_list_items
 */

import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  const VideoItems = props.videos.map((video) => {
    return(
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    )
  });

  return(
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  )

  /**
   * Example of using array.map
   * var ar = [1, 2, 3]
   * ar.map(function(number){ return number * 2 }) //[2, 4, 6]
   */
}


//Export to allow other components to use it
//E
export default VideoList;
