"use client"

import { HttpStatusCode } from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const episodeIdToNameMap: { [id: number]: string } = {

}

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
          (x: Matrix, y: Matrix) => (y.quantity / y.replay_count) - (x.quantity / x.replay_count)
        )

        setMatrixElements(
          responseData.data.map((d: Matrix) => (
            <div
              style={{
                justifyItems: "flex-start",
                border: "1px solid #000000"
              }}
            >
              <h2>
                关卡：{d.episode_id}
              </h2>
              <div>掉率：{((d.quantity / d.replay_count) * 100).toFixed(2)}%</div>
            </div>
          ))
        )

      } catch (error) {

      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {/* TODO: fill up ItemDetailPage */}
      item id: {item_id}
      <div>
        {matrixElements}
      </div>
    </div>
  )
}
