import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCQ-OCHUhbiKr-SOSeZ0CHcsIgP93Csdm4',
        authDomain: 'udemy-auth-d6de9.firebaseapp.com',
        databaseURL: 'https://udemy-auth-d6de9.firebaseio.com',
        projectId: 'udemy-auth-d6de9',
        storageBucket: 'udemy-auth-d6de9.appspot.com',
        messagingSenderId: '478998827685'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
