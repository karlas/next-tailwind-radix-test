import { PageContainer } from '@/components/page-container'
import { Text } from '@/components/text'
import { Button } from '@/components/button'

export default function Home() {
  return (
    <PageContainer>
      <div className="flex justify-between align-middle">
        <Text className="text-candy">Hola!</Text>
        <Text className="text-steel" type="caption">
          Adiós
        </Text>
      </div>
      <div className="flex gap-1 justify-center align-middle">
        <Button>Primary</Button>
        <Button type="secondary">Secondary</Button>
      </div>
    </PageContainer>
  )
}
