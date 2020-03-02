import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {IMAGE} from '../src/image/image';
export default class CustomHeader extends Component {
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            {this.props.ishome ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{width: 25, height: 25, marginLeft: 10}}
                  source={IMAGE.Back}
                  resizeMode="contain"
                />
                <Text>Back</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>{this.props.title}</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </SafeAreaView>
    );
  }
}
