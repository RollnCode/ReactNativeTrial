import React, { Component } from "react";
import { Post } from '../component';
import { Actions } from "react-native-router-flux";

export default class PostScreen extends Component {
  componentDidMount() {
    Actions.refresh({ title: this.props.data.name });
  }

  render() {
    return <Post data={this.props.data} />;
  }
}
