import { useState, useEffect } from "react";
import axios from "axios";
import { DataType } from "../interfaces/IDataType";
import { LIMIT_LIST_SCHOOL } from "../constants/constants";

export const useUniversityData = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);

  const getUniversity = async (page: number, limit: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://universities.hipolabs.com/search?limit=${limit}&offset=${
          (page - 1) * limit
        }`
      );
      setDataSource(response.data);
    } catch (error) {
      console.error(`Ошибка при получении информации: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page]);

  return {
    dataSource,
    loading,
    page,
    setPage,
  };
};
