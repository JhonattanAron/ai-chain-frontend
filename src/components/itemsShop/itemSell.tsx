export default function ItemSell() {
  return (
    <li className="flex flex-row">
      <div className="flex flex-1 p-4 m-3 bg-transparent hover:shadow-2xl transition duration-1000 hover:bg-transparentAccent rounded-xl cursor-pointer select-none">
        <div className="flex flex-col items-center justify-center h-10 w-1/4">
          <a href="/" className="relative block">
            <img
              alt="profil"
              src="https://w7.pngwing.com/pngs/298/668/png-transparent-minecraft-pocket-edition-mod-item-others-rectangle-orange-diamond.png"
              className="object-cover rounded-full h-10 w-10 "
            />
          </a>
        </div>
        <div className="flex-1 text-center w-1/4">
          <div className="font-medium text-white">Jean Marc</div>
        </div>
        <div className="font-medium text-center text-white w-1/4 ">
          Developer
        </div>
        <div className="font-medium text-center text-white w-1/4">25 $</div>
      </div>
    </li>
  );
}
