
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import { ScrollView } from 'react-native-gesture-handler';
import { Constants } from 'react-native-unimodules';

export default class FormTest extends ValidationComponent {

    constructor(props) {
        super(props);
        this.state = { name: "My name", email: "pariweshg@gmail.com", number: "56", date: "2017-03-01", newPassword: "", confirmPassword: "" };
    }

    _onPressButton = () => {
        // Call ValidationComponent validate method
        console.log(this.validate({
            name: { minlength: 3, maxlength: 7, required: true },
            email: { email: true, },
            number: { numbers: true },
            date: { date: 'YYYY-MM-DD', },
            confirmPassword: { equalPassword: this.state.newPassword }
        }));;
    }

    render() {
        return (
            <SafeAreaView >
                <ScrollView>
                    <TextInput style={styles.input} ref="name1" onChangeText={(name) => this.setState({ name })} value={this.state.name} />
                    <TextInput style={styles.input} ref="email" onChangeText={(email) => this.setState({ email })} value={this.state.email} />
                    <TextInput style={styles.input} ref="number" onChangeText={(number) => this.setState({ number })} value={this.state.number} />
                    <TextInput style={styles.input} ref="date" onChangeText={(date) => this.setState({ date })} value={this.state.date} />
                    {this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text>{errorMessage}</Text>)}

                    <TextInput style={styles.input} ref="newPassword" onChangeText={(newPassword) => this.setState({ newPassword })} value={this.state.newPassword} secureTextEntry={true} />
                    <TextInput style={styles.input} ref="confirmPassword" onChangeText={(confirmPassword) => this.setState({ confirmPassword })} value={this.state.confirmPassword} secureTextEntry={true} />
                    {this.isFieldInError('confirmPassword') && this.getErrorsInField('confirmPassword').map(errorMessage => <Text>{errorMessage}</Text>)}

                    <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
                        <Text>Submit</Text>
                    </TouchableHighlight>

                    <Text>
                        {this.getErrorMessages()}
                    </Text>
                </ScrollView>   
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",

        padding: 10
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    flexRow: {
        flexDirection: 'row'
    },
    input: {
        borderColor: '#4630eb',
        borderRadius: 4,
        borderWidth: 3,
        textAlign: "left",
        fontStyle: "italic",
        borderWidth: 1,
        // flex: 10,
        // height: 48,
        margin: 16,
        padding: 8
    },
    listArea: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        paddingTop: 16
    },
    sectionContainer: {
        marginBottom: 16,
        marginHorizontal: 16
    },
    sectionHeading: {
        fontSize: 18,
        marginBottom: 8
    }
});