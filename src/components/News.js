import React,{useEffect,useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  

  
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }



  const updateNews =async()=>{
    // props.setProgress(0);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // props.setProgress(100);
  }

  useEffect(()=>{
    // document.title=`${this.capitalizeFirstLetter(props.category)}-NewsNetworks`;
    updateNews();
  },[])

  // const handlePrevClick=async()=>{
  //   setPage(page-1)
  //   updateNews();
  // }

  // const handleNextClick=async()=>{
  //   setPage(page+1)
  //   updateNews();
  // }


const fetchMoreData = async() => {
  setPage(page+1)
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
  let data=await fetch(url);
  let parsedData=await data.json()
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
    
};

    return (
      <div className="container my-3">
        <h2 className="text-center" style={{marginTop:"90px"}}>NewsNetworks-Top {capitalizeFirstLetter(props.category)} Headlines </h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!=totalResults}
          loader={<Spinner/>} >
        <div className="container">
          <div className="row">
            {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
            {articles.map((element)=>{
              return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,45):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
              </div>
            })}
          </div>
       </div>
       </InfiniteScroll>

       {/* <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
       <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div> */}
     </div>
    )
  
}

News.defaultProps={
  country:"in",
  pageSize:6,
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News
