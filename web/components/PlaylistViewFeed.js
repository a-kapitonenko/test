import React from 'react';
import { Grid, Icon } from 'some-react--ui-lib';

const PlaylistViewFeed = ({
  playlistNewsfeedLoading,
  playlistNewsfeed,
}) => {
  return (
    <div>
      <Grid.Row centered>
        {playlistNewsfeedLoading && <Icon loading name='spinner' />}
        {!playlistNewsfeedLoading && playlistNewsfeed && playlistNewsfeed.length === 0 && <p>Add people to this playlist to see a custom newsfeed of their work here</p>}
        <Grid centered stackable columns={3} relaxed>

          {playlistNewsfeed && playlistNewsfeed.length > 0 && playlistNewsfeed.map(newsFeed => {
            //some specific code
          })}
        </Grid>
      </Grid.Row>
    </div>
  );
};

export default PlaylistViewFeed;
