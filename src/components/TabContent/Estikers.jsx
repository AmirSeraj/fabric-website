import { useData } from "../Context";

const Estikers = () => {
  const { estikers } = useData();
  return (
    <div className="grid grid-cols-2 gap-1 h-[100vh] overflow-y-scroll p-2">
      {estikers.map((estiker, index) => (
        <div key={index} className="w-full h-auto rounded-lg shadow-lg mb-1 cursor-pointer">
          <img alt="img" className="w-full h-auto" src={estiker} key={index} />
        </div>
      ))}
    </div>
  );
};

export default Estikers;
