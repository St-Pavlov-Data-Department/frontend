"use client"

import { HttpStatusCode } from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { episodeIdMap } from "@/constants/episode_id_map"

interface MatrixResponse {
  error_code: number,
  error_message: string,
  data: Matrix[],
}

export default function PavlovItemDetailPage() {
  let { item_id } = useParams()

  const [matrixElements, setMatrixElements] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // var response: MatrixResponse
        const response = await fetch(`https://backend.stpavlov-data.com/api/matrix?items=${item_id}`)
        const responseData = await response.json()
        responseData.data.sort(
          (x: Matrix, y: Matrix) => 
          episodeIdMap[x.episode_id].cost / (x.quantity / x.replay_count) - episodeIdMap[y.episode_id].cost / (y.quantity / y.replay_count)
        )

        setMatrixElements(
          responseData.data.map((d: Matrix) => (
            <div
              className="flex items-start justify-between"
              style={{
                width: "80%",
                border: "1px solid #000000"
              }}
            >
              <h2>
                关卡：{episodeIdMap[d.episode_id].name} {d.episode_id > 20000 ? "厄险" : "普通"}
              </h2>
              <h3>关卡ID: {d.episode_id}</h3>
              <div>掉率：{((d.quantity / d.replay_count) * 100).toFixed(2)}%</div>
              <div>期望活性：{(episodeIdMap[d.episode_id].cost / (d.quantity/d.replay_count)).toFixed(2)}</div>
            </div>
          ))
        )

      } catch (error) {

      }
    }

    fetchData()
  }, [])

  return (
    <div className="w-full flex flex-col justify-center">
      {/* TODO: fill up ItemDetailPage */}
      item id: {item_id}
      <div className="flex flex-col justify-center">
        {matrixElements.length > 0 ? 
        matrixElements 
        : <h1>No data</h1>}
      </div>
    </div>
  )
}
