const axios = require("axios").default;

async function requests() {
  try {
    const { data } = await axios.post("http://localhost:3000/books", {
      ID: 3,
      name: "My Boook",
      author: "Me and only me",
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }

  try {
    const { data } = await axios.get("http://localhost:3000/books");

    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
}

async function exercicio01() {

  try {
    const { data } = await axios.post("http://localhost:3000/books", {
      ID: 4,
      name: "Sob a redoma",
      author: "Stephen King",
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }

  try {
    const { data } = await axios.post("http://localhost:3000/books", {
      ID: 2,
      name: "Dom Casmurro",
      author: "Machado de Assis",
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }

  try {
    const { data } = await axios.get("http://localhost:3000/books");

    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
}

async function exercicio02() {

  const LIVROS = [];

  try {
    const { data } = await axios.get("http://localhost:3000/books");
    data.forEach((livro) => {
      LIVROS.push(livro);
    });
  } catch (error) {
    console.log(error.response.data);
  }

  try {
    LIVROS.forEach(async ({ ID }) => {
      const { data } = await axios.get(`http://localhost:3000/books/${ID}`);
      console.log(data);
    });
  } catch (error) {
    console.log(error.response.data);
  }
}

async function exercicio04() {

  try {
    const { data } = await axios.get(`http://localhost:3000/log`);
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
}

requests();
exercicio01();
exercicio02();
exercicio04();

// Exercício 1: no arquivo "client.js", adicione um post para um novo livro e um post com um ID existente. Exercite o uso de Promises.

// Exercício 2: no arquivo "client.js", após recuperar todos os livros, faça requisições um-a-um para cada livro usando seu ID em /books/<ID>

// Exercício 3: Altere o arquivo "server.js" e armazene quantas requisições GET e POST foram realizadas. Em seguida, adicione um método GET para "/log" que retorna os dados da quatidade de requisições.

// Exercício 4: no arquivo "client.js", faça um GET para "/log" do exercício 3.