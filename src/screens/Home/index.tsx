import React, { useState, useCallback } from "react";
import {
    View,
    FlatList,
    Text,
} from 'react-native'
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { styles } from "./styles";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointments, AppointmentsProps } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../config/database";
import { Load } from "../../components/Load";

export function Home() {
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState<AppointmentsProps[]>([])

    const navigation = useNavigation()

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)  //Ternario para testar, categoryId é true? ou seja , o icone esta selecionado? se sim desmarca, se nao marca com o id da opcao selecionada
    }

    function handleAppoitmentDetails() {
        navigation.navigate('AppoitmentDetails')
    }

    function handleAppoitmentCreate() {
        navigation.navigate('AppoitmentCreate')
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const storage: AppointmentsProps[] = response ? JSON.parse(response) : []

        if (category) {
            setAppointments(storage.filter(item => item.category === category))
        } else {
            setAppointments(storage)
        }

        setLoading(false)

    }

    useFocusEffect(useCallback(() => {
        loadAppointments()
    }, [category]))

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

            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            title="Partidas Agendadas"
                            subtitle={`Total ${appointments.length}`}
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
                    </>
            }

        </Background>
    )
}