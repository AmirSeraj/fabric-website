import { IoCloudUploadSharp } from "react-icons/io5";
import { BsChatRightTextFill } from "react-icons/bs";
import { SiPersonio } from "react-icons/si";
import { GrCommand } from "react-icons/gr";
import { useData } from "./Context";

const Tabs = () => {
  const { tabSelected, setTabSelected } = useData();
  const handleCLick = (txt) => {
    if (txt === "upload") {
      setTabSelected("upload");
    } else if (txt === "txt") {
      setTabSelected("txt");
    } else if (txt === "estiker") {
      setTabSelected("estiker");
    } else {
      setTabSelected("ready_txt");
    }
  };
  return (
    <div className="flex md:flex-col flex-row md:row-span-12 row-span-1">
      <div
        onClick={() => handleCLick("upload")}
        className={`flex items-center flex-col justify-center gap-1 w-full lg:p-5 md:px-2 p-5 hover:bg-blue-400 cursor-pointer ${
          tabSelected === "upload" && "bg-blue-500"
        }`}
      >
        <IoCloudUploadSharp size={20} />
        <p className="text-center text-xs">آپلود</p>
      </div>
      <div
        onClick={() => handleCLick("txt")}
        className={`flex flex-col items-center justify-center w-full lg:p-5 md:px-2 p-5 hover:bg-blue-400 cursor-pointer ${
          tabSelected === "txt" && "bg-blue-500"
        }`}
      >
        <BsChatRightTextFill size={20} />
        <p className="text-center text-xs">متن</p>
      </div>
      <div
        onClick={() => handleCLick("estiker")}
        className={`flex flex-col justify-center items-center w-full lg:p-5 md:px-2 p-5 hover:bg-blue-400 cursor-pointer ${
          tabSelected === "estiker" && "bg-blue-500"
        }`}
      >
        <SiPersonio size={20} />
        <p className="text-center text-xs">استیکرها</p>
      </div>
      <div
        onClick={() => handleCLick("ready_txt")}
        className={`flex flex-col justify-center items-center w-full lg:p-5 md:px-2 p-5 hover:bg-blue-400 cursor-pointer ${
          tabSelected === "ready_txt" && "bg-blue-500"
        }`}
      >
        <GrCommand size={20} />
        <p className="text-center text-xs">طرح های آماده</p>
      </div>
    </div>
  );
};

export default Tabs;
