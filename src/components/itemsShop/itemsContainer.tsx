import ItemSell from "./itemSell";

export default function ItemsContainer() {
  return (
    <div className="container flex flex-col items-center justify-center m-5 w-full  bg-transparent rounded-lg shadow ">
      <ul className="flex flex-col w-full">
        <li className="flex flex-col w-full">
          <div className="flex items-center flex-1 p-4 w-full cursor-pointer select-none">
            <div className="flex-1 pl-1 text-center w-1/4">
              <div className="font-medium text-white">Textura</div>
            </div>
            <div className="flex-1 pl-1 text-center w-1/4">
              <div className="font-medium text-white">Item</div>
            </div>
            <div className="flex-1 pl-1 text-center w-1/4">
              <div className="font-medium text-white">Seller</div>
            </div>
            <div className="flex-1 pl-1 text-center w-1/4">
              <div className="font-medium text-white">Precio</div>
            </div>
          </div>
          <div className="bg-white h-[2px] w-full"></div>
        </li>
        <ItemSell />
        <ItemSell />
        <ItemSell />
        <ItemSell />
        <ItemSell />
      </ul>
    </div>
  );
}
