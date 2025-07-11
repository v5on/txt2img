export default async function handler(req, res) {
  const { prompt, style = "realistic", ratio = "1:1" } = req.query;

  if (!prompt) {
    return res.status(400).json({ success: false, error: "Prompt is required" });
  }

  const mainApiURL = `https://text-to-image-api-production-203c.up.railway.app/api/generate?prompt=${encodeURIComponent(prompt)}&style=${style}&ratio=${encodeURIComponent(ratio)}`;

  try {
    const apiRes = await fetch(mainApiURL);
    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch from main API" });
  }
}
