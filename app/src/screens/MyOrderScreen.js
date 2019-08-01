import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,FlatList,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import R from '../R';

export default class MyOrderScreen extends Component {
    constructor(){
        super()
        this.state = {
            datasource: []
        }
    }

    componentDidMount() {
        fetch('http://staging.php-dev.in:8844/trainingapp/api/orderList',{
           method: 'GET',
           headers:{
            'access_token': "5d2eb4b6ca059",
            'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            this.setState(
                {
                    datasource: responseJson.data
                }
            )
            
        }).catch((err)=> {
            console.error(err)
        })
    }
    render(){
        return(
            <View style={styles.container}>
                
                <FlatList
                data={this.state.datasource}
                renderItem = {({item})=>(
                    
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("OrderDetails", {
                        OrderID: item.id
                      })} style={{margin: 10,height: 80}}>
                        
                        <View style={styles.OrderId}>
                            <Text style={styles.orderIDText}>Order ID: {item.id}</Text>
                            
                            <View style={styles.lineStyle} />
                            
                            <Text style={styles.createdText}>Order Date: {item.created}</Text>
                            
                        </View>
                        
                        <View style={styles.costView}> 
                            <Text style={styles.costText}>Rs.{item.cost}</Text>
                        
                        </View> 
                    </TouchableOpacity>
                )}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    OrderId:{
        flex: 1,
        //flexDirection: 'row'
        justifyContent: 'flex-start',
        margin: 10
    },
    orderIDText:{
        fontSize: 16,
        color: '#1C1C1C',
        paddingBottom: 10, 
        fontWeight: '500'
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'black',
        width: 165
        //margin:10,
    },
    createdText:{
        fontSize: 13,
        color: '#1c1c1c',
        paddingTop: 10
    },
    costView:{
        flex: 1,
        //flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        

    },
    costText:{
        //flex: 2,
        alignItems: "flex-end",
        justifyContent: 'flex-end',
        fontSize: 20,
        color: '#333333',
        fontWeight: 'bold',
        paddingLeft: 10
    }
})