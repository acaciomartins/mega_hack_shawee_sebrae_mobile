import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login';
import Main from './pages/Main';
import Negocio from './pages/Negocio';
import Financeiro from './pages/Financeiro';
import SebraeWebView from './pages/SebraeWebView';

const Routes = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                title: ''
            },
        },
        Main: {
            screen: Main,
            navigationOptions: {
                title: ''
            }
        },
        Negocio: {
            screen: Negocio,
            navigationOptions: {
                title: 'Negócio'
            }
        },
        Financeiro: {
            screen: Financeiro,
            navigationOptions: {
                title: 'Conteúdo SEBRAE'
            }
        },
        SebraeWebView: {
            screen: SebraeWebView,
            navigationOptions: {
                title: 'Sebrae'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitle: 'Voltar',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7d40e7'
            }
        }
    })
);

export default Routes;