export default function (Url, Method, Data = null) {
  if (Data) {
    Data = JSON.stringify(Data);
  }
  console.log(process.env.REACT_APP_APIBASEURl);
  var ModifiedUrl = process.env.REACT_APP_APIBASEURl + Url;
  console.log(ModifiedUrl);
  var Response = fetch(ModifiedUrl, {
    method: Method,
    body: Data,
    headers: {
      "Content-Type": "application/json",
      cor: "no-cors",
      Authorization: `Bearer ${
        localStorage.getItem("token") ? localStorage.getItem("token") : ""
      }`,
    },
  });
  Response.then((data) => {
    if (data.status == 401 || data.statusText == "Unauthorized") {
      localStorage.clear();
      window.location.href = "/";
    }
  });
  return Response;
}
