import SkinView3DComponent from "../utils/SkinViewer";

export default function Profile() {
  const Rangos = {
    booster: "https://i.ibb.co/G98NZyT/booster.png",
    admin: "https://i.ibb.co/MNm6rx6/admin.png",
    builder: "https://i.ibb.co/nbQ3hYG/builder.png",
    dev: "https://i.ibb.co/mqgBPjV/dev.png",
    epico: "https://i.ibb.co/r7vYgkj/epico.png",
    famoso: "https://i.ibb.co/GMPDrBz/famoso.png",
    helper: "https://i.ibb.co/b6vKbB3/helper.png",
    heroico: "https://i.ibb.co/hYD7vjP/heroico.png",
    legendario: "https://i.ibb.co/Kx8q93Y/legendario.png",
    manager: "https://i.ibb.co/pf1PW8D/manager.png",
    mod: "https://i.ibb.co/M9w7Pn9/mod.png",
    mvp: "https://i.ibb.co/Mc05Bg2/mvp.png",
    mvplus: "https://i.ibb.co/XtHL7Zc/mvplus.png",
    no_comun: "https://i.ibb.co/BrNM32S/nocomun.png",
    owner: "https://i.ibb.co/S6kDfLZ/owner.png",
    raro: "https://i.ibb.co/PwCYgvC/raro.png",
    streamer: "https://i.ibb.co/rdY9gFP/stream.png",
    tiktok: "https://i.ibb.co/L1hvsG7/tiktok.png",
    usuario: "https://i.ibb.co/TK7Z7Hh/usuario.png",
    vip: "https://i.ibb.co/pvxTcW5/vip.png",
    vip_plus: "https://i.ibb.co/DMzN7tT/vipplus.png",
    youtuber: "https://i.ibb.co/6YhyTXF/youtube.png",
  };

  return (
    <div className="mt-10 bg-gray-900  relative p-5">
      <div className="bg-transparent m-5 rounded-xl flex justify-between">
        <div className="w-[30vw] flex flex-col items-center justify-around">
          <SkinView3DComponent skin="saitama" />
          <div className="relative flex">
            <input
              type="text"
              id="required-email"
              className="w-[60%] mr-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="email"
              placeholder="Skin Usuario Premium"
            />
            <button
              type="button"
              className="py-2 px-4 w-[40%] bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Cambiar Skin
            </button>
          </div>
        </div>
        <div className="w-[60vw] flex flex-col items-center text-center m-10">
          <div className="w-full flex justify-between">
            <div className="flex">
              <img
                className="text-sm object-contain h-10 mr-5"
                src={Rangos.dev}
                alt="rango"
              />
              <h3 className="text-white text-3xl">aron</h3>
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
