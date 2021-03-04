import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

import colors from '../config/colors'

interface propsDec{
    styletext: object,
    style: object,
}

const AppTextInput = ({ styletext, style, ...otherProps }: propsDec) => {
    return (
        <View style={[styles.conatiner, style]}>

            <TextInput
                style={[styles.inputtext, styletext]}
                placeholderTextColor="#777878"

                {...otherProps}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'center',
        flexDirection: 'row',
        width: wp('75%'),
        height: hp('6%'),
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: hp('2%'),
        backgroundColor: colors.white,
        borderColor: colors.backLightingBorder,
    },
    inputtext: {
        paddingHorizontal: wp(5),
        alignItems: 'center',
        width: wp('75%'),
        height: hp('6%'),
        fontSize: RFValue(15),
        textAlign: 'left',
        fontFamily: 'Poppins-Medium',
        color: colors.dark,
    },
})

export default AppTextInput;
