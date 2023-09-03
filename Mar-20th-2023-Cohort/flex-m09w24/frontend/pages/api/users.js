// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const dbUsers = [
    {
      id: 1,
      name: "Test 1",
    },
    {
      id: 2,
      name: "Test 2",
    },
    {
      id: 3,
      name: "Test 3",
    },
    {
      id: 4,
      name: "Test 4",
    },
  ];

  res.status(200).json(dbUsers);
}
