import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, ScrollView, Image, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TextInputMask } from 'react-native-masked-text';
import api from '../services/api';

export default function Negocio() {
    const [quantidade, setQuantidade] = useState();

    const [vendedor, setVendedor] = useState([{ nome: 'Acacio' }]);

    const [preco, setPreco] = useState(0);

    const [nomeProduto, setNomeProduto] = useState();
    const [descricaoProduto, setDescricaoPreco] = useState();

    const [vendas, setVendas] = useState();
    const [venda, setVenda] = useState();

    const dadosVenda = {};

    const placeholder = {
        label: 'Selecione um produto',
        value: null,
        color: '#9EA0A4',
    };

    useEffect(() => {
        const v = { ...venda, preco, quantidade }
        setVendas([v]);
    }, [preco, venda, quantidade])

    async function salvarDadosVendedor() {
        const body = {
            vendedor,
            vendas
        }
        alert(JSON.stringify(body))
        // const response = await api.post('/vendedor', body);
    }

    function populaVendas(value, index) {
        setVenda({
            nome: index,
            descricao: value,
        });
    }

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
                        onValueChange={populaVendas}
                        placeholder={placeholder}
                        style={{
                            iconContainer: {
                                top: 10,
                                right: 12,
                            },
                        }}
                        items={[
                            { label: 'Produto 1', value: 'Descrição Produto 1' },
                            { label: 'Produto 2', value: 'Descrição Produto 2' },
                            { label: 'Produto 3', value: 'Descrição Produto 3' },
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
                    value={preco}
                    onChangeText={setPreco}
                />
                <TouchableOpacity style={styles.button} onPress={salvarDadosVendedor}>
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
