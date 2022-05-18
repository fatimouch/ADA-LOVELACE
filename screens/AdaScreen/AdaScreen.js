import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AdaScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text}>Ada Lovelace, de son nom complet Augusta Ada King, comtesse de Lovelace, née Ada Byron le 10 décembre 1815 à Londres et morte 
le 27 novembre 1852 à Marylebone dans la même ville, est une 
pionnière de la science informatique.</Text>
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
    Text:{
        fontStyle: 'italic',
        fontSize: 19,


    }
  });