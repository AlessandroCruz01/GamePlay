import React from "react";
import { StatusBar, LogBox } from 'react-native'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from "expo-app-loading";

// import { SignIn } from './src/screens/Signin/index'
import { Routes } from "./src/routes";
import { Background } from './src/components/Background'

//hookes - auth
import { AuthProvider } from "./src/hooks/auth";

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine'])

export default function App() {

  //Arquivos de fontes nao sao carregados instantaneamente, por isso temos a tela de splash, temos que segurar ela equanto as fontes nao sao carregas, dai criamos uma const com vetor onde teremos um valor booleano
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  //Testamos se as fontes foram ou nao carregadas...
  if (!fontsLoaded) {
    // para segurar a tela de splash temos outra biblioteca chamada... expo-app-loading
    return <AppLoading />
  }
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>

    </Background>
  );
}

