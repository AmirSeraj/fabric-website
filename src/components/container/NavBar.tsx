/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Tooltip } from "@nextui-org/tooltip";
import { IoCloudUpload } from "react-icons/io5";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { useData } from "../Context";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";

const NavBar = ({
  removeSelectedObject,
  downloadPng,
  undo,
  redo,
  handleImageUpload,
}: any) => {
  const { setTextColor, textColor } = useData();
  const imageUpload = useRef<HTMLInputElement>(null);
  const handleClickImg = () => {
    imageUpload.current?.click();
  };

  return (
    <div className="w-full h-[50px] flex bg-white border-b border-slate-300">
      <div className="w-[135px] border border-r border-l border-slate-300 border-t-0 border-b-0 flex justify-center items-center">
        <Button color="primary">ثبت سفارش</Button>
      </div>
      <div className="flex items-center justify-between w-full md:gap-3 gap-1 md:mx-3 mx-1">
        <div className="flex justify-center items-center gap-1">
          <Tooltip
            placement="bottom"
            content="حذف اشیا"
            showArrow={true}
            className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
            size="sm"
            shadow="lg"
          >
            <Button className="p-0" size="sm">
              <RiDeleteBin6Line size={20} onClick={removeSelectedObject} />
            </Button>
          </Tooltip>
          <Tooltip
            placement="bottom"
            content="تغییر رنگ"
            showArrow={true}
            className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
            size="sm"
            shadow="lg"
          >
            <Button className="p-0 cursor-pointer" size="sm">
              <input
                disabled={false}
                type="color"
                value={textColor}
                className="cursor-pointer"
                onChange={(e) => setTextColor(e.target.value)}
              />{" "}
            </Button>
          </Tooltip>
          <Tooltip
            placement="bottom"
            content="دانلود"
            showArrow={true}
            className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
            size="sm"
            shadow="lg"
          >
            <Button onClick={downloadPng} className="p-0 cursor-pointer" size="sm">
              <FaDownload size={20} />
            </Button>
          </Tooltip>
          {/* <Tooltip
            placement="bottom"
            content="تکثیر اشیا"
            showArrow={true}
            className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
            size="sm"
            shadow="lg"
          >
            <Button className="p-0" size="sm">
              <GoCopy size={20} />
            </Button>
          </Tooltip> */}
          {/* <Tooltip
            placement="bottom"
            content="موقعیت"
            showArrow={true}
            className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
            size="sm"
            shadow="lg"
          >
            <Button className="p-0" size="sm">
              <SiDatabricks size={20} />
            </Button>
          </Tooltip> */}
          {/* <Tooltip
            placement="bottom"
            content="تغییر رنگ بکگراند"
            showArrow={true}
            className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
            size="sm"
            shadow="lg"
          >
            <Button className="p-0 cursor-pointer" size="sm">
              <input
                disabled={false}
                type="color"
                value={backColor}
                className="cursor-pointer"
                onChange={(e) => setBackColor(e.target.value)}
              />
            </Button>
          </Tooltip> */}
          {/* <Tooltip
            placement="bottom"
            content="آپلود عکس"
            showArrow={true}
            className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
            size="sm"
            shadow="lg"
          >
            <Button className="p-0 cursor-pointer" size="sm">
              <IoCloudUpload size={22} onClick={handleClickImg} />
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                ref={imageUpload}
              />
            </Button>
          </Tooltip> */}
        </div>

        <div className="flex justify-end gap-1">
          <BiUndo size={23} className="cursor-pointer" onClick={undo} />
          <BiRedo size={23} className="cursor-pointer" onClick={redo} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
