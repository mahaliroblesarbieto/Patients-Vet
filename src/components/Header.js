import React from "react";
const Header = ({titulo}) => {
  return (
    <header>
      <h1 className="text-center">{titulo}</h1>{" "}
    </header>
  );
};

export default Header;
