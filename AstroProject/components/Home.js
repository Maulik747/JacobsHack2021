import React ,{useState} from 'react'
import {View,Text,Button,FlatList} from 'react-native'

function Home() {
    const[name,setName]=useState("Maulik")
    return (
     <View>
        <Text>Hello World</Text>
        <Text>{name}</Text>
        <Button title="Click" onPress={()=>setName("This is Changed")}/>
    </View>
    )
}

export default Home
