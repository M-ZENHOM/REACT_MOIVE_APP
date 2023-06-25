import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const MoivePagination = ({ setPageNum, pageNum }) => {
  return (
    <Stack spacing={2}>
      <PaginationStyle
        defaultPage={1}
        count={100}
        hidePrevButton
        hideNextButton
        variant="outlined"
        shape="rounded"
        onChange={(e) => setPageNum(e.target.textContent)}
      />
    </Stack>
  );
};

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

export default MoivePagination;
