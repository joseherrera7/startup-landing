import { useRouter } from 'next/router'

const Service = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Service: {pid}</p>
}

export default Service 