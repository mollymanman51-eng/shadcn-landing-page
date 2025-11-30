import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy } from 'lucide-react';

export interface Reply {
  content: string;
  context?: string;
}

interface ResponseDisplayProps {
  replies: Reply[];
  isLoading: boolean;
  error: string;
  onRetry: () => void;
  onCopy: () => void;
}

export const ResponseDisplay = ({
  replies,
  isLoading,
  error,
  onRetry,
  onCopy,
}: ResponseDisplayProps) => {
  const canShowResult = Boolean(replies.length || error || isLoading);

  if (!canShowResult) return null;

  return (
    <Card className="shadow-xl border border-white/70 bg-white/85 backdrop-blur mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader>
        <CardTitle className="text-xl text-slate-800">回怼选项 (Response Options)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {isLoading && (
            <div className="bg-gradient-to-br from-sky-50 to-white p-5 rounded-2xl text-slate-500 shadow-inner flex items-center justify-center min-h-[100px]">
              <span className="animate-pulse">正在酝酿神回怼... (Crafting the perfect response...)</span>
            </div>
          )}
          {!isLoading &&
            replies.map((reply, index) => (
              <div
                key={`${reply.content}-${index}`}
                className="rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm space-y-2 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {index + 1}
                  </span>
                  Suggested Reply
                </div>
                <p className="text-base font-medium text-slate-900 leading-relaxed whitespace-pre-wrap">
                  {reply.content}
                </p>
                {reply.context && (
                  <p className="text-sm text-slate-500">{reply.context}</p>
                )}
              </div>
            ))}
          {!isLoading && !replies.length && !error && (
            <div className="bg-gradient-to-br from-sky-50 to-white p-5 rounded-2xl text-slate-400 shadow-inner">
              结果将显示在这里...
            </div>
          )}
          {!isLoading && error && (
            <div className="bg-rose-50 text-rose-600 rounded-2xl p-4 border border-rose-100">
              {error}
            </div>
          )}
        </div>
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-slate-200 text-slate-700 hover:bg-slate-50"
            onClick={onRetry}
            disabled={isLoading}
          >
            重试 (Retry)
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-slate-200 text-slate-700 hover:bg-slate-50"
            onClick={onCopy}
            disabled={!replies.length}
          >
            <Copy className="h-4 w-4" />
            复制 (Copy)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

