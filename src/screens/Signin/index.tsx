// Renderizacao de componentes
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    StatusBar
} from 'react-native'

import { ButtonIcon } from "../../components/Buttonicon";
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'

export function SignIn() { //Neste caso nao usamos o defaut, pois quando formos importar por chaves!
    // Criando um estado!
    // const [text, setText] = useState('Alessandro'); //passamos [nomeDoEstado, funcaoQueAtualizaEsseEstado] = useState(<valorInicial>)

    return (
        <View style={styles.container}>

            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas {'\n'}
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos {'\n'}
                </Text>

                <ButtonIcon
                    title={'Entrar com Discord'}
                />

            </View>

        </View >
    );
}