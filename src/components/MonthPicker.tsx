import { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
interface Props{
    handleCurrentMonth:(id:number)=>void;
}
const MonthPicker: React.FC<Props> = ({handleCurrentMonth}) => {
    const scrollRef=useRef<ScrollView>(null);
    const [currentItem, setCurrentItem] = useState(4);
    const onScroll = (event:any) => {
     const { y } = event.nativeEvent.contentOffset;
     const index = 4;
     const itemWidth = 30;
     const itemIndex = Math.floor(y / itemWidth);
     setCurrentItem(itemIndex+index);
     handleCurrentMonth(itemIndex+index);
     console.log('x=',itemIndex+index)
    }
    const months = Array.from({length: 12}, (e, i) => {
        return new Date(null, i + 1, null).toLocaleDateString("en",
        {month: "long"}
         );
     })
    months.unshift('');
    months.push('','');
    return (
        <View style={{height:100,flexDirection:'row'}} >
            <ScrollView ref={scrollRef}
                onScroll={onScroll}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}>
                {
                    months.map((i, v) => {
                        return (
                            <View style={styles.item}>
                                <Text style={{ color: currentItem == v + 3 ? 'black' : 'gray' }}>{i}</Text>
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
        height: 30, width: 100, backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent: 'center', alignItems: 'center'
    }
})
export default MonthPicker;