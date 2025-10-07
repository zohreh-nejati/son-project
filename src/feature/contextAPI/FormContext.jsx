import { createContext, useState } from "react";
const FormContext = createContext();

const FormProvider = function ({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  return (
    <FormContext.Provider
      value={{ isFormOpen, setIsFormOpen, tableData, setTableData }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
