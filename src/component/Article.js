import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { colors, size, bStyle } from "../constants";
import { Tags } from '../component';

import {
  Container,
  Content,
  Text
} from "native-base";

export const Article = ({data}) => {
    return (
      <Content style={bStyle.container}>
        <Text style={bStyle.userTitle}>{data.name}</Text>
        <Content style={{marginTop: size.b2}} horizontal={true}>
          <Tags tags={data.tags}/>
        </Content>
        <Text style={styles.text}>{data.description}</Text>
      </Content>
    );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: size.f,
    color: colors.black
  },
  text: {
    fontWeight: "bold",
    marginTop: size.b2,
    fontSize: size.fm,
    color: colors.black
  }
});
