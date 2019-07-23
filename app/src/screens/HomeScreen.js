import React, {Component} from 'react';
import {View, Button, Image, TextInput, Text,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import R from '../R'

//import style from '../Styles'


const gridData = [ 
    { id: R.images.tableicon, text: 'Tables'},
    { id: R.images.sofaicon, text: 'Sofas'},
    { id: R.images.chairsicon, text: 'Chairs'},
    { id: R.images.cupboardicon, text: 'Cupboards'}
]



export default class HomeScreen extends Component {
        
    
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 2}}>
                    <ScrollView 
                    horizontal 
                    pagingEnabled
                    snapToAlignment={"center"}
                    showsHorizontalScrollIndicator={true}>
                        <Image style={{width: 393, height: "100%"}} source={R.images.slider_img1}/>
                        <Image style={{width: 393, height: "100%"}} source={R.images.slider_img2}/>
                        <Image style={{width: 393, height: "100%"}} source={R.images.slider_img3}/>
                        <Image style={{width: 393, height: "100%"}} source={R.images.slider_img4}/>
                    </ScrollView>
                </View>

                <View style={{flex: 3,justifyContent: 'center', alignItems: 'center'}}>
                    <FlatList
                      data={gridData}
                      renderItem={({ item }) =>
                        <View>
                         <TouchableOpacity
                          
                            style={{padding: 8}}
                            onPress={() => this.props.navigation.navigate(item.text)}>

                            <Image source= {item.id}/>
                            
                        </TouchableOpacity>
                        </View>
                    }  
                       //keyExtractor={extractKey}
                       numColumns={2}
                    />
                </View>
            </View>
        )
    }
}