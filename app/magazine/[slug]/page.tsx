import ArticleClient from './ArticleClient'

const slugs = ['branding-چیست','logo-design-guide','visual-identity-system','brand-strategy-iran','ai-in-branding','brand-positioning','brand-voice-tone','brandbook-guide','rebranding-when-how','color-psychology-branding','personal-branding','startup-branding']

export function generateStaticParams() {
  return slugs.map(slug => ({ slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ArticleClient slug={slug} />
}
