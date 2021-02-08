import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

function ListView(props) {
    return (
        <View>
            <ScrollView>
                {
                    props.users.map((item, index) => (
                        <View key={item.id} style={styles.item}>
                            <Text>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
export default ListView

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})