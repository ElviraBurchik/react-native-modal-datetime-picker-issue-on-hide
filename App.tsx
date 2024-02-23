/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import type { PropsWithChildren } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateOnConfirm, setDateOnConfirm] = useState<Date | undefined>();
  const [dateOnHide, setDateOnHide] = useState<Date | undefined>();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDateOnConfirm(date);
    hideDatePicker();
  };

  const handleHide = (date: Date) => {
    setDateOnHide(date);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ alignContent: "center", justifyContent: "center", flex: 1 }}
      >
        <Button title="Open DateTimePicker" onPress={showDatePicker} />
        <Text>{`Date on confirm: ${dateOnConfirm}`}</Text>
        <Text>{`Date on hide: ${dateOnHide}`}</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          onHide={handleHide}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
