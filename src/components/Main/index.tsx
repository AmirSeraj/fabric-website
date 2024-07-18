import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

// import ColorButton from "../ColorButton";
// import Button from "../Button";
import Paint, { CanvasDrawMode } from "../Paint";
// import Checkbox from "../Checkbox";
import Tabs from "../Tabs";
import TabContent from "../TabContent/TabContent";
import NavBar from "../container/NavBar";
import { useData } from "../Context";

const Main = () => {
  // const [readonly, setReadonly] = useState(false);
  const [drawMode, setDrawMode] = useState<CanvasDrawMode>("SELECT");
  // const [penColor, setPenColor] = useState<PenColor>("ORANGE");
  const [canvas, setCanvas] = useState<fabric.Canvas>();
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const [bgImgSrc, setBgImgSrc] = useState<string>();
  // const fileEl = useRef<HTMLInputElement>(null);
  // const textAreaEl = useRef<HTMLTextAreaElement>(null);

  const { textColor } = useData();

  // const handleDrawModeChange = (drawMode: CanvasDrawMode) => () => {
  //   setDrawMode(drawMode);
  // };

  const addText = () => {
    if (!canvas) return;
    const text = new fabric.Text("Hello, Fabric!", {
      left: 100,
      top: 100,
      fill: textColor.toLowerCase(),
      fontSize: 20,
    });
    canvas.add(text);
  };

  // const handleCanvasDrawEnd = () => {
  //   setDrawMode("SELECT");
  // };

  // const handleUploadImageClick = () => {
  //   fileEl.current?.click();
  // };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files || e.target.files.length <= 0) {
      return;
    }

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBgImgSrc((reader.result as string) || "");
    };
    reader.readAsDataURL(file);
  };

  // const handlePenColorChange = (penColor: PenColor) => () => {
  //   setPenColor(penColor);
  // };

  // const handleReadonlyChange = () => {
  //   setReadonly((prevReadOnly) => !prevReadOnly);
  // };

  const removeSelectedObject = () => {
    if (!canvas) return;
    canvas.remove(canvas.getActiveObject());
    canvas.renderAll();
  };

  // const rotateBackgroundImage = () => {
  //   if (!canvas?.backgroundImage) return;

  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const backgroundImage: any = canvas.backgroundImage;
  //   backgroundImage.rotate((backgroundImage.angle + 90) % 360);
  //   canvas.renderAll();
  // };

  const downloadCanvasAsImage = () => {
    if (!canvas) return;
    const a = document.createElement("a");

    a.href = canvas.toDataURL({
      format: "jpeg",
      quality: 0.8,
    });
    a.download = "canvas.jpeg";
    a.click();

    a.remove();
  };

  // const handleJSONImport = () => {
  //   if (!canvas || !textAreaEl.current) return;

  //   const json = JSON.parse(textAreaEl.current.value);
  //   canvas.loadFromJSON(json, () => {
  //     canvas.renderAll();
  //   });
  // };

  // const handleJSONExport = () => {
  //   if (!canvas || !textAreaEl.current) return;

  //   const json = JSON.stringify(canvas.toJSON());
  //   textAreaEl.current.value = json;
  // };

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current);
    setCanvas(canvas);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Delete") {
        const object = canvas.getActiveObject();

        if (object) canvas.remove(object);
      }
    };

    window.addEventListener("keyup", handleKey);

    return () => {
      setCanvas(undefined);
      canvas.dispose();

      window.removeEventListener("keyup", handleKey);
    };
  }, []);

  useEffect(() => {
    if (!canvas) return;
    canvas.selection = drawMode === "SELECT";
  }, [drawMode, canvas]);
  // w-screen mx-auto mt-8 items-center justify-center flex flex-col gap-y-6
  return (
    <div
      className="grid md:grid-cols-12 grid-cols-1 md:grid-rows-1 grid-rows-12 w-full h-full"
      dir="rtl"
    >
      <Tabs />
      <TabContent addText={addText} handleOnChange={handleFileChange} />
      
    </div>
  );
};

export default Main;
