import React from 'react';

const SearchTerm = ({searchedTerm, onTermClick}) => {
  return (
    <span className="badge badge-primary" onClick={() => {onTermClick(searchedTerm)}}>
      {searchedTerm}
    </span>
  )
}

export default SearchTerm;
