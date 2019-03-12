import React from 'react';
import { Subscription } from './Subscription/Subscription';
import { Divider } from 'semantic-ui-react';
import { SideBarHeader } from '../SideBarHeader/SideBarHeader';

export const Subscriptions = props => {
  return (
    <React.Fragment>
      <SideBarHeader title="subscriptions" />
      <Subscription label="MusicChannel" broadcasting />
      <Subscription label="Coursea" amountNewVideos={10} />
      <Subscription label="TEDx Talks" amountNewVideos={23} />
      <Subscription label="Stanford iOS" amountNewVideos={4} />
      <Subscription label="Udacity" amountNewVideos={114} />
    </React.Fragment>
  );
};
