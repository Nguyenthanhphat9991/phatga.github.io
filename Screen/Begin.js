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
} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class THEME extends Component {
  state = {
    logo: new Animated.Value(0),
    text: new Animated.Value(height / 0.5),
  };
  async componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.logo, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(this.state.text, {
        toValue: 1,
        duration: 2000,
      }),
    ]).start(() => {});
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LearnScreen')}>
          <SafeAreaView>
            <Animated.Image
              style={{...styles.image, opacity: this.state.logo}}
              source={require('../asset/COMPUS-removebg-preview.png')}
            />
            <Animated.View
              style={{
                backgroundColor: 'rgba(0,100,255,1)',
                width: 300,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: this.state.text,
              }}>
              <Text style={styles.text}>WELLCOM</Text>
            </Animated.View>
          </SafeAreaView>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8E0F7',
    width: 100 + '%',
    height: 100 + '%',
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginBottom: 30,
  },
  text: {
    color: 'gold',
    fontSize: 30,
  },
});
