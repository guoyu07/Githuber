import { StackNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Home from '../pages/Home';
import Trending from '../pages/Trending';
import Favorite from '../pages/Favorite';
import Me from '../pages/Me';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import Tab4 from '../pages/Tab4';
import Tab5 from '../pages/Tab5';

const HomeTabs = TabNavigator(
    {
        Tab1: {
            screen: Tab1
        },
        Tab2: {
            screen: Tab2
        }
    },
    {
        tabBarPosition: 'top'
    }
);

const HomeTabNavigator = TabNavigator(
    {
        Tab1: {
            screen: Tab1
        },
        Tab2: {
            screen: Tab2
        }
    },
    {
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true
    }
);
const TrendingTabNavigator = TabNavigator(
    {
        Tab3: {
            screen: Tab3
        },
        Tab4: {
            screen: Tab4
        },
        Tab5: {
            screen: Tab5
        }
    },
    {
        tabBarPosition: 'top'
    }
);

const AppTabs = TabNavigator(
    {
        Home: {
            screen: HomeTabNavigator
        },
        Trending: {
            screen: TrendingTabNavigator
        },
        Favorite: {
            screen: Favorite
        },
        Me: {
            screen: Me
        }
    },
    {
        // navigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let iconName;
        //         if (routeName === 'Home') {
        //             iconName = `ios-information-circle${
        //                 focused ? '' : '-outline'
        //             }`;
        //         } else if (routeName === 'Trending') {
        //             iconName = `ios-options${focused ? '' : '-outline'}`;
        //         } else if (routeName === 'Favorite') {
        //             iconName = `ios-options${focused ? '' : '-outline'}`;
        //         } else if (routeName === 'Me') {
        //             iconName = `ios-options${focused ? '' : '-outline'}`;
        //         }

        //         // You can return any component that you like here! We usually use an
        //         // icon component from react-native-vector-icons
        //         return <Ionicons name={iconName} size={25} color={tintColor} />;
        //     }
        // }),

        tabBarOptions: {
            activeTintColor: '#2196f3',
            inactiveTintColor: 'gray'
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true
    }
);

const AppStack = StackNavigator(
    {
        Home: {
            screen: AppTabs
        }
    },
    {
        initialRouteName: 'Home',
        // golbal navigationOptions
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#2196f3'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);

export default AppStack;
