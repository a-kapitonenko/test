import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUniquePersons } from './helpers/playlistViewFeed';
import { getPlaylistNewsfeed } from './store/playlistSearch';

const mapStateToProps = (state) => ({
  playlistID: state.playlist.id,
  playlistNewsfeed: state.playlistViewFeed.newsFeed,
  playlistNewsfeedLoading: state.playlistViewFeed.loading,
  playlistNewsfeedView: state.playlistViewFeed.view,
});

const mapDispatchToProps = (dispatch) => ({
  loadPlaylistNewsfeedView = (playlistID) => dispatch(getPlaylistNewsfeed(playlistID)),
});

class PlaylistViewFeedContainer extends React.Component {
  componentDidMount() {
    const { playlistID } = this.props;

    console.log('componenent newsfeed did mount for playlistid:', playlistID);

    this.loadPlaylistNewsfeedView(playlistID);
  }

  render() {
    {this.props.children({
      ...this.props,
      getUniquePersons,
      // other methods
    })}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistViewFeedContainer);
