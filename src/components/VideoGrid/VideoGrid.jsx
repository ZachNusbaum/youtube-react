import React from 'react';
import './VideoGrid.scss';
import VideoGridHeader from './VideoGridHeader';
import { Divider } from 'semantic-ui-react';
import VideoPreview from '../VideoPreview';

export const VideoGrid = props => {
  const divider = props.hideDivider ? null : <Divider />;
  return (
    <React.Fragment>
      <VideoGridHeader title="Trending" />
      <div className="video-grid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </React.Fragment>
  );
};
