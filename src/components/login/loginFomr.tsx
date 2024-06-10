import {
  EnvelopeIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { Login } from "../../redux/reducers/Session";
import { Dialog } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [incorrectPass, setIncorrectPass] = useState(false);
  const [noRegister, setNoRegister] = useState(false);
  const [FormData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [ErrorLogin, setErrorLogin] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(FormData));
    try {
      const GetLogin = await fetch("http://localhost:8085/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(FormData),
      });
      const json = await GetLogin.json();
      const value = parseInt(json.response);
      if (value === 0) {
        setIncorrectPass(true);
        return null;
      } else if (value === 404) {
        setNoRegister(true);
      } else {
        dispatch(Login());
        Cookies.set("id", json.response);
      }
    } catch (error) {
      console.log(error);
      setErrorLogin(true);
    }
  };

  return (
    <div className="flex flex-wrap justify-around  mt-8 w-full ">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col bg-transparentAccent m-5 rounded-xl shadow-2xl p-14 justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl  text-white text-center m-10">
            Bienvenido Jugador Inicia Session
          </p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={HandleSubmit}>
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className=" inline-flex items-center px-3  text-white  text-sm">
                  <EnvelopeIcon width={25} />
                </span>
                <input
                  required={true}
                  type="text"
                  id="username"
                  name="username"
                  onChange={HandleChange}
                  value={FormData.username}
                  className=" flex-1 appearance-none rounded-lg shadow-2xl  w-full py-2 px-4  text-black placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nombre de Usuario"
                />
              </div>
              {noRegister ? (
                <div className="mt-2 text-red-500 flex">
                  <ExclamationCircleIcon className="w-5 mr-1" /> Usuario No
                  Registrado
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className=" inline-flex items-center px-3   text-white  text-sm">
                  <KeyIcon width={25} />
                </span>
                <input
                  required={true}
                  type="password"
                  name="password"
                  onChange={HandleChange}
                  value={FormData.password}
                  id="password"
                  className=" flex-1 appearance-none rounded-lg shadow-2xl  w-full py-2 px-4  text-black placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
              {incorrectPass ? (
                <div className="mt-2 text-red-500 flex">
                  <ExclamationCircleIcon className="w-5 mr-1" /> Contraseña
                  Incorrecta
                </div>
              ) : (
                <></>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-xl px-4 py-2 text-base font-semibold text-center text-black transition duration-200 ease-in bg-white shadow-md hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2"
            >
              <span className="w-full">Login</span>
            </button>
            {ErrorLogin ? (
              <div className="mt-2 text-red-500 flex">
                <ExclamationCircleIcon className="w-5 mr-1" /> Error con el
                Servidor Reporta{" "}
                <a className="ml-1 font-bold underline" href="/">
                  AQUI
                </a>
              </div>
            ) : (
              <></>
            )}
          </form>
          <div className="text-white pt-12 pb-12 text-center">
            <p>
              Para Registrarte Primero Entra al Servidor Por Minecraft{" "}
              <button
                onClick={handleClickOpen}
                className="font-semibold underline"
              >
                Register here.
              </button>
            </p>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              =
              <img
                src="https://i.ibb.co/vmnZWK0/Captura-de-pantalla-2024-06-09-135301.png"
                alt="example"
              />
            </Dialog>
          </div>
        </div>
      </div>
      <div className="w-[40vw] rounded-xl my-auto mr-[5vw] shadow-2xl">
        <img
          alt="loginFot"
          className="hidden object-cover w-[40vw] rounded-xl h-[90vh] md:block"
          src="https://images.unsplash.com/photo-1635336969656-0e63e076904f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}
