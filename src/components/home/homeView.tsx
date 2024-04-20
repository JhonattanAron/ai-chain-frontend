import Categories from "./categories";
import Cta from "./cta";

export default function HomeView() {
  return (
    <div className="relative h-[70vh]">
      <Categories />
      <Cta />
      <div className="absolute -z-10 blur-xl inset-0 overflow-hidden">
        <img
          className="absolute h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1594845222818-9097c52dabb5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="fondo"
        />
      </div>
    </div>
  );
}
