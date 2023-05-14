import Emotion_1 from "../../assets/emoticon/1_Fun.webp";
import Emotion_2 from "../../assets/emoticon/2_Smile.webp";
import Emotion_3 from "../../assets/emoticon/3_Calm.webp";
import Emotion_4 from "../../assets/emoticon/4_Sad.webp";
import Emotion_5 from "../../assets/emoticon/5_Angry.webp";
import Emotion_6 from "../../assets/emoticon/6_Cry.webp";
import Emotion_7 from "../../assets/emoticon/7_none.webp";

export type EmotionTypes =
  | "EMOTION_1"
  | "EMOTION_2"
  | "EMOTION_3"
  | "EMOTION_4"
  | "EMOTION_5"
  | "EMOTION_6"
  | "EMOTION_7";

export const getEmotionIcon = (emotion: string): string | undefined => {
  const emotionIcons = new Map([
    ["EMOTION_1", `${Emotion_1}`],
    ["EMOTION_2", `${Emotion_2}`],
    ["EMOTION_3", `${Emotion_3}`],
    ["EMOTION_4", `${Emotion_4}`],
    ["EMOTION_5", `${Emotion_5}`],
    ["EMOTION_6", `${Emotion_6}`],
    ["EMOTION_7", `${Emotion_7}`],
  ]);

  return emotionIcons.get(emotion);
};
