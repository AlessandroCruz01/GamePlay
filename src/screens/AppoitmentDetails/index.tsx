import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    Text,
    View,
    FlatList,
    Alert,
    Share,
    Platform
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import * as Linking from 'expo-linking'

import { styles } from './styles'

import { theme } from "../../global/styles/theme";

import BannerImg from '../../assets/banner.png'

import { ListHeader } from "../../components/ListHeader";
import { Background } from '../../components/Background'
import { Header } from "../../components/Header";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/Buttonicon";
import { useRoute } from "@react-navigation/native";
import { AppointmentsProps } from "../../components/Appointments";
import { api } from "../../services/api";
import { Load } from "../../components/Load"

type Params = {
    guildSelected: AppointmentsProps
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

export function AppoitmentDetails() {
    const [widget, setGuildWidget] = useState<GuildWidget>({} as GuildWidget)
    const [loading, setLoading] = useState(true)

    const route = useRoute()
    const { guildSelected } = route.params as Params

    async function fatchGuildWidget() {

        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
            setGuildWidget(response.data)
            setLoading(false)
        } catch {
            Alert.alert('Verifique as configs do seu server. Widget tem que estar ativado!')
        } finally {
            setLoading(false)
        }

    }

    function share() {
        const message = Platform.OS === 'ios'
            ? `Junte-se a ${guildSelected.guild.name}`
            : widget.instant_invite

        Share.share({
            message,
            url: widget.instant_invite
        })
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite)
    }

    useEffect(() => {
        fatchGuildWidget()
    })

    return (
        <Background>
            <Header
                title='Detalhes'
                action={
                    guildSelected.guild.owner &&
                    <BorderlessButton onPress={share}>
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

            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            title="jogadores"
                            subtitle={''}
                        />

                        <FlatList
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Member data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider isCentered />}
                            style={styles.members}
                        />
                    </>
            }

            {
                guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon
                        title={'Entrar na partida'}
                        onPress={handleOpenGuild}
                    />
                </View>
            }

        </Background>
    )

}
