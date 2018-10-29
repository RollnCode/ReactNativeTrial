import React, { Component } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl
} from "react-native";

import {
  Container,
  Content,
  Thumbnail,
  Text,
  List,
  Card,
  CardItem,
  Body,
  ListItem
} from "native-base";

import { colors, size, bStyle } from "../constants";
import { Actions } from "react-native-router-flux";

import {Tags} from '../component';

export const Home = ({user, tasks, posts, isRefreshing, isConnected, props}) => {
    //workaround url from server API doesn't work
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    let taskCount = 4;
    if (tasks && tasks.length) {
      taskCount = tasks.length;
    }
    return (
      <Container>
      {!isConnected && <Text style={styles.connectError}>No internet connection</Text>}
      <Content
        style={bStyle.container}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              console.log("onRefresh");
            }}
          />
        }
      >
        <Thumbnail large source={{ uri: uri }} />
        <Text style={bStyle.userTitle}>
          {"Hi " + (user.first_name || "username") + ", "}
        </Text>

        <Text style={styles.subTitle}>
          {"You have " + taskCount + " requests to catch up on today."}
        </Text>

        <List
          dataArray={tasks}
          horizontal={true}
          renderRow={(item) => (
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => {
                Actions.article({ data: item });
              }}
            >
              <CardItem header>
                <Text>{item.name}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{item.subtitle}</Text>
                </Body>
              </CardItem>
              {item.tags && <CardItem footer>
                <Tags tags={item.tags} />
              </CardItem>}
            </TouchableOpacity>
          )}
        />

        <Text style={styles.subTitle}>
          {"Here are some blog posts you may like to read."}
        </Text>
        <List
          dataArray={posts}
          horizontal={true}
          renderRow={item => (
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => {
                Actions.post({ data: item });
              }}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <CardItem header>
                <Text>{item.name}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{item.subtitle}</Text>
                </Body>
              </CardItem>
            </TouchableOpacity>
          )}
        />
      </Content>
    </Container>
    );
}

const styles = StyleSheet.create({
  connectError: {
    color: colors.white,
    fontSize: size.ft,
    backgroundColor: colors.pink,
    justifyContent: 'center',
    width: "100%",
    padding: size.b,
    textAlign: 'center'
  },
  subTitle: {
    marginTop: size.b2,
    fontSize: size.f,
    color: colors.black
  },
  cardItem: {
    backgroundColor: colors.white,
    marginRight: size.b,
    marginTop: size.b,
    borderRadius: size.b,
    height: 200,
    width: 200,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2
  },
  image: {
    width: "100%",
    height: 100
  }
});
