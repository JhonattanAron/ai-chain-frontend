interface Props {
  skin: string;
}

function SkinView3DComponent(props: Props): JSX.Element {
  return (
    <img
      id="skin_img"
      className="w-[20vh] h-[40vh]"
      src={`https://mineskin.eu/body/${props.skin}/100.png`}
      alt="/"
    />
  );
}

export default SkinView3DComponent;
