import TeamClient from './TeamClient'

const slugs = ['saeid-maeini','amjad-amiri','mojtaba-roshani','danial-khazaei','abolfazl-asadi','saleh-askarzadeh']

export function generateStaticParams() {
  return slugs.map(slug => ({ slug }))
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <TeamClient slug={slug} />
}
