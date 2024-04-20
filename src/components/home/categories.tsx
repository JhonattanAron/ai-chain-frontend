export default function Categories() {
  const categories: String[] = ["Games", "Art", "Tokens", "etc"];

  return (
    <div className="relative w-[95%] z-10  flex mx-auto h-[7vh] bg-transparent rounded-xl shadow-2xl m-10">
      <ul className="flex sm:overflow-hidden overflow-scroll items-center w-full h-full">
        {categories.map((categorie, key) => {
          return (
            <li
              className="p-3 sm:m-5  rounded-xl shadow-2xl cursor-pointer text-white font-bold hover:bg-transparentAccent transition duration-500"
              key={key}
            >
              {categorie}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
