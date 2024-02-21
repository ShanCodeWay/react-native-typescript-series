import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CommonButton from './src/component/CommonButton.tsx'; 

const App = () => {
  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  return (
    <View style={{ flex: 1 }}>
     
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/ShanCodeWay/ShanCodeWay/main/linkdean.png' }}
        style={styles.banner}
        resizeMode="cover" 
      />
     
      <View style={styles.contentContainer}>
       
      <Text style={styles.text}>Welcome to TypeScript App</Text>
        <CommonButton
          type="1"
          title="Next"
          onPress={handleButtonPress}
          width="50%"
          height={45}
          backgroundColor="royalblue"
          borderRadius={25}
          textAlign="center"
          textColor="seashell"
          fontFamily="Arial"
          textSize={25}
        />
      </View>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/ShanCodeWay/ShanCodeWay/main/linkdean.png' }}
        style={styles.banner}
        resizeMode="contain" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    
  },
  text:{
    width: '90%',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
  }
});

export default App;
