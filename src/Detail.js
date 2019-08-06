import React from 'react';
import { Text,  Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Body } from 'native-base';

export default class Detail extends React.Component{

	static navigationOptions={
	    title: 'Detail',
	    headerTintColor: '#000',
	}

    render(){
    	var datas = this.props.navigation.state.params.data
        return(
            <ScrollView>
            	<Card>
	            	<CardItem cardBody>
		              	<Image source={datas.img} style={{height: 200, width: null, flex: 1}}/>
		            </CardItem>
		            <CardItem>
		                <Body>
		                  	<Text style={{fontWeight: 'bold', fontSize: 18}}>{datas.ket}</Text>
		              	</Body>
		            </CardItem>
	          	</Card>
	          	<Card>
	            	<CardItem header>
	            		<Text style={{fontSize: 16}}>Deskripsi</Text>
		            </CardItem>
		            <CardItem>
		                <Body>
		                  	<Text>{datas.deskripsi}</Text>
		              	</Body>
		            </CardItem>
	          	</Card>
	          	<Card>
	            	<CardItem header>
	            		<Text style={{fontSize: 16}}>Harga</Text>
		            </CardItem>
		            <CardItem>
		                <Body>
		                  	<Text>{datas.harga}</Text>
		              	</Body>
		            </CardItem>
	          	</Card>
	          	<Card>
	            	<CardItem header>
	            		<Text style={{fontSize: 16}}>Pilihan Order</Text>
		            </CardItem>
		            <CardItem>
		                <Body>
		                  	<Text>Isi Pilihan Order</Text>
		              	</Body>
		            </CardItem>
	          	</Card>
            </ScrollView>
        )
    }
}