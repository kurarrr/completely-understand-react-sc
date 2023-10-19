import { Suspense } from "react"
import type { NextPage } from "next"

import fetchContentWithSeconds from "@/util/fetchContentWithSeconds"

const FetchContentComponent = ({ seconds }: { seconds: number }) => {
  const fetchedContent = fetchContentWithSeconds(seconds)
  return <div>{fetchedContent}</div>
}

const FetchPage: NextPage = async () => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <FetchContentComponent seconds={1} />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <FetchContentComponent seconds={5} />
      </Suspense>
    </div>
  )
}

export default FetchPage
