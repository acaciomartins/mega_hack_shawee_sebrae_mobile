import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Carousel from 'react-native-smart-carousel';

export default function Main({ navigation }) {
    const datacarousel = [
        {
            "id": 339964,
            // "title": "This is snowman first title",
            "imagePath": "https://images.sympla.com.br/5e29ca2130de9-lg.jpg",
        },
        {
            "id": 339403,
            // "title": "5 dicas",
            // "subtitle": "Para montar uma sorveteria",
            "imagePath": "https://i.ytimg.com/vi/RQqGl1R6YZc/maxresdefault.jpg",
        },
    ];

    return (
        <>
            <View style={styles.dadosNegocio}>
                <Text style={styles.textoDadosNegocio}>Nome negócio</Text>
                <Image style={styles.logoDadosNegocio} source={{ uri: 'https://avatars3.githubusercontent.com/u/15642835?s=460&v=4' }} />
            </View>
            <TouchableOpacity style={styles.btMenuNegocio}
                onPress={() => {
                    navigation.navigate('Negocio')
                }}>
                <Text style={styles.textoMenuNegocio}>Negócios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btMenuFinanceiro}
                onPress={() => {
                    navigation.navigate('Financeiro')
                }}>
                <Text style={styles.textoMenuFinanceiro}>Conteúdo SEBRAE</Text>
            </TouchableOpacity>
            <Carousel
                align='center'
                height={200}
                parallax={false}
                navigationColor='black'
                titleColor='red'
                playTime={50}
                navigationType='bars'
                navigation={true}
                autoStart={true}
                data={datacarousel}
            />

        </>
    )
}

const styles = StyleSheet.create({
    btMenuNegocio: {
        backgroundColor: '#717ec2',
        margin: 25,
        marginBottom: 10,
        height: 100,
        paddingVertical: 25,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 5,
    },

    btMenuFinanceiro: {
        backgroundColor: '#74c663',
        margin: 25,
        marginBottom: 50,
        height: 100,
        paddingVertical: 25,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 5,
    },

    textoMenuNegocio: {
        fontSize: 26,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
    },

    textoMenuFinanceiro: {
        fontSize: 26,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        paddingTop: 10,
    },

    logoDadosNegocio: {
        width: 50,
        height: 50,
        // resizeMode: 'contain',
        marginLeft: 50,
        borderWidth: 1,
        borderColor: '#FFF',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
    },

    dadosNegocio: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 15,
        paddingBottom: 5,
    },

    textoDadosNegocio: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#717ec2',
    },

    carrossel: {
        width: 50,
    }
})
