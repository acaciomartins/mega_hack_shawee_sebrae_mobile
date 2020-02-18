import React, { useState } from 'react'
import { TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, ScrollView, Image, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TextInputMask } from 'react-native-masked-text';

export default function Negocio() {
    const [quantidade, setQuantidade] = useState();
    const [valor, setValor] = useState();
    const placeholder = {
        label: 'Selecione um produto',
        value: null,
        color: '#9EA0A4',
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={78}>
            <ScrollView style={styles.form}>
                <View style={styles.dadosNegocio}>
                    <Text style={styles.textoDadosNegocio}>Nome negócio</Text>
                    <Image style={styles.logoDadosNegocio} source={{ uri: 'https://avatars3.githubusercontent.com/u/15642835?s=460&v=4' }} />
                </View>
                <Text style={styles.titulo}>
                    Vendas Diárias
            </Text>
                <Text
                    style={styles.label}>
                    Produto / Serviço
            </Text>
                <View style={styles.input}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        placeholder={placeholder}
                        style={{
                            iconContainer: {
                                top: 10,
                                right: 12,
                            },
                        }}
                        items={[
                            { label: 'Produto 1', value: 'Produto 1' },
                            { label: 'Produto 2', value: 'Produto 2' },
                            { label: 'Produto 3', value: 'Produto 3' },
                        ]}
                    />
                </View>
                <Text style={styles.label}>Quantidade / Serviço </Text>
                <TextInputMask
                    style={styles.input}
                    type={'only-numbers'}
                    value={quantidade}
                    onChangeText={setQuantidade}
                />
                <Text style={styles.label}>R$ </Text>
                <TextInputMask
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: ''
                    }}
                    style={styles.input}
                    value={valor}
                    onChangeText={setValor}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 35,
        color: '#717ec2',
    },

    form: {
        flex: 1,
        padding: 15,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 10,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 2,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 1,
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },

    logoDadosNegocio: {
        width: 50,
        height: 50,
        // resizeMode: 'contain',
        marginLeft: 50,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 25,
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
        margin: 3,
        marginBottom: 40,
        padding: 20,
        borderRadius: 1,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 1,
    },

    textoDadosNegocio: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#717ec2',
    },
})
