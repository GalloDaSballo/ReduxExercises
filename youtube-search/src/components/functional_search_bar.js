/**
 * Exporting data, status and components
 */

import React from 'react'; //Required for all compoennts that use JSX

/**
 * This is called "Function component" because it is literally a function
 * To save state we need to turn it into a class based component
 */
const SearchBar = () => {
  return <input />
}


const foo = 4;
// export default SearchBar; //SearchBar() will be available if imported from other files

// export default foo;  // If we used this, SearchBar would "import" foo rather than SearchBar()
