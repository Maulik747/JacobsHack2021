import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import axios from 'axios';



const URL = 'http://127.0.0.1:5000/getmethod';
const xhr = new XMLHttpRequest();
// $.get("/getpythondata", function(data) {
//     console.log($.parseJSON(data))
// })
console.log("Check");
// var run_method = function(){

//   var data1 = {"word":"hello"}
//   console.log("Before " + data1);
//   $.ajax({
//       url : "/getmethod",
//       type : "POST",
//       data : data1//JSON.stringify(data1)
//   })
//   .done(function(data){
//       var data = JSON.parse(data);
//       console.log(data);

//   });



export default function Compass() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Magnetometer.setUpdateInterval(10000);
  };

  const _fast = () => {
    Magnetometer.setUpdateInterval(10000);
  };

  const _subscribe = () => {
    
    setSubscription(
      Magnetometer.addListener(result => {
      Magnetometer.addListener(result => {
       setData(result);
       var body = {
        userName: 'Fred',
        userEmail: 'Flintstone@gmail.com'
    }
    // axios.get(`https://localhost:5000/abc`)
    //         .then(response => response.data)
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.log("error in data , ", error);
                
    //         })

    let sender = JSON.stringify(['1', '2']);
    xhr.open('POST', URL);
    xhr.send(sender);
    xhr.abort();
    console.log(result);    
    // useEffect(()=>{
    //   fetch("http://localhost:5000/addUser", {
    //     method: 'post',
    //     //url: 'http://localhost:5000',
    //     data: body
    // },data)
    })


      })
    );


  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
  

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Magnetometer:</Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});
