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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check_textInputChange: false,
      password: '',
      secureTextEntry: true,
    };
  }
  textInputChange(email) {
    if (email.length !== 0) {
      this.setState({
        check_textInputChange: true,
      });
    } else {
      this.setState({
        check_textInputChange: false,
      });
    }
  }
  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_head}>Wellcome Compus!</Text>
        </View>
        <Animatable.View animation="bounceIn" style={styles.footer}>
          <Text style={styles.text_footer}>E-MAIL</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="You email..."
              style={styles.textinput}
              autoCapitalize="none"
              onChangeText={text => this.textInputChange(text)}
            />
            {this.state.check_textInputChange ? (
              <Animatable.View animation="bounceInUp">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>PASSWORD</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            {this.state.secureTextEntry ? (
              <TextInput
                autoCapitalize="none"
                placeholder="You password..."
                maxLength={16}
                secureTextEntry={true}
                style={styles.textinput}
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
            ) : (
              <TextInput
                autoCapitalize="none"
                placeholder="You password..."
                maxLength={16}
                style={styles.textinput}
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
            )}
            <TouchableOpacity onPress={() => this.secureTextEntry()}>
              {this.state.secureTextEntry ? (
                <Feather name="eye-off" color="gray" size={20} />
              ) : (
                <Feather name="eye" color="gray" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {/* <Text style={{color: '#009bd1'}}>Forgot password?</Text> */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.button}>
            <LinearGradient
              colors={['#009bd1', '#05375a']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={styles.login}>
              <Text style={styles.textlogin}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.register}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.textregister}>Register</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#05375a',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  text_head: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 10,
    marginBottom: 20,
  },
  picture: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  textinput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  login: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textlogin: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffff',
  },
  register: {
    borderColor: '#4dc2f8',
    borderWidth: 1,
    marginTop: 15,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textregister: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4dc2f8',
  },
});
export default Login;
