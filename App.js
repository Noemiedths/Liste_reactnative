import React from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import ReactDOM from 'react-dom'

export const App = () => {

  function ListItem(props) {
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <ListItem key={number.toString()}
                value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );
}

export default App;