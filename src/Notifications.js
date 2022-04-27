import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView,TouchableOpacity, Platform, Image } from 'react-native';


class ExpandableListView extends Component {

  constructor() {
    super();
    this.state = {
      layoutHeight: 0
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layoutHeight: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layoutHeight: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  showSelectedCategory = (item) => {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.panelContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.categoryView}>
          <Text style={styles.categoryText}>{this.props.item.category} </Text>
          <Image
            source={{ uri: 'https://i.postimg.cc/HLFkBBWk/arrow-right-icon.png' }}
            style={styles.iconStyle} />
        </TouchableOpacity>
        <View style={{ height: this.state.layoutHeight, overflow: 'hidden' }}>
          {
            this.props.item.subCategory.map((item, key) => (
              <TouchableOpacity key={key} style={styles.subCategoryText} onPress={this.showSelectedCategory.bind(this, item.name)}>
                <Text> {item.name} </Text>
                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    );
  }
}


export default class App extends Component {
  constructor() {
    super();
    
    const array = [
      {
        expanded: false, category: "Accenture Ltd CI A", subCategory: [{ id: 1, name: 'Sector' }, { id: 2, name: 'Symbol' }, { id: 3, name: 'MarketCap' },
        { id: 4, name: 'Size' }, { id: 5, name: 'Risk Profile' }, { id: 6, name: 'Annual Revenue' }, { id: 7, name: 'Price/Sales' }]
      },
      {
        expanded: false, category: "Valuation 04/08/21", subCategory: [{ id: 8, name: 'A' }, { id: 9, name: 'B' }, { id: 10, name: 'C' },
        { id: 11, name: 'D' }]
      },
      {
        expanded: false, category: "Gunderson Value Grade", subCategory: [{ id: 12, name: 'A' }, { id: 13, name: 'B' },
        { id: 14, name: 'C' }, { id: 15, name: 'D' }]
      },
      {
        expanded: false, category: "Performance of ACN vs S&P 500", subCategory: [{ id: 16, name: 'A' },
        { id: 17, name: 'B' }, { id: 18, name: 'C' }, { id: 19, name: 'D' }]
      },
      {
        expanded: false, category: "Gunderson Stock Grade", subCategory: [{ id: 20, name: 'A' },
        { id: 21, name: 'B' }, { id: 22, name: 'C' }, { id: 23, name: 'D' }]
      },
      {
        expanded: false, category: "Ranking", subCategory: [{ id: 24, name: 'A' },
        { id: 25, name: 'B' }, { id: 26, name: 'C' }, { id: 27, name: 'D' }]
      },
      {
        expanded: false, category: "Bills's Comment", subCategory: [{ id: 24, name: 'A' },
        { id: 25, name: 'B' }, { id: 26, name: 'C' }, { id: 27, name: 'D' }]
      },
    ];
    this.state = { accordionData: [...array] }
  }

  updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const array = [...this.state.accordionData];
    array[index]['expanded'] = !array[index]['expanded'];
    this.setState(() => {
      return {
        accordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ justifyContent:'center',alignItems:'center', paddingVertical: 5 }}>
          {
            this.state.accordionData.map((item, key) =>
              (
                <ExpandableListView key={item.category} onClickFunction={this.updateLayout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#EEEEEE',
  },
  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: 'black'
  },
  subCategoryText: {
    fontSize: 18,
    color: 'black',
    padding: 10
  },
  categoryText: {
    textAlign: 'left',
    color: 'black',
    fontSize: 21,
    padding: 10
  },
  categoryView: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width:800,
  },
  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }
});
function Notifications() {
  return (
    <View style={{ flex: 1 }}>
        <ExpandableListView/>
    </View>
  );
}


