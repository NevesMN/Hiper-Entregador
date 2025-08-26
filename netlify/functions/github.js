export async function handler(event, context) {
  const token = process.env.GITHUB_TOKEN; // variável do Netlify (segura)

  // Exemplo: buscar seus repositórios do GitHub
  const response = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `token ${token}`,
      "User-Agent": "netlify-function",
    },
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data), // retorna JSON
  };
      }
