
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Newsbox from './newsbox'
import {GetNewsData,UpdateNewsData} from 'store/actions'
function Search(props) {

  const [searchText,setSearchText]=useState(null)
  const [page,setPage]=useState(0)
  const [debounceState,setDebounceState]=useState(false)
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    if(page){
      let params={}
      params.query=searchText
      params.page=page
      props.dispatch(UpdateNewsData(params))
    }
  },[page])

  useEffect(()=>{
    if(props.newsData.query){
      setLoading(false)
    }
  },[props.newsData.query])

  const handleSearch = (obj) => {
    if(obj?.length>0){
      let inDebounce = debounceState
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
          if(obj?.length>0 ){
            let params={}
            params.query=obj
            params.page=0
            setLoading(true)
            props.dispatch(GetNewsData(params));
          }
      },500) 
      setDebounceState(inDebounce)
      setSearchText(obj)
      setPage(0)
    } 
    else{
      setLoading(false)
    }
  };
    
  return (
        <div>
          <div className='center' >
            <label>Search News</label>
            <input placeholder='type here to search news' onChange={(e)=>handleSearch(e.target.value)}/>
          </div>
          <Newsbox 
              newsList={props.newsDataList} 
              loading={props.loading} 
              page={page} 
              setPage={(obj)=>setPage(obj)}
              loadingSearch={loading}
          />      
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
      newsData:state.NewsReducer.newsData,
      newsDataList:state.NewsReducer.newsDataList,
      loading:state.NewsReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Search)
