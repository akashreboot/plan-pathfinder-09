import { useState } from "react";
import PlanGenerationStage1 from "./PlanGenerationStage1";
import PlanGenerationStage2 from "./PlanGenerationStage2";
import PlanGenerationStage3 from "./PlanGenerationStage3";

type Stage = 1 | 2 | 3 | 'completed';

const PlanPathfinder = () => {
  const [currentStage, setCurrentStage] = useState<Stage>(1);

  const handleStage1Complete = () => {
    setCurrentStage(2);
  };

  const handleViewPlan = () => {
    setCurrentStage(3);
  };

  const handleStartPlan = () => {
    setCurrentStage('completed');
  };

  const renderCurrentStage = () => {
    switch (currentStage) {
      case 1:
        return <PlanGenerationStage1 onComplete={handleStage1Complete} />;
      case 2:
        return <PlanGenerationStage2 onViewPlan={handleViewPlan} />;
      case 3:
        return <PlanGenerationStage3 onStartPlan={handleStartPlan} />;
      case 'completed':
        return (
          <div className="min-h-screen bg-plan-teal flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-2xl font-semibold text-plan-text mb-4">
                🎉 Plan Started!
              </h1>
              <p className="text-plan-muted">
                Your personalized financial freedom journey has begun.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full">{renderCurrentStage()}</div>;
};

export default PlanPathfinder;