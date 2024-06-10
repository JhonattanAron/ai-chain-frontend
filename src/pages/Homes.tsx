import RangosPublicity from "../components/home/RangosPublicity";
import HomeView from "../components/home/homeView";
import ItemsContainer from "../components/itemsShop/itemsContainer";
import Layout from "../components/utils/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <HomeView />
        <h2 className="text-3xl mt-16 font-extrabold text-black dark:text-white sm:text-4xl text-center">
          <span className="block">Exchange de Items</span>
          <span className="block text-indigo-500">
            Aqui Consigues Items Unicos
          </span>
        </h2>
        <div className="flex">
          <ItemsContainer />
          <ItemsContainer />
        </div>
        <RangosPublicity />
      </Layout>
    </>
  );
}
