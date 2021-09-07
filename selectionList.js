import React from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import ReactDOM from 'react-dom'

export const App = () => {

function SelectionListHeader(props) {
    const onPressSelectionActions = () => { 
      ActionSheet.show( 
        {
          options: props.selectActions.map(action => action.name),
          cancelButtonIndex: props.selectActions.length - 1,
        },
        buttonIndex => {
          onExecuteAction(buttonIndex); 
        },
      );
    };
  
    const onExecuteAction = index => { 
    if (props.selectActions[index].method) {
        props.selectActions[index].method.apply();
      }
    };
    render() 
  }
}