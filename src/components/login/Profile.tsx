import { useEffect, useState } from "react";
import SkinView3DComponent from "../utils/SkinViewer";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkinData } from "../../redux/reducers/SkinGet";
import { AppDispatch, RootState } from "../../store";
import GroupComponent from "../utils/GroupComponent";

export default function Profile() {
  const UserId = Cookies.get("id") || "";
  const [SkinData, SetSkinData] = useState("steve");
  const dispatch = useDispatch<AppDispatch>();
  const skin_uuid = useSelector((state: RootState) => state.get_skin.skin_uuid);
  useEffect(() => {
    dispatch(fetchSkinData(UserId));
    console.log(skin_uuid);
    SetSkinData(skin_uuid);
    const user = Cookies.get("user");
    if (user === undefined) {
      setUsername("No se Cargo el nombre de Usuario desde la Cookie");
    } else {
      setUsername(user);
    }
  }, [UserId, dispatch, skin_uuid]);
  const [username, setUsername] = useState("steve");

  return (
    <div className="mt-10 bg-gray-900  relative p-5">
      <div className="bg-transparent m-5 rounded-xl flex justify-between">
        <div className="w-[30vw] flex flex-col items-center justify-around">
          <SkinView3DComponent skin={SkinData} />
          <div className="relative flex">
            <button
              type="button"
              className="py-2 px-4 w-[100%] bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Cambiar Skin
            </button>
          </div>
        </div>
        <div className="w-[60vw] flex flex-col items-center text-center m-10">
          <div className="w-full flex justify-between">
            <div className="flex">
              <GroupComponent />
              <h3 className="text-white text-3xl">{username}</h3>
            </div>
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block text-white-500">WebChest</span>
            </h2>
          </div>
          <div className="bg-transparentAccent w-full rounded-xl mt-10 h-[30vw]"></div>
        </div>
      </div>
    </div>
  );
}
