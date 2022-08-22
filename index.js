const http = require("http")
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
})

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url === "/register") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk)
      const reCaptchaSecret = ""

      fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${reCaptchaSecret}&response=${data.token}`,
        {
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((data) => res.end(JSON.stringify(data)))
    })
  }
})

const port = 3000
const host = "127.0.0.1"

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
