import React, { Component } from "react";
import { NetInfo } from 'react-native';
import { getUserInfo } from "../actions/user";
import { getTasks } from "../actions/tasks";
import { getPosts } from "../actions/posts";
import { connect } from "react-redux";
import { Home } from "../component";

class HomeScreen extends Component {

  constructor() {
    super();
    this.state = {
      isConnected: true
    }
  }

  handleConnectivityChange = (isConnected) => {
     this.setState({ isConnected });
  };

  componentDidMount() {
    this.loadAll();
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  loadAll = () => {
    if (this.state.isConnected) {
      this.props.onGetUser();
      this.props.onGetTasks();
      this.props.onGetPosts();
    }
  }

  render() {
    return (<Home
      isConnected={this.state.isConnected}
      onRefresh={() => {
        this.loadAll(true);
      }}
      {...this.props} />);
  }
}

const sortPosts = (posts) => {
   posts.sort((a, b) => {
     return a.order - b.order;
   });
   return posts;
};

export default connect(
  state => ({
    user: state.user,
    tasks: state.tasks,
    posts: sortPosts(state.posts),
    isRefreshing: state.refresh
  }),
  dispatch => ({
    onGetUser: () => dispatch(getUserInfo()),
    onGetTasks: () => dispatch(getTasks()),
    onGetPosts: () => dispatch(getPosts())
  })
)(HomeScreen);
