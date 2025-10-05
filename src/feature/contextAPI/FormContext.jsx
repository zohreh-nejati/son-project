import { createContext, useState } from "react";
const FormContext = createContext();

const FormProvider = function ({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <FormContext.Provider value={{ isFormOpen, setIsFormOpen }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
