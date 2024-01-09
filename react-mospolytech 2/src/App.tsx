import { Table } from "antd";
import styled from "styled-components";
import { useUniversityData } from "./Hooks/useUniversityData";
import { columns } from "./Constants/constants";
import { Navbar } from "./Components/Navbar";
import "./styles/index.css";
import MainRouter from "./Routes/MainRouter";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 15px;
  width: 100px;
  height: 40px;
  background-color: darkgrey;
  border: 0;
  color: white;
  border-radius: 10px;
  &:disabled {
    background-color: #8080801e;
  }
`;

export const App = () => {
  const { dataSource, loading, page, setPage } = useUniversityData();

  return (
    <>
      <Navbar />
      <MainRouter />
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <ButtonsWrapper>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1 || loading}
        >
          Назад
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={loading}>
          Вперед
        </Button>
      </ButtonsWrapper>
    </>
  );
};
