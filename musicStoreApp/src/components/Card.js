import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./cardStyle";

const Card = ({ music }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: music.imageUrl }}
        style={{ height: 100, width: 100, borderRadius: 50 }}
      />
      <View style={styles.textCard}>
        <Text style={styles.title}> {music.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.text}>
            <Text style={styles.artist}> {music.artist}</Text>
            <Text style={styles.year}> {music.year}</Text>
          </View>

          {music.isSoldOut && (
            <View style={styles.soldout_Container}>
              <Text style={styles.soldout_title}> sold out</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;
