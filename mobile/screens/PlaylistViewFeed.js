import React from 'react';
import { View, Text } from 'react-native';
import { Grid, Icon } from 'some-react-native-ui-lib';

const PlaylistViewFeed = ({
  playlistNewsfeedLoading,
  playlistNewsfeed,
}) => {
  return (
    <View>
      <Grid.Row centered>
        {playlistNewsfeedLoading && <Icon loading name='spinner' />}
        {!playlistNewsfeedLoading && playlistNewsfeed && playlistNewsfeed.length === 0 && <Text>Add people to this playlist to see a custom newsfeed of their work here</Text>}
        <Grid centered stackable columns={3} relaxed>

          {playlistNewsfeed && playlistNewsfeed.length > 0 && playlistNewsfeed.map(newsFeed => {
            //some specific code
          })}
        </Grid>
      </Grid.Row>
    </View>
  );
};

export default PlaylistViewFeed;
