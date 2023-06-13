import '../assets/styles/search.css'

function Search(props) {
    return (
        <div className='search-bar'>
            <input type="text" className="search" placeholder='Insert city name here' value={props.value} onChange={props.onChange}/>
            <button className='submit 'onClick={props.onClick}><img src='./images/search.svg' alt='Search'/></button>
        </div>
    )
}

export default Search;