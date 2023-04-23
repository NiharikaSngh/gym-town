export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': '4c589198e9msh484169ceb0186a3p1ea52ejsncd90361350ff',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4c589198e9msh484169ceb0186a3p1ea52ejsncd90361350ff',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};