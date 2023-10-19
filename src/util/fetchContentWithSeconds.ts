export default async function fetchContentWithSeconds(
  fetchSeconds: number = 1
): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, fetchSeconds * 1000))
  const content = `fetched content with ${fetchSeconds} seconds`
  return content
}
