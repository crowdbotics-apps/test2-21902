import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile159118Navigator from '../features/UserProfile159118/navigator';
import Tutorial159117Navigator from '../features/Tutorial159117/navigator';
import NotificationList159089Navigator from '../features/NotificationList159089/navigator';
import Settings159088Navigator from '../features/Settings159088/navigator';
import Settings159080Navigator from '../features/Settings159080/navigator';
import UserProfile159078Navigator from '../features/UserProfile159078/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile159118: { screen: UserProfile159118Navigator },
Tutorial159117: { screen: Tutorial159117Navigator },
NotificationList159089: { screen: NotificationList159089Navigator },
Settings159088: { screen: Settings159088Navigator },
Settings159080: { screen: Settings159080Navigator },
UserProfile159078: { screen: UserProfile159078Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
