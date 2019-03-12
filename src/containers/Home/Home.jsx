import React from 'react';
import { VideoPreview } from '../../components/VideoPreview/VideoPreview';
import { SideBar } from '../SideBar/SideBar';
import './Home.scss';
import { VideoGrid } from '../../components/VideoGrid/VideoGrid';

export const Home = () => (
  <React.Fragment>
    <SideBar />
    <div className="home">
      <VideoGrid title="trending" />
      <VideoGrid title="Autos & Vehicles" hideDivider={true} />
    </div>
  </React.Fragment>
);
