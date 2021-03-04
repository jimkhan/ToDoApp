import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Use it if needed

import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../config/colors';
import AppButton from './AppButton'
import AppText from './AppText'

interface propsDec{
    visibility: boolean,
    outSidePress: ()=> void,
}


const ModalView = ({ visibility, outSidePress, }: propsDec) => {

    // const navigation = useNavigation();

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visibility}
        >
            <LinearGradient
                colors={[colors.secondaryRGB, colors.primaryRGB]}
                style={styles.linearGradient}>
                <TouchableWithoutFeedback onPress={outSidePress}>
                    <View style={styles.modalOutSide}>
                        <View style={styles.modal}>
                            <AppText>This is title</AppText>
                            <AppText>here you can write some description</AppText>
                            <AppText></AppText>
                            <View style={styles.buttonContainer} >
                                <AppButton name={"Edit"} />
                                <AppButton name={"Delete"} />
                                <AppButton name={"Done"} />

                            </View>
                            
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </LinearGradient>
        </Modal>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: .7,
    },
    buttonContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    modalOutSide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp('4%'),
        paddingHorizontal: hp("3%"),
        height: hp('40%'),
        width: wp('90%'),
        backgroundColor: colors.white,
        borderRadius: hp('3.5%'),
        opacity: 1,
        elevation: 5,
    },

});

export default ModalView;
