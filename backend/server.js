import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first joke",
      content: "it is first joke",
    },
    {
      id: 2,
      title: "2 joke",
      content: "it is 2 joke",
    },
    {
      id: 3,
      title: "3 joke",
      content: "it is 3 joke",
    },
    {
      id: 4,
      title: "4 joke",
      content: "it is 4 joke",
    },
    {
      id: 5,
      title: "5 joke",
      content: "it is 5 joke",
    },
    {
      id: 6,
      title: "6 joke",
      content: "it is 6 joke",
    },
    {
      id: 7,
      title: "7 joke",
      content: "it is 7 joke",
    },
  ];

  res.send(jokes);
});

app.listen(5000, () => {
  console.log("server listen on localhost:5000");
});
