import React from 'react';
import { Text, Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Body } from 'native-base';

export default class Home extends React.Component{

	static navigationOptions={
	    headerTitle:(
            <Image source={require('../assets/logo.png')} style={{marginLeft: 20, width: 103, height: 30}} />
        )
	}

    render(){
    	const datas = [
    		{
    			img: require('../assets/1.png'),
    			ket:'English for Kids',
    			deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultrices enim. Quisque varius convallis odio, a fringilla mauris interdum id. Cras dignissim vitae justo sed aliquet. Aenean nisi nisi, rhoncus quis volutpat a, aliquam in lectus. Donec sagittis, nulla et faucibus rhoncus, diam nisl faucibus sem, eget aliquam lorem lectus convallis nunc. In non suscipit erat. Fusce purus ipsum, sagittis at facilisis non, sagittis non sapien.',
    			harga: 'Rp. 400.000'
    		},
    		{
    			img: require('../assets/2.png'),
    			ket:'Sukses UN SMP',
    			deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultrices enim. Quisque varius convallis odio, a fringilla mauris interdum id. Cras dignissim vitae justo sed aliquet. Aenean nisi nisi, rhoncus quis volutpat a, aliquam in lectus. Donec sagittis, nulla et faucibus rhoncus, diam nisl faucibus sem, eget aliquam lorem lectus convallis nunc. In non suscipit erat. Fusce purus ipsum, sagittis at facilisis non, sagittis non sapien.',
    			harga: 'Rp. 570.000'
    		},
    		{
    			img: require('../assets/3.png'),
    			ket:'Sukses UN SMA',
    			deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultrices enim. Quisque varius convallis odio, a fringilla mauris interdum id. Cras dignissim vitae justo sed aliquet. Aenean nisi nisi, rhoncus quis volutpat a, aliquam in lectus. Donec sagittis, nulla et faucibus rhoncus, diam nisl faucibus sem, eget aliquam lorem lectus convallis nunc. In non suscipit erat. Fusce purus ipsum, sagittis at facilisis non, sagittis non sapien.',
    			harga: 'Rp. 340.000'
    		},
    		{
    			img: require('../assets/4.png'),
    			ket:'Sukses SBMTPN',
    			deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultrices enim. Quisque varius convallis odio, a fringilla mauris interdum id. Cras dignissim vitae justo sed aliquet. Aenean nisi nisi, rhoncus quis volutpat a, aliquam in lectus. Donec sagittis, nulla et faucibus rhoncus, diam nisl faucibus sem, eget aliquam lorem lectus convallis nunc. In non suscipit erat. Fusce purus ipsum, sagittis at facilisis non, sagittis non sapien.',
    			harga: 'Rp. 440.000'
    		},
    		{
    			img: require('../assets/5.png'),
    			ket:'Sukses TOEFL',
    			deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultrices enim. Quisque varius convallis odio, a fringilla mauris interdum id. Cras dignissim vitae justo sed aliquet. Aenean nisi nisi, rhoncus quis volutpat a, aliquam in lectus. Donec sagittis, nulla et faucibus rhoncus, diam nisl faucibus sem, eget aliquam lorem lectus convallis nunc. In non suscipit erat. Fusce purus ipsum, sagittis at facilisis non, sagittis non sapien.530.000',
    			harga: 'Rp. '
    		},
    		{
    			img: require('../assets/6.png'),
    			ket:'Sukses Speaking',
    			deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultrices enim. Quisque varius convallis odio, a fringilla mauris interdum id. Cras dignissim vitae justo sed aliquet. Aenean nisi nisi, rhoncus quis volutpat a, aliquam in lectus. Donec sagittis, nulla et faucibus rhoncus, diam nisl faucibus sem, eget aliquam lorem lectus convallis nunc. In non suscipit erat. Fusce purus ipsum, sagittis at facilisis non, sagittis non sapien.',
    			harga: 'Rp. 550.000'
    		},
    	]
        return(
            <ScrollView style={{padding:10, marginBotton: 10}}>
            {
            	datas.map((val,key) => {
            		return <Card key={key}>
		            	<CardItem cardBody button onPress={()=>this.props.navigation.navigate('Detail', {data: val})}>
			              	<Image source={val.img} style={{height: 200, width: null, flex: 1}}/>
			            </CardItem>
			            <CardItem>
			                <Body>
			                  	<Text>{val.ket}</Text>
			              	</Body>
			            </CardItem>
		          	</Card>
            	})
            }
            </ScrollView>
        )
    }
}