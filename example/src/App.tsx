import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MultiSelect from 'expo-photos-multi-select';

const styles = StyleSheet.create({
  numberContainerStyles: {
    backgroundColor: '#333',
  },
  numberTextStyles: {
    fontSize: 20,
    color: '#eaeaea',
  },
  imageStyles: {
    backgroundColor: '#fff',
  },
  imageContainerStyles: {
    backgroundColor: '#ea33ea',
  },
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  selectContainerStyles: {
    backgroundColor: '#333',
  },
  selectedPhotoStyles: {
    opacity: 0.5,
  },
  loadMoreContainerStyles: {
    backgroundColor: '#333',
  },
  loadMoreTextStyles: {
    color: '#eaeaea',
  },
});

export default function App() {
  const [selectedPhotos, setSelectedPhotos] = React.useState<Array<object>>([]);

  return (
    <View style={styles.container}>
      <MultiSelect
        setSelectedPhotos={setSelectedPhotos}
        selectedPhotos={selectedPhotos}
        photosPerRow={5}
        initialLoad={25}
      />
    </View>
  );
}
