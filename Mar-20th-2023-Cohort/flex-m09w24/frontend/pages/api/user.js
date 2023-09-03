// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.query);

  res.status(200).json({ id: req.query.id, name: "Test 1" });
}
