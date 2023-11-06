import { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
interface Props{
    handleCurrentYear:(id:number)=>void;
}
const YearPicker: React.FC<Props> = ({handleCurrentYear}) => {
    const scrollRef=useRef<ScrollView>(null);
    const [currentItem, setCurrentItem] = useState(4);
    const onScroll = (event:any) => {
     const { y } = event.nativeEvent.contentOffset;
     const index =4;
     const itemWidth =30;
     const itemIndex = Math.floor(y / itemWidth);
     setCurrentItem(itemIndex+index);
     handleCurrentYear(itemIndex+index);
     console.log('x=',itemIndex)
    }
    function getYearsArray() {
        const currentYear = new Date().getFullYear();
        const yearsArray = [];
      
        for (let i = 2004; i <= currentYear; i++) {
          yearsArray.push(i);
        }
      
        return yearsArray;
      }
    const last20Years = getYearsArray();
    last20Years.unshift(null);
    last20Years.push(null, null);
    return (
        <View style={{height:100,flexDirection:'row'}} >
            <ScrollView ref={scrollRef}

                onScroll={onScroll}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}>
                {
                    last20Years.map((i, v) => {
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
    height: 30, width: 40, backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent: 'center', alignItems: 'center'
  }
})
export default YearPicker;