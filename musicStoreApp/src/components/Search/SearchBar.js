import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./searchbarStyle";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={{color:'rebeccapurple'}} placeholder="search..." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
