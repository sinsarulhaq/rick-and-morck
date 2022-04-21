import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  // let next = ()=>{
  //   setPageNumber(x => x+1)
  // };

  // let prev = ()=>{
  //   if(pageNumber ===1) return null;
  //   setPageNumber(x => x-1)
  // };
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="btn btn-info"
      nextClassName="btn btn-info "
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      forcePage={pageNumber===1? 0 : pageNumber - 1}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
