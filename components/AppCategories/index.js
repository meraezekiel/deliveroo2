import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import AppCategoriesCard from './AppCategoriesCard';
import axios from 'axios';

const AppCategories = () => {
     const [categories, setCategories] = useState([]);

useEffect(()=>{
     axios.get('http://192.168.82.13:3000/api/v1/categories/').then((response)=>{
     
     setCategories(response.data)
     // console.log(response.data)  

     }).catch((error)=>{
     console.log("Error:",error)
     })
},[]);
  
return (
    <>
        <ScrollView
        contentContainerStyle={{
            paddingHorizontal:5,
            paddingTop:10,
            
        }}
         horizontal
         showsHorizontalScrollIndicator={false}
         >
          {
          categories.map((item, index) => (
               <AppCategoriesCard 
                    key = {index}
                    id ={item.id}
                    title={item.title}
                    imgUrl ={item.imgurl}
                    
               />
          ))}
               
        </ScrollView>
    </>
  )
}

export default AppCategories;