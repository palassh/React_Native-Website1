import * as React from 'react';
import { View,TouchableOpacity, Text,StyleSheet,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UnorderedListOutlined,RiseOutlined,LineChartOutlined, UserOutlined, SettingOutlined,HomeFilled } from '@ant-design/icons';
import 'react-native-gesture-handler';
import Notifications from './src/Notifications';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Home({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}  >
      <View style={{flexDirection:'row',paddingHorizontal:300}}>
            <HomeFilled size="5" style={{color:'cadetblue',paddingTop:1}}/> 
        <Text style={styles.buttontext}>Best Stocks Now</Text>
      </View> 
    </TouchableOpacity>
  );
}

function LogoTitle() {
  return (
    <View style={{flexDirection:'row'}} >
        <Image style={{ width: 50, height: 50, borderRadius:25,marginRight:10 }}
          source={require('./src/Images/Best.png')}/>
        <Text style={{fontSize:20, fontWeight:'bold',color:'white',paddingTop:10}}>Best Stocks Now</Text>
    </View>

  );
}

const Stack = createStackNavigator();
function Draw() {
  return (  
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} 
     options={{
          title: 'Best Stocks Now',
          headerStyle: {
            backgroundColor: 'cadetblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
           <TouchableOpacity style={{paddingRight:150}}>
             <View style={{flexDirection:'row'}}>
             <Image style={{ width: 50, height: 50, borderRadius:25,marginRight:10 }}
              source={require('./src/Images/IMG_2402.jpg')}/>
               <Text style={{fontSize:15,color:'#fff',fontWeight:'bold',paddingTop:12}}>Palash Sahu</Text> 
             </View>
           </TouchableOpacity>
          ),
        }}
        />
    <Stack.Screen name="Notifications" component={Notifications}
    options={{
      title:'Notifications',
      headerStyle: {
        backgroundColor: 'cadetblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }} />
    </Stack.Navigator>
    );
}

function Draw2() {
  return (   
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
    </Stack.Navigator>
    );
}
function Draw3() {
  return (   
    <Stack.Navigator>
    {/* <Stack.Screen name="Home" component={Home} /> */}
    <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Draw" component={Draw}
          options={{ title: 'Stock Rankings',
          drawerIcon: ({ tintColor}) => <AntDesign name="barschart" size='30' color={tintColor}/> }}/>
        <Drawer.Screen name="MyList" component={Draw2}
          options={{ title: 'My List', 
          drawerIcon: ({tintColor}) => <UnorderedListOutlined color={tintColor}/> }}/>
        <Drawer.Screen name="Draw3" component={Draw3}
          options={{ title: 'About Best Stocks Now',
          drawerIcon: ({tintColor}) => <RiseOutlined color={tintColor}/> }}/>
        <Drawer.Screen name="Draw4" component={Draw}
          options={{ title: 'BSN Shows and more...',
          drawerIcon: ({tintColor}) => <LineChartOutlined color={tintColor}/> }}/>
        <Drawer.Screen name="Draw5" component={Draw}
          options={{ title: 'Account Management',
          drawerIcon: ({tintColor}) => <UserOutlined color={tintColor}/> }}/>
        <Drawer.Screen name="Draw6" component={Draw}
          options={{ title: 'Set up an appt with a bill Gunderson Advisor',
          drawerIcon: ({tintColor}) => <SettingOutlined color={tintColor}/> }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  buttontext:{
    color:'black',
    fontSize:15,
    fontWeight:500,
    textAlign:'left',
    paddingLeft:4
  }
})
export default App;
