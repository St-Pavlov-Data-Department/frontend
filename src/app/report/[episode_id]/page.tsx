export default function Page(
  {params}:{params:{episode_id:string}}
) {
  return (
    <div>
      episode: {params.episode_id}
    </div>
  )
}