import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const PaginationStyle = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  button {
    color: #fff;
    border: none;
    background-color: #2c2540;
    &:hover {
      background-color: #2c2540;
    }
    &.Mui-selected {
      background-color: #4518c5;
    }
  }
  div {
    color: #fff;
  }
`;

const MoivePagination = ({ setPageNum }) => {
  const handlePageChenge = (page) => {
    window.scroll(0, 0);
    setPageNum(page);
  };
  return (
    <Stack spacing={2}>
      <PaginationStyle
        defaultPage={1}
        count={100}
        hidePrevButton
        hideNextButton
        variant="outlined"
        shape="rounded"
        onChange={(e) => handlePageChenge(e.target.textContent)}
      />
    </Stack>
  );
};

export default MoivePagination;
