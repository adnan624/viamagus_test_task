import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';

import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import ActionSheet, { ActionSheetRef, SheetManager, SheetProps, useScrollHandlers } from 'react-native-actions-sheet';

function ExampleSheet(props: SheetProps<{ data: string }> ) {
  const [choosenLabel, setChoosenLabel] = useState('Native');
  const [choosenIndex, setChoosenIndex] = useState('2');

  // const navigation = useNavigation();
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const scrollHandlers = useScrollHandlers<ScrollView>('1', actionSheetRef);
  console.log("Visible")
  return (
    <ActionSheet
      id={props.sheetId}
      ref={actionSheetRef}
      onBeforeShow={() => {
        console.log('sheet payload', props.payload?.data);
      }}
      isModal={false}
      snapPoints={[100]}
      initialSnapIndex={0}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      useBottomSafeAreaPadding
      defaultOverlayOpacity={0.3}
    >
      <View
        style={{
          paddingHorizontal: 12,
          maxHeight: '100%',
          height: 350,
        }}
      >
        <ScrollView {...scrollHandlers} style={styles.scrollview}>
          <View>
            <Image
              source={require('../Assets/prediction3.png')}
            />
            <Text style={styles.label}>ENTRY TICKETS</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={choosenLabel}
                onValueChange={(itemValue, itemIndex) => {
                  setChoosenLabel(itemValue);
                  setChoosenIndex(itemIndex);
                }}
                style={styles.picker}
              >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
              </Picker>
            </View>
            <View>
              <Text style={styles.subLabel}>You can win</Text>
              <View style={styles.prizeContainer}>
                <Text style={styles.prize}>$2000</Text>
                <Text style={styles.total}>Total 5</Text>
              </View>
            </View>
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity
              style={styles.submitButton}
            >
              <Text style={styles.submitText}>Submit my prediction</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#727682',
    fontSize: 12,
    lineHeight: 14.63,
    fontWeight: '600',
    marginTop: 40,
  },
  pickerContainer: {
    marginTop: 60,
  },
  picker: {
    flex: 1,
    width: 80,
    alignSelf: 'center',
  },
  subLabel: {
    color: '#B5C0C8',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 14.63,
    letterSpacing: 0.5,
    marginTop: 5,
  },
  prizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  prize: {
    color: '#03A67F',
    fontWeight: '600',
    fontSize: 14,
    height: 25,
  },
  total: {
    color: '#727682',
    fontSize: 14,
    height: 25,
  },
  submitContainer: {
    marginTop: 30,
  },
  submitButton: {
    width: 300,
    height: 40,
    backgroundColor: '#6231AD',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf:'center'
  },
  submitText: {
    alignSelf: 'center',
    lineHeight: 17.07,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  scrollview: {
    width: '100%',
    padding: 12,
  },
});

export default ExampleSheet;
