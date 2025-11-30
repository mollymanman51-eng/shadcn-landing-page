import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { DEFAULT_TONE_LEVEL, tonePresets } from '@/lib/tone';

interface ArgumentFormProps {
  inputText: string;
  setInputText: (text: string) => void;
  toneLevel: number[];
  setToneLevel: (level: number[]) => void;
  isLoading: boolean;
  error: string;
  onGenerate: () => void;
}

export const ArgumentForm = ({
  inputText,
  setInputText,
  toneLevel,
  setToneLevel,
  isLoading,
  error,
  onGenerate,
}: ArgumentFormProps) => {
  const currentLevel = toneLevel[0];
  const tonePreset = tonePresets[currentLevel] ?? tonePresets[DEFAULT_TONE_LEVEL];
  const toneLabel = tonePreset.label;
  const inputError = error.startsWith('请先输入');

  return (
    <Card id="generate-section" className="shadow-2xl border border-white/70 bg-white/85 backdrop-blur relative z-10">
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2 text-left">
          <label className="text-sm font-medium text-slate-700">
            对方说了什么？ (Conflict Content)
          </label>
          <Textarea
            placeholder="粘贴对方说的话，或者描述当下的情况..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isLoading}
            className="min-h-[140px] resize-none bg-white/80 border-secondary shadow-sm focus-visible:ring-primary placeholder:text-slate-400 disabled:opacity-70"
          />
          {inputError && (
            <p className="text-sm text-rose-500">{error}</p>
          )}
        </div>

        <div className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">
              回怼风格 (Response Tone)
            </label>
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {toneLabel}
            </span>
          </div>
          
          {/* Custom Slider Implementation since we might miss the component */}
          <div className="relative w-full h-6 flex items-center">
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={currentLevel}
              onChange={(e) => setToneLevel([parseInt(e.target.value)])}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
          
          <div className="flex justify-between text-xs text-slate-500 px-1">
            <span>温柔 (Gentle)</span>
            <span>发疯 (Crazy)</span>
          </div>
        </div>

        <Button
          onClick={onGenerate}
          disabled={isLoading || !inputText.trim()}
          className="w-full h-12 text-base font-bold bg-gradient-to-r from-primary/90 to-primary text-white shadow-lg hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          size="lg"
        >
          {isLoading ? '正在生成中...' : '生成神回怼 (Generate Response)'}
        </Button>
      </CardContent>
    </Card>
  );
};

