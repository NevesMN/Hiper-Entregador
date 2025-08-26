const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const r = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "netlify-func"
    }
  });

  const data = await r.json();

  return {
    statusCode: r.status,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
};
