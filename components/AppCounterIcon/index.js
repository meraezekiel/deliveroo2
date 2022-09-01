import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounterItems, selectCounterTotal } from '../../features/counter/counterSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {CounterScreen} from '../../screens/CounterScreen'

  const AppCounterIcon = () => {
  const items = useSelector(selectCounterItems);
  const navigation = useNavigation();
  const totalCounter = useSelector(selectCounterTotal);

  if(items.length === 0) return null;

  return (
    <View style ={{position:'absolute',width:'100%', bottom:10,padding:20}}>
    <TouchableOpacity 
         style={{flexDirection:'row', justifyContent:'space-between',
         alignItems:'center',backgroundColor:'#00CCBB',padding:20 ,borderRadius:10}}
         onPress={()=>navigation.navigate('CounterScreens')}
         >

        <View style={{backgroundColor:"#01A296",width:20, height:20, alignItems:'center', borderRadius:4}}>
            <Text style ={{color:'white', fontWeight:'bold',fontSize:15}}>{items.length}</Text>
        </View>
        <Text style ={{color:'white',fontSize:15, fontWeight:'bold',}}>View Order</Text>
        <Text style ={{color:'white', fontWeight:'bold',fontSize:15}}>
                <Currency quantity={totalCounter} currency="PHP"></Currency>
        </Text>
     
    </TouchableOpacity>
    </View>
  )
}

export default AppCounterIcon;