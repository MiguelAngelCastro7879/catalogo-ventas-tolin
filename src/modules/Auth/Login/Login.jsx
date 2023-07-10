import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "./_login.css";
import request from "src/utils";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [canLogin, setCanLogin] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
    setCanLogin(true);
  }, []);

  const onLogin = async () => {
    const response = await request("auth/sign-in", "POST", data);
    if (response.error) {
      return;
    }
    localStorage.setItem("token", response.token.token);

    const menuResponse = await request("RoleView", "GET", {});
    localStorage.setItem("menus", JSON.stringify(menuResponse.data))
    navigate("/dashboard");
  };

  return (
    canLogin && (
      <div className="h-screen">
        <div className="h-screen login-container">
          <div className="blurred-box">
            <form className="user-login-box">
              <TextField
                id="email-input"
                label="Correo electronico"
                color="warning"
                className={"mb-10"}
                type="email"
                onChange={(e) => {
                  setData({
                    ...data,
                    email: e.target.value
                  });
                }}
                autoComplete="current-email"
                focused
              />
              <br />
              <br />
              <TextField
                id="password-input"
                label="Contraseña"
                color="warning"
                className="mt-10"
                type="password"
                onChange={(e) => {
                  setData({
                    ...data,
                    password: e.target.value
                  });
                }}
                autoComplete="current-password"
                focused
              />
              <br />
              <br />
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  onLogin();
                }}
              >
                INICIAR SESIÓN
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  );
}
