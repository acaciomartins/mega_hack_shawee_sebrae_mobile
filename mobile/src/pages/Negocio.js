import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, KeyboardAvoidingView, SafeAreaView, StyleSheet, ScrollView, Image, View, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TextInputMask } from 'react-native-masked-text';
import api from '../services/api';
import Loader from '../components/Loader';

export default function Negocio() {

    const [loading, setLoading] = useState(false);
    const [quantidade, setQuantidade] = useState('');
    const [vendedor, setVendedor] = useState([{ nome: 'Elton Alex Silva' }]);
    const [preco, setPreco] = useState(0);
    const [venda, setVenda] = useState();
    const [item, setItem] = useState([]);
    const [itemVenda, setItemVenda] = useState([]);

    const placeholder = {
        label: 'Selecione um produto',
        value: null,
        color: '#9EA0A4',
    };

    useEffect(() => {
        const v = { ...venda, preco, quantidade }
        setItem(v)
    }, [preco, venda, quantidade])

    function populaVendas(value, index) {
        setVenda({
            nome: 'Produto ' + index,
            descricao: value,
        });
    }

    function adicionarVendas() {
        if (validarCamposInvalidos()) {
            alerta('Todos os campos são obrigatórios!');
            return;
        }
        let itemLista = itemVenda ? itemVenda : [];
        itemLista.push(Object.assign({}, item));
        setItemVenda(itemLista);
        alerta('Item adicionado com Sucesso!');
        limpaCampos();
    }

    async function salvarDadosVendedor() {
        if (itemVenda.length == 0) {
            alerta('Você deve adicionar pelo menos 1 item!');
            return;
        }
        const body = {
            vendedor,
            vendas: itemVenda
        }
        setLoading(true);
        await api.post('/vendedor', body)
            .then(() => {
                setLoading(false);
                limpaCampos();
                setItemVenda([]);
                alerta('Cadastro Realizado com Sucesso!');
            })
            .catch(() => {
                setLoading(false);
            });
        setLoading(false);
    }

    function limpaCampos() {
        setVenda('');
        setPreco(0);
        setQuantidade('');
    }

    function validarCamposInvalidos() {
        return !venda || venda == 'undefined' || venda['descricao'] == null || preco == '0,00' || preco == 0 || quantidade === '';
    }


    function alerta(msg) {
        Alert.alert(
            'Aviso!',
            msg,
            [
                {
                    text: 'OK'
                },
            ],
            { cancelable: false }
        );
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={78}>
            <Loader loading={loading} />
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
                <TouchableOpacity style={styles.button} onPress={adicionarVendas}>
                    <Text style={styles.buttonText}>Adicionar item</Text>
                </TouchableOpacity>
                <Text style={[{ fontSize: 13, textAlign: 'center', margin: 4 }]}>Items Adicinoados</Text>
                {
                    itemVenda.length > 0 ? (
                        <View style={styles.tabela} >
                            <Text style={[styles.tabelaTexto, { width: 70, backgroundColor: '#c0c0c0' }]}>Nome</Text>
                            <Text style={[styles.tabelaTexto, { width: 120, backgroundColor: '#c0c0c0' }]}>Descricao</Text>
                            <Text style={[styles.tabelaTexto, { width: 80, backgroundColor: '#c0c0c0' }]}>Qtd</Text>
                            <Text style={[styles.tabelaTexto, { width: 70, backgroundColor: '#c0c0c0' }]}>Preco</Text>
                        </View>
                    ) :
                        <Text style={[{ fontSize: 10, textAlign: 'center', }]}>Não há itens adicinoados</Text>
                }
                {
                    itemVenda && itemVenda.map(item => (
                        <View style={styles.tabela}>
                            <Text style={[styles.tabelaTexto, { width: 70 }]}>{item.nome}</Text>
                            <Text style={[styles.tabelaTexto, { width: 120 }]}>{item.descricao}</Text>
                            <Text style={[styles.tabelaTexto, { width: 80 }]}>{item.quantidade}</Text>
                            <Text style={[styles.tabelaTexto, { width: 70 }]}>{item.preco}</Text>
                        </View>
                    ))
                }

                <TouchableOpacity style={[styles.button, { marginTop: 15, marginBottom: 35, backgroundColor: 'blue' }]} onPress={salvarDadosVendedor}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView >
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

    tabela: {
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'row',


    },

    tabelaTexto: {
        padding: 0,
        fontSize: 10,
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
