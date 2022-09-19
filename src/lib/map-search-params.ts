export function mapSearchParams(q: Record<string, unknown>) {
  const query = q
  const params = new URLSearchParams()
  for (const queryKey in query) {
    if (Object.prototype.hasOwnProperty.call(query, queryKey)) {
      if (Array.isArray(query[queryKey])) {
        const array = query[queryKey] as []
        array.forEach((a) => {
          params.append(queryKey, a)
        })
      } else if (query[queryKey] || query[queryKey] === 0) {
        params.append(queryKey, query[queryKey] as string)
      }
    }
  }
  return params
}
