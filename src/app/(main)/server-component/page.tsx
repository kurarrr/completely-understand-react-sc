import type { NextPage } from "next"

import fetchContentWithSeconds from "@/util/fetchContentWithSeconds"

const FetchPage: NextPage = async () => {
  const fetchedContent1s = await fetchContentWithSeconds(1)
  const fetchedContent5s = await fetchContentWithSeconds(5)

  return (
    <div>
      <p>{`fetched content with 1s: ${fetchedContent1s}`}</p>
      <p>{`fetched content with 10s: ${fetchedContent5s}`}</p>
    </div>
  )
}

export default FetchPage
