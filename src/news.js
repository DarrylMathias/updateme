async function fetchNews(lang = 'en', country = 'in', category = 'general') {
    const apiKey = import.meta.env.VITE_GNEWS_API_KEY_1;
    // dbc805033cedeb0452740be04fdd073c 
    // 3c577665503b905dca3518870306595e 
    // bed07220057b4175a5a40524cc5dac1f
    const rawData = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&max=10&apikey=${apiKey}`)
    if(rawData.status == 404){
        console.log("Invalid fetch query")
    }
    if(rawData.status == 403){
        console.log("Free quota elapsed")
    }
    const data = await rawData.json();
    data.articles.map((article) => {
        article.content = article.content.split('[')[0]
    })
    console.log(data);  
    localStorage.setItem('hasLoaded',false)
    return data.articles
}

export default fetchNews;