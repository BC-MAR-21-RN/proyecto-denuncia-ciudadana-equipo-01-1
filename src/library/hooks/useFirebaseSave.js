import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export const useFirebaseSaveComplaint = newData => {
  const saveDataComplaints = () => {
    firestore()
      .collection('listComplaints')
      .doc('XJ5Qs0ttXjE1Ez3fInnM')
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          var collectionData = documentSnapshot.data()['list'];
          const dateActual = new Date();
          newData.id = `${auth().currentUser.uid}${
            newData.creationDate
          }${dateActual.getHours()}:${dateActual.getMinutes()}:${dateActual.getSeconds()}`;
          newData.likes = [];
          newData.evidences = [];

          newData.userName = 'Anonymous';
          newData?.anonymous
            ? saveDataComplaintFN(newData, collectionData)
            : firestore()
                .collection('userData')
                .doc(auth().currentUser.uid)
                .get()
                .then(dataComplaints2 => {
                  if (dataComplaints2.exists) {
                    newData.userName = dataComplaints2.data()['name'];
                    newData.anonymous=false
                    // console.log(newData);

                    saveDataComplaintFN(newData, collectionData);
                  }
                });
        }
      })
      
      ;
  };

  return {saveDataComplaints};
};

const saveDataComplaintFN = (newData, collectionData) => {
  firestore()
    .collection('complaints')
    .doc('SbpNphb62pp4IEFhNsEo')
    .get()
    .then(dataComplaints => {
      if (dataComplaints.exists) {
        var data = dataComplaints.data()['listComplaints'];
        let dataNew = data.map(e => {
          if (e.id === `${auth().currentUser.uid}`) {
            e.list.push(newData.id);
          }
          return e;
        });
        firestore()
          .collection('complaints')
          .doc('SbpNphb62pp4IEFhNsEo')
          .set({listComplaints: dataNew});
      }
    });
    
    console.log("ENETER TO EXIST===",newData);

  collectionData.push(newData);
  firestore()
    .collection('listComplaints')
    .doc('XJ5Qs0ttXjE1Ez3fInnM')
    .set({list: collectionData});
};
