import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "../style/web/news.css";

const News = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/work_news');
  },[]);

  return(
    <section className="section_news">
      preparing...
    </section>
  )
}

export default News;