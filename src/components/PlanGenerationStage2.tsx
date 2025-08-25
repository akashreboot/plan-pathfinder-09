import { Button } from "@/components/ui/button";
import mascotImage from "@/assets/mascot.png";

interface PlanGenerationStage2Props {
  onViewPlan: () => void;
}

const PlanGenerationStage2 = ({ onViewPlan }: PlanGenerationStage2Props) => {
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

        {/* Completed Progress Items */}
        <div className="w-full max-w-sm space-y-4 mb-12">
          {[
            "Analyzing your goals and focus areas",
            "Matching with your emotional vision", 
            "Designing your First 3 weeks of action"
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plan-success">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
              <span className="text-base text-plan-success">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Sparkles and Ready State */}
        <div className="relative mb-8">
          {/* Sparkle decorations */}
          <div className="absolute -top-4 -left-4 text-yellow-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute -top-2 -right-6 text-yellow-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute -bottom-3 left-2 text-yellow-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-plan-text text-center">
            Your Plan is Ready!
          </h2>
        </div>

        <p className="text-sm text-plan-muted text-center mb-8 px-8">
          Personalized for "I want to focus on financial freedom"
        </p>

        {/* View Plan Button */}
        <Button 
          onClick={onViewPlan}
          variant="plan-primary"
          className="px-8 py-6 rounded-full text-base font-medium"
        >
          View my Plan
        </Button>

        {/* Bottom Text */}
        <p className="text-xs text-plan-muted text-center mt-8 px-8">
          AI uses your vision to craft actions that align with your life.
          You can always edit or change them later.
        </p>
      </div>
    </div>
  );
};

export default PlanGenerationStage2;