/* eslint-disable react/prop-types */
import { ChangeEventHandler } from "react";
import { useData } from "../Context";
import Estikers from "./Estikers";
import TextPicker from "./TextPicker";
import Upload from "./Upload";

const TabContent = ({
  addText,
  handleOnChange,
}: {
  addText: () => void;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  const { tabSelected } = useData();

  return (
    <div className="col-span-3 md:block hidden">
      {tabSelected === "upload" && <Upload handleOnChange={handleOnChange} />}
      {tabSelected === "txt" && <TextPicker addText={addText} />}
      {tabSelected === "estiker" && <Estikers />}
      {tabSelected === "ready_txt" && <div>ready_txt</div>}
    </div>
  );
};

export default TabContent;
