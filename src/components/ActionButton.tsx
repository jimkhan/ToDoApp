import React, {useState} from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';
import AddList from '../containers/AddList'

const ActionButton = (props) => {
    const [value, setValue] = useState(false);
    return (
        <>
        <AddList visibility={value} outSidePress={()=> setValue(false)} />
        <TouchableOpacity style={styles.container} onPress={()=>setValue(!value)} >
            <Icon name={"md-add"} color={colors.white} size={RFValue(35)} />
        </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: colors.done,
        justifyContent: 'center',
        alignItems: 'center',
        width: hp("8%"),
        borderRadius: 50,
        height: hp("8%"),
    }
});

export default ActionButton
