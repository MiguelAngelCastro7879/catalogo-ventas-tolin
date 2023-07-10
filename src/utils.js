import Noty from "noty";

export default async function request(url, method, body) {
  let config = {
    method: method,
    headers: {
      "Content-Type": "application/json"
    }
  }
  if(method !== 'GET'){
    config.body = JSON.stringify(body);
  }
  const response = await fetch(`http://127.0.0.1:3333/api/v1/${url}`, config).then(response => {
    // console.log(response.json())
    if (response.ok) {
      if (url === "auth/sign-in") {
        new Noty({
          text: "Sesión iniciada con exito.",
          type: "success",
          theme: "metroui",
          layout: "bottomRight",
          timeout: 2000
        }).show();
      }
      else if (method === "POST" && response.status === 201) {
        new Noty({
          text: "Registro guardado.",
          type: "success",
          theme: "metroui",
          layout: "bottomRight",
          timeout: 2000
        }).show();
      } else if (method === "POST" && response.status === 200) {
        new Noty({
          text: "Petición realizada con exito.",
          type: "success",
          theme: "metroui",
          layout: "bottomRight",
          timeout: 2000
        }).show();
      } else if (method === "PUT") {
        new Noty({
          text: "Registro actualizado.",
          theme: "metroui",
          type: "info",
          layout: "bottomRight",
          timeout: 2000
        }).show();
      }
    } else {
      if (url === "auth/sign-in") {
        new Noty({
          text: "Error al iniciar sesión.",
          type: "error",
          theme: "metroui",
          layout: "bottomRight",
          timeout: 2000
        }).show();
      } else {
        new Noty({
          text: "No se pudo guardar el registro.",
          type: "error",
          theme: "metroui",
          layout: "bottomRight",
          timeout: 2000
        }).show();
      }
    }
    return response.json();
  });
  return response;
}

export async function requestMultipart(url, method, body) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          if (method === "POST") {
            new Noty({
              text: "Registro guardado.",
              type: "success",
              theme: "metroui",
              layout: "bottomRight",
              timeout: 2000
            }).show();
          } else if (method === "PUT") {
            new Noty({
              text: "Registro actualizado.",
              theme: "metroui",
              type: "info",
              layout: "bottomRight",
              timeout: 2000
            }).show();
          }

          resolve(xhr.response);
        } else {
          new Noty({
            text: "No se pudo guardar el registro.",
            type: "error",
            theme: "metroui",
            layout: "bottomRight",
            timeout: 2000
          }).show();

          reject(new Error("Request failed"));
        }
      }
    };

    xhr.open(method, url);
    xhr.send(body);
  });
}
