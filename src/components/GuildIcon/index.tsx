import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type Props = {
    guildId: string;
    iconId: string | null
}

export function GuildIcon({ guildId, iconId }: Props) {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
    // 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-5-1.png'

    return (
        <View style={styles.container}>
            {
                iconId ?
                    <Image
                        source={{ uri }}
                        style={styles.image}
                        resizeMode='cover'
                    />
                    :

                    <DiscordSvg
                        width={40}
                        height={40}
                    />

            }
        </View>
    )
}