import {GetNewsDataRepo} from 'repositories'

export const GetNewsData=(data)=>{
    return async (dispatch)=>{
        dispatch({type:'LOADING'})
        await GetNewsDataRepo(data)
        .then((response)=>{
            if(response && response.status== 200){
                dispatch({type:'GET_NEWS_DATA_SUCCESS',payload:response.data })
               
            }else{
                dispatch({type:'GET_NEWS_DATA_FAILURE',payload:response })
            }
        })
        .catch((error)=>{
            if(error ){
                dispatch({type:'GET_NEWS_DATA_FAILURE',payload:error })
            }
        })
    }
}

export const UpdateNewsData=(data)=>{
    return async (dispatch)=>{
        dispatch({type:'LOADING'})
        await GetNewsDataRepo(data)
        .then((response)=>{
            if(response && response.status== 200){
                dispatch({type:'UPDATE_NEWS_DATA_SUCCESS',payload:response.data })
               
            }else{
                dispatch({type:'UPDATE_NEWS_DATA_FAILURE',payload:response })
            }
        })
        .catch((error)=>{
            if(error ){
                dispatch({type:'UPDATE_NEWS_DATA_FAILURE',payload:error })
            }
        })
    }
}
