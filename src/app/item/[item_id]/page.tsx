import { episodeIdMap } from "@/constants/episode_id_map"
import { itemIdMap } from "@/constants/item_id_map"
import { getMatrixes } from "./get_matrixes"


export default async function Page(
  { params }: { params: { item_id: number } }
) {
  // var response: MatrixResponse
  const responseGet = getMatrixes(params.item_id)

  const [response] = await Promise.all([responseGet])

  response.data.sort(
    (x: Matrix, y: Matrix) =>
      episodeIdMap[x.episode_id].cost / (x.quantity / x.replay_count) - episodeIdMap[y.episode_id].cost / (y.quantity / y.replay_count)
  )

  const matrixElements = response.data.map((d: Matrix) => (
    <div
      className="flex items-center justify-between"
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
      <div>期望活性：{(episodeIdMap[d.episode_id].cost / (d.quantity / d.replay_count)).toFixed(2)}</div>
    </div>
  ))

  return (
    <div className="w-full flex flex-col items-center">
      <h1>{itemIdMap[params.item_id]?.name}</h1>
      item id: {params.item_id}
      <div className="w-full flex flex-col items-center">
        {matrixElements.length > 0 ?
          matrixElements
          : <h1>No data</h1>}
      </div>
    </div>
  )
}
