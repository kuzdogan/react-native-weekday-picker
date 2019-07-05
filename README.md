# react-native-weekday-picker
A weekday picker for React Native and Expo. Lets users pick days of the week as in a repeating alarm clock. 

## Installation
```
npm install react-native-weekday-picker
```

## Import
```
import WeekdayPicker from "react-native-weekday-picker"
```

## Example Usage
Requires a days object which is a mapping from weekdays to a `bool` value represented by a `0` or a `1`

```
let days = { 1:1, 2:1 , 3:1 , 4:1 , 5:1, 6:0, 0:0 }
<WeekdayPicker
  days={days}
  onChange={this.handleChange}
  style={styles.picker}
  dayStyle={styles.day}
/>
```
## Properties
| Prop     | Type     | Default                                  | Required | Description                                                                                              | Example                                               |
|----------|----------|------------------------------------------|----------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| days     | Object   | `{ 0:0, 1:0, 2:1, 3:0,  4:1, 5:0, 6:0 }` |          | A mapping of days from weekdays to `0` and `1` as bool values. 0: Sunday 1: Monday ... 6: Saturday       |                                                       |
| onChange | function | null                                     |          | Function called when a change is made.  Takes a `day` object as a parameter similar to the previous prop | `handleChange = (days) => {     this.setState(days)}` |
| style    | Object   | null                                     |          | `StyleSheet` object for styling the WeekdayPicker wrapper                                                | `{   padding: 30   }`                                 |
| dayStyle | Object   | null                                     |          | `StyleSheet` object for styling the days wrappers                                                        | `{   margin: 5   }`                                   |

## Demo
