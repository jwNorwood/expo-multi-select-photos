import React from 'react';
import { View, Text } from 'react-native';

interface NumberInterface {
  number: string;
  numberContainerStyles: object;
  numberTextStyles: object;
}
const defautStyles = {
  zIndex: 99,
  position: 'absolute',
  top: 2,
  left: 2,
  width: 30,
  height: 30,
  backgroundColor: '#fff',
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
};

const Number = (numberObject: NumberInterface) => {
  return (
    <View style={[defautStyles, numberObject.numberContainerStyles]}>
      <Text style={[numberObject.numberTextStyles]}>{numberObject.number}</Text>
    </View>
  );
};

export default Number;
