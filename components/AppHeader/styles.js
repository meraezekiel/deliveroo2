import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create ({

    HeaderContainer:{
        flexDirection:'row',
    },
    iconContainer:{
        marginLeft:6,
       
    
    },
    iconHeader:{
        height:30,
        width: 30, 
        backgroundColor:'gray',
        borderRadius:20,
        marginTop:4
        
    },
    textHeader1:{
        
        color:"gray",
        fontWeight:'bold',
        fontSize:13,

    },
    textHeader2:{
        color:"black",
        fontWeight:'bold',
        fontSize:20,
    },
    

})

export default styles;