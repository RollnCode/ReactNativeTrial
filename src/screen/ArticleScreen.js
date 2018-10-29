import React, { Component } from 'react';
import { Actions } from "react-native-router-flux";
import { Article } from '../component';

export default class ArticleScreen extends Component {

  componentDidMount() {
    Actions.refresh({title: this.props.data.name})
  }

  render() {
    return <Article data={this.props.data} />;
  }
}
