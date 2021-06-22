import React from "react";
import { View } from 'react-native'
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";

export function Home() {
    const [category, setCategory] = useState('')

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)  //Ternario para testar, categoryId é true? ou seja , o icone esta selecionado? se sim desmarca, se nao marca com o id da opcao selecionada
    }

    return (
        <View>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>


        </View>
    )
}