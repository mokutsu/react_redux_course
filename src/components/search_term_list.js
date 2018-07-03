import React from 'react';

import SearchTerm from './search_term';

const SearchTermList = (props) => {
  return (
    <section className='search-term-list col-md-12'>
      <h3>Past Search Terms</h3>
      <div className='col-md-12'>
        {props.searchTerms.map((searchedTerm, index) => {
          return <SearchTerm
            searchedTerm={searchedTerm}
            key={index}
            onTermClick={props.onTermClick}
          />
        })}
      </div>
    </section>
  )}

export default SearchTermList;
