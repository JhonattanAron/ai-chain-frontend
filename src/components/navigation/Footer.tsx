export default function Footer() {
  return (
    <div>
      <footer className="bg-transparent w-full py-8">
        <div className="max-w-screen-xl px-4 mx-auto">
          <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
            <li className="my-2">
              <a
                className="text-white hover:text-gray-100  transition-colors duration-200"
                href="https://www.adaptleap.com/"
              >
                AdapttLeap | Platforms
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-white hover:text-gray-100  transition-colors duration-200"
                href="/"
              >
                Contact
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-white hover:text-gray-100  transition-colors duration-200"
                href="/"
              >
                Github
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-white hover:text-gray-100  transition-colors duration-200"
                href="/"
              >
                Bukkit
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center text-white  pt-10 sm:pt-12 font-light flex items-center justify-center">
          Created by Adaptleap
        </div>
      </footer>
    </div>
  );
}
