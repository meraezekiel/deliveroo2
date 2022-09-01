import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const AppCategoriesCard = ({id,imgUrl,title}) => {
  return (
    <TouchableOpacity>
        <Image 
            source ={{ uri :imgUrl }}
            style = {{height:70, width:70, borderRadius:10, marginRight:5}}
        />
        <Text style ={styles.title}>{title}</Text>
    
    </TouchableOpacity>
  )
}

export default AppCategoriesCard;