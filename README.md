# Tu Farmacia - Coquimbo

A minimalistic pharmacy website demo built with Next.js, Tailwind CSS, and Supabase.

## Features

- 🏥 Pharmacy information and services
- 💊 Service highlights (medications, blood pressure monitoring, delivery)
- 📍 Contact information for Coquimbo location
- 📱 Responsive design
- 🌐 Ready for Vercel deployment
- 🗄️ Supabase integration ready

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (configured)
- **Deployment**: Vercel

## Getting Started

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project in [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Supabase Setup

1. Create a new project at [Supabase](https://supabase.com)
2. Copy your project URL and anon key
3. Add them to your environment variables
4. Create any necessary tables in your Supabase dashboard

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
tu-farmacia/
├── src/
│   └── app/
│       ├── page.tsx          # Main pharmacy homepage
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── lib/
│   └── supabase.ts          # Supabase client configuration
├── public/                  # Static assets
├── .env.local.example      # Environment variables template
├── vercel.json            # Vercel deployment configuration
└── README.md
```

## Customization

- Edit `src/app/page.tsx` to modify the main page content
- Update contact information and location details
- Add more pages by creating new files in `src/app/`
- Customize styling in Tailwind classes

## License

This is a demo project for educational purposes.
