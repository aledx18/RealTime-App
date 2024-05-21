import { getPlaiceholder } from 'plaiceholder'

export default async function GetBase64(url: string) {
  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Network response was not ok.')
    }
    const buffer = await res.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
  } catch (error) {
    console.log(error)
  }
}
