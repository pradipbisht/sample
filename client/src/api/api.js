const BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const MODEL = "gemini-2.0-flash";

export async function generateContent(prompt) {
  try {
    const response = await fetch(
      `${BASE_URL}/models/${MODEL}:generateContent?key=${
        import.meta.env.VITE_GEMINI_API_KEY
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong!";
  }
}
