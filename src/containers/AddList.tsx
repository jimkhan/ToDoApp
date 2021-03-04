import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Use it if needed

import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../config/colors';
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'

import { connect } from 'react-redux'

interface propsDec{
    visibility: boolean,
    outSidePress: ()=> void,
}


const ModalView = ( props ) => {

    const [title,  setTitle] = useState('');
    const [description, setDescription] = useState('');

    const date = new Date();
    const [deadline, setDeadline] = useState(date);



    const addTodo = (title) => {

        props.dispatch({ type: 'CREATE_TODO', title, description, deadline})
        setTitle('')
        setDeadline('')
        setDescription('')
    }

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={props.visibility}
        >
            <LinearGradient
                colors={[colors.secondaryRGB, colors.primaryRGB]}
                style={styles.linearGradient}>
                <TouchableWithoutFeedback >
                  
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                        <View style={styles.modal}>
                            <AppTextInput 
                                value={title}
                                placeholder={"Add title"}
                                onChangeText={(text)=>setTitle(text)} 
                                />
                            <AppTextInput 
                                value={description}
                                onChangeText={(text) => setDescription(text)} 
                                placeholder={"Add description"} 
                                style={styles.inputContainer}
                                styletext={styles.textInput}
                                multiline={true}
                    
                            />
                            <AppText style={{ paddingLeft: hp(2), fontSize: RFValue(10), alignSelf: 'flex-start',}} >Deadline formate [2021-02-11T15:23:16.411Z]</AppText>
                     
                            <AppTextInput 
                                value={deadline}
                                onChangeText={(text) => setDeadline(text)}
                                placeholder={"Dead Line"} 
                                />
                            
                            <View style={styles.buttonContainer} >

                                <AppButton name={"Cancle"} style={styles.cancle} onPress={props.outSidePress} />
                                <AppButton name={"Save"} onPress={()=> addTodo(title, description, deadline)} style={styles.save}/>

                            </View>
                            
                        </View>
                        </ScrollView>
                    {/* </View> */}
                </TouchableWithoutFeedback>
            </LinearGradient>
        </Modal>
    );
};

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   }
// }
export default connect() (ModalView)
// export default  ModalView;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: .7,
    },
    buttonContainer:{
        // flex: 1,
        marginVertical: hp(3),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
        height: hp('60%'),
        width: wp('90%'),
        backgroundColor: colors.white,
        borderRadius: hp('3.5%'),
        opacity: 1,
        elevation: 5,
    },
    inputContainer:{
        // alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        borderColor: colors.backLightingBorder,
        borderWidth: 1,
        // paddingHorizontal: 15,
        borderRadius: wp("4.5%"),
        // marginBottom: hp('3%'),
        // width: wp('73.6%'),
        height: hp('13.41%'),
        // flex: 1,

    },
    textInput:{
        // alignItems: 'center',
        fontSize: RFValue(11),
        // width: wp('72%'),
        height: hp('13.41%'),
        textAlign: 'left',
        textAlignVertical: 'top',

    },
    cancle:{
        backgroundColor: colors.delete,
    },
    save:{
        backgroundColor: colors.done,
    }


});


