import { PageContainer } from '@/components/page-container'
import { Text } from '@/components/text'

export default function Home() {
  return (
    <PageContainer>
      <div className="flex justify-between align-middle">
        <Text className="text-candy">Hola!</Text>
        <Text className="text-steel" type="caption">
          Adiós
        </Text>
      </div>
    </PageContainer>
  )
}
