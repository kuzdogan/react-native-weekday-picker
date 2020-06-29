import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Day from './Day';

WeekdayPicker.defaultProps = {
    onChange: null,
    style: null,
    dayStyle: null,
    days: { 1:1, 2:1 , 3:1 , 4:1 , 5:1, 6:0, 0:0 }    
}

export default function WeekdayPicker(props){
  let { onChange, style, dayStyle, dayInactiveStyle, days, activeBackgroundColor, textColor } = props;
  /**
   * Function for toggling the day
   * 
   * @param {String} day - Day of the week in one or two letters. e.g. M, Tu, W
   */
  const toggleDay = (day) => {
    // If the day is 0 set it 1, if 1 set 0
    days[day]
    ? days[day] = 0
    : days[day] = 1
    // Call the parent function to set the new reminder in the state
    onChange(days)
  }
  
  // Populate days of the week
  // 
  let daysContainer = [];

  Object.keys(days).forEach( (day, i) => {
    daysContainer.push(<Day 
      key = {i}
      toggleDay={toggleDay} 
      day={day}
      activeBackgroundColor={activeBackgroundColor}
      style={[styles.day, dayStyle]}
      inactiveStyle={dayInactiveStyle}
      activeTextColor={props.textColor?textColor: '#38dfe1'}
      isActive={1 === days[day]} // Pass boolean
      />)
  });
  return (
    <View style={[styles.container, style]}>
        {daysContainer}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
    height: 50,
    alignItems: 'center'
  },
  day: {
    margin:3
  }
});
