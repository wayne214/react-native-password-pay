/**
 * Created by wayne on 2017/6/21.
 */
import React, { Component } from 'react';
import {StyleSheet,View,TextInput,Text,TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    },
    inputItem: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputItemBorderLeftWidth: {
        borderLeftWidth: 1,
        borderColor: '#ccc',
    },
    iconStyle: {
        width: 16,
        height: 16,
        backgroundColor: '#222',
        borderRadius: 8,
    },
});

export default class passwordInput extends Component{
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
        this._onPress = this._onPress.bind(this);
    }
    _onPress(){
        this._input.focus();
    }

    render(){
        return(
            <TouchableHighlight onPress={this._onPress} activeOpacity={1} underlayColor='transparent'>
                <View style={[styles.container,this.props.style]} >
                    <TextInput ref={(c) => this._input = c}
                               maxLength={this.props.maxLength}
                               autoFocus={true}
                               keyboardType="numeric"
                               onChangeText={(text)=>{this.setState({text});this.props.onChange(text)}}
                               onEndEditing={(event) =>{this.props.onEndEditing(event)}}
                    />
                    {
                        this._getInputItem()
                    }
                </View>
            </TouchableHighlight>
        )

    }
    _getInputItem(){
        let inputItem = [];
        let {text}=this.state;
        for (let i = 0; i < parseInt(this.props.maxLength); i++) {
            if (i == 0) {
                inputItem.push(
                    <View key={i} style={[styles.inputItem,this.props.inputItemStyle]}>
                        {i < text.length ? <View style={[styles.iconStyle,this.props.iconStyle]}></View> : null}
                    </View>)
            }
            else {
                inputItem.push(
                    <View key={i} style={[styles.inputItem,styles.inputItemBorderLeftWidth,this.props.inputItemStyle]}>
                        {i < text.length ?
                            <View style={[styles.iconStyle,this.props.iconStyle]}>
                            </View> : null}
                    </View>)
            }
            ;
        }
        return inputItem;
    }
}
