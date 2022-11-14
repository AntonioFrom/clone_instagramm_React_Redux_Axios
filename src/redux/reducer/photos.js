import { GET_PHOtOS_FAILED, GET_PHOtOS_STARTED, GET_PHOtOS_SUCCESS, SET_PHOTOS_TOTAL } from "../actionCreators/photos"

const initialState = {
    photos: [],
    isPhotoLoading: true,
    totalphotos: 0,
}

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOtOS_STARTED:
            return {
                ...state,
                isPhotoLoading: true
            }
        case GET_PHOtOS_FAILED:
            return { ...state, isPhotoLoading: false }
        case GET_PHOtOS_SUCCESS:
            return { ...state, isPhotoLoading: false, photos: action.payload }
        case SET_PHOTOS_TOTAL:
            return {
                ...state,
                totalphotos: action.payload
            }
        default:
            return {
                ...state
            }
    }
}