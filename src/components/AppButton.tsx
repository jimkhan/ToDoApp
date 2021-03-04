import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import colors from '../config/colors';

interface propsDec{
    name: string,
    style: object,
    textStyle: object,
    onPress: ()=> void
}

const Button = ({ name, style, textStyle, onPress }: propsDec) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttontxt, textStyle]}> {name} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('25%'),
        height: hp('6%'),
        borderRadius: hp('4%'),
        marginHorizontal: 10,
        elevation: 4,
    },
    buttontxt: {
        color: colors.white,
        fontFamily: 'Poppins_Medium',
        fontSize: RFValue(15),
    
    },
});
export default Button;
