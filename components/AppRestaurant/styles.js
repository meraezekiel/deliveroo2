import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white', 
        
    },
    hcontainer:{
        paddingLeft:10,
        paddingBottom:15,
        paddingTop:15
        
    },
    title:{
        color:'black',
        fontSize:32,
        fontWeight:'bold',
        fontStyle:'normal'
    },
    genre:{
        marginRight:4,
        color:"#BBBBBB"
    },
    rating:{
        marginRight:4,
        color:'#07AF22'
    },
    iconContainer:{
        alignItems:'center',
        flexDirection:'row',
        
    },
    allergy:{
        flexDirection:'row', 
        padding:8,
        paddingTop:13, 
        alignItems:'center', 
        borderTopWidth:0.3, 
        borderColor:'gray',
        
    },
    textAllergy:{
        marginLeft:2, 
        flex:1, 
        fontSize:15, 
        fontWeight:'bold', 
        color:'black'
    }


})

export default styles;