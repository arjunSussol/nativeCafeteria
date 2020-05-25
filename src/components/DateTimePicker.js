import React, {useState} from 'react';
import {View, Platform, Text, TouchableOpacity, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DateTimeSelector = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={showDatepicker} style={{flex: 1, flexDirection: 'row'}}>
          <Icon
            name='calendar-month'
            color='#517fa4'
            size={30}
            />
          <TextInput value={date.toLocaleDateString()} />
        </TouchableOpacity>
        <TouchableOpacity onPress={showTimepicker} style={{flex: 1, flexDirection: 'row'}}>
        <Icon
            name='timer'
            color='#517fa4'
            size={30}
            />
          <TextInput value={date.toLocaleTimeString()} />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          minimumDate={new Date(1950, 0, 1)}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimeSelector;