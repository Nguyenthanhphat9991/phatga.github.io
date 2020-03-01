import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

var data = [
  {
    name: 'General English',
  },
  {
    name: 'Jackfruit Fried',
  },
  {
    name: 'Noodles',
  },
];

export default class LearnScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      data_temp: data,
      search: '',
    };
  }

  renderItem = ({item}) => {
    return (
      <SafeAreaView>
        <LinearGradient
          colors={['#009245', '#8cc631']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.item}>
          <View style={styles.image_container}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DetailScreen')}
            style={styles.button}></TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatList}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  textPrice: {
    color: 'green',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
  },
});
