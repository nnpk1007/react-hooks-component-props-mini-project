// Make a Header component as a child of App. It should return:
// a <header> element with the following elements inside:
// an <h1> with the name of the blog, passed as a prop called name

import React from "react";

const Header = (props) => {
  const { name } = props;

  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
