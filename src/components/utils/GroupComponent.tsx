import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function GroupComponent() {
  interface Rangos {
    [key: string]: string;
  }
  const rangos: Rangos = {
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
    default: "https://i.ibb.co/TK7Z7Hh/usuario.png",
    vip: "https://i.ibb.co/pvxTcW5/vip.png",
    vip_plus: "https://i.ibb.co/DMzN7tT/vipplus.png",
    youtuber: "https://i.ibb.co/6YhyTXF/youtube.png",
  };
  const user = Cookies.get("user");
  const [Group, setGroup] = useState("default");

  useEffect(() => {
    async function GetGroup() {
      const fecthgr = await fetch(`http://localhost:8085/group/${user}`);
      const response = await fecthgr.json();
      setGroup(response.group);
    }
    GetGroup();
  });
  return (
    <img
      className="text-sm object-contain h-10 mr-5"
      src={rangos[Group]}
      alt="rango"
    />
  );
}
