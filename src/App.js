import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCQ-OCHUhbiKr-SOSeZ0CHcsIgP93Csdm4',
        authDomain: 'udemy-auth-d6de9.firebaseapp.com',
        databaseURL: 'https://udemy-auth-d6de9.firebaseio.com',
        projectId: 'udemy-auth-d6de9',
        storageBucket: 'udemy-auth-d6de9.appspot.com',
        messagingSenderId: '478998827685'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
