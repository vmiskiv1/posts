This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# BlogApp

BlogApp is a Next.js-based blog platform that leverages various modern libraries and tools, including Redux Toolkit for state management, Formik for form handling, and TinyMCE for rich text editing. The project uses `pnpm` for package management.

The application is already deployed and running on [Vercel](https://vmiskiv-posts.vercel.app/).

## Prerequisites

- Node.js 18 or later
- pnpm (https://pnpm.io/installation)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vmiskiv1/posts.git
cd posts
```

### 2. Install Dependencies

Make sure pnpm is installed globally. Then, run the following command to install the necessary dependencies:

```bash
pnpm install
```

### 3. Environment Variables

Create a .env.local file in the root directory of the project, and add any necessary environment variables. Here's an example:

```
NEXT_PUBLIC_TINYMCE_API_KEY=your tinymce api key
NEXT_PUBLIC_BASE_API=your server
NEXT_PUBLIC_IMGBB_API=your imgbb api
NEXT_PUBLIC_IMGBB_API_KEY=your imgbb api key
```

### 4. Running the Application

To start the development server:

```bash
pnpm dev
```

Open http://localhost:3000 to view the app in your browser.

### 5. Building for Production

To create a production build:

```bash
pnpm build
```

After building, you can start the production server:

```bash
pnpm start
```

### Tech Stack

- Next.js (v14.2.15)
- React (v18)
- Redux Toolkit (v2.3.0)
- Formik (v2.4.6)
- TinyMCE (v7.4.1)
- Tailwind CSS (v3.4.1)
- TypeScript (v5)
