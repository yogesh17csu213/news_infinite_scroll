const initialState = {
    loading: false,
    data: null,
    error: '',
    newsData:[],
    newsDataList:[],
    newsDataError: null
}

const CommonReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_NEWS_DATA_SUCCESS':
            return {
                ...state,
                newsData:action.payload,
                newsDataList:action.payload.hits,
                loading:false
            }
        
        case 'GET_NEWS_DATA_FAILURE':
            return{
                ...state,
                error:action.payload,
                loading:false
            }

        case 'UPDATE_NEWS_DATA_SUCCESS':
            let prevData=[...state.newsDataList]
            let newData=prevData.concat(action.payload.hits)        
            return{
                ...state,
                newsData:action.payload,
                newsDataList:newData,
                loading:false,
            }
        case 'UPDATE_NEWS_DATA_FAILURE':
            return{
                ...state,
                loading:false,
                error: action.payload,
            }
        default: return state
    }
}

export default CommonReducer