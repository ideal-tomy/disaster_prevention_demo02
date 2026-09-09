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
    vendor: "指定管理者",
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
    vendor: "指定管理者",
    due: "thisMonth",
    judgment: "conditional",
    reason: "白いバンが搬入口の通行を妨げています",
    path: "翠嶺市総合体育館 › 動線 › 東側搬入口",
    knowledge: "K-D3",
    recordDate: "2026/09/12",
    confirmer: "—",
    photo: "img/b1.png",
    click: "incident",
    basis: "白いバンが搬入口の通行を妨げています（当日のカメラ画像）"
  },
  {
    id: "Z03",
    name: "北側入口",
    kind: "動線",
    vendor: "指定管理者",
    due: "recorded",
    judgment: "usable",
    reason: "扉の点検：2026/09/05。当日は入口前に人がいますが、扉は閉まっています",
    path: "翠嶺市総合体育館 › 動線 › 北側入口",
    knowledge: "K-D1",
    recordDate: "2026/09/05",
    confirmer: "—",
    photo: "img/b2.png",
    click: "incident",
    basis: "扉の点検：2026/09/05。当日は入口前に人がいますが、扉は閉まっています"
  },
  {
    id: "Z04",
    name: "西側非常口",
    kind: "動線",
    vendor: "指定管理者",
    due: "overdue",
    judgment: "conditional",
    reason: "非常口前に備品があります。2026/09/09に高木が「対応が必要」と記録",
    path: "翠嶺市総合体育館 › 動線 › 西側非常口",
    knowledge: "K-F4",
    recordDate: "2026/09/09",
    confirmer: "高木（総務）",
    photo: "img/c1.png",
    click: "incident",
    basis: "非常口前に備品があります。2026/09/09に高木が「対応が必要」と記録"
  },
  {
    id: "Z05",
    name: "機械室",
    kind: "電源",
    vendor: "嶺北電設",
    due: "overdue",
    judgment: "conditional",
    reason: "発電機の点検期限を超過（2026/08/28）",
    path: "翠嶺市総合体育館 › 電源 › 機械室",
    knowledge: "K-G3",
    recordDate: "2026/03/18",
    confirmer: "高木（総務）",
    photo: "img/c3.png",
    click: "incident",
    basis: "非常用発電機の点検期限を超過（2026/08/28）"
  },
  {
    id: "Z06",
    name: "受水槽",
    kind: "給水",
    vendor: "市の水道担当",
    due: "recorded",
    judgment: "usable",
    reason: "2026/09/01に水位が下限値を上回っていることを確認",
    path: "翠嶺市総合体育館 › 給水 › 受水槽",
    knowledge: "K-W1",
    recordDate: "2026/09/01",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/01に水位が下限値を上回っていることを確認"
  },
  {
    id: "Z07",
    name: "消火設備",
    kind: "消防",
    vendor: "翠嶺防災",
    due: "thisMonth",
    judgment: "conditional",
    reason: "消火器が所定の位置から通路側に移動しています。記録上の期限：2026/09/30",
    path: "翠嶺市総合体育館 › 消防 › 消火設備",
    knowledge: "K-F2",
    recordDate: "—",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "消火器が所定の位置から通路側に移動しています。記録上の期限：2026/09/30"
  },
  {
    id: "Z08",
    name: "外壁（通路側）",
    kind: "躯体",
    vendor: "市の営繕担当",
    due: "overdue",
    judgment: "unusable",
    reason: "通路側の外壁に剥がれを記録（2026/06/12）",
    path: "翠嶺市総合体育館 › 躯体 › 外壁（通路側）",
    knowledge: "K-E3",
    recordDate: "2026/06/12",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "通路側の外壁に剥がれを記録（2026/06/12）。周辺の通行について確認が必要です"
  },
  {
    id: "Z09",
    name: "更衣室",
    kind: "衛生",
    vendor: "指定管理者",
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
    vendor: "指定管理者",
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
    vendor: "指定管理者",
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
    reason: "点検記録が登録されていません",
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
    reason: "2026/09/10 ランプ交換。定期点検の期限は今月です",
    path: "翠嶺市総合体育館 › 電気 › 照明",
    knowledge: "—",
    recordDate: "2026/09/10",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/10 ランプ交換。定期点検の期限は今月です"
  },
  {
    id: "Z14",
    name: "空調設備",
    kind: "空調",
    vendor: "—",
    due: "none",
    judgment: "unknown",
    reason: "点検記録が登録されていません",
    path: "翠嶺市総合体育館 › 空調 › 空調設備",
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
    vendor: "指定管理者",
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
    vendor: "指定管理者",
    due: "recorded",
    judgment: "usable",
    reason: "2026/09/08 点検済み。夜間の利用には電源の確認が必要です",
    path: "翠嶺市総合体育館 › 競技場 › サブアリーナ",
    knowledge: "—",
    recordDate: "2026/09/08",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "2026/09/08 点検済み。夜間の利用には電源の確認が必要です"
  },
  {
    id: "Z17",
    name: "前庭",
    kind: "外構",
    vendor: "指定管理者",
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
    vendor: "市の営繕担当",
    due: "overdue",
    judgment: "unusable",
    reason: "西側通用口の扉が完全に閉まらないことを記録（2026/07/22）",
    path: "翠嶺市総合体育館 › 動線 › 西側通用口",
    knowledge: "K-D2",
    recordDate: "2026/07/22",
    confirmer: "—",
    photo: "—",
    click: "drawer",
    basis: "西側通用口の扉が完全に閉まらないことを記録（2026/07/22）"
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
  { id: "Z14", name: "空調設備", left: 64, top: 8, judgment: "unknown", dashed: true, href: "/console/facilities?view=upkeep&zone=Z14" },
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
  headline: "搬入口の車両と、発電機の点検期限超過への対応が必要です",
  confidence: 81,
  confidenceNote: "画像と点検記録が同じ体育館に関する情報であることを示します。開館可否の確率ではありません。",
  conclusion: "東側搬入口では車両が通行を妨げ、西側非常口の前には備品があります。発電機は点検期限（2026/08/28）を過ぎており、夜間の電源を確認できていません。アリーナ単体は記録上、利用可能と判定されています。体育館全体の開館前には、車両・備品の移動と消火器の設置位置を確認してください。日中・夜間とも、開館の可否は担当者が判断します。サブアリーナの夜間利用には、別途電源の確認が必要です。",
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
      label: "車両：白いバン",
      caption: "白いバンが搬入口の通行を妨げています",
      note: "運転者の特定やナンバーの読み取りは行っていません",
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
      label: "入口前に8人",
      caption: "北側入口の前に8人います",
      note: "個人の特定は行っていません。開館前に入口へ人が集まっています。",
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
      note: "2026/09/09に「対応が必要」と記録された場所です",
      box: { left: 24, top: 53, width: 27, height: 27 }
    }
  ],
  records: [
    { id: "gen", pinId: "Z05", text: "2026/03/18に高木が発電機の点検報告書を保管。点検期限（2026/08/28）を超過。参照：K-G3" },
    { id: "exit", pinId: "Z04", text: "2026/09/09に高木が非常口前の備品の画像を確認し、「対応が必要」と記録。参照：K-F4" }
  ],
  actions: [
    "予約台帳の利用予定と、北側入口前の人数を確認する（予約台帳は未連携）",
    "搬入予定を確認し、東側搬入口の車両を移動できるか確認する",
    "非常口前の備品を、通行を妨げない場所に移動する（2026/09/09の指摘への対応は未完了）",
    "発電機の点検報告書を確認する。サブアリーナ（Z16）を夜間に利用できるか、電源を含めて確認する"
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
    decidedNote: "対応が必要／画像確認者：高木（2026/09/09）"
  },
  {
    id: "van",
    place: "東側搬入口",
    spot: "白いバン",
    file: "/img/b1.png",
    fileName: "b1.png",
    knowledge: "K-D3",
    label: "車両：白いバン",
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
  "fallback": "この質問には対応していません。下の3つの質問から選んでください。このデモでは、あらかじめ用意した回答を表示します。",
  "chips": [
    {
      "id": "q1",
      "q": "今日、利用できる場所・設備はどれですか",
      "href": "/console/facilities?view=open",
      "a": "記録上、利用可能と判定された場所・設備は10件です。条件の確認が必要な4件、利用不可の2件、利用可否が未確認の2件は含みません。\n\n利用可能な場所には、アリーナ（Z01、点検：2026/09/08）、サブアリーナ（Z16）、北側入口（Z03）などがあります。\n\n体育館全体では、搬入口の車両、非常口前の備品、発電機の点検期限超過（2026/08/28）、消火器の設置位置の4項目について確認・対応が必要です。外壁（通路側）と西側通用口は、外壁の剥がれと扉が完全に閉まらない記録に基づき、利用不可とされています。\n\n個別の利用判定は、体育館全体の開館承認を意味しません。開館の可否は、担当者が現地の状況と記録を確認して判断します。2026/09/12 14:52時点を想定したデモ用の回答です。"
    },
    {
      "id": "q2",
      "q": "アリーナは利用できますか",
      "href": "/console/incident",
      "a": "アリーナ単体は、登録済みの点検記録に基づき利用可能と判定されています。床とゴールの点検記録は2026/09/08のもので、表示中の記録には利用を妨げる指摘はありません。\n\n体育館全体には、開館前に確認・対応が必要な条件が4項目残っています。\n・東側搬入口の車両が通行を妨げている（14:08のカメラ画像）。\n・西側非常口前に備品がある（2026/09/09に高木が「対応が必要」と記録。14:36の画像も同じ場所）。\n・非常用発電機の点検期限（2026/08/28）を過ぎている。\n・消火器が所定の位置から通路側に移動している。\n\n開館前に車両・備品の移動と消火器の設置位置を確認してください。夜間の電源は未確認です。サブアリーナの夜間利用についても、電源を別途確認する必要があります。開館の可否は担当者が判断します。"
    },
    {
      "id": "q3",
      "q": "屋上と空調設備が未確認なのはなぜですか",
      "href": "/console/facilities?view=open",
      "a": "屋上と空調設備は、利用可否を判断するための点検記録が登録されていません。\n\n台帳への登録だけでは、利用できるか判断できません。点検記録を確認できるまで、利用可否が未確認の項目として表示します。"
    }
  ]
} as const;

export const OPENING_DOC = [
  {
    "key": "title",
    "label": "文書名",
    "value": "開館前確認票（下書き）",
    "pair": ""
  },
  {
    "key": "city",
    "label": "市",
    "value": "翠嶺市",
    "pair": ""
  },
  {
    "key": "when",
    "label": "情報の基準日時",
    "value": "2026/09/12 14:52",
    "pair": ""
  },
  {
    "key": "place",
    "label": "施設",
    "value": "翠嶺市総合体育館",
    "pair": ""
  },
  {
    "key": "judge",
    "label": "記録上の利用判定",
    "value": "体育館全体：条件の確認が必要。アリーナ単体：利用可能",
    "pair": ""
  },
  {
    "key": "cond",
    "label": "開館前の確認・対応事項",
    "value": "東側搬入口の車両と西側非常口前の備品の移動、消火器の設置位置を確認。夜間の電源は未確認",
    "pair": ""
  },
  {
    "key": "g1",
    "label": "発電機の点検記録",
    "value": "点検報告書の保管日：2026/03/18。次回点検期限：2026/08/28。参照：K-G3",
    "pair": "gen"
  },
  {
    "key": "g2",
    "label": "非常口の確認記録",
    "value": "2026/09/09に高木（総務）が画像を確認し、非常口前の備品について「対応が必要」と記録。参照：K-F4",
    "pair": "exit"
  },
  {
    "key": "g3",
    "label": "搬入口のカメラ画像",
    "value": "撮影：2026/09/12 14:08。CAM-総合-E01。白いバンが通行を妨げています",
    "pair": "van"
  },
  {
    "key": "who",
    "label": "搬入口画像の確認者",
    "value": "未確認",
    "pair": ""
  },
  {
    "key": "note",
    "label": "注記",
    "value": "デモ用の下書きです。画像の確認結果は、開館を承認した記録ではありません。",
    "pair": ""
  }
] as const;

export const LEDGER_DOC = [
  {
    "key": "title",
    "label": "文書名",
    "value": "設備点検記録簿（抜粋）",
    "pair": ""
  },
  {
    "key": "place",
    "label": "施設",
    "value": "翠嶺市総合体育館",
    "pair": ""
  },
  {
    "key": "when",
    "label": "発電機資料の保管日",
    "value": "2026/03/18",
    "pair": ""
  },
  {
    "key": "who",
    "label": "記録・確認担当",
    "value": "記録者：高木（総務）。現地確認担当：岡田（指定管理者）",
    "pair": ""
  },
  {
    "key": "fire",
    "label": "消防設備",
    "value": "非常口前に備品あり（2026/09/09追記、K-F4）。消火設備（Z07）は消火器の設置位置の確認が必要。記録上の期限：2026/09/30",
    "pair": "exit"
  },
  {
    "key": "gen",
    "label": "非常用発電機",
    "value": "点検業者の報告書を保管。次回点検期限：2026/08/28。参照：K-G3",
    "pair": "gen"
  },
  {
    "key": "tank",
    "label": "受水槽",
    "value": "2026/09/01に水位が下限値を上回っていることを確認。断水の記録なし",
    "pair": ""
  },
  {
    "key": "wall",
    "label": "外壁",
    "value": "通路側に剥がれを記録（2026/06/12、Z08）。外壁周辺とアリーナは別項目で判定。開館前に周辺の通行を確認",
    "pair": ""
  },
  {
    "key": "door",
    "label": "扉",
    "value": "西側通用口の扉が完全に閉まらないことを記録（2026/07/22、Z18）。搬入口の状況は2026/09/12のカメラ画像を参照",
    "pair": "van"
  }
] as const;

export const DOC_MAP = [
  {
    "id": "gen",
    "left": "発電機の点検期限：2026/08/28",
    "right": "夜間の電源を確認する"
  },
  {
    "id": "exit",
    "left": "非常口前の備品：「対応が必要」と記録",
    "right": "西側非常口前の備品を、通行を妨げない場所へ移動する"
  },
  {
    "id": "van",
    "left": "当日の搬入口のカメラ画像（点検記録簿には未転記）",
    "right": "東側搬入口の車両の移動を確認する"
  }
] as const;

export const INTEGRATIONS = [
  {
    "name": "施設内の場所・設備台帳",
    "status": "connected",
    "note": "管理対象：18件（場所・設備）"
  },
  {
    "name": "設備台帳",
    "status": "connected",
    "note": "設備の種類・管理や点検の担当"
  },
  {
    "name": "消防設備の点検記録",
    "status": "connected",
    "note": "記録上の期限・消火器の設置位置に関する指摘"
  },
  {
    "name": "点検資料の管理情報",
    "status": "connected",
    "note": "資料の保管日・担当者"
  },
  {
    "name": "受水槽・給水",
    "status": "connected",
    "note": "受水槽の水位・断水の記録"
  },
  {
    "name": "非常用発電機の点検記録",
    "status": "checking",
    "note": "点検業者の報告書はありますが、試験結果の登録内容を確認する必要があります"
  },
  {
    "name": "カメラ画像",
    "status": "checking",
    "note": "建物外周のカメラ3台から画像を取得。館内カメラは未連携"
  },
  {
    "name": "外壁・通用口の点検資料",
    "status": "unlinked",
    "note": "資料は紙で保管。外壁（Z08）と西側通用口（Z18）は手入力の記録があります"
  }
] as const;

export type EventKind = "点検" | "不具合" | "修繕" | "画像確認" | "期限";

export const FACILITY = {
  id: "F01",
  name: "翠嶺市総合体育館",
  place: "翠嶺市",
  designation: "指定避難所",
  built: "1998年3月",
  area: "6,420㎡",
  capacity: "720",
  structure: "鉄骨造 一部鉄筋コンクリート造",
  use: "体育館（アリーナ、サブアリーナ、会議室、更衣室）",
  laws: "建築基準法12条（特定建築物・建築設備・防火設備）／消防法17条の3の3／電気事業法（自家用電気工作物）",
  records: "5 / 8"
} as const;

export type Equipment = {
  id: string;
  zoneId: string;
  name: string;
  record: "connected" | "checking" | "unlinked";
  next: string;
};

export const EQUIPMENT: Equipment[] = [
  { id: "K-G3", zoneId: "Z05", name: "非常用発電機", record: "checking", next: "2026/08/28" },
  { id: "K-W1", zoneId: "Z06", name: "受水槽", record: "connected", next: "—" },
  { id: "K-E3", zoneId: "Z08", name: "外壁（通路側）", record: "unlinked", next: "—" },
  { id: "K-F4", zoneId: "Z04", name: "非常口の通行", record: "connected", next: "—" },
  { id: "K-D3", zoneId: "Z02", name: "搬入口の通行", record: "checking", next: "—" }
];

export type FacilityEvent = {
  id: string;
  equipId: string;
  date: string;
  kind: EventKind;
  body: string;
  by: string;
  image?: string;
  href?: string;
  ref?: string;
};

export const EVENTS: FacilityEvent[] = [
  {
    id: "g3-file",
    equipId: "K-G3",
    date: "2026/03/18",
    kind: "点検",
    body: "点検業者の報告書を高木（総務）が保管。次回の記録上の期限は 2026/08/28",
    by: "高木（総務）"
  },
  {
    id: "g3-due",
    equipId: "K-G3",
    date: "2026/08/28",
    kind: "期限",
    body: "次回の記録上の期限。実施の記録なし",
    by: "—"
  },
  {
    id: "g3-photo",
    equipId: "K-G3",
    date: "2026/09/12",
    kind: "画像確認",
    body: "機械室の写真。点検票が貼られたまま",
    by: "未入力",
    image: "/img/c3.png",
    href: "/console/review",
    ref: "INC-20260912-007"
  },
  {
    id: "w1-a",
    equipId: "K-W1",
    date: "2025/07/04",
    kind: "点検",
    body: "水質検査。異常なし",
    by: "市の水道担当"
  },
  {
    id: "w1-b",
    equipId: "K-W1",
    date: "2026/01/05",
    kind: "点検",
    body: "水質検査。異常なし",
    by: "市の水道担当"
  },
  {
    id: "w1-c",
    equipId: "K-W1",
    date: "2026/09/01",
    kind: "点検",
    body: "水位が下限値を上回っていることを確認",
    by: "市の水道担当"
  },
  {
    id: "e3-a",
    equipId: "K-E3",
    date: "2026/06/12",
    kind: "不具合",
    body: "通路側の外壁に剥がれを記録。資料は紙で保管。手入力の記録がある",
    by: "市の営繕担当"
  },
  {
    id: "f4-a",
    equipId: "K-F4",
    date: "2026/09/09",
    kind: "画像確認",
    body: "非常口前の備品。高木（総務）が「対応が必要」と記録",
    by: "高木（総務）",
    image: "/img/c1.png",
    href: "/console/review",
    ref: "INC-20260912-007"
  },
  {
    id: "d3-a",
    equipId: "K-D3",
    date: "2026/09/12",
    kind: "画像確認",
    body: "白いバンが搬入口の通行を妨げています",
    by: "未入力",
    image: "/img/b1.png",
    href: "/console/review",
    ref: "INC-20260912-007"
  }
];

export function eventsFor(equipId: string) {
  return EVENTS.filter((row) => row.equipId === equipId).slice().sort((a, b) => a.date.localeCompare(b.date));
}

export function equipmentForZone(zoneId: string) {
  return EQUIPMENT.filter((row) => row.zoneId === zoneId);
}

export const EMPTY_ZONE_NOTE: Record<string, string> = {
  Z12: "この場所の点検記録は登録されていません。",
  Z14: "この場所の点検記録は登録されていません。"
};

export function dueLabel(due: DueKind): string {
  if (due === "overdue") return "期限超過";
  if (due === "thisMonth") return "今月が期限";
  if (due === "recorded") return "記録あり";
  return "記録なし";
}

export function judgmentLabel(j: Judgment): string {
  if (j === "usable") return "利用可能";
  if (j === "conditional") return "条件の確認が必要";
  if (j === "unusable") return "利用不可";
  return "利用可否が未確認";
}

export function pinColor(j: Judgment): string {
  if (j === "usable") return "#1f7a4d";
  if (j === "conditional") return "#c47b12";
  if (j === "unusable") return "#b42318";
  return "#8b93a0";
}

export function knowledgeLabel(id: string): string {
  const labels: Record<string, string> = { "K-D1": "出入口の開閉", "K-D2": "扉の閉鎖・施錠", "K-D3": "搬入口の通行", "K-F2": "消火器の設置位置", "K-F4": "非常口の通行", "K-G3": "発電機の点検期限", "K-W1": "受水槽の点検", "K-E3": "外壁の剥がれ" };
  return labels[id] ? `${labels[id]}（${id}）` : id;
}
