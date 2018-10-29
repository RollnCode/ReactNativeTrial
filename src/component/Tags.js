import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { colors, bStyle } from "../constants";

export const Tags = ({tags}) => {
  return tags.map((item, index) => {
    const backgroundColor = index %2 == 0 ? colors.blue : colors.pink;
    return (<Text key={item} style={[bStyle.tag, {backgroundColor}]}>{item}</Text>);
  });
};
