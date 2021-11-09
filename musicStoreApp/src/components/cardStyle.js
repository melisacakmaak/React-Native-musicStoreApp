import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  textCard: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },

  text: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  artist: {
    fontSize: 15,
  },
  year: {
    marginLeft: 10,
    fontSize: 12,
    color: "gray",
  },
  soldout_Container: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: "red",
    fontSize: 12,
  },
  content_container: {
    flexDirection: "row",
  },
});

export default styles;
