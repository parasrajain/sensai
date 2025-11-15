Here is a professional, comprehensive `README.md` file for your project, crafted from the details and diagrams you provided.

-----

# SENSAI - AI Career Coach Platform

A full-stack AI-powered career development platform built with Next.js 15, React 19, and Groq AI.

  

[**Live Demo (TBD)**](https://your-demo-url.com) · [**Report a Bug**](https://www.google.com/search?q=https://github.com/your-username/sensai/issues) · [**Request a Feature**](https://www.google.com/search?q=https://github.com/your-username/sensai/issues)

-----

*(Add a screenshot of your application's dashboard here)*

SENSAI helps professionals advance their careers through AI-driven insights, interview preparation, resume building, and cover letter generation. It leverages the speed of Groq AI and Next.js 15 Server Actions to deliver a seamless, responsive experience.

## ✨ Core Features

  * **📊 Industry Insights Dashboard**

      * Real-time market analysis using **Groq AI (Llama-3.3-70b)**.
      * Tracks salary ranges, growth rates, and demand levels for 180+ industries.
      * Visualizes top skills and emerging market trends.
      * Data is auto-refreshed weekly via **Inngest** background jobs.

  * **🎙️ Interview Preparation**

      * Generates AI-powered mock quizzes (10 questions per session).
      * Provides industry-specific technical and behavioral questions.
      * Tracks performance and provides detailed analytics using **Recharts**.
      * Delivers personalized improvement tips based on quiz performance.

  * **📄 Resume Builder**

      * Intuitive **Markdown-based editor** with a live visual preview.
      * AI-powered content enhancement to improve phrasing and impact.
      * Real-time **ATS (Applicant Tracking System) score analysis** and feedback.
      * One-click **PDF export** functionality.

  * **✉️ AI Cover Letter Generator**

      * Generates cover letters tailored to specific job descriptions pasted by the user.
      * Manages and stores multiple cover letters.
      * Personalizes content based on the user's stored profile and skills.

  * **🚀 User Onboarding**

      * A guided multi-step process for new users.
      * Collects career goals, industry/sub-industry, skills, and experience level to personalize the app.

-----

## 🛠️ Tech Stack

This project is built using a modern, type-safe, and performant stack.

  * **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS
  * **UI Components:** Shadcn/ui, Radix UI
  * **Backend:** Next.js Server Actions
  * **Database:** PostgreSQL (Vercel Postgres or Supabase)
  * **ORM:** Prisma
  * **Authentication:** Clerk
  * **AI:** Groq SDK (Llama-3.3-70b)
  * **Background Jobs:** Inngest
  * **Form Management:** React Hook Form
  * **Validation:** Zod
  * **Analytics/Charts:** Recharts

-----

## 🏗️ System Architecture

The application uses a server-centric model where the Next.js frontend communicates directly with Next.js Server Actions. This colocation of backend and frontend logic simplifies the architecture and improves performance.

  * **UI (Client):** The React components (e.g., Resume Builder, Mock Quiz) call Server Actions.
  * **Backend (Server Actions):** These functions handle all business logic.
      * Uses **Prisma ORM** for type-safe database access (PostgreSQL).
      * Uses the **Groq SDK** for all AI-related tasks (generation, analysis).
      * Uses **Clerk** for user authentication and session management.
      * Uses **Inngest** to trigger and manage background jobs (like the weekly industry data update).
  * **Data & AI:** The persistent layer, decoupled from the main application logic.

-----

## 🗄️ Database Schema

The database is designed to be relational and user-centric. The `users` table, linked to Clerk for authentication, serves as the central hub connecting all features.

  * **`users`**: Stores user profile information, experience, skills, and the `clerkUserId`.
  * **`industryInsights`**: A single-row-per-industry table holding aggregated market data. It is linked 1:1 with the `users` table to show their selected industry's insights.
  * **`resumes`**: Stores resume content (as text/markdown), ATS score, and feedback.
  * **`coverLetters`**: Stores generated cover letters and their associated job descriptions.
  * **`assessments`**: Stores the results of each mock quiz, including score, questions, and improvement tips.

-----

## 🚀 Getting Started

To run this project locally, follow these steps.

### Prerequisites

  * Node.js (v18.0 or later)
  * pnpm (or npm/yarn)
  * A running PostgreSQL database
  * API keys from:
      * Clerk (for authentication)
      * Groq (for AI)
      * Inngest (for background jobs)

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/sensai.git
cd sensai
```

### 2\. Install Dependencies

```bash
pnpm install
```

### 3\. Set Up Environment Variables

Copy the `.env.example` file to a new file named `.env` and fill in the required API keys and database URL.

```ini
# .env

# Database (Prisma)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# AI (Groq)
GROQ_API_KEY=gsk_...

# Background Jobs (Inngest)
INNGEST_EVENT_KEY=...
```

### 4\. Run Database Migrations

Push the Prisma schema to your database.

```bash
pnpm prisma migrate dev
```

### 5\. Run the Development Server

```bash
pnpm dev
```

The application should now be running on [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

-----

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
