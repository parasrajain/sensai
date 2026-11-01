import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "career-coach", // Unique app ID
  name: "Career Coach",
  credentials: {
    groq: {
      apiKey: process.env.GROQ_API_KEY,
    },
  },
});