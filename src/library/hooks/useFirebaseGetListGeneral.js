import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export const useFirebaseGetGeneralList = (
  collectionName,
  documentName,
  arrayName,
  setData,
  myComplaints = false,
) => {
  useEffect(() => {
    if (myComplaints) {
      firestore()
        .collection('complaints')
        .doc('SbpNphb62pp4IEFhNsEo')
        .onSnapshot(documentSnapshot => {
          if (documentSnapshot) {
            var DATA = documentSnapshot
              .data()
              ['listComplaints'].find(
                item => item.id === auth().currentUser.uid,
              ).list;
            firestore()
              .collection(collectionName)
              .doc(documentName)
              .onSnapshot(newDocumentSnapshot => {
                if (newDocumentSnapshot) {
                  var DATARESULT = newDocumentSnapshot.data()[arrayName];
                  const dataRes = [];
                  DATA.map(item => {
                    const newDataResult = DATARESULT.find(
                      value => value.id === item,
                    );
                    newDataResult ? dataRes.push(newDataResult) : '';
                  });
                  setData(dataRes);
                }
              });
          }
        });
      return;
    } else {
      const unsubscribeListener = firestore()
        .collection(collectionName)
        .doc(documentName)
        .onSnapshot(documentSnapshot => {
          if (documentSnapshot) {
            var DATA = documentSnapshot.data()[arrayName];
            setData(DATA);
          }
        });
      return () => unsubscribeListener();
    }

    // return () => unsubscribeListener();
  }, []);
};

export const useFirebaseAreas = setData => {
  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection('areas')
      .doc('8GrmYDIGX64U9wqFhKeo')
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot) {
          var DATA = documentSnapshot.data()['List'];
          setData(DATA);
        }
      });
    return () => unsubscribeListener();

    // return () => unsubscribeListener();
  }, []);
};
