// Renderizacao de componentes
import React, { useState } from "react";
import {
    View,
    Text,
    Image
} from 'react-native'

import { ButtonIcon } from "../../components/Buttonicon";
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";



export function SignIn() { //Neste caso nao usamos o defaut, pois quando formos importar por chaves!
    // Criando um estado!
    // const [text, setText] = useState('Alessandro'); //passamos [nomeDoEstado, funcaoQueAtualizaEsseEstado] = useState(<valorInicial>)
    const navigation = useNavigation()

    function handleSignIn() {
        navigation.navigate('Home')
    }

    return (
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

                <ButtonIcon
                    title={'Entrar com Discord'}
                    onPress={handleSignIn}
                />

            </View>

        </View >
    );
}