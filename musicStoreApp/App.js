import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import music_data from "./music-data.json";
import Card from "./src/components/Card";
import SearchBar from "./src/components/Search/SearchBar";

export default function App() {
  const renderMusic = ({ item }) => <Card music={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  const [list, setList] = useState(music_data);

  const handleChange = (text) => {
    const filterList = music_data.filter((music) => {
      const searchedText = text.toLowerCase();
      const currentTitle = music.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filterList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleChange} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderMusic}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    borderWidth: 0.5,
    borderColor: "mediumpurple",
  },
  container: {
    flex: 1,
    top: 50,
  },
});
