import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageView from 'react-native-image-viewing';
import {styles} from '../styles';

import {images, DATA} from '../dummyData/data';

const ImageList = ({imagesArray}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setIsVisible] = useState(false);
  return (
    <View>
      <ScrollView horizontal>
        {imagesArray.map((uri, index) => (
          <TouchableOpacity
            key={`${uri}_${index}`}
            activeOpacity={0.8}
            onPress={() => {
              setImageIndex(index);
              setIsVisible(true);
            }}>
            <Image source={{uri: uri}} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ImageView
        images={images}
        imageIndex={imageIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
        doubleTapToZoomEnabled={true}
        swipeToCloseEnabled={false}
        delayLongPress={1000}
      />
    </View>
  );
};

const SaveIcon = () => {
  const [isFav, setIsFav] = useState(DATA.fav);

  const favOnPress = () => {
    setIsFav(prevIsFav => !prevIsFav);
    DATA.fav = !isFav;
    ToastAndroid.showWithGravityAndOffset(
      `${isFav ? 'Removido de favoritos' : 'Agregado a favoritos'}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      100,
    );
  };

  return (
    <TouchableOpacity onPress={favOnPress} style={styles.favButton}>
      <Icon
        name={isFav ? 'bookmark' : 'bookmark-border'}
        size={45}
        color="white"
      />
    </TouchableOpacity>
  );
};

const ComplaintDetails = props => {
  return (
    <View style={styles.container}>
      <SaveIcon />
      <View style={styles.topSide}>
        <Text style={styles.area}>{DATA.category}</Text>
        <Text style={styles.title}>{DATA.title}</Text>
        <Text style={styles.location}>{DATA.location}</Text>
        <Text style={styles.location}>{DATA.date}</Text>
      </View>
      <View style={styles.botSide}>
        <Text style={styles.darkTitle}>Descripción</Text>
        <View style={styles.descriptionContainer}>
          <ScrollView>
            <Text style={styles.descriptionText}>{DATA.description}</Text>
          </ScrollView>
        </View>
        <Text style={styles.darkTitle}>
          {DATA.author} - {DATA.authorDate}
        </Text>
      </View>
      <SafeAreaView style={styles.evidence}>
        <ImageList imagesArray={images.map(image => image.uri)} />
      </SafeAreaView>
    </View>
  );
};

export default ComplaintDetails;
