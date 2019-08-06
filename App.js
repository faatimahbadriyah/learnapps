import Home from './src/Home';
import Detail from './src/Detail';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Detail: {screen: Detail},
});

const App = createAppContainer(MainNavigator);

export default App;
