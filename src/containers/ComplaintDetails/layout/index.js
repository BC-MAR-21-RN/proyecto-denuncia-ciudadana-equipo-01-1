import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageView from 'react-native-image-viewing';
import firestore from '@react-native-firebase/firestore';
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

const ComplaintDetails = ({route}) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const {itemId} = route.params;

  useEffect(() => {
    var dataComplaint;
    firestore()
      .collection('listComplaints')
      .doc('XJ5Qs0ttXjE1Ez3fInnM')
      .onSnapshot(docSnapshot => {
        if (docSnapshot) {
          dataComplaint = docSnapshot.data().list[itemId];
          const dataLocation = dataComplaint.location;
          const newLocation = `${dataLocation.adminArea}, ${dataLocation.locality}, ${dataLocation.subLocality}, ${dataLocation.streetName} #${dataLocation.streetNumber}`;
          setData(dataComplaint);
          setLocation(newLocation);
        }
      });
  }, [itemId]);
  
  return (
    <View style={styles.container}>
      <SaveIcon />
      <View style={styles.topSide}>
        <Text style={styles.area}>{data.area}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.location}>
          Fecha de los hechos: {data.dataEvents}
        </Text>
      </View>
      <View style={styles.botSide}>
        <Text style={styles.darkTitle}>Descripción</Text>
        <View style={styles.descriptionContainer}>
          <ScrollView>
            <Text style={styles.descriptionText}>{data.description}</Text>
          </ScrollView>
        </View>
        <Text style={styles.darkTitle}>
          Denuncia realizada por {data.userName} - {data.creationDate}
        </Text>
      </View>
      <SafeAreaView style={styles.evidence}>
        <ImageList imagesArray={images.map(image => image.uri)} />
      </SafeAreaView>
    </View>
  );
};

export default ComplaintDetails;
