import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput , TouchableOpacity, ScrollView} from 'react-native';
import { styleLinksHeader, styleOneLinkHeader, styles } from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParamList} from '../types';

import {Post} from '../Post';

const OneLinkHeader = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
        </View>
    );
};


const LinksHeader = ()=>{
    return(
        <View style={styleLinksHeader.container}>
            
            <OneLinkHeader nome="Home"/>
            <OneLinkHeader nome="Post"/>
            <OneLinkHeader nome="Videos"/>
            <OneLinkHeader nome="Photos"/>
            <OneLinkHeader nome="Community"/>
        </View>
    );
};
type HomePros = NativeStackNavigationProp<StackNavigatorParamList,'Home'>;

const Home = () => {
    const navigation = useNavigation<HomePros>();
    function irParaTelaLogin(){
      
        navigation.navigate('Login');
    }    
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image source={
                    require("../../assets/arrow-left.png")
                    }>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/ei_search.png")
                        }>
                    </Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        >
                        

                    </TextInput>
                </View>
                <Image source={
                    require("../../assets/share.png")
                    }>
                </Image>
            </View>
            <LinksHeader></LinksHeader>

            <TouchableOpacity onPress={irParaTelaLogin}>
                
            </TouchableOpacity>

            <ScrollView>
                
                <Post/>
                
                <Post/>
            </ScrollView>

            {/*  */}
        </View>
    );

}



export default Home;