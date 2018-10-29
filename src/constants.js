import {moderateScale} from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

export const links = {
  user: "https://www.mocky.io/v2/5b9751e5300000332a0bd52d",
  tasks: "https://www.mocky.io/v2/5b97533d30000070000bd533",
  posts: "https://www.mocky.io/v2/5b9755c43000006a000bd53f"
};

const baseSize = moderateScale(8);

export const colors = {
  violet: "#703fff",
  back: "#f1f1f1",
  white: "#ffffff",
  black: "#161616",
  pink: "#fd0083",
  blue: "#1b17fc"
};


export const size = {
  d2: baseSize/2,
  b: baseSize,
  b2: baseSize*2,
  b4: baseSize*4,
  ft: moderateScale(24),
  fsub: moderateScale(18),
  f: moderateScale(16),
  fm: moderateScale(14),
  fs: moderateScale(12),

};

export const bStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.back,
    flex: 1,
    padding: size.b2
  },
  userTitle: {
    fontWeight: 'bold',
    fontSize: size.ft,
    color: colors.violet
  },
  tag: {
    padding: size.b,
    borderRadius: size.b,
    marginRight: size.b,
    overflow: 'hidden',
    color: colors.white,
    fontSize: size.fs,
    fontWeight: "bold"
  }
});
