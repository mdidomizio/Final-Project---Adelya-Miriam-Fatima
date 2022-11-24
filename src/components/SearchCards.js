import SearchInputCards from "./SearchInputCards";

const SearchCards = (props) => {
  console.log(props.searchResult);
  return (
    <div className="SearchOutput">
      <div className="d-flex flex-wrap justify-content-center">
        {props.searchResult.length > 0 ? (
          props.searchResult.map((element, index) => {
            return (
              <div>
                <SearchInputCards key={index} item={element} />
              </div>
            );
          })
        ) : (
          <h3> No results found </h3>
        )}
      </div>
    </div>
  );
};
export default SearchCards;
