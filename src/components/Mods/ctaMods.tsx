export default function CtaMods() {
  const link =
    "https://drive.usercontent.google.com/download?id=1FJiGgnpkiVqyX81OCVVMaYgZSpmuvsMt&export=download&authuser=0&confirm=t&uuid=638eecf6-5348-4882-9ef8-c0748aa062d0&at=APZUnTX-yFK_lVM_wCuZo6awqcH_%3A1719264623676";
  return (
    <div className="bg-transparent  overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-white  sm:text-4xl">
          <span className="block">Adaptleap Mods</span>
        </h2>
        <h2 className="text-2xl font-extrabold text-white  sm:text-4xl">
          <span className="block">
            - Requisitos <span className="text-red-600">IMPORTANTE</span>
            <p className="text-xl text-md mt-4 text-gray-400">
              - Descarga la Version 1.20.1 de Minecraft Java{" "}
              <span className="text-red-600">OBLIGATORIO</span>
            </p>
            <p className="text-xl text-md mt-4 text-gray-400">
              - Descarga la Version Mas reciente de Minecraft Forge{" "}
              <span className="text-red-600">Recomendada 47.3.1</span>
            </p>
            <p className="text-xl text-md mt-4 text-gray-400">
              - El Servidor No es Compatible con Optifine{" "}
              <span className="text-red-600">
                El ModPack Incluye Embeddium Y Oculus
              </span>
            </p>
          </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          Descarga la Version 1.0 De los Mods
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <a
              href={link}
              type="button"
              className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Descargar
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="https://www.minecraft.net/content/dam/games/minecraft/key-art/PC_Bundle_Deluxe_Mobile.jpg?imwidth=321"
          className="w-1/2 rounded-lg"
          alt="Tree"
        />
        <div>
          <img
            src="https://raw.githubusercontent.com/SMTheGuild/The-Modpack/master/preview.jpg"
            className="mb-8 rounded-lg"
            alt="Tree"
          />
          <img
            src="https://i.blogs.es/4ed08a/minecraft/1366_2000.jpeg"
            className="rounded-lg"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
}
