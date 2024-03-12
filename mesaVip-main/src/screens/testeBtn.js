import React from "react";
import { SafeAreaView,View, StyleSheet, Text } from "react-native";
import CheckBox from "../components/CheckBox";

const CheckBoxPage = () => {
    return(
        <SafeAreaView style={styles.container}>
        
            <Text style={styles.title}>selecione um dia</Text>
            <CheckBox  onChange={(op)=> alert(op)}>
            
            </CheckBox>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#141414",
        
    },

    title:{
        color:"#fff",
        size: 16,
        fontWeight:"700",
        textTransform:"uppercase",
        marginVertical:10,
        marginLeft:20,
    },
    optionsumporvez:{
        marginLeft:20,
    }
});

export default CheckBoxPage;