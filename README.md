# expo-photos-multi-select

Allows to select multiple photos from the media library

This library has minimal dependencies and is compatible with both iOS and Android.

The goal of this library is to provide a simple way to select multiple photos from the media library and be able to style them.

Currently displays the photos in a grid.

Only required fields are selectedPhotos and setSelectedPhotos.

This is still a work in progress and not ready for production usage.

## Installation

NPM Comming soonish

## Usage

```js
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
        numberContainerStyles={styles.numberContainerStyles}
        numberTextStyles={styles.numberTextStyles}
        imageContainerStyles={styles.imageContainerStyles}
        selectedPhotoStyles={styles.selectedPhotoStyles}
        imageStyles={styles.imageStyles}
        selectContainerStyles={styles.selectContainerStyles}
        setSelectedPhotos={setSelectedPhotos}
        selectedPhotos={selectedPhotos}
        photosPerRow={5}
        initialLoad={25}
        loadMoreText="Load More"
        loadMoreContainerStyles={styles.loadMoreContainerStyles}
        loadMoreTextStyles={styles.loadMoreTextStyles}
      />
    </View>
  );
}

```
## Future Updates

Paginated loading of photos

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
