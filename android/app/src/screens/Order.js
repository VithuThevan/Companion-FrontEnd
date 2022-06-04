import React, { Component, useState } from "react";
import axios from 'axios';

//import Button from 'react-native-bootstrap-buttons';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
    TouchableOpacity,
    FlatList
  } from 'react-native';




  class Order extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            slocation: "",
            elocation: "",
            mobile: "",
            isFetching: false,
            data: []
        };
    }

    

    componentDidMount(){
        this.order();
    }


    async order(){
        const Apiurl = "http://10.0.2.2:8000/api/vorder/8";
        
      
        let res = await fetch(Apiurl)
          let d = await res.json()
          this.setState({data: d.vorder})

          const ab = d.vorder.name;
          this.setState({name: d.vorder.name,
                         slocation: d.vorder.slocation,
                         elocation: d.vorder.elocation,
                         mobile: d.vorder.mobile
        })

        

          console.log(ab);
    }

    

    myfun(){

       // console.log(route.params.p1);
      //  console.log("route.params.p1");

        this.props.navigation.navigate('Dmap');
    }
    
    

    render(){

        

       // const a = 'jaffna';
        const uname = this.state.name;
        const slocation = this.state.slocation;
        const elocation = this.state.elocation;
        const phone = this.state.mobile;
      //console.log(this.state.name);
        
        

        const {navigation} = this.props;

       // const slocation = navigation.getParam('sloc','abcd');

       
        return(
            <ScrollView>
                <View style={styles.container}>
                    
                    <Image
                     style={styles.img1}
                     source={{uri: 'https://w0.peakpx.com/wallpaper/461/414/HD-wallpaper-black-car-in-black-background-black-background.jpg'}}
                    />
                    <Text style={styles.h1}>Welcome to Driver App</Text>
                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Pickup Point</Text></Text>
                    <Text style={styles.b3}>{slocation}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Pickout Point</Text></Text>
                    <Text style={styles.b3}>{elocation}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Name</Text></Text>
                    <Text style={styles.b3}>{uname}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Mobile</Text></Text>
                    <Text style={styles.b3}>{phone}</Text>

                   
                 

                    <View>
                        <View style={styles.btn}><Button style={styles.btn1} title="Accept" onPress={() => this.myfun()}  /></View>
                        <Button style={styles.btn2} title="Decline"
                        onPress={() => this.props.navigation.goBack()}
                         />
                        
                        
                    </View>
                </View>
            </ScrollView>
        );
    }

  }

  const styles = StyleSheet.create({

      container: {
          borderColor: 'black',
          borderRadius: 25,
          backgroundColor: 'linen'


      },

      img1: {
        width: 260,
        height: 250,
        marginLeft: 30,
      },
      h1: {
         fontSize: 40,
         color: "maroon",
         marginLeft: 20,
         textAlign: 'center',
         fontWeight: 'normal',
         marginLeft: 60,
         marginRight: 60,
         marginTop: 20,
         marginBottom: 10,
       
      },
      b1: {
          color: 'black',
          marginLeft: 40,
          marginTop: 20
      },
      b2: {
          fontWeight: 'bold',
          fontSize: 20,
          
      },
      b3: {
          color: 'black',
          fontSize: 20,
          marginLeft: 40,
          marginTop: 20
      },
      btn: {
          marginBottom: 10,
         
          
          
      },
      btn1: {
        backgroundColor: 'green',
        
      },
      btn2: {
          backgroundColor: 'red',
          color: 'red',
          
      }

  });

  export default Order;