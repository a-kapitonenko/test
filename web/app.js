import React from 'react';
import { PlaylistViewFeedContainer } from '../common/containers/PlaylistViewFeedContainer';
import { PlaylistViewFeed } from './components/PlaylistViewFeed';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* some code where needs PlaylistViewFeedContainer */}
        <PlaylistViewFeedContainer>
          {(props) => 
            <PlaylistViewFeed
              playlistNewsfeedLoading={props.playlistID}
              // and others methods and props
            />
          }
        </PlaylistViewFeedContainer>
      </div>
    );
  }
}

export default App;
