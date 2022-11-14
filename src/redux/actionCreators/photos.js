export const GET_PHOtOS_SUCCESS = "GET_PHOtOS_SUCCESS"
export const GET_PHOtOS_FAILED = "GET_PHOtOS_FAILED"
export const GET_PHOtOS_STARTED = "GET_PHOtOS_STARTED"
export const SET_PHOTOS_TOTAL = "SET_PHOTOS_TOTAL"

export const getPhotosSuccess = (photos) => ({
    type: GET_PHOtOS_SUCCESS,
    payload: photos,
})


export const getPhotosFailed = (error) => ({
    type: GET_PHOtOS_FAILED,
    payload: error,
})


export const getPhotosStarted = () => ({
    type: GET_PHOtOS_SUCCESS,
})

export const setPhotosTotal = (total) => ({
    type: SET_PHOTOS_TOTAL,
    payload: total,
})