import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';



const AppSearch = () => {
  return (
    <>
        <View style = {{flexDirection:'row',alignItems:'center'}}>
                <View style = {{backgroundColor:'#E5E2E2', flex:1, justifyContent:'center'}}>
                  <View style = {{flexDirection:'row', alignItems:'center',paddingLeft:10}}>
                    <FontAwesome5Icon name = "search" size = {20} color ='#8C8B8B'/>
                    <TextInput
                    placeholder='Restaurants and cuisines'
                    keyboardType='default'
                    color ={'black'}></TextInput>
                  </View>
                </View>
            <FontAwesome5Icon  name = "sliders-h" size= {20} color = "#00CCBB"/>
        </View>
    </>
  )
}

export default AppSearch;