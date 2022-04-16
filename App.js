import React from 'react';
import Main_screen from './screens/Main_screen'; // импорт наших экранов на которых будет производиться навигация
import Calculator from './screens/Calculator';
import Solver_equals from './screens/Solver_equals';

// библиотеки для навигации внутри проекта
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// создали stack для взаимодействия с экранами
const Stack = createNativeStackNavigator();

// описание экранов для дальнейшего взаимодействия с ними
    // первый экран который описан выше всех будет являться "родителем" для Калькулятора,
    /// а Калькулятор будет родителем Результата
    // Так и работает Stack навигация
    // Stack - "наслоение"
export default function App() {
  return <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
    headerShown: false
    }}>
      <Stack.Screen
      name = "Main_screen"
      component={Main_screen}
      />
      <Stack.Screen
      name = "Calculator"
      component={Calculator}
      />
      <Stack.Screen
      name = "Solver_equals"
      component={Solver_equals}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}