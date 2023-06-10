import '../assets/styles/search.css'

function Search(props) {
    return (
        <div className='search-bar'>
            {props.children}
        </div>
    )
}

export default Search;