import React from "react";
import {
    View,
    FlatList,
    Text,
} from 'react-native'
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";
import { Appointments } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background'

export function Home() {
    const [category, setCategory] = useState('')

    const navigation = useNavigation()

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },

        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },

    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)  //Ternario para testar, categoryId é true? ou seja , o icone esta selecionado? se sim desmarca, se nao marca com o id da opcao selecionada
    }

    function handleAppoitmentDetails() {
        navigation.navigate('AppoitmentDetails')
    }

    function handleAppoitmentCreate() {
        navigation.navigate('AppoitmentCreate')
    }

    return (

        <Background>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppoitmentCreate} />
            </View>


            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
                hasCheckBox={false}
            />


            <ListHeader
                title="Partidas Agendadas"
                subtitle="Total 6"
            />


            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointments
                        data={item}
                        onPress={handleAppoitmentDetails}
                    />

                )}
                ItemSeparatorComponent={() => <ListDivider />} //divisor de lista
                contentContainerStyle={{ paddingBottom: 39 }}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />

        </Background>
    )
}