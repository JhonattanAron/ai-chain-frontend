import { useEffect } from "react";

interface Props {
  skin: string;
}

function SkinView3DComponent(props: Props): JSX.Element {
  return (
    <img
      id="skin_img"
      className="w-[20vh] h-[40vh]"
      src={`https://mineskin.eu/armor/body/386ca368-55c4-423e-a78a-eddd8e6a9103/100.png`}
      alt="/"
    />
  );
}

export default SkinView3DComponent;
