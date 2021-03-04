import React, {useState} from 'react'
import { TouchableOpacity,StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors'
import AppText from './AppText'


import { useNavigation } from '@react-navigation/native';

interface propsDec {
    title: string,
    description: string,
    id: number,
    onPress: () => void
}

const TaskButton = ({ title, description, id, deadline, completed,  onPress, }: propsDec) => {

      const [icon, setIcon] = useState(false)
      const navigation = useNavigation();
    return (
        <>
        <TouchableOpacity style={styles.container} 
                onPress={() => navigation.navigate("Details", { title: title, description: description, id: id, deadline: deadline, completed: completed })} >
            
                <AppText>{title}</AppText>
                
                   { icon && <Icon name={"checkmark-circle"} size={30} color={"#37D7B2"} />}
               
          
        </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 6,
        height: hp("6.5%"),
        width: wp("90%"),
        paddingHorizontal: wp("3%"),
        borderRadius: hp("4"),
        margin: hp(1),
    },
    iconArea:{
        // backgroundColor: "#37D7B2",
        width: hp("3.5%"),
        height: hp("3.5%"),
        borderRadius: hp("2%"),
    }
});

export default TaskButton
