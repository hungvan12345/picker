import { useRef, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MonthPicker from "../components/MonthPicker";
import DatePicker from "../components/DatePicker";
import YearPicker from "../components/YearPicker";
import { MONTHS, YEARS } from "../constant/Constant";


const PickerApp: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(4);
    const [currentYear, setCurrentYear] = useState(2004);
    const [currentDay, setCurrentDay] = useState(1);
    const [month, setMonth] = useState('January');

    const handleCurrentMonth = (id: number) => {
        setCurrentMonth(id);
        setMonth(MONTHS[id]);
       
    }
    const handleCurrentYear = (id: number) => {
        setCurrentYear(YEARS[id]);
    }
    const handleDay = (day: number) => {
        setCurrentDay(day);
    }
    const onAccept = () => {
        Alert.alert('Date of birth: ', currentDay + '/' + month + '/' + currentYear);
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text>Date of birth</Text>
            </View>
            <View style={styles.pickerContainer} >
                <View style={styles.highlight} />
                <DatePicker currentMonth={currentMonth} currentYear={currentYear} handleDay={handleDay} />
                <MonthPicker handleCurrentMonth={handleCurrentMonth} />
                <YearPicker handleCurrentYear={handleCurrentYear} />
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={onAccept}>
                    <Text style={styles.acceptColor}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderRadius: 10,
        width: '80%'
    },
    pickerContainer: {
        backgroundColor: '#fff',
        height: 120,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 0,
        justifyContent: 'center'
    },
    highlight: {
        width: '100%',
        height: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        position: 'absolute',
        top: 43
    },
    bottomView: {
        alignItems: "center",
        borderTopWidth: 0.5,
        width: '100%',
        padding: 10
    },

    headerView: {
        alignItems: "center",
        borderBottomWidth: 0.5,
        width: '100%',
        padding: 10
    },
    acceptColor: {
        color: "purple",
        fontWeight: 'bold'
    }
})
export default PickerApp;