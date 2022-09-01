import { View, Text, Image, Touchable } from 'react-native';
import React,{useState,useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/counter/restaurantSlice';
import { selectCounterItems } from '../features/counter/counterSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { XCircleIcon } from 'react-native-heroicons/solid';

  const CounterScreen = ({navigation}) => {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCounterItems);
  const [groupItemsCounter,setGroupItemsCounter]=useState([]);
  const dispatch = useDispatch();

  useMemo(()=>{
      const groupItemsCounter = items.reduce((results,item)=>{
          (results[item.id] = results[item.id] || []).push(item);
          return results;
      },{})
     },[items]);
     
  return (
    <SafeAreaView style={{marginTop:20, backgroundColor:"white",flex:1}}>
     <View style={{flex:1,backgroundColor:'#ECECEC'}}>
       
          <View style ={{padding:18,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Text style={{color:"black", fontWeight:'bold',fontSize:20}}>Order</Text>
            <Text style={{color:"#BBBBBB" ,fontSize:15}}>{restaurant.title}</Text>
          </View>

          <View style={{position:'absolute', top:10, right:5}}>
          <TouchableOpacity onPress={navigation.goBack}>
              <XCircleIcon  color = "#00CCBB" height={50} width={50}/>
          </TouchableOpacity>
          </View>

          <View style={{backgroundColor:'white', padding:15,marginTop:15, justifyContent:'space-between',flexDirection:'row'}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <View style = {{marginRight:15,height:30,width:30,borderRadius:30,backgroundColor:'#BBBBBB',alignItems:'center'}}>
                    <Image 
                        source = {{
                          uri: "https://links.papareact.com/wru",
                        }}
                        style={{height:25,width:25}}
                    />
                </View>  

                <Text style={{color:'black'}}>Deliver in 50-75 min</Text>
                
            </View>
           
            <View style= {{alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity>
                  <Text style ={{color:"#00CCBB"}}>Change</Text>
              </TouchableOpacity>
            </View>
            
          </View>
     </View>
      
    </SafeAreaView>
  )
}

export default CounterScreen;