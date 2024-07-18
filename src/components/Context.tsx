/* eslint-disable react/prop-types */
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface DataContextType {
  tabSelected: string;
  setTabSelected: Dispatch<SetStateAction<string>>;
  estikers: never[];
  setEstikers: Dispatch<SetStateAction<never[]>>;
  cropImage: boolean;
  setCropImage: Dispatch<SetStateAction<boolean>>;
  backgroundImg: string;
  setBackgroundImg: Dispatch<SetStateAction<string>>;
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
}

const initialValues: DataContextType = {
  tabSelected: "",
  setTabSelected: () => {},
  estikers: [],
  setEstikers: () => {},
  cropImage: true,
  setCropImage: () => {},
  backgroundImg: "",
  setBackgroundImg: () => {},
  setTextColor: () => {},
  textColor: "",
};

export const DataContext = createContext<DataContextType>(initialValues);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabSelected, setTabSelected] = useState("upload");
  const [estikers, setEstikers] = useState([]);
  const [backgroundImg, setBackgroundImg] = useState("");
  const [textColor, setTextColor] = useState<string>("#FFFFFF");

  const [cropImage, setCropImage] = useState(initialValues.cropImage);

  const values = {
    tabSelected,
    setTabSelected,
    estikers,
    setEstikers,
    cropImage,
    setCropImage,
    backgroundImg,
    setBackgroundImg,
    setTextColor,
    textColor,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
