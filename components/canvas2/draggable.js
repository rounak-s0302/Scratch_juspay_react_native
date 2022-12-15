import Draggable from 'react-native-draggable';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Draggable_func({ showpositions })
{
return (
    <View style={styles.drag}>
        {/* <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A'  />  */}
        {/* <Draggable x={200} y={300} renderColor='red' renderText='B'/> */}
        {/* <Draggable x={50} y={50}>
        <img src="F:\chrome_downloads\cat_icon_2.png" />
        </Draggable> */}
        <Draggable 
            imageSource="https://thecatapi.com/api/images/get?format=src&type=gif"
            //imageSource = "https://xsgames.co/randomusers/avatar.php?g=pixel"
            //imageSource= "https://avatars.dicebear.com/api/:sprites/:seed.svg"
            //imageSource="./media/cat_icon_2.png"
            renderSize={80} 
            onDragRelease={(e, g) => showpositions(e, g)}
            defaultPosition= {{x: 0, y: 0}}
            maxX={650} maxY={400}
            minY= {2}
            />
        
    </View>
);
}

const styles= StyleSheet.create({
    drag : {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
// export default function Header() {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.title1}>Scratch</Text>
//         <Text style={styles.title2}>sign up</Text>
//       </View>
//     );
//   }