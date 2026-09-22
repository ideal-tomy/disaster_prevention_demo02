export type Camera = readonly [number, number, number];
export type DeviceId = "dash" | "karte" | "review";

export const scenes: {
  title: string;
  caption: string;
  duration: number;
  camera: Camera;
  stars: readonly DeviceId[];
}[] = [
  {
    title: "状況を見る",
    caption: "今日の利用可否と、要対応が並びます。",
    duration: 5500,
    camera: [264, 175, 1.02],
    stars: ["dash"],
  },
  {
    title: "一覧へ",
    caption: "場所と設備の一覧へ進みます。",
    duration: 4500,
    camera: [516, 175, 0.9],
    stars: ["dash", "karte"],
  },
  {
    title: "記録の線",
    caption: "発電機の記録の線を開きます。",
    duration: 6000,
    camera: [768, 175, 1.0],
    stars: ["karte"],
  },
  {
    title: "画像確認へ",
    caption: "画像で、対応の要否を残します。",
    duration: 4500,
    camera: [1020, 175, 0.9],
    stars: ["karte", "review"],
  },
  {
    title: "判定待ち",
    caption: "判定待ちの写真が並びます。",
    duration: 5500,
    camera: [1272, 175, 1.0],
    stars: ["review"],
  },
  {
    title: "人が残す",
    caption: "対応が必要、と記録します。送信はしません。",
    duration: 5500,
    camera: [1272, 175, 0.98],
    stars: ["review"],
  },
];

export const totalDuration = scenes.reduce((sum, scene) => sum + scene.duration, 0);

export function storyFrame(time: number) {
  let elapsed = ((time % totalDuration) + totalDuration) % totalDuration;
  let index = 0;
  while (index < scenes.length - 1 && elapsed >= scenes[index].duration) {
    elapsed -= scenes[index++].duration;
  }
  const previous = scenes[index === 0 ? 0 : index - 1];
  const next = scenes[index];
  const t = Math.min(1, elapsed / 1200);
  const ease = t * t * (3 - 2 * t);
  const camera = next.camera.map(
    (value, i) => previous.camera[i] + (value - previous.camera[i]) * ease
  ) as unknown as Camera;
  return { index, elapsed, camera, stars: next.stars, previousStars: previous.stars, ease };
}
