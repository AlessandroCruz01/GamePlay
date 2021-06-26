import React from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { Avatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";

export function Profile() {

    const { user } = useAuth()

    function sair() {
        Alert.alert('Sair', 'Deseja sair?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },

                {
                    text: 'Sim',
                    // onPress: ()// termina
                }
            ])
    }

    return (
        <View style={styles.container}>


            <RectButton onPress={sair}>
                <Avatar urlImage={user.avatar} />
            </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
                    </Text>

                    <Text style={styles.userName}>
                        {user.username}
                    </Text>
                </View>

                <Text style={styles.mensagem}>
                    Hoje é dia de vitória!
                </Text>

            </View>

        </View>
    )
}