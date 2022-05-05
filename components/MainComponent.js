import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { fetchListings } from '../redux/ActionCreators';
import Catalog from './CatalogComponent';
import Listing from './ListingComponent';

const mapDispatchToProps = {
    fetchListings
};

export default Main;