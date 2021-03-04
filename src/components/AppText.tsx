import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

interface propsDec{
    children: string| number | null,
    style: object | null,
}

const AppText = ({ children, style }: propsDec ) => {
    return (

        <Text style={[styles.textcommon, style]} > {children} </Text>

    )
}

const styles = StyleSheet.create({
    textcommon: {
        fontSize: RFValue(15),
        color: '#000',
        fontFamily: Platform.OS === 'android' ? 'Roboto-Light' : 'Avenir',
    }
})

export default AppText;
