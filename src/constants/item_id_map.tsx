function githubImageUrl(id: number) {
  return `https://raw.githubusercontent.com/yuanyan3060/1999GameResource/main/Item/${id}.png`
}

export class ItemInfo {
  id: number
  name: string
  rare: number
  image_url: string

  constructor(
    id: number,
    name: string,
    rare: number,
  ) {
    this.id = id
    this.name = name
    this.rare = rare

    this.image_url = githubImageUrl(id)
  }
}

export const itemInfoList: ItemInfo[] = [
  new ItemInfo(110101, "颤颤之齿", 1),
  new ItemInfo(110102, "液化战栗", 2),
  new ItemInfo(110103, "啮咬盒", 3),
  new ItemInfo(110104, "床下怪物", 4),
  new ItemInfo(110201, "苦盐簇", 1),
  new ItemInfo(110202, "精磨苦盐", 2),
  new ItemInfo(110203, "盐封曼德拉", 3),
  new ItemInfo(110204, "不腐猴爪", 4),
  new ItemInfo(110301, "破碎骨片", 1),
  new ItemInfo(110302, "未知种根骨", 2),
  new ItemInfo(110303, "双头形骨架", 3),
  new ItemInfo(110304, "幼龙骨标本", 4),
  new ItemInfo(110401, "银矿原石", 1),
  new ItemInfo(110402, "粗糙银锭", 2),
  new ItemInfo(110403, "祝圣秘银", 3),
  new ItemInfo(110404, "银光子弹", 4),
  new ItemInfo(110501, "清扫咒", 1),
  new ItemInfo(110502, "幸运咒语", 2),
  new ItemInfo(110503, "百灵百验鸟", 3),
  new ItemInfo(110504, "狂人絮语", 4),
  new ItemInfo(111001, "罗马金币", 2),
  new ItemInfo(111002, "金爪灵摆", 3),
  new ItemInfo(111003, "铂金通灵板", 4),
  new ItemInfo(111004, "分别善恶之果", 5),
  new ItemInfo(111005, "长青剑", 5),
  new ItemInfo(111006, "金羊毛", 5),
  new ItemInfo(115011, "岩中典残篇", 2),
  new ItemInfo(115012, "岩中典孤卷", 3),
  new ItemInfo(115013, "岩中典全章", 4),
  new ItemInfo(115021, "星升典残篇", 2),
  new ItemInfo(115022, "星升典孤卷", 3),
  new ItemInfo(115023, "星升典全章", 4),
  new ItemInfo(115031, "林娑典残篇", 2),
  new ItemInfo(115032, "林娑典孤卷", 3),
  new ItemInfo(115033, "林娑典全章", 4),
  new ItemInfo(115041, "兽涎典残篇", 2),
  new ItemInfo(115042, "兽涎典孤卷", 3),
  new ItemInfo(115043, "兽涎典全章", 4),
  new ItemInfo(120001, "迂回的啸鸣", 5),
  new ItemInfo(120002, "交错的战栗", 5),
  new ItemInfo(120003, "虚伪的呓语", 5),
  new ItemInfo(120004, "嘶哑的回音", 5),
  new ItemInfo(120011, "一瞬的躁动", 2),
  new ItemInfo(120012, "片刻的喧嚣", 3),
  new ItemInfo(120013, "悠远的振响", 4),
]

itemInfoList.sort((x, y) => y.rare - x.rare) 

export const itemIdMap = itemInfoList.reduce(
  (map:{[id:number]:ItemInfo}, item) => {
    map[item.id] = item
    return map
  }, {}
)

export const rareToColorMap: { [level: number]: string } = {
  1: "#405939",
  2: "#4A5272",
  3: "#A27FA9",
  4: "#D6BB6E",
  5: "#DE9423",
}
