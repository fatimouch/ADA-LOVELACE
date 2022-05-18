import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';



export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.home}> Bienvenue dans le monde de "ADA Lovelace"</Text>
            <Button
        onPress={() => navigation.navigate('LOVELACE')}
        title="En Savoir plus"
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
    home: {
        marginTop: 5,
        marginBottom: 30,
        fontSize: 15,
        fontStyle: "italic"

    
    }
  });