import * as ethers from "ethers";

// Parcel inlines process.env.INFURA_KEY from your .env
const provider = new ethers.InfuraProvider(
  "mainnet",
  process.env.INFURA_KEY
);

document.getElementById("lookup").addEventListener("click", async () => {
  const q   = document.getElementById("query").value.trim();
  const out = document.getElementById("output");
  out.textContent = "Looking up…";

  try {
    const res = ethers.isAddress(q)
      ? await provider.lookupAddress(q)
      : await provider.resolveName(q);

    out.textContent = res || "—not found—";
  } catch (err) {
    out.textContent = "Error: " + err.message;
  }
});
