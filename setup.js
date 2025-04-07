const { jwtDecode } = require("jwt-decode");
const { loadData, saveJson } = require("./utils");

const main = async () => {
  const tokens = loadData("tokens.txt");
  if (tokens.length == 0) {
    console.error("Tokens not found in tokens.txt");
    return;
  }

  try {
    for (const token of tokens) {
      const decodedToken = jwtDecode(token);
      const { email } = decodedToken;
      await saveJson(
        email,
        JSON.stringify({
          access_token: token,
        }),
        "localStorage.json"
      );
    }
  } catch (error) {
    console.error("Error decoding JWT:", error);
  }
  console.log("Tokens saved to localStorage.json");
};

main();
