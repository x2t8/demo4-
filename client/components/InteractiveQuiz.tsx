import React, { useState } from "react";
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Bạn nhận được cuộc gọi từ 'Công an' yêu cầu chuyển tiền để 'bảo toàn tài sản'. Bạn nên làm gì?",
    options: [
      "Chuyển tiền ngay lập tức để tránh rắc rối",
      "Cúp máy và gọi lại số 113 để xác minh",
      "Hỏi thêm thông tin về vụ việc",
      "Yêu cầu họ đến tận nhà để làm việc",
    ],
    correctAnswer: 1,
    explanation:
      "Công an không bao giờ yêu cầu chuyển tiền qua điện thoại. Luôn cúp máy và xác minh qua đường dây chính thức 113.",
    category: "An toàn số",
  },
  {
    id: 2,
    question: "Khi sử dụng AI chatbot, thái độ nào là phù hợp nhất?",
    options: [
      "Tin hoàn toàn vào mọi thông tin AI cung cấp",
      "Không bao giờ sử dụng AI vì không an toàn",
      "Sử dụng AI như công cụ hỗ trợ và luôn kiểm tra thông tin",
      "Chỉ sử dụng AI cho công việc không quan trọng",
    ],
    correctAnswer: 2,
    explanation:
      "AI là công cụ hỗ trợ mạnh mẽ nhưng cần được sử dụng một cách có trách nhiệm. Luôn kiểm tra và xác minh thông tin từ AI.",
    category: "AI an toàn",
  },
  {
    id: 3,
    question: "Cách tốt nhất để xử lý tin giả trên mạng xã hội là gì?",
    options: [
      "Chia sẻ ngay để mọi người biết",
      "Bỏ qua và không làm gì cả",
      "Kiểm tra nguồn gốc trước khi chia sẻ",
      "Chỉ chia sẻ với bạn bè thân thiết",
    ],
    correctAnswer: 2,
    explanation:
      "Luôn kiểm tra nguồn gốc và tính chính xác của thông tin trước khi chia sẻ để tránh lan truyền tin giả.",
    category: "Đạo đức số",
  },
  {
    id: 4,
    question:
      "Khi sử dụng hình ảnh từ Internet cho dự án, bạn cần chú ý điều gì?",
    options: [
      "Có thể sử dụng bất kỳ hình ảnh nào từ Google Images",
      "Chỉ cần ghi nguồn là đủ",
      "Kiểm tra bản quyền và xin phép sử dụng",
      "Chỉnh sửa hình ảnh để tránh vi phạm bản quyền",
    ],
    correctAnswer: 2,
    explanation:
      "Việc sử dụng hình ảnh cần tuân thủ luật bản quyền. Nên kiểm tra license và xin phép tác giả khi cần thiết.",
    category: "Pháp luật số",
  },
];

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreColor = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80)
      return "Xuất sắc! Bạn có kiến thức rất tốt về an toàn số.";
    if (percentage >= 60)
      return "Khá tốt! Bạn cần ôn luyện thêm một số kiến thức.";
    return "Cần cải thiện! Hãy học thêm về an toàn số để bảo vệ bản thân tốt hơn.";
  };

  if (quizCompleted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">🎉 Hoàn thành Quiz!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div>
            <div className={`text-4xl font-bold ${getScoreColor()}`}>
              {score}/{quizQuestions.length}
            </div>
            <p className="text-gray-600 mt-2">{getScoreMessage()}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {quizQuestions.map((question, index) => (
              <div key={question.id} className="p-3 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  {userAnswers[index] === question.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <Badge variant="outline">{question.category}</Badge>
                </div>
                <p className="text-sm font-medium">{question.question}</p>
              </div>
            ))}
          </div>

          <Button onClick={handleRestart} className="w-full">
            <RotateCcw className="h-4 w-4 mr-2" />
            Thử lại
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Badge variant="outline">{question.category}</Badge>
          <span className="text-sm text-gray-500">
            {currentQuestion + 1}/{quizQuestions.length}
          </span>
        </div>
        <CardTitle className="text-xl">{question.question}</CardTitle>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
            }}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left border rounded-lg transition-all ${
                selectedAnswer === index
                  ? showExplanation
                    ? index === question.correctAnswer
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-red-500 bg-red-50 text-red-700"
                    : "border-blue-500 bg-blue-50"
                  : showExplanation && index === question.correctAnswer
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-200 hover:border-gray-300"
              } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"}`}
            >
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full border flex items-center justify-center text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
                {showExplanation && (
                  <>
                    {index === question.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                    )}
                    {selectedAnswer === index &&
                      index !== question.correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                      )}
                  </>
                )}
              </div>
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Giải thích:</h4>
            <p className="text-blue-800">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-center pt-4">
          {!showExplanation ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="px-8"
            >
              Xác nhận đáp án
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="px-8">
              {currentQuestion < quizQuestions.length - 1 ? (
                <>
                  Câu tiếp theo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              ) : (
                "Xem kết quả"
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
