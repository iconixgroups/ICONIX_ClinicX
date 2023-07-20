```javascript
import React from 'react';
import { AccessibilityInfo, View, Text } from 'react-native';

class Accessibility extends React.Component {
  state = {
    screenReaderEnabled: false,
  };

  componentDidMount() {
    AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
      this.setState({ screenReaderEnabled });
    });
  }

  render() {
    return (
      <View accessible={true}>
        <Text style={{fontSize: 18, color: '#333'}}>
          {this.state.screenReaderEnabled
            ? 'Screen reader is enabled on your device.'
            : 'Screen reader is disabled on your device.'}
        </Text>
        <Text style={{fontSize: 18, color: '#333'}}>
          This app is designed to be fully accessible. We have followed the accessibility guidelines for colors, contrast, and text sizes. We support screen readers like TalkBack on Android and VoiceOver on iOS.
        </Text>
      </View>
    );
  }
}

export default Accessibility;
```