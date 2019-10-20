import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LaunchScreen from 'containers/LaunchScreen';
import Home from 'containers/marketplace/Home';

const MarketPlaceStack = createBottomTabNavigator(
  {
    Home: Home,
    Cart: Home,
    Account: Home,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      // tabBarIcon: ({ focused, horizontal, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   let IconComponent = Ionicons;
      //   let iconName;
      //   if (routeName === 'Home') {
      //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      //     // Sometimes we want to add badges to some icons.
      //     // You can check the implementation below.
      //     IconComponent = HomeIconWithBadge;
      //   } else if (routeName === 'Settings') {
      //     iconName = `ios-options`;
      //   }
      //   // You can return any component that you like here!
      //   return <IconComponent name={iconName} size={25} color={tintColor} />;
      // },
    }),
    tabBarOptions: {
      activeBackgroundColor: 'red',
      inactiveTintColor: 'blue',
      showIcon: true,
      safeAreaInset: {
        bottom: 'never',
      },
    },
  },
);

const LaunchStack = createStackNavigator(
  {
    Launch: LaunchScreen,
  },
  {
    initialRouteName: 'Launch',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    LaunchStack: LaunchStack,
    MainStack: MarketPlaceStack,
  },
  {
    initialRouteName: 'MainStack',
  },
);

export default createAppContainer(AppNavigator);
