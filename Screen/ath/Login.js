import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Alert,
  Button,
} from 'react-native';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 100,
            }}>
            <View>
              <Text style={{color: '#0ddd', fontSize: 40}}>Login</Text>
            </View>
          </View>
          <View style={styles.textinputcontainer}>
            <TextInput
              style={styles.textinput}
              placeholder="Nhập email của bạn"
              placeholderTextColor="rgba(0,0,0,1)"
              textContentType="emailAddress"
              keyboardType="email-address"
              returnKeyType="next"
              autoCorrect={true}
              onSubmitEditing={() => this.refs.txtmatkhau.focus()}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
          </View>
          <View style={styles.textinputcontainer}>
            <TextInput
              style={styles.textinput}
              placeholder="Nhập mật khẩu"
              placeholderTextColor="rgba(0,0,0,1)"
              returnKeyType="go"
              autoCorrect={false}
              ß
              secureTextEntry
              ref={'txtmatkhau'}
              onChangeText={pass => this.setState({pass})}
              value={this.state.pass}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text onPress={this.emailDangky} style={styles.text}>
                LOGIN NOW
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{color: '#00dd', fontSize: 40}}>Register</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F8E0F7',
    alignContent: 'center',
  },
  tren: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  duoi: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    color: 'gold',
    textAlign: 'center',
    width: '100%',
  },
  image: {
    width: 50,
    height: 50,
  },
  textinputcontainer: {
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    opacity: 0.4,
    marginBottom: 10,
  },
  textinput: {
    width: 280,
    height: 50,
  },
  button: {
    backgroundColor: '#FF0000',
    width: 150,
    height: 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: 'yellow',
    width: 150,
    height: 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
