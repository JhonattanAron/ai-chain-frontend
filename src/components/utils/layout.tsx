import NavBar from "../navigation/NavBar";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <>
      <NavBar />
      <div className="sm:pt-[5vh]">{props.children}</div>
    </>
  );
}
