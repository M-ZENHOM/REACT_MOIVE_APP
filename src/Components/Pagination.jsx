const Pagination = ({ setPage, page, data }) => {
  const handleClick = (ter) => {
    setPage(ter);
  };
  return (
    <div className="join">
      <button
        className="join-item btn"
        disabled={page === 1}
        onClick={() => handleClick(page - 1)}
      >
        «
      </button>
      <button className="join-item btn">Page {page}</button>
      <button
        className="join-item btn"
        disabled={data?.total_pages === page || data?.total_pages === 1}
        onClick={() => handleClick(page + 1)}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
