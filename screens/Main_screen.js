import * as React from 'react';
import { Text, Image, View, StyleSheet,Button, TouchableOpacity } from 'react-native'; // библиотека для отладки приложения и проверки кнопок и другие элементы
import { LinearGradient } from 'expo-linear-gradient'; // библиотека для линейных градиентов
import Constants from 'expo-constants'; // использование констант в коде
import { useFonts } from 'expo-font'; // библиотека для применения шрифтов


export default function Main_screen({navigation}) {

  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  );

  return (
    <LinearGradient
        colors={['#83a4d4', '#b6fbff']} // цвета для градиента
        style={styles.container}
      >
      <View style={styles.mainscreen}>
        <Text style={styles.higthtext}>Рады приветствовать Вас в MathHack! </Text>
        <Text style={styles.lowertext}> Нажмите на кнопку чтобы начать работу приложения {"\n"} и погрузиться в увлекательный процесс решения уравнений!</Text>

        <Image source={require('../img/math_icon.png')}
        style={styles.image}/> 

        <AppButton style={styles.button}
          title="Нажми меня"
          onPress={() => navigation.navigate("Calculator")}
        />
        
      </View>
      </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  mainscreen: {
    justifyContent: "center",
    textAlign: "center",
  },
  
  image:{ 
    width:300,
    height:200,
    borderRadius: 50,
    marginTop: 30,
    marginBottom:30,
    marginLeft: 50,
    },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#4d3de0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  higthtext: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
    fontFamily:"Calibri",
    fontWeight: "Bold",
  },
  lowertext: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: 45,
    fontSize: 20,
    fontFamily:"Calibri",
  },
});
