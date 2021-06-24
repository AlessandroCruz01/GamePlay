import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: theme.colors.secondary40,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        borderRadius: 8,
        color: theme.colors.heading,
        marginRight: 3,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        textAlignVertical: 'top',
        paddingHorizontal: 16,
        paddingTop: 16

    },

})