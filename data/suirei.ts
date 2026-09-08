export const DEMO_NOW = "2026/09/12 14:52";
export const DEMO_CLOCK = "14:52";
export const DEMO_DATE = "2026/09/12";

export type DueKind = "overdue" | "thisMonth" | "recorded" | "none";
export type Judgment = "usable" | "conditional" | "unusable" | "unknown";

export type Zone = {
  id: string;
  name: string;
  kind: string;
  vendor: string;
  due: DueKind;
  judgment: Judgment;
  reason: string;
  path: string;
  knowledge: string;
  recordDate: string;
  confirmer: string;
  photo: string;
  click: "incident" | "drawer";
  basis: string;
};

export const ZONES: Zone[] = [
  {
    id: "Z01",
    name: "アリーナ",
    kind: "競技場",
    vendor: "指定管理",
    due: "recorded",
    judgment: "usable",
    reason: "2026/09/08 点検済み",
    path: "翠嶺市総合体育館 › 競技場 › アリーナ",
    knowledge: "—",
    recordDate: "2026/09/08",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/08 床とゴールの点検済み"
  },
  {
    id: "Z02",
    name: "東側搬入口",
    kind: "動線",
    vendor: "指定管理",
    due: "thisMonth",
    judgment: "conditional",
    reason: "車両 白バン",
    path: "翠嶺市総合体育館 › 動線 › 東側搬入口",
    knowledge: "K-D3",
    recordDate: "2026/09/12",
    confirmer: "—",
    photo: "img/b1.png",
    click: "incident",
    basis: "白バンが搬入口を狭くしている（当日静止画）"
  },
  {
    id: "Z03",
    name: "北側入口",
    kind: "動線",
    vendor: "指定管理",
    due: "recorded",
    judgment: "usable",
    reason: "2026/09/05 扉点検済み。入口に人が来ているが扉は閉",
    path: "翠嶺市総合体育館 › 動線 › 北側入口",
    knowledge: "K-D1",
    recordDate: "2026/09/05",
    confirmer: "—",
    photo: "img/b2.png",
    click: "incident",
    basis: "2026/09/05 扉点検済み。入口に人が来ているが扉は閉"
  },
  {
    id: "Z04",
    name: "西側非常口",
    kind: "動線",
    vendor: "指定管理",
    due: "overdue",
    judgment: "conditional",
    reason: "非常口前に備品。2026/09/09 高木が対応が必要",
    path: "翠嶺市総合体育館 › 動線 › 西側非常口",
    knowledge: "K-F4",
    recordDate: "2026/09/09",
    confirmer: "高木（総務）",
    photo: "img/c1.png",
    click: "incident",
    basis: "非常口前に備品。2026/09/09 高木が対応が必要"
  },
  {
    id: "Z05",
    name: "機械室",
    kind: "電源",
    vendor: "嶺北電設",
    due: "overdue",
    judgment: "conditional",
    reason: "発電機 2026/08/28",
    path: "翠嶺市総合体育館 › 電源 › 機械室",
    knowledge: "K-G3",
    recordDate: "2026/03/18",
    confirmer: "高木（総務）",
    photo: "img/c3.png",
    click: "incident",
    basis: "非常用発電機 期限切れ（2026/08/28）"
  },
  {
    id: "Z06",
    name: "受水槽",
    kind: "給水",
    vendor: "市水道",
    due: "recorded",
    judgment: "usable",
    reason: "2026/09/01 水位は下限を超えていた",
    path: "翠嶺市総合体育館 › 給水 › 受水槽",
    knowledge: "K-W1",
    recordDate: "2026/09/01",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/01 水位は下限を超えていた"
  },
  {
    id: "Z07",
    name: "消火設備",
    kind: "消防",
    vendor: "翠嶺防災",
    due: "thisMonth",
    judgment: "conditional",
    reason: "消火器が通路側。消防設備の期限は 2026/09/30",
    path: "翠嶺市総合体育館 › 消防 › 消火設備",
    knowledge: "K-F2",
    recordDate: "—",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "消火器が通路側。消防設備の期限は 2026/09/30"
  },
  {
    id: "Z08",
    name: "外壁（通路側）",
    kind: "躯体",
    vendor: "市営繕",
    due: "overdue",
    judgment: "unusable",
    reason: "剥離 2026/06/12",
    path: "翠嶺市総合体育館 › 躯体 › 外壁（通路側）",
    knowledge: "K-E3",
    recordDate: "2026/06/12",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "剥離。2026/06/12 記録。通路に人が通る"
  },
  {
    id: "Z09",
    name: "更衣室",
    kind: "衛生",
    vendor: "指定管理",
    due: "recorded",
    judgment: "usable",
    reason: "2026/08/28 点検済み",
    path: "翠嶺市総合体育館 › 衛生 › 更衣室",
    knowledge: "—",
    recordDate: "2026/08/28",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/08/28 点検済み"
  },
  {
    id: "Z10",
    name: "観客席",
    kind: "競技場",
    vendor: "指定管理",
    due: "recorded",
    judgment: "usable",
    reason: "2026/08/20 点検済み",
    path: "翠嶺市総合体育館 › 競技場 › 観客席",
    knowledge: "—",
    recordDate: "2026/08/20",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/08/20 点検済み"
  },
  {
    id: "Z11",
    name: "事務室",
    kind: "管理",
    vendor: "指定管理",
    due: "recorded",
    judgment: "usable",
    reason: "2026/09/04 点検済み",
    path: "翠嶺市総合体育館 › 管理 › 事務室",
    knowledge: "—",
    recordDate: "2026/09/04",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/04 点検済み"
  },
  {
    id: "Z12",
    name: "屋上",
    kind: "外構",
    vendor: "—",
    due: "none",
    judgment: "unknown",
    reason: "記録がない",
    path: "翠嶺市総合体育館 › 外構 › 屋上",
    knowledge: "—",
    recordDate: "—",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "—"
  },
  {
    id: "Z13",
    name: "照明",
    kind: "電気",
    vendor: "嶺北電設",
    due: "thisMonth",
    judgment: "usable",
    reason: "2026/09/10 ランプ交換。期限は今月の定期",
    path: "翠嶺市総合体育館 › 電気 › 照明",
    knowledge: "—",
    recordDate: "2026/09/10",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/10 ランプ交換。期限は今月の定期"
  },
  {
    id: "Z14",
    name: "空調",
    kind: "空調",
    vendor: "—",
    due: "none",
    judgment: "unknown",
    reason: "記録がない",
    path: "翠嶺市総合体育館 › 空調 › 空調",
    knowledge: "—",
    recordDate: "—",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "—"
  },
  {
    id: "Z15",
    name: "備品庫",
    kind: "備品",
    vendor: "指定管理",
    due: "recorded",
    judgment: "usable",
    reason: "2026/08/15 棚卸済み",
    path: "翠嶺市総合体育館 › 備品 › 備品庫",
    knowledge: "—",
    recordDate: "2026/08/15",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/08/15 棚卸済み"
  },
  {
    id: "Z16",
    name: "サブアリーナ",
    kind: "競技場",
    vendor: "指定管理",
    due: "recorded",
    judgment: "usable",
    reason: "2026/09/08 点検済み。夜間電源の代替",
    path: "翠嶺市総合体育館 › 競技場 › サブアリーナ",
    knowledge: "—",
    recordDate: "2026/09/08",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/08 点検済み。夜間電源の代替"
  },
  {
    id: "Z17",
    name: "前庭",
    kind: "外構",
    vendor: "指定管理",
    due: "recorded",
    judgment: "usable",
    reason: "2026/09/06 排水溝の目視点検済み",
    path: "翠嶺市総合体育館 › 外構 › 前庭",
    knowledge: "—",
    recordDate: "2026/09/06",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/06 排水溝の目視点検済み"
  },
  {
    id: "Z18",
    name: "西側通用口",
    kind: "動線",
    vendor: "市営繕",
    due: "overdue",
    judgment: "unusable",
    reason: "閉まり切らない。2026/07/22 記録",
    path: "翠嶺市総合体育館 › 動線 › 西側通用口",
    knowledge: "K-D2",
    recordDate: "2026/07/22",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "閉まり切らない。2026/07/22 記録"
  }
];

export const DASHBOARD = {
  zones: 18,
  usable: 10,
  conditional: 4,
  unusable: 2,
  unknown: 2,
  integrations: "5 / 8"
} as const;

export type MapPin = {
  id: string;
  name: string;
  left: number;
  top: number;
  judgment: Judgment;
  dashed?: boolean;
  href: string;
};

export const MAP_PINS: MapPin[] = [
  { id: "Z01", name: "アリーナ", left: 46, top: 48, judgment: "usable", href: "/console/facilities?view=upkeep&zone=Z01" },
  { id: "Z02", name: "東側搬入口", left: 88, top: 58, judgment: "conditional", href: "/console/incident" },
  { id: "Z03", name: "北側入口", left: 50, top: 14, judgment: "usable", href: "/console/incident" },
  { id: "Z04", name: "西側非常口", left: 12, top: 46, judgment: "conditional", href: "/console/incident" },
  { id: "Z05", name: "機械室", left: 70, top: 84, judgment: "conditional", href: "/console/incident" },
  { id: "Z08", name: "外壁", left: 18, top: 74, judgment: "unusable", href: "/console/facilities?view=upkeep&zone=Z08" },
  { id: "Z12", name: "屋上", left: 50, top: 4, judgment: "unknown", dashed: true, href: "/console/facilities?view=upkeep&zone=Z12" },
  { id: "Z14", name: "空調", left: 64, top: 8, judgment: "unknown", dashed: true, href: "/console/facilities?view=upkeep&zone=Z14" },
  { id: "Z16", name: "サブアリーナ", left: 78, top: 40, judgment: "usable", href: "/console/facilities?view=upkeep&zone=Z16" },
  { id: "Z18", name: "西側通用口", left: 10, top: 68, judgment: "unusable", href: "/console/facilities?view=upkeep&zone=Z18" }
];

export const CAMERAS = [
  { id: "N02", left: 50, top: 6, pinId: "Z03" },
  { id: "E01", left: 94, top: 56, pinId: "Z02" },
  { id: "W03", left: 4, top: 46, pinId: "Z04" }
] as const;

export const INCIDENT = {
  id: "INC-20260912-007",
  facilityName: "翠嶺市総合体育館",
  judgment: "conditional" as Judgment,
  headline: "搬入口の車両と、発電機の期限切れが同じ体育館に残っている",
  confidence: 81,
  confidenceNote: "同じ棟を指す",
  conclusion:
    "東側の搬入口が車両で狭く、西側の非常口前に備品がある。夜間の電源は、発電機の点検期限が 2026/08/28 で切れており確認できていない。条件付きで使える。白天に開館するなら、搬入口の車両と非常口前の備品を先にどかす。アリーナは使える。夜間の代替はサブアリーナ。",
  frames: [
    {
      id: "b1",
      time: "14:08",
      ago: "44分前",
      cameraId: "CAM-総合-E01",
      pinId: "Z02",
      cameraMark: "E01",
      file: "/img/b1.png",
      fileName: "b1.png",
      label: "車両 白バン",
      caption: "白バンが搬入口をふさいでいる",
      note: "運転者もナンバーも見ていない",
      box: { left: 24, top: 37, width: 28, height: 34 }
    },
    {
      id: "b2",
      time: "14:21",
      ago: "31分前",
      cameraId: "CAM-総合-N02",
      pinId: "Z03",
      cameraMark: "N02",
      file: "/img/b2.png",
      fileName: "b2.png",
      label: "人物 8名",
      caption: "入口に8人いる",
      note: "個人は分からない。開館前に人が来ている",
      box: { left: 18, top: 41, width: 30, height: 16 }
    },
    {
      id: "b3",
      time: "14:36",
      ago: "16分前",
      cameraId: "CAM-総合-W03",
      pinId: "Z04",
      cameraMark: "W03",
      file: "/img/b3.png",
      fileName: "b3.png",
      label: "備品",
      caption: "非常口の前に備品がある",
      note: "2026/09/09 の「対応が必要」と同じ場所",
      box: { left: 24, top: 53, width: 27, height: 27 }
    }
  ],
  records: [
    { id: "gen", pinId: "Z05", text: "2026/03/18 高木がファイル。非常用発電機の業者紙。次回点検 2026/08/28。期限切れ（K-G3）" },
    { id: "exit", pinId: "Z04", text: "2026/09/09 高木が画像確認で「対応が必要」。非常口前の備品（K-F4）" }
  ],
  actions: [
    "受付予定と、北側入口に来ている人の数を照合する（予約台帳は未接続）",
    "東側搬入口の車両をどかせるか、搬入の予定を確認する",
    "非常口前の備品をどかす（2026/09/09 の「対応が必要」が未了）",
    "発電機の業者紙を見て、今夜の電源をサブアリーナにするか決める（Z16、点検 2026/09/08、使える）"
  ]
} as const;

export type ReviewDecision = "needed" | "ok" | "pending";

export type ReviewItem = {
  id: "exit" | "van" | "gen";
  place: string;
  spot: string;
  file: string;
  fileName: string;
  knowledge: string;
  label?: string;
  box?: { left: number; top: number; width: number; height: number };
  ratio?: "wide" | "photo";
  initial: ReviewDecision;
  decidedNote?: string;
};

export const REVIEW_ITEMS: ReviewItem[] = [
  {
    id: "exit",
    place: "西側非常口",
    spot: "非常口前の備品",
    file: "/img/c1.png",
    fileName: "c1.png",
    knowledge: "K-F4",
    ratio: "photo",
    initial: "needed",
    decidedNote: "対応が必要（2026/09/09 高木）"
  },
  {
    id: "van",
    place: "東側搬入口",
    spot: "白バン",
    file: "/img/b1.png",
    fileName: "b1.png",
    knowledge: "K-D3",
    label: "車両 白バン",
    initial: "pending",
    box: { left: 24, top: 37, width: 28, height: 34 }
  },
  {
    id: "gen",
    place: "機械室",
    spot: "発電機の点検票",
    file: "/img/c3.png",
    fileName: "c3.png",
    knowledge: "K-G3",
    ratio: "photo",
    initial: "pending"
  }
];

export const QA = {
  fallback: "このデモでは、開館できる場所と、翠嶺市総合体育館の記録だけを固定の文で返しています。",
  chips: [
    {
      id: "q1",
      q: "今日、開館できる場所はどこですか",
      a: "使える場所は 10。条件付き 4 と、確認できていない 2 は入れていません。\n\n使える側の先頭は、アリーナ（Z01、点検 2026/09/08）、サブアリーナ（Z16）、北側入口（Z03）です。\n\n棟の総合は条件付きです。搬入口の車両、非常口前の備品、発電機の期限切れ（2026/08/28）、消火器の位置が理由です。使えないのは外壁（通路側）と西側通用口です。理由は平常時の外壁と扉の記録です。\n\n決めるのは人です。この回答は 2026/09/12 14:52 のモックです。"
    },
    {
      id: "q2",
      q: "アリーナは開けますか",
      a: "アリーナは使えます。棟の総合は条件付きです。使えない、ではありません。\n\nアリーナの床とゴールは 2026/09/08 の記録があります。開館を止める指摘はアリーナにありません。\n\n棟として条件が残っているのは3つです。東側搬入口を白バンがふさいでいること（14:08、CAM-総合-E01）。西側非常口の前に備品があること（2026/09/09 に高木が対応が必要と入力。14:36 の静止画は同じ場所）。非常用発電機の点検期限が 2026/08/28 で切れていること。\n\n夜間の電源は確認できていません。白天に開館するなら、車両と備品を先にどかしてください。夜間の代替はサブアリーナです。"
    },
    {
      id: "q3",
      q: "確認できていない場所はなぜ残していますか",
      a: "屋上と空調には、消防・発電機・受水槽・外壁・扉の記録がありません。台帳に場所の名前があっても、開館の判定には使っていません。記録がない場所を、画面が埋めないためです。"
    }
  ]
} as const;

export const OPENING_DOC = [
  { key: "title", label: "文書名", value: "開館前チェック（下書き）", pair: "" },
  { key: "city", label: "市", value: "翠嶺市", pair: "" },
  { key: "when", label: "日時", value: "2026/09/12 14:52", pair: "" },
  { key: "place", label: "施設", value: "翠嶺市総合体育館", pair: "" },
  { key: "judge", label: "判定", value: "条件付きで使える（棟）。アリーナは使える", pair: "" },
  { key: "cond", label: "いまの条件", value: "東側搬入口の車両をどかす。西側非常口前の備品をどかす。夜間電源は未確認", pair: "" },
  { key: "g1", label: "根拠1", value: "2026/03/18 点検記録。発電機 次回 2026/08/28。K-G3", pair: "gen" },
  { key: "g2", label: "根拠2", value: "2026/09/09 画像確認。非常口前の備品。対応が必要。高木（総務）。K-F4", pair: "exit" },
  { key: "g3", label: "根拠3", value: "2026/09/12 14:08 抽出静止画。CAM-総合-E01。車両 白バン", pair: "van" },
  { key: "who", label: "確認者", value: "未確定。岡田が押すまで空欄", pair: "" },
  { key: "note", label: "注記", value: "モック。開館の決定ではない", pair: "" }
] as const;

export const LEDGER_DOC = [
  { key: "title", label: "文書名", value: "設備点検記録簿（抜粋）", pair: "" },
  { key: "place", label: "施設", value: "翠嶺市総合体育館", pair: "" },
  { key: "when", label: "記録日", value: "2026/03/18", pair: "" },
  { key: "who", label: "記録者", value: "高木（総務）。現場確認は岡田", pair: "" },
  { key: "fire", label: "消防設備", value: "非常口前の備品あり。2026/09/09 追加。K-F4。消火器の位置は Z07、今月", pair: "exit" },
  { key: "gen", label: "非常用発電機", value: "業者紙をファイル。次回点検 2026/08/28。K-G3", pair: "gen" },
  { key: "tank", label: "受水槽", value: "2026/09/01、水位は下限を超えていた。断水の記録なし", pair: "" },
  { key: "wall", label: "外壁", value: "通路側に剥離。2026/06/12。Z08。アリーナの判定には使っていない", pair: "" },
  { key: "door", label: "扉", value: "西側通用口が閉まり切らない。2026/07/22。Z18。搬入口は 2026/09/12 の静止画", pair: "van" }
] as const;

export const DOC_MAP = [
  { id: "gen", left: "発電機 次回 2026/08/28", right: "夜間電源は未確認" },
  { id: "exit", left: "非常口前の備品、対応が必要", right: "西側非常口前の備品をどかす" },
  { id: "van", left: "（当日の静止画。記録簿の追記候補）", right: "東側搬入口の車両" }
] as const;

export const INTEGRATIONS = [
  { name: "棟の台帳", status: "connected" as const, note: "場所と設備 18" },
  { name: "設備台帳", status: "connected" as const, note: "種別と業者" },
  { name: "消防設備の点検紙", status: "connected" as const, note: "期限と位置の指摘" },
  { name: "点検記録の転記", status: "connected" as const, note: "高木と岡田がファイルした日付" },
  { name: "受水槽・給水", status: "connected" as const, note: "水位。断水の有無" },
  { name: "非常用発電機", status: "checking" as const, note: "業者紙はある。試験の値が項目としてそろっていない" },
  { name: "固定カメラの静止画", status: "checking" as const, note: "外周3台だけ抽出できている。屋内は未接続" },
  { name: "外壁・躯体", status: "unlinked" as const, note: "紙のまま。Z08 と Z18 は手入力の記録だけ" }
];

export function dueLabel(due: DueKind): string {
  if (due === "overdue") return "期限切れ";
  if (due === "thisMonth") return "今月";
  if (due === "recorded") return "記録済み";
  return "記録なし";
}

export function judgmentLabel(j: Judgment): string {
  if (j === "usable") return "使える";
  if (j === "conditional") return "条件付きで使える";
  if (j === "unusable") return "使えない";
  return "確認できていない";
}

export function pinColor(j: Judgment): string {
  if (j === "usable") return "#1f7a4d";
  if (j === "conditional") return "#c47b12";
  if (j === "unusable") return "#b42318";
  return "#8b93a0";
}
