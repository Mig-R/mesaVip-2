import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const datas_disp = [
    {
        cod_data: 1,
        dia_data: "01",
        dia_sem: "seg"
    },
    {
        cod_data: 2,
        dia_data: "02",
        dia_sem: "ter"
    },
    {
        cod_data: 3,
        dia_data: "03",
        dia_sem: "qua"
    },
    {
        cod_data: 4,
        dia_data: "04",
        dia_sem: "qui"
    },
]


const CheckBox = ({ options = [], multiple = false }) => {
    const [selected, setSelected] = useState([]);

    function toggle(id) {
        let index = selected.findIndex(i => i === id);
        let arrSelecteds = [...selected];
        if (index !== -1) {
            arrSelecteds.filter((i) => i !== id);
        } else {
            multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
        }
        setSelected(arrSelecteds);
    }
    return (

        <FlatList
            data={datas_disp}
            ListEmptyComponent={<Text>Não há datas cadastradas.</Text>}
            keyExtractor={item => item.cod_data.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    {options.map((op, index) => (
                        <View style={styles.optionContainer}>
                            <TouchableOpacity style={[styles.toucheble, {
                                backgroundColor: selected.findIndex(i => i === op.id) !== -1 ? "red" : "#141414"
                            }]} onPress={() => toggle(op?.id)}>
                                <Text style={styles.dia}>
                                    {item.dia_data}
                                </Text>

                                <Text style={styles.nome_smn}>
                                    {item.dia_sem}
                                </Text>

                            </TouchableOpacity>

                        </View>
                    ))}
                </View>
            )}
        />
        /*     <View style={styles.container}>
                {options.map((op, index) => (
                    <View style={styles.optionContainer}>
                        <TouchableOpacity style={[styles.toucheble,{
                            backgroundColor: selected.findIndex(i=> i === op.id) !== -1 ? "red" : "#141414"
                        }]} onPress={()=> toggle(op?.id)}>
                                    <Text style = {styles.dia}>																
                                        31 
                                    </Text>
        
                                    <Text style = {styles.nome_smn}>									
                                        Ter
                                    </Text>
                            
                        </TouchableOpacity>
                        
                    </View>
                ))}
            </View> */
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 15
    },

    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    toucheble: {
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: "red",
        alignItems: "center",
        borderRadius: 100,
    },

    optext: {
        marginLeft: 12,
        color: "#555",
        fontSize: 16,
        fontWeight: "600",
    },
    dia: {
        color: "#FFFFFF",
        fontSize: 17,
        textAlign: "center"
    },

    nome_smn: {
        bottom: 4,
        color: "#FFFFFF",
        fontSize: 12,
    },
});


export default CheckBox;