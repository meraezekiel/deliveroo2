import { View, Text, Image} from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCounter, removeFromCounter, selectCounterItems, selectCounterItemsWithId } from '../../../features/counter/counterSlice';

const AppDishesCard = ({id, dishname , description, price, image,restaurant}) => {
    const [isPressed,setIsPressed] = useState(false);
    const items = useSelector(state => selectCounterItemsWithId(state,id));

    const dispatch = useDispatch();

    const addItemToCounter = () => {
      dispatch (addToCounter({id, dishname , description, price, image, restaurant}));
    }

    const removeItemFromCounter =() =>{
      if(!items.length > 0) return;
      dispatch(removeFromCounter({id}));
    }

    console.log(items);

  return (
    <>
      <TouchableOpacity 
        onPress={()=>setIsPressed(!isPressed)} 
        style={!isPressed ? styles.containers : styles.container1} 
      >
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View style={{flex:1,paddingRight:2}}>
            <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{dishname}</Text>
            <Text style={{color:'#BBBBBB',fontSize:12, marginTop:7}}>{description}</Text>
            <Text style={{color:'#BBBBBB',fontSize:12, marginTop:7}}>
              <Currency quantity={price} currency="PHP"/>
            </Text>
          </View>
          <Image 
            source={{uri:image}}
            style={{height:80,width:120,}}
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
          <View style={{flex:1}}>
              <View style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'white'}}>
                  <TouchableOpacity disabled={!items.length} onPress={removeItemFromCounter}>
                    <FontAwesome5Icon 
                      name="minus-circle" size={30} 
                      color={items.length > 0 ? "#00CCBB" : "gray"}
                    />
                  </TouchableOpacity>

                  <Text style={{margin:10 ,color:"black"}}>{items.length}</Text>

                  <TouchableOpacity onPress={addItemToCounter}>
                    <FontAwesome5Icon name="plus-circle" size={30} color={"#00CCBB"}/>
                  </TouchableOpacity>
              </View>
          </View>

      )}
    </>
  )
}

export default AppDishesCard;