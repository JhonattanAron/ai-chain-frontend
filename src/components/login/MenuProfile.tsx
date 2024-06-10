import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Logout } from "../../redux/reducers/Session";

export default function MenuProfile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
    navigate("/session");
  };
  const Session = useSelector((state: RootState) => state.session.isLogin);
  const dispatch = useDispatch();
  const CloseSession = () => {
    dispatch(Logout());
  };
  const skinId = useSelector((state: RootState) => state.get_skin.skin_uuid);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="relative flex items-center justify-end  p-1  mr-4 sm:right-auto">
          <span className="relative block">
            <img
              alt="profil"
              src={
                Session
                  ? `https://mineskin.eu/bust/${skinId}/100.png`
                  : `https://static.vecteezy.com/system/resources/thumbnails/000/495/460/small/22_Profile.jpg`
              }
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </span>
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          {Session ? "Profile" : "Login"}
        </MenuItem>
        {Session ? (
          <MenuItem onClick={CloseSession}>Logout</MenuItem>
        ) : (
          <span></span>
        )}
      </Menu>
    </div>
  );
}
