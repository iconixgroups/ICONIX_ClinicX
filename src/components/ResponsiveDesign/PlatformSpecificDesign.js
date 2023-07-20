```javascript
import React from 'react';
import { Platform } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { Button as ElementsButton } from 'react-native-elements';
import { Button as CupertinoButton } from '@react-native-community/segmented-control';

const PlatformSpecificDesign = () => {
  const renderButton = () => {
    if (Platform.OS === 'android') {
      return (
        <PaperButton mode="contained">
          Android Button
        </PaperButton>
      );
    } else if (Platform.OS === 'ios') {
      return (
        <CupertinoButton>
          iOS Button
        </CupertinoButton>
      );
    } else {
      return (
        <ElementsButton title="Default Button" />
      );
    }
  };

  return (
    <div>
      {renderButton()}
    </div>
  );
};

export default PlatformSpecificDesign;
```