import Number from './Number';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';

interface PhotoInterface {
  photo: Photo;

  imageStyles: object;
  imageContainerStyles: object;
  photosPerRow: number;

  setSelectedPhotos: Function;
  selectedPhotos: Array<Photo>;

  numberContainerStyles: object;
  numberTextStyles: object;

  selectedNumber: number;
  selectedPhotoStyles: object;
}

interface Photo {
  id: string;
  uri: string;
}

const Photo = (photoProps: PhotoInterface) => {
  const { width } = Dimensions.get('window');
  const photoWidth = width / photoProps.photosPerRow;

  const selectPhoto = () => {
    if (photoProps.selectedPhotos.includes(photoProps.photo)) {
      photoProps.setSelectedPhotos(
        photoProps.selectedPhotos.filter((p) => p.id !== photoProps.photo.id)
      );
    } else {
      photoProps.setSelectedPhotos([
        ...photoProps.selectedPhotos,
        photoProps.photo,
      ]);
    }
  };
  return (
    <TouchableOpacity
      style={[
        photoProps.imageContainerStyles,
        { width: photoWidth - 1, height: photoWidth - 1 },
      ]}
      onPress={() => selectPhoto()}
    >
      {!!photoProps.selectedNumber && (
        <Number
          number={`${photoProps.selectedNumber}`}
          numberContainerStyles={photoProps.numberContainerStyles}
          numberTextStyles={photoProps.numberTextStyles}
        />
      )}
      <Image
        source={{ uri: photoProps.photo.uri }}
        style={[
          photoProps.imageStyles,
          { width: photoWidth - 1, height: photoWidth - 1 },
          photoProps.selectedPhotos.includes(photoProps.photo) &&
            photoProps.selectedPhotoStyles,
        ]}
      />
    </TouchableOpacity>
  );
};

export default Photo;
