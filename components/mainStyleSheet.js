import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const mainStyleSheet = StyleSheet.create({
  logoimage: {
    // flex: 1, for equal dividence
    width: 255,
    // height: 150,
    //position: 'absolute',
  },
  buttonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    // marginLeft: 30,
    // marginRight: 30,
    backgroundColor: '#bc4c4c',
    borderRadius: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#bc4c4c',
    fontWeight: '600',
    // paddingHorizontal: 30,
    //paddingVertical: 80,
    paddingBottom: 30,
  },
  textinput: {
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
  },
  text: {
    color: '#ffffff',
  },
  textforgot: {
    color: '#bc4c4c',
    textAlign: 'right',
    paddingTop: 10,
    fontWeight: 'bold',
  },
  textsignup: {
    color: '#bc4c4c',
    fontWeight: 'bold',
  },
  items: {
    alignItems: 'center',
  },
  module1: {
    paddingHorizontal: 30,
  },
  module2: {
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  mobileno: {
    marginRight: 5,
  },
  userViewstyle: {flex: 1, flexDirection: 'row', paddingTop: 20},
});

export default mainStyleSheet;
