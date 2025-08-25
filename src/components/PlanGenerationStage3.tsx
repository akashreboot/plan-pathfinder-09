import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, MoreHorizontal } from "lucide-react";

interface PlanGenerationStage3Props {
  onStartPlan: () => void;
}

const PlanGenerationStage3 = ({ onStartPlan }: PlanGenerationStage3Props) => {
  const weeklyGoals = [
    {
      week: 1,
      title: "Financial Clarity",
      description: "Track all expenses, create budget, identify saving opportunities.",
      icon: "💰"
    },
    {
      week: 2, 
      title: "Optimize & Save",
      description: "Cut unnecessary expenses. Set up automatic savings.",
      icon: "📊"
    },
    {
      week: 3,
      title: "Growth Strategy", 
      description: "Research investments. Create income increase plan.",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-plan-teal flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <button className="p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plan-text">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <h1 className="text-lg font-medium text-plan-text">
          Your Personalized Plan
        </h1>
        <div className="w-10" />
      </div>

      {/* Subtitle */}
      <div className="px-6 pb-6">
        <p className="text-plan-muted text-sm text-center">
          Lumi made a step-by-step guide to help you achieve your goals.
        </p>
      </div>

      {/* Weekly Goals */}
      <div className="flex-1 px-4 space-y-3">
        {weeklyGoals.map((goal) => (
          <Card key={goal.week} className="bg-plan-card p-4 shadow-sm border-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className="text-2xl">
                  {goal.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-plan-text text-base">
                    Week {goal.week}: {goal.title}
                  </h3>
                  <p className="text-plan-muted text-sm mt-1">
                    {goal.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plan-text">
                    <path d="m18 15-6-6-6 6"/>
                  </svg>
                </button>
                <button className="p-1">
                  <MoreHorizontal className="w-4 h-4 text-plan-text" />
                </button>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="text-sm text-plan-text underline">
                  Edit
                </button>
              </div>
              <div className="text-xs text-plan-muted">
                Mark Complete
              </div>
            </div>
          </Card>
        ))}

        {/* Add Your Own Step */}
        <Card className="bg-plan-card border-0 shadow-sm">
          <button className="w-full p-4 flex items-center justify-center space-x-2 text-plan-text">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Add Your Own Step</span>
          </button>
        </Card>

        {/* Make More Changes */}
        <Card className="bg-plan-card border-0 shadow-sm">
          <button className="w-full p-4 flex items-center justify-center space-x-2 text-plan-text">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Make More changes</span>
          </button>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="p-6 space-y-4">
        <Button 
          onClick={onStartPlan}
          variant="plan-primary"
          className="w-full py-6 rounded-xl text-base font-medium"
        >
          Looks Great- Start Plan
        </Button>
        
        <p className="text-xs text-plan-muted text-center">
          You can always revisit and adjust this plan later in your Dashboard.
        </p>
      </div>
    </div>
  );
};

export default PlanGenerationStage3;