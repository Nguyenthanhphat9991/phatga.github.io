import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {IMAGE} from '../image/image';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export default class THEME extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration={2000}
            style={styles.logo}
            source={IMAGE.ICON_COMPUS}
            resizeMode="stretch"
          />
        </View>
        <Animatable.View
          style={styles.footer}
          animation="fadeInUpBig"
          duration={1000}>
          <Text style={styles.title}>Stay connect with everyone</Text>
          <Text style={styles.text}>Sign in width account</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <LinearGradient
              colors={['#009245', '#8cc631']}
              style={styles.signin}>
              <Text>Get started</Text>
              <Image style={styles.next} source={IMAGE.ICON_NEXT} />
            </LinearGradient>
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ffff',
  },
  title: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    marginTop: 15,
    color: 'gray',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  signin: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  next: {
    width: 15,
    height: 15,
  },
});
