import { useState, useEffect } from 'react'

export function useFetch(url) {

  const [data, setData] = useState({})

  useEffect(() => {

    async function fetchData() {

      const response = await fetch(url)
      const x = await response.json()
      setData(x)

    }

    fetchData()

  }, [url])

  return { data }

}