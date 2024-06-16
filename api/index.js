
const express = require("express");
const app = express();

app.use(express.json())

app.get("/",(req,res) => {
  res.json({
    data:"OK"
  })
})

app.get("/hello", (request, response) => {
  response.status(200).json({
    "hello": "world"
  })
})

try {
  var port = 3000
  console.log("\nAPI rodando em http://localhost:" + port)
} catch (error) {
  console.error("Erro na inicialização da API")
}