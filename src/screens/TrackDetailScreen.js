import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacer';


const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
    <Spacer>
      <Text style={styles.trackName}>{track.name}</Text>
    </Spacer>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  );
};


TrackDetailScreen.navigationOptions = {
  title: 'Track Detail'
};


const styles = StyleSheet.create({
  map: {
    height: 300
  },
  trackName: {
    fontSize: 24,
    textAlign: 'center'
  }
});


export default TrackDetailScreen;
