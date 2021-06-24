// Renderizacao de componentes
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native'

import { ButtonIcon } from "../../components/Buttonicon";
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
// import { useNavigation } from "@react-navigation/native";
import { Background } from '../../components/Background'

//Usando a autenticacao, hooks
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export function SignIn() { //Neste caso nao usamos o defaut, pois quando formos importar por chaves!
    const { loading, signIn } = useAuth()

    async function handleSignIn() {
        try {
            await signIn()
        } catch (error) {
            Alert.alert(error)
        }
    }

    return (
        <Background>
            <View style={styles.container}>

                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode='stretch'
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos {'\n'}
                    </Text>

                    {
                        loading
                            ? <ActivityIndicator color={theme.colors.primary} />
                            :
                            <ButtonIcon
                                title={'Entrar com Discord'}
                                onPress={handleSignIn}
                            />
                    }


                </View>
            </View >
        </Background>
    );
}