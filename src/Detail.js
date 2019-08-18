import React from 'react';
import { Text,  Image, Linking, TouchableOpacity, WebView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Body, Icon } from 'native-base';
import HTML from 'react-native-render-html';

export default class Detail extends React.Component{

	static navigationOptions={
	    title: 'Detail',
	    headerTintColor: '#000',
	}

    render(){
    	var datas = this.props.navigation.state.params.data
    	var deskripsi =<HTML html={'<p style=text-align:justify>'+datas.deskripsi+'</p>'} />
        return(
            <ScrollView>
            	<Card>
	            	<CardItem cardBody>
		              	<Image source={datas.img} style={{height: 200, width: null, flex: 1}}/>
		            </CardItem>
		            <CardItem>
		                <Body>
		                  	<Text style={{fontWeight: 'bold', fontSize: 20}}>{datas.ket}</Text>
		              	</Body>
		            </CardItem>
	          	</Card>
	          	<Card>
	            	<CardItem header>
	            		<Text style={{fontSize: 16, fontWeight: 'bold'}}>Deskripsi</Text>
		            </CardItem>
		            <CardItem>
		                <Body>
		                  	{deskripsi}
		                  	<TouchableOpacity
			                	onPress={() => {
									Linking.openURL('https://www.youtube.com/watch?v=lTxn2BuqyzU');
								}}>
			                  	<Text style={{fontWeight:'bold', color:'red'}}>Link youtube...</Text>
		                  	</TouchableOpacity>
		              	</Body>
		            </CardItem>
	          	</Card>
	          	<Card>
	            	<CardItem header>
	            		<Text style={{fontSize: 16, fontWeight: 'bold'}}>Harga</Text>
		            </CardItem>
		            <CardItem>
		                <Body>
		                  	<Text>{datas.harga}</Text>
		              	</Body>
		            </CardItem>
	          	</Card>
	          	<Card>
	            	<CardItem header>
	            		<Text style={{fontSize: 16, fontWeight: 'bold'}}>Pilihan Order</Text>
		            </CardItem>
		            <CardItem>
		                <Body>
		                	<TouchableOpacity
								style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
			                	onPress={() => {
									Linking.openURL('http://api.whatsapp.com/send?phone='+6289526930800);
							}}>
								<Icon name='whatsapp' type='MaterialCommunityIcons' style={{color: 'green'}}/>
			                  	<Text> Whatsapp</Text>
		                  	</TouchableOpacity>
		                  	<TouchableOpacity
								style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
			                	onPress={() => {
									Linking.openURL('mailto:support@domain.com?subject=mailsubject');
							}}>
								<Icon name='gmail' type='MaterialCommunityIcons' style={{color: 'red'}}/>
			                  	<Text> Email</Text>
		                  	</TouchableOpacity>
		              	</Body>
		            </CardItem>
	          	</Card>
            </ScrollView>
        )
    }
}