import React from 'react';
import axios from 'axios';


export default function SearchBox(props) {
    
    const handleFormSubmit = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+props.searchTerm)
        .then(res => {
            let filteredArr = res.data.items.map(({volumeInfo}) => (
              {
        title: volumeInfo.title,
        author: volumeInfo.authors[0],
        description: volumeInfo.description,
         image: volumeInfo.imageLinks.thumbnail,
        link: volumeInfo.previewLink
            }  
            ))
            props.setBooksResultsArray(filteredArr);
            console.log(filteredArr);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div class="center">
        
        <input class="btn btn-primary"
        value={props.searchTerm}
        onChange={(e)=>props.setSearchTerm(e.target.value)}
        />
        <button class="btn btn-info"
        onClick={handleFormSubmit}
        >Search</button>
        
        </div>

    )
}