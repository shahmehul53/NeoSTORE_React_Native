import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,FlatList,Image, TextInput,Alert } from 'react-native';

import R from '../R';
import CustomButtom from '../components/CustomButton';
import CustomRedButton from '../components/CustomRedButton';
import CustomTextInput from '../components/CustomTextInput'

export default class AddressScreen extends Component{
    constructor(){
        super()
        this.state = {
            datasource: [],
            address: ""
        }
    }

    placeOrder(){
        const address = this.state.address;
        fetch('http://staging.php-dev.in:8844/trainingapp/api/order',{
            method: 'POST',
            headers:{
             'access_token': "5d2eb4b6ca059",
             'Content-Type': 'application/x-www-form-urlencoded',
             },
             body:
             `address=${address}`
         }).then((response)=>response.json())
         .then((responseJson)=>{
             this.setState({datasource: responseJson})
             if(this.state.datasource.status == 200){
                 alert(this.state.datasource.user_msg)
             } 
             else if(this.state.datasource.status == 401){
                alert(this.state.datasource.user_msg)
             } 
             console.log(responseJson)
         }).catch(error => {
            console.error(error);
        });
    }
    

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.addressContent}>
                    <Text style={styles.addresText} >ADDRESS:</Text>
                
                    <TextInput style={styles.textInputStyle} onChangeText={address => this.setState({ address })}/> 
                <CustomRedButton 
                       title="PLACE ORDER"
                       onPress={()=>this.placeOrder()}
                       >
                           
                       </CustomRedButton>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        //justifyContent:'center',
    },
    addressContent:{
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    addresText:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    shipAddress:{
        paddingTop: 20,
        borderWidth: 1,
        height: 60,
        width: 100
    },
    buttonStyle:{
        flex: 5,
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    RegisterView:{
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle:{
        borderWidth:1.5,
        borderColor: 'black',
        height:41,
        width:300,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        flexDirection:'row',
        alignItems:'center',
        //justifyContent:'center',
        //backgroundColor:R.color.backgroundColorDefault,
        paddingHorizontal:10
    }


})