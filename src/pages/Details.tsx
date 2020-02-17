import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import withBadge from "./../components/Badge"
import Search from "./../components/Inputs/SearchProduct"


const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

/*export const DetailsScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' leftControl={BackAction()}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};*/
const items = [
  '1337',
  'janeway',
  'Osvaldo'
]
export class DetailsScreen extends React.Component{
  navigateBack = () => {
    this.props.navigation.goBack();
  };

  BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={this.navigateBack}/>
  );

  searchBarShow = () =>{
    this.searchBar.show()
  }

  SearchAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={this.searchBarShow}/>
  );

  _handleResults = (results) =>{
    console.log('results', results)
  } 

  componentDidMount(){
    this.searchBar.hide()
  }

  render(){
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title='MyApp' alignment='center' leftControl={this.BackAction()} rightControls={this.SearchAction()}/>
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text category='h1'>DETAILS</Text>
        </Layout>
        <Search
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
        />
      </SafeAreaView>
    );
  }
}