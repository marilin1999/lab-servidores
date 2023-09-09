const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `http://localohst:${port}`);

  if (url.pathname === "/user") {
    const name = url.searchParams.get("name") || null;
    const email = url.searchParams.get("email") || null;

    const responseData = {
      name: name,
      email: email,
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(200);
    res.end("Not Found");
  }
};

const server = http.createServer(requestListener);
module.exports = server;