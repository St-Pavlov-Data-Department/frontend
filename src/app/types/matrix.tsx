
interface MatrixResponse {
  error_code: number,
  error_message: string,
  data: Matrix[],
}

interface Matrix {
  episode_id: number,
  item_id: number,
  start_time_milli: number,
  end_time_milli: number,
  quantity: number,
  replay_count: number,
}
