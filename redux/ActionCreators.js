import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchListings = () => dispatch => {

    dispatch()
}

export const listingsLoading = () => ({
    type: ActionTypes.LISTINGS_LOADING
});

export const listingsFailed = errMess => ({
    type: ActionTypes.LISTINGS_FAILED,
    payload: errMess
});

export const addListings = listings => ({
    type: ActionTypes.ADD_LISTINGS,
    payload: listings
});

export const createListing = (listingId, author, email, category, imageUrl, title, description, price, location) => dispatch => {
    const newListing = {
        listingId,
        author,
        email,
        category,
        imageUrl,
        title,
        description,
        price,
        location
    };
}