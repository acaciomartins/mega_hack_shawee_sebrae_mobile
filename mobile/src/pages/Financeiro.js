import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

export default function Financeiro({ navigation }) {
    const [menuNegocios, setMenuNegocios] = useState([
        // { 'label': 'Canvas', 'uri': 'https://www.sebraecanvas.com/#/', 'backgroundColor': '#53b8e2' },
        { 'label': 'Cartilhas', 'uri': 'https://m.sebrae.com.br/sites/PortalSebrae/ufs/pi/sebraeaz/cartilhas,e30aa8ce76801510VgnVCM1000004c00210aRCRD', 'backgroundColor': '#53cf5a' },
        { 'label': 'Cursos Online', 'uri': 'https://www.sebrae.com.br/sites/PortalSebrae/cursosonline', 'backgroundColor': '#253168' },
        { 'label': 'Manuais', 'uri': 'https://www.sebrae.com.br/sites/PortalSebrae/ufs/sp/transparencia/normas-e-manuais,b9f760dadee17510VgnVCM1000004c00210aRCRD', 'backgroundColor': '#2e7409' },
        { 'label': 'Treinamentos', 'uri': 'https://www.sebrae.com.br/sites/PortalSebrae/artigos/treinamentos-sao-essenciais-para-manter-a-qualidade-da-franquia,4bdb39407feb3410VgnVCM1000003b74010aRCRD', 'backgroundColor': '#253168' },
        { 'label': 'Fale Conosco', 'uri': 'https://www.sebrae.com.br/sites/PortalSebrae/faleconosco', 'backgroundColor': '#667efb' },
    ]);

    function style_menu(negocio) {
        return {
            ...styles.button,
            backgroundColor: negocio.backgroundColor
        }
    }

    return (
        <ScrollView style={styles.form}>
            {menuNegocios.map(negocio => (
                <TouchableOpacity
                    style={style_menu(negocio)}
                    onPress={() => {
                        // navegacao
                        navigation.navigate('SebraeWebView', {
                            title: 'coco',
                            uri: negocio.uri
                        })
                    }}>
                    <Text style={styles.buttonText}>{negocio.label}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        marginTop: 50,
        padding: 15,
    },

    button: {
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 15,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        elevation: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
