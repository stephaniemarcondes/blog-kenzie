import { API } from "./API.js";
import { DOM } from "./DOM.js";
const news = await API.getNews() ;
DOM.showNews(news)
console.log(news[0])