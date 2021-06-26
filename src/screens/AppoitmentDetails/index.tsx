import React from "react";
import {
    ImageBackground,
    Text,
    View,
    FlatList
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { styles } from './styles'

import { theme } from "../../global/styles/theme";

import BannerImg from '../../assets/banner.png'

import { ListHeader } from "../../components/ListHeader";
import { Background } from '../../components/Background'
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/Buttonicon";
import { useRoute } from "@react-navigation/native";
import { AppointmentsProps } from "../../components/Appointments";

type Params = {
    guildSelected: AppointmentsProps
}

export function AppoitmentDetails() {

    const route = useRoute()
    const { guildSelected } = route.params as Params

    const members = [
        {
            id: '1',
            username: 'Alessandro',
            avatar_url: 'https://github.com/AlessandroCruz01.png',
            status: 'online'
        },

        {
            id: '2',
            username: 'Alessandro',
            avatar_url: 'https://github.com/AlessandroCruz01.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>

                    <Text style={styles.title}>
                        {guildSelected.guild.name}
                    </Text>

                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>

                </View>
            </ImageBackground>

            <ListHeader
                title="jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon
                    title={'Entrar na partida'}
                />
            </View>

        </Background>
    )

}
