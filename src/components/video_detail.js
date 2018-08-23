import React from 'react'


const VideoDetail = ({video}) => {
  //Prevents exception if video is null, due to ajax timing
  if(!video){
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`; //alternative syntax
  // const url = 'https://www.youtube.com/embed/' + videoId;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
          src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}


export default VideoDetail;
