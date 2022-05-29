
import React,{useRef, useCallback } from 'react'
import 'assets/css/news.css'
function NewsBox(props) {
    const {newsList,loading,page,setPage,loadingSearch}=props
    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
       if(loading) return
       if(observer?.current) observer?.current?.disconnect()
        observer.current=new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                setPage(page+1)

            }
        })
       if(node) observer.current.observe(node)
      },[loading])
    return (
        <div className='main_box'   >
            {loadingSearch && <h1>Loading ......</h1>}
            {(!loadingSearch) && <>
                    { newsList.length>0 && newsList.map((obj,index)=>{
                        if(newsList.length==index+1){
                        return( 
                            <div key={index} className='news_box' ref={lastBookElementRef}>
                                        <a href={obj.story_url || obj.url } target='_blank'>
                                            <div>
                                                <h3 className='title'>{obj.story_title || obj.title}</h3>
                                                <h6 className='author'>Author : {obj.author}</h6>
                                            </div>
                                        </a>
                                </div>
                            )
                        }
                        return(
                                <div key={index} className='news_box'>
                                    <a href={obj.story_url || obj.url } target='_blank'>
                                        <div>
                                            <h3 className='title'>{obj.story_title || obj.title}</h3>
                                            <h6 className='author'>Author : {obj.author}</h6>
                                        </div>
                                    </a>
                                </div>
                        )
                    })}
                    {loading && <h1>Loading ......</h1>}
            </>}
            
        </div>
    )
}

export default NewsBox
