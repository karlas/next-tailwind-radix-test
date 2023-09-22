import {PageContainer} from '@/components/page-container'
import {Text} from '@/components/text'
import Users from './users'
import {Suspense} from 'react'
import {Popover} from "@/components/popover";
import {Buttons} from "@/app/buttons";

export default function Home() {
  return (
    <PageContainer>
      <div className="flex justify-between align-middle">
        <Text className="text-candy">Hola!</Text>
        <Text className="text-steel" type="caption">
          Adiós
        </Text>
      </div>
      <Buttons />
      <div className="flex gap-1 justify-center align-middle">
        <Popover></Popover>
      </div>
      <Suspense>
        <Users/>
      </Suspense>
    </PageContainer>
  )
}
