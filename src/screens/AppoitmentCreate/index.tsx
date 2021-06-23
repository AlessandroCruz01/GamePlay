import React, { useState } from "react";
import {
    ImageBackground,
    Text,
    View,
    FlatList
} from "react-native";
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from "@expo/vector-icons";

import { styles } from './styles'

import { theme } from "../../global/styles/theme";

import { Background } from '../../components/Background'
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { SmallInput } from "../../components/SmallInput";

import { GuildIcon } from "../../components/GuildIcon";



export function AppoitmentCreate() {
    const [category, setCategory] = useState('')

    return (
        <Background>
            <Header
                title='Agendar Partida'
            />

            <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                Categoria
            </Text>

            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />

            <View style={styles.form}>
                <RectButton>

                    <View style={styles.select}>


                        {/* <View style={styles.image} /> */}
                        <GuildIcon />

                        <View style={styles.selectBody}>
                            <Text style={styles.label}>

                                Selecione Um servidor

                            </Text>
                        </View>

                        <Feather
                            name="chevron-right"
                            color={theme.colors.heading}
                            size={18}
                        />

                    </View>

                </RectButton>

                <View style={styles.field}>
                    <View>
                        <Text style={styles.label}>
                            Dia e Mês
                        </Text>
                        <View style={styles.column}>
                            <SmallInput maxLength={2} />
                            <Text style={styles.divider}>
                                /
                            </Text>
                            <SmallInput maxLength={2} />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.label}>
                            Horario
                        </Text>
                        <View style={styles.column}>
                            <SmallInput maxLength={2} />
                            <Text style={styles.divider}>
                                :
                            </Text>
                            <SmallInput maxLength={2} />
                        </View>
                    </View>

                </View>
            </View>

        </Background>
    )

}