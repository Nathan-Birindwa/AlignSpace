import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
export default function MapScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const pickup = {
    latitude: 0.3476,
    longitude: 32.5825,
  };

  const destination = {
    latitude: 0.3365,
    longitude: 32.5911,
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: pickup.latitude,
          longitude: pickup.longitude,
          latitudeDelta: 0.0005,
          longitudeDelta: 0.0005,
        }}
      >
        <Marker coordinate={pickup} title="Pickup" />
        <Marker coordinate={destination} title="Destination" />
      </MapView>
      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Worked !🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
  mapContainer: {
    flex: 1,
  },
});
