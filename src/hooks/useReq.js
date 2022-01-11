import { useState, useEffect } from 'react'

const useReq = (url) => {
  const [status, setStatus] = useState('inativo')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      setStatus('buscando')
      console.log('buscando...')
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setStatus('encontrado')
    }

    fetchData()
  }, [url])
  console.log(data)
  return [status, data]
}

export default useReq