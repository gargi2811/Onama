import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <text>open up app.js to start working on it </text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
