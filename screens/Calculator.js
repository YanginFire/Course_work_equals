import React, { useState } from 'react';
import { Text,TextInput, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Calculator({navigation}) {

  

  //Константы для решения уравнения

  const [a,setA] = useState(0);
  const [b,setB] = useState(0);
  const [c,setC] = useState(0);

  // Дискриминант и корни уравнения
  const [D, setD] = useState(0);
  const [x1, setx1] = useState(0);
  const [x2, setx2] = useState(0);

  // Данные после вычисления которые будут передаваться третьему окну
  const [data, setData] = useState([]);

  const solver_equal = () => {

    setD((parseInt(b)*parseInt(b)) - (4 *(parseInt(a)*parseInt(c)))); // Дискриминант
    
    setx1(-1*parseInt(b) + Math.sqrt(D) / 2 * parseInt(a)); // x1
    setx2(-1*parseInt(b) - Math.sqrt(D) / 2 * parseInt(a)); // x2

    // Сохранение данных (список объектов дискриминанта, x1, x2)

    setData("help me")
  };

  const equals = () => {

    solver_equal();

    navigation.navigate("Solver_equals", {data})
  };


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  // Программирование кастомных кнопок для приложения

  const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  return (
    
    <LinearGradient
        colors={['#8A2387', '#E94057', '#F27121']} // цвета для градиента
        style={styles.container}
      >
    
      <View style = {styles.calculator}>

        <Text style = {styles.text}>Коэффициент А: {a}</Text>

        <TextInput style = {styles.input}
        keyboardType='numeric'
        placeholder='0'
        onChangeText={(valA) => setA(valA)}/>

        <Text style = {styles.text}>Коэффициент B: {b}</Text>

        <TextInput style = {styles.input}
        keyboardType='numeric'
        placeholder='0'
        onChangeText={(valB) => setB(valB)}/>

        <Text style = {styles.text}>Коэффициент C: {c}</Text>

        <TextInput style = {styles.input}
        keyboardType='numeric'
        placeholder='0'
        onChangeText={(valC) => setC(valC)}/>

        <View style={styles.card}>
          <Text style = {styles.text_equal}>Уравнение:</Text>
          <Text style = {styles.text_equal}>{a}x^2 + {b}x + {c} = 0</Text>
        </View>

        <AppButton
        title="Решение"
        onPress= {() => equals()}
        />
        
        <AppButton
        title="Назад"
        onPress= {() => navigation.goBack()}
        />
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card:{
    width: 300,
    textAlign:"center",
    justifyContent:"center",
    borderRadius: 15,
    backgroundColor: "#ff9959",
    borderWidth:2,
    borderColor: "#ff883d",
  },

  input:{
    borderWidth: 3,
    borderColor: "#ff883d",
    width: 200,
    padding:10,
    borderRadius: 15,
    margin: 10,
    marginTop: 20,
    fontSize: 20,
    backgroundColor: "#FC466B",
    textAlign: "center",
    color: "white",
    fontFamily:"Calibri",
    flexDirection: "row",
  },

  text:{
    fontSize: 20,
    fontFamily:"Calibri",
    fontWeight: "Bold",
  },

  text_equal:{
    fontSize: 25,
    textAlign:"center",
    color: "white",
    fontFamily:"Calibri",
    fontWeight: "Bold",
  },

  appButtonContainer: {
    padding:30,
    margin: 20,
    width: 200,
    height: 50,

    elevation: 8,
    backgroundColor: "#DA4453",
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

  calculator: {
    margin:120,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
