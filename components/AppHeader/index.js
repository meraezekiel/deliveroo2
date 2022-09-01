import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const AppHeader = () => {
  return (
    <>
        <View style = {styles.HeaderContainer}>
            <View >
                <Image
                    source = {{
                            uri: 'https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521__480.jpg'
                    }}  
                    style= {styles.iconHeader}
                />
            </View>
            <View style = {{flexDirection:'row',flex:1, justifyContent:'space-between',alignItems:'center'}}>
                <View style = {styles.iconContainer}>
                    <Text style ={styles.textHeader1}>Deliver Now!</Text>
                        <View style = {{flexDirection:'row'}}>
                            <Text style ={styles.textHeader2}>Current Location</Text>
                            <FontAwesome5 name = "angle-down" color = "#00CCBB" size={20} style={{marginTop:4, marginLeft:5}}/>
                        </View>
                </View>     
                <FontAwesome5 name = "user" color = "#00CCBB" size={30}/>
            </View>
        </View>
        
        
    </>
  )
}

export default AppHeader;