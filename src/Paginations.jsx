import React from "react";
import "./Paginations.css";

const Paginations = ({ shopsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / shopsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginations">
      {pageNumbers.map((number) => (
        <span onClick={() => paginate(number)}>{number}</span>
      ))}
    </nav>
  );
};

export default Paginations;
