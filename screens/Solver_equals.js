import * as React from 'react';
import { Text, Image, View, StyleSheet , Button, TouchableOpacity  } from 'react-native'; // библиотека для отладки приложения и проверки кнопок и другие элементы
import { LinearGradient } from 'expo-linear-gradient'; // библиотека для линейных градиентов
import Constants from 'expo-constants'; // использование констант в коде

export default function Solver_equals({route, navigation}) {

  console.log(route.params.d)

  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  return (
    <LinearGradient
        colors={['#C6FFDD', '#FBD786', '#f7797d']} // цвета для градиента
        style={styles.container}
      >
      <Image source={require('../img/mathemitics.png')}
      style={styles.image}/>

      <Text style={styles.text}>Давайте посмотрим на решение уравнения!</Text>

      <View style={styles.card}>

        <Text style={styles.text_korny}>
        D = b^2 - 4ac = {route.params.data.d}
        </Text>

        <Text style={styles.text_korny}>
        Корни уравнения:
        </Text>

        <Text style={styles.text_korny}>
        Х1 = -b + √ D / 2*a = ${route.params.d}
        </Text>

        <Text style={styles.text_korny}>
        Х2 = -b - √ D / 2*a =
        </Text>

      </View>

      <AppButton style={styles.button} title="Назад"
      onPress = {() => navigation.goBack()}/>

    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  card:{
    borderRadius: 60,
    width:320,
    backgroundColor:"white",
  },

  image:{ 
    height:300,
    width:420,
    justifyContent:"center",
    borderRadius: 60,
    padding: 8,

    },
  text:{
    fontSize:20,
    textAlign: "center",
    marginTop: 20,
    padding: 8,
    fontFamily:"Calibri",
    fontWeight: "Bold",
  },

  text_korny:{
    fontSize:20,
    textAlign: "center",
    marginTop: 10,
    padding: 8,
    fontFamily:"Calibri",
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
    margin:8,
    padding: 8,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  },
);
