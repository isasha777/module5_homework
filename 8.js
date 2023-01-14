let movies = new Map([

    ["Avatar: The Way of Water", "action"],
  
    [" Uncharted", "adventure"],
  
    ["Tropic Thunder",    "comedy"]
  
  ]);
  for (let name of movies.keys()) {
  
    console.log('ключ = '+name); 
  
  }
  for (let genre of movies.values()) {
  
    console.log('значение = '+genre); 
  
  }