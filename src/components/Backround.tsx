import React from 'react'
import { View, StyleSheet } from 'react-native'

import colors from '../config/colors';

const Backround = ({ children }) => {
    return (
        <View style={styles.main} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
    }
})

export default Backround
