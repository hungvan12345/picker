import { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
interface Props{
    currentMonth:number;
    currentYear:number;
    handleDay:(day:number)=>void
}
const DatePicker: React.FC<Props>= ({currentMonth,currentYear,handleDay}) => {
    const scrollRef=useRef<ScrollView>(null);
    const [currentItem, setCurrentItem] = useState(1);
    const onScroll = (event:any) => {
     const { y } = event.nativeEvent.contentOffset;
     const index =1;
     const itemWidth =30;
     const itemIndex = Math.floor(y / itemWidth);
     setCurrentItem(itemIndex+index);
     handleDay(itemIndex+index);
     console.log('x=',itemIndex)
    }
    function getDaysInMonth(month:number, year:number) {
        const daysInMonth = new Date(year, month, 0).getDate();
        return daysInMonth;
      }
    function getDaysArrayInMonth() {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const daysArray:number[] = [];
      
        for (let day = 1; day <= daysInMonth; day++) {
          daysArray.push(new Date(currentYear, currentMonth - 1, day).getDate());
        }
      
        return daysArray;
    }
    const dataArray= getDaysArrayInMonth();
    dataArray.unshift(null);
    dataArray.push(null, null);
    return (
        <View style={{height:100,flexDirection:'row'}}>
            <ScrollView ref={scrollRef}
                onScroll={onScroll}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}>
                {
                    dataArray.map((i, v) => {
                        return (
                            <View style={styles.item}>
                                <Text style={{ color: currentItem == v ? 'black' : 'gray' }}>{i}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    item:{
        height: 30, width: 30, backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent: 'center', alignItems: 'center' 
    }
})
export default DatePicker;