import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors, size, bStyle } from "../constants";

import { Container, Content, Text } from "native-base";

export const Post = ({data}) => (
  <Content style={styles.container}>
    <Image style={styles.image} source={{ uri: data.image }} />
    <View style={styles.content}>
      <Text style={bStyle.userTitle}>{data.name}</Text>
      <Text style={styles.subTitle}>{data.subtitle}</Text>
      <Text style={styles.text}>{data.content}</Text>
    </View>
  </Content>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.back
  },
  content: {
    padding: size.b2
  },
  subTitle: {
    fontSize: size.f,
    marginTop: size.b,
    fontWeight: "bold",
    color: colors.black
  },
  text: {
    marginTop: size.b,
    fontSize: size.f,
    color: colors.black
  },
  image: {
    width: "100%",
    height: 200
  }
});
