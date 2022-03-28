import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

interface MultiSelectInterface {
  numberContainerStyles: object;
  numberTextStyles: object;

  imageStyles: object;
  imageContainerStyles: object;

  selectContainerStyles: object;
  selectedPhotoStyles: object;

  loadMoreTextStyles: object;
  loadMoreContainerStyles: object;
  loadMoreText: string;

  setSelectedPhotos: Function;
  selectedPhotos: Array<PhotoInterface>;
  photosPerRow: number;
  initialLoad: number;
}
interface PhotoInterface {
  id: string;
  uri: string;
}

const defaultContainerStyles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const defaultLoadMoreContainerStyles = {
  height: 50,
  width: '100%',
  justifyContent: 'center',
};

const defaultLoadMoreTextStyles = {
  textAlign: 'center'
};

const MultiSelect = (multiSelectObject: MultiSelectInterface) => {
  const [photos, setPhotos] = useState<Array<object>>([]);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [moreToLoad, setMoreToLoad] = useState<boolean>(true);

  const numbersPerRow = multiSelectObject.photosPerRow
    ? multiSelectObject.photosPerRow
    : 3;

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const loadPhotos = async () => {
    (async () => {
      const { assets, hasNextPage } = await MediaLibrary.getAssetsAsync({
        first: multiSelectObject.initialLoad + photos.length,
        mediaType: MediaLibrary.MediaType.photo,
        sortBy: [MediaLibrary.SortBy.creationTime],
      });
      const photosToAdd = assets.slice(photos.length);
      setMoreToLoad(hasNextPage);
      setPhotos([...photos, ...photosToAdd]);
    })();
  };

  useEffect(() => {
    loadPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPermission]);

  return (
    <>
      <View
        style={[
          defaultContainerStyles,
          multiSelectObject.selectContainerStyles,
        ]}
      >
        <FlatList
          data={photos}
          keyExtractor={(photo) => photo.id}
          numColumns={numbersPerRow}
          renderItem={({ item }) => {
            return (
              <Photo
                photo={item}
                numberContainerStyles={multiSelectObject.numberContainerStyles}
                numberTextStyles={multiSelectObject.numberTextStyles}
                imageStyles={multiSelectObject.imageStyles}
                imageContainerStyles={multiSelectObject.imageContainerStyles}
                selectedPhotoStyles={multiSelectObject.selectedPhotoStyles}
                setSelectedPhotos={multiSelectObject.setSelectedPhotos}
                selectedPhotos={multiSelectObject.selectedPhotos}
                photosPerRow={numbersPerRow}
                selectedNumber={
                  multiSelectObject.selectedPhotos.findIndex(
                    (p) => p.id === item.id
                  ) + 1
                }
              />
            );
          }}
        />
      </View>
      {moreToLoad && (
        <TouchableOpacity
          onPress={() => loadPhotos()}
          style={[
            multiSelectObject.loadMoreContainerStyles,
            defaultLoadMoreContainerStyles,
          ]}
        >
          <Text
            style={[
              multiSelectObject.loadMoreTextStyles,
              defaultLoadMoreTextStyles,
            ]}
          >
            {multiSelectObject.loadMoreText
              ? multiSelectObject.loadMoreText
              : 'Load More Photos'}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default MultiSelect;
