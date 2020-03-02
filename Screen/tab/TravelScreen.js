import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  ScrollableTabView,
  DefaultTabBar,
  ScrollableTabBar,
} from '@valdio/react-native-scrollable-tabview';
import Visa from './TravelScreen/Visa';
import Translation from './TravelScreen/Translation';
import Travel_Tips from './TravelScreen/Travel_Tips';

import CustomHeader from '../CustomHeader';

export default class TravelScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabbar}>
          <ScrollableTabView
            initialPage={0}
            tabBarActiveTextColor="green"
            renderTabBar={() => (
              <DefaultTabBar
                underlineStyle={{
                  backgroundColor: 'green',
                }}
              />
            )}>
            <Visa tabLabel="Visa" props={this.props} />
            <Translation tabLabel="Translation" props={this.props} />
            <Travel_Tips tabLabel="Travel_Tips" props={this.props} />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('screen').width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 20,
    position: 'absolute',
  },
  tabbar: {
    flex: 1,
    marginTop: width * 0.3,
    paddingHorizontal: 30,
  },
  imageBackground: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
