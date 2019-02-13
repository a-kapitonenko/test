import React from 'react';
import { View, Text } from 'react-native';
import { PlaylistViewFeedContainer } from '../common/containers/PlaylistViewFeedContainer';
import { PlaylistViewFeed } from './screens/PlaylistViewFeed';

class App extends React.Component {
  render() {
    return (
      <View>
        {/* some code where needs PlaylistViewFeedContainer */}
        <PlaylistViewFeedContainer>
          {(props) => 
            <PlaylistViewFeed
              playlistNewsfeedLoading={props.playlistID}
              getUniquePersons={props.getUniquePersons}
              // and others methods and props
            />
          }
        </PlaylistViewFeedContainer>
      </View>
    );
  }
}

export default App;
