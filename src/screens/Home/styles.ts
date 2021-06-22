import { StyleSheet } from "react-native";

//para Iphone, é necessario uma biblioteca para destacar detalhe da parte de cima da tela
//react-native-iphone-x-helper
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    }
})