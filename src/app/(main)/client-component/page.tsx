"use client"

import { useState, useEffect } from "react"
import type { NextPage } from "next"

import fetchContentWithSeconds from "@/util/fetchContentWithSeconds"

const FetchPage: NextPage = () => {
  const [fetchedContent1s, setFetchedContent1s] = useState("Not fetched")
  const [fetchedContent5s, setfetchedContent5s] = useState("Not fetched")

  useEffect(() => {
    const fetchContent1s = async () => {
      const fetchedContent1s = await fetchContentWithSeconds(1)
      setFetchedContent1s(fetchedContent1s)
    }
    const fetchContent10s = async () => {
      const fetchedContent5s = await fetchContentWithSeconds(5)
      setfetchedContent5s(fetchedContent5s)
    }
    fetchContent1s()
    fetchContent10s()
  })

  return (
    <div>
      <p>{`fetched content with 1s: ${fetchedContent1s}`}</p>
      <p>{`fetched content with 10s: ${fetchedContent5s}`}</p>
    </div>
  )
}

export default FetchPage
