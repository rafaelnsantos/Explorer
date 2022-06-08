import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Block: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      Showing block: {id}
    </div>
  )
}

export default Block
