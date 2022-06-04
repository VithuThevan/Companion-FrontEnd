import React, { Component } from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView,  Alert} from 'react-native';
import RadioButton from 'radio-buttons-react-native';
//import RadioButton from './components/RadioButton';
import axios from 'axios';




class Driver2 extends Component{
    constructor()
    {
        super();
        this.state={
            pkup: 'University Of Moratuwa',
            pkout: 'Ratmalana',
            mobile: '0771234568',
            
        }
    }

    submit()
    {
      
      
       const pkup = this.state.pkup;
       const pkout = this.state.pkout;
       const mobile = this.state.mobile;
       const name = this.state.name;

       axios.post('http://10.0.2.2:8000/api/order/add',{name:name, slocation:pkup, elocation:pkout,mobile:mobile}).then(res => console.log(res.data));
      
      // console.log("way to success ");
      // Alert.alert("get ready ziga");

      this.props.navigation.navigate('Umap');

    }

    
    

    render()
    {
        const data1 = [
            
            {label:  "TukTuk", value: 0 },
            {label: "Car", value: 1 },
            {label: "Van", value: 2 },
            {label: "Bus", value: 3 },
            
          ];

        return(
            <ScrollView>
                <View>
                <Text style={styles.h1}>
                Choose Your Vehicle
                </Text>
                <View>
                <Text style={styles.p1}>&spades;<Text>Pickup Point</Text></Text>
                
                    <TextInput 
                    style={styles.p2}
                    placeholder="Enter place"
                    value={this.state.pkup}
                    onChangeText={text => this.setState({pkup:text})}
                     />
                </View>
                <View>
                <Text style={styles.p1}>&spades;<Text>Pickout Point</Text></Text>
                
                <TextInput
                style={styles.p2}
                value={this.state.pkout}
                placeholder="Enter place"
                onChangeText={text => this.setState({pkout:text})}
                />
                </View>
                <View>
                <Text style={styles.p1}>&spades;<Text>Contact Number</Text></Text>
                <TextInput
                style={styles.p2}
                placeholder="Enter contact Number"
                value={this.state.mobile}
                onChangeText={text => this.setState({mobile:text})}
                />
                </View>
                <View>
                <Text style={styles.p1}>&spades;<Text>Name</Text></Text>
                <TextInput
                style={styles.p2}
                placeholder="Enter your name"
                value={this.state.name}
                onChangeText={text => this.setState({name:text})}
                />
                </View>
                <View
                  style={{
                       borderBottomColor: 'red',
                       borderBottomWidth: 25,
                       marginLeft: 20,
                       marginRight: 20,
                       marginTop: 20,
                       borderRadius: 10,
                       marginBottom: 20,

                    }}
                  />
                  <RadioButton  style={styles.rad1} data={data1} />

                  <TouchableOpacity style={styles.btno} onPress={()=>this.submit()}>
                      <Text style={styles.btnotxt}>Place Order</Text>
                  </TouchableOpacity>
                 
                  
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
   
    h1: {
        fontSize: 40,
        color: '#800000',
        marginLeft: 20,
        marginRight: 40,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    },
    p1: {
        color: 'black',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    p2: {
         color: 'black',
         fontSize: 20,
         marginLeft: 20,
         marginTop: 10
    },
    rad1: {
        color: 'red',
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20,
        
        
    },
    btno: {
        backgroundColor: 'blue',
        width: 250,
        marginLeft: 55,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 50
    },
    btnotxt: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    }
});

export default Driver2;