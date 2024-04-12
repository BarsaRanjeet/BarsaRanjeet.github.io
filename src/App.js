import React, { useEffect, useState } from 'react';
import axios  from 'axios';

import './App.css';
import { Header } from './components/UI/Header/Header';
import News from './components/UI/News/News';

const fetchData = async() =>{
  const data = await axios.get("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=0768291cf49b62749cf771dd344ba952");
  return data;
}

const App = () => {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    (async()=>{
      const {data} = await fetchData();
      setNews(data.articles);
    })();
  }, []);

  return (
    <div>
      <Header/>
      {news.map((articles)=><News articles={articles}/>)}
    </div>
  );
};

export default App;
