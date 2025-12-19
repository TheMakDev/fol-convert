import { useState, useMemo } from 'react';
import { QuizQuestion, PASS_THRESHOLD } from '@/data/courseData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (passed: boolean, score: number, userName: string) => void;
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [userName, setUserName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Shuffle questions once when quiz starts
  const shuffledQuestions = useMemo(() => shuffleArray(questions), [questions, hasStarted]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const hasAnswered = selectedAnswers[currentQuestion?.id] !== undefined;
  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;

  const handleStartQuiz = () => {
    if (userName.trim()) {
      setHasStarted(true);
    }
  };

  const handleSelectAnswer = (answerIndex: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerIndex
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate score
      let correct = 0;
      shuffledQuestions.forEach(q => {
        if (selectedAnswers[q.id] === q.correctAnswer) {
          correct++;
        }
      });
      setScore(correct);
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    setHasStarted(false);
  };

  const percentage = Math.round((score / shuffledQuestions.length) * 100);
  const passed = percentage >= PASS_THRESHOLD * 100;

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-up">
        <div className={cn(
          "w-24 h-24 mx-auto rounded-full flex items-center justify-center",
          passed ? "bg-primary/10" : "bg-destructive/10"
        )}>
          {passed ? (
            <CheckCircle2 className="w-12 h-12 text-primary" />
          ) : (
            <XCircle className="w-12 h-12 text-destructive" />
          )}
        </div>

        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
            {passed ? "Congratulations!" : "Keep Learning!"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {passed
              ? "You have successfully completed the course!"
              : "You didn't pass this time, but don't give up!"}
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border/30">
          <div className="text-5xl font-bold text-foreground mb-2">
            {percentage}%
          </div>
          <p className="text-muted-foreground">
            {score} out of {questions.length} correct
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Passing score: {PASS_THRESHOLD * 100}%
          </p>
        </div>

        {passed ? (
          <Button variant="gold" size="lg" onClick={() => onComplete(true, percentage, userName)}>
            Get Your Certificate
          </Button>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Review the lessons and try again when you're ready.
            </p>
            <Button variant="outline" size="lg" onClick={handleRetry}>
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
          </div>
        )}
      </div>
    );
  }

  // Name input screen
  if (!hasStarted) {
    return (
      <div className="max-w-md mx-auto text-center space-y-8 animate-fade-up">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-10 h-10 text-primary" />
        </div>

        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            Before You Begin
          </h2>
          <p className="text-muted-foreground">
            Enter your name below. This will appear on your certificate if you pass.
          </p>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your full name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="text-center text-lg py-6"
            onKeyDown={(e) => e.key === 'Enter' && handleStartQuiz()}
          />
          <Button
            variant="gold"
            size="lg"
            onClick={handleStartQuiz}
            disabled={!userName.trim()}
            className="w-full"
          >
            Start Quiz
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          {shuffledQuestions.length} questions • {PASS_THRESHOLD * 100}% to pass
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-up">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</span>
          <span>{Math.round(((currentQuestionIndex) / shuffledQuestions.length) * 100)}% complete</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestionIndex) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-card rounded-2xl p-8 border border-border/30">
        <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-8">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestion.id] === index;
            
            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={cn(
                  "w-full p-4 rounded-xl text-left transition-all border-2",
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 hover:bg-muted"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0",
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={cn(
                    "text-sm md:text-base",
                    isSelected ? "text-foreground font-medium" : "text-muted-foreground"
                  )}>
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <Button
          variant="gold"
          size="lg"
          onClick={handleNext}
          disabled={!hasAnswered}
        >
          {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
