import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between', 
        padding:4,       
    },
    textTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:18,
        marginRight:5
    },
    textDesc:{
        color:'gray',
        fontWeight:'bold',
        fontSize:12,
        marginRight:5,
        padding:4,
        marginLeft:3
    },
    

})


export default styles;