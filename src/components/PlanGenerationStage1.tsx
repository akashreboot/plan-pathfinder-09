import { useState, useEffect } from "react";
import { CheckCircle, Circle } from "lucide-react";
import mascotImage from "@/assets/mascot.png";

interface PlanGenerationStage1Props {
  onComplete: () => void;
}

const PlanGenerationStage1 = ({ onComplete }: PlanGenerationStage1Props) => {
  const [completedItems, setCompletedItems] = useState<boolean[]>([false, false, false]);
  const [progress, setProgress] = useState(0);

  const progressItems = [
    "Analyzing your goals and focus areas",
    "Matching with your emotional vision", 
    "Designing your First 3 weeks of action"
  ];

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    // Complete first item after 1 second
    intervals.push(setTimeout(() => {
      setCompletedItems([true, false, false]);
      setProgress(33);
    }, 1000));

    // Complete second item after 2.5 seconds
    intervals.push(setTimeout(() => {
      setCompletedItems([true, true, false]);
      setProgress(66);
    }, 2500));

    // Complete third item after 4 seconds
    intervals.push(setTimeout(() => {
      setCompletedItems([true, true, true]);
      setProgress(100);
    }, 4000));

    // Move to next stage after 5 seconds
    intervals.push(setTimeout(() => {
      onComplete();
    }, 5000));

    return () => intervals.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-plan-teal flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center p-6">
        <button className="absolute left-6 p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plan-text">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Mascot */}
        <div className="w-24 h-24 bg-plan-card rounded-full flex items-center justify-center shadow-lg mb-8">
          <img 
            src={mascotImage} 
            alt="AI Mascot" 
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl font-medium text-plan-text mb-2">
          AI is working
        </h1>
        
        <p className="text-plan-muted text-sm mb-10">
          Crafting Your Personalized Plan...
        </p>

        {/* Progress Items */}
        <div className="w-full max-w-sm space-y-4 mb-12">
          {progressItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
                {completedItems[index] ? (
                  <CheckCircle className="w-5 h-5 text-plan-success" />
                ) : (
                  <Circle className="w-5 h-5 text-plan-muted" />
                )}
              </div>
              <span 
                className={`text-base ${
                  completedItems[index] 
                    ? 'text-plan-muted line-through' 
                    : 'text-plan-text'
                }`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Circular Progress */}
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${progress * 100.53 / 100} 100.53`}
              className="text-plan-success transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-semibold text-plan-text">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-plan-muted text-center mt-8 px-8">
          AI uses your vision to craft actions that align with your life.
          You can always edit or change them later.
        </p>
      </div>
    </div>
  );
};

export default PlanGenerationStage1;