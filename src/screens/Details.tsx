import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

import AppButton from '../components/AppButton'
import colors from '../config/colors'


const Details = ({ route }) => {
    const { title, description, id, deadline, completed } = route.params;
        console.log(JSON.stringify(title));
    const [IsOkay, setIsOkay] = useState(completed);
    return (
        <View style={styles.main}>
            {/* <Text style={styles.id} > {id} </Text> */}
            <Text style={styles.title} > Title: {JSON.stringify(title)} </Text>
            <Text style={styles.description} >Description: {JSON.stringify(description)} </Text>
            <Text style={styles.deadline} >Deadline: {JSON.stringify(deadline)} </Text>
            <Text style={styles.completed} >Complete Status: {JSON.stringify(completed)} </Text>
            <View style={styles.buttonContainer} >
                <AppButton name={"Edit"} style={styles.edit} />
                <AppButton name={"Delete"} style={styles.delete} />
                <AppButton name={"Done"} style={styles.done} />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: wp(5),
        //  justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        position: "absolute",
        bottom: 35,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    edit:{
        backgroundColor: colors.edit,
    },
    delete:{
        backgroundColor: colors.delete,
    },
    done:{
        backgroundColor: colors.done,
    },
    textCommon:{
        fontSize: RFValue(20)

    },
    id:{
        
    },
    title:{
        fontSize: RFValue(20)
    
        
    },
    description:{
        fontSize: RFValue(18)
        
    },
    deadline:{
        fontSize: RFValue(18)
        
    },
    completed:{
        fontSize: RFValue(20),
        color:  colors.delete,
        
    },

});

export default Details
