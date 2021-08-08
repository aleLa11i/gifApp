export const getGifs = async (category)=>{

    const  url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=UdW88nito00ISgnMJgl4WF3sEoAphU9c`;
    const resp = await fetch(  url   );
    const { data } = await resp.json();

    const gifs = data.map(({id,images,title})=>{

        return {
            id : id,
            url : images?.downsized_medium.url,
            title : title
        }

    })


    return gifs;

}  