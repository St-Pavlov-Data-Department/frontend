
export async function getMatrixes(item_id: number) {
  const resp = await fetch(`https://backend.stpavlov-data.com/api/matrix?items=${item_id}`, { cache: 'no-store' })
  return resp.json()
}
