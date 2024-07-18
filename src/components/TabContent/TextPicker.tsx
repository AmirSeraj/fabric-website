/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";

const TextPicker = ({addText}:{addText:() => void}) => {
  return (
    <div className="h-[100vh] w-full flex justify-center md:p-7 p-2">
      <Button className="text-center text-2xl cursor-pointer" onClick={addText}>ساخت سربرگ</Button>
    </div>
  );
};

export default TextPicker;
