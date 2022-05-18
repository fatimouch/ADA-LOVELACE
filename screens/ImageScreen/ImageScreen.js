import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';



export default function ImageScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.img}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png"
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 300,
    height: 300
  }
});