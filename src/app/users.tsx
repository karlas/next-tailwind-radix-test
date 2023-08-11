import { Text } from '@/components/text'

type User = {
  id: number
  name: string
}

function sleep(seconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000)
  })
}

async function fetchUsers() {
  await sleep(3)
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const news: User[] = await res.json()
  return news
}

export default async function Users() {
  const users = await fetchUsers()

  return (
    <ul className="mx-auto block w-auto">
      {users.map(user => (
        <li key={user.id}>
          <Text>{user.name}</Text>
        </li>
      ))}
    </ul>
  )
}
