import React from "react";
import { ScrollView } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { categories } from "../../utils/categories";

import { Category } from "../Category";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void; //Em outras palavras, por parametro as propriedades de CategorySelected, temos uma striong com o nome da categoria e uma funcao que recebe o id de uma categoria mas n retorna nada
    hasCheckBox: boolean,
}

export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: Props) {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))

            }
        </ScrollView >
    )
}