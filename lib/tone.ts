export const DEFAULT_TONE_LEVEL = 2;

export interface TonePreset {
  label: string;
  value: string;
  description?: string;
}

export const tonePresets: Record<number, TonePreset> = {
  1: { label: '温柔 (Gentle)', value: 'gentle', description: '讲道理，以理服人' },
  2: { label: '严肃 (Firm)', value: 'firm', description: '不卑不亢，据理力争' },
  3: { label: '阴阳 (Sarcastic)', value: 'sarcastic', description: '阴阳怪气，暗藏杀机' },
  4: { label: '霸气 (Aggressive)', value: 'aggressive', description: '气场全开，正面回击' },
  5: { label: '发疯 (Crazy)', value: 'crazy', description: '精神攻击，不论死活' },
};

