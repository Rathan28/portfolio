export interface LinkedInPost {
  id: string;
  date: string;
  content: string;
  url: string;
  title?: string;
  category?: string;
  image?: string;
}

/**
 * Rathan P — LinkedIn Content Collection
 * 
 * To add or update your LinkedIn posts:
 * 1. Copy your published LinkedIn post content and post URL.
 * 2. Add a new post object to the top of the `linkedInPosts` array below.
 * 3. The website will automatically render it in native editorial style.
 */
export const linkedInPosts: LinkedInPost[] = [
  {
    id: 'post-1',
    date: 'August 2026',
    title: 'Building Versity & Closing Institutional Confirmations',
    category: 'Entrepreneurship & Apparel',
    content:
      'We’ve made hundreds of cold calls across Davanagere, booked meetings, and closed institutional confirmations — now gearing up for delivery as the season starts. Open to conversations with fellow founders, and anyone building in fashion, retail, or fintech/trading.',
    url: 'https://www.linkedin.com/in/rathan-p',
  },
  {
    id: 'post-2',
    date: 'April 2026',
    title: 'Why Early Failures Built the Foundation for Versity',
    category: 'Brand Building',
    content:
      'In 2023 I founded XTICH as a direct-to-consumer clothing brand. I designed and tried to launch a few product lines with real investment — most didn’t work. I ended up making a hoodie for myself that never sold, and that failure taught me more about the uniform/apparel supply chain than any success would have. That lesson turned into Versity, XTICH’s flagship series.',
    url: 'https://www.linkedin.com/in/rathan-p',
  },
  {
    id: 'post-3',
    date: 'October 2025',
    title: 'Focusing Full-Time on Business & XTICH',
    category: 'Founder Journey',
    content:
      'Left my B.Tech in Computer Science in the first semester after identifying a stronger fit with real-world business and entrepreneurship. That decision led directly to building XTICH and launching Versity full-time.',
    url: 'https://www.linkedin.com/in/rathan-p',
  },
];
