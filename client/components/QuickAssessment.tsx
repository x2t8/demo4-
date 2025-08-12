import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle, Brain } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

const questions: Question[] = [
  {
    id: 1,
    question:
      "Bạn nhận được cuộc gọi từ người tự xưng là công an, yêu cầu chuyển tiền để 'bảo toàn tài sản'. Bạn sẽ làm gì?",
    options: [
      "Chuyển tiền ngay lập tức vì sợ bị bắt",
      "Cúp máy và gọi lại số 113 để xác minh",
      "Hỏi thêm thông tin để kiểm tra",
      "Báo với gia đình trước khi quyết định",
    ],
    correctAnswer: 1,
    explanation:
      "Công an không bao giờ yêu cầu chuyển tiền qua điện thoại. Luôn cúp máy và gọi lại số chính thức 113 để xác minh.",
    difficulty: "easy",
  },
  {
    id: 2,
    question:
      "Trên mạng xã hội, bạn thấy quảng cáo đầu tư với lãi suất 50%/tháng, có nhiều người bình luận tích cực. Bạn nghĩ gì?",
    options: [
      "Đây là cơ hội tốt, nên đầu tư ngay",
      "Lãi suất quá cao, có thể là lừa đảo",
      "Đầu tư một ít để thử",
      "Hỏi bạn bè có kinh nghiệm trước",
    ],
    correctAnswer: 1,
    explanation:
      "Lãi suất 50%/tháng là bất khả thi và chắc chắn là lừa đảo. Các bình luận tích cực có thể là tài khoản ảo.",
    difficulty: "medium",
  },
  {
    id: 3,
    question:
      "Khi tạo mật khẩu cho tài khoản ngân hàng online, cách nào an toàn nhất?",
    options: [
      "Sử dụng tên + ngày sinh của mình",
      "Dùng chung 1 mật khẩu cho tất cả tài khoản",
      "Tạo mật khẩu phức tạp riêng biệt cho từng tài khoản",
      "Viết mật khẩu vào giấy để khỏi quên",
    ],
    correctAnswer: 2,
    explanation:
      "Mỗi tài khoản nên có mật khẩu riêng biệt, phức tạp với số, chữ và ký tự đặc biệt. Sử dụng app quản lý mật khẩu nếu cần.",
    difficulty: "medium",
  },
  {
    id: 4,
    question:
      "Bạn nhận được email từ 'ngân hàng' yêu cầu cập nhật thông tin tài khoản qua link đính kèm. Bạn nên:",
    options: [
      "Click vào link và cập nhật ngay",
      "Bỏ qua email này",
      "Đăng nhập trực tiếp vào website ngân hàng để kiểm tra",
      "Forward email cho bạn bè để hỏi ý kiến",
    ],
    correctAnswer: 2,
    explanation:
      "Không bao giờ click link trong email đáng ngờ. Luôn đăng nhập trực tiếp vào website chính thức của ngân hàng.",
    difficulty: "easy",
  },
  {
    id: 5,
    question:
      "Trên TikTok/YouTube, bạn thấy video hướng dẫn 'kiếm tiền online dễ dàng' với thu nhập khủng. Bạn đánh giá như thế nào?",
    options: [
      "Tin tưởng và làm theo hướng dẫn",
      "Nghi ngờ vì quá dễ dàng và hấp dẫn",
      "Thử nghiệm với số tiền nhỏ",
      "Chia sẻ cho bạn bè cùng tham gia",
    ],
    correctAnswer: 1,
    explanation:
      "Các video 'kiếm tiền dễ dàng' thường là bẫy lừa đảo. Kiếm tiền thật luôn cần nỗ lực và không có công thức thần kỳ nào.",
    difficulty: "easy",
  },
];

export default function QuickAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setIsCompleted(true);
      }
    }, 2500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
    setIsCompleted(false);
  };

  const getScoreLevel = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80)
      return { level: "Xuất sắc", color: "text-green-600", emoji: "🏆" };
    if (percentage >= 60)
      return { level: "Tốt", color: "text-blue-600", emoji: "👍" };
    if (percentage >= 40)
      return { level: "Khá", color: "text-yellow-600", emoji: "🙂" };
    return { level: "Cần cải thiện", color: "text-red-600", emoji: "📚" };
  };

  if (isCompleted) {
    const result = getScoreLevel();
    return (
      <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardHeader>
              <div className="text-6xl mb-4">{result.emoji}</div>
              <CardTitle className="text-2xl mb-2">
                Kết quả đánh giá của bạn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-4xl font-bold mb-2">
                  {score}/{questions.length}
                </div>
                <Badge className={`text-lg px-4 py-2 ${result.color}`}>
                  {result.level}
                </Badge>
              </div>

              <div className="text-left bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📋 Nhận xét chi tiết:</h4>
                {result.level === "Xuất sắc" && (
                  <p>
                    Tuyệt vời! Bạn có kiến thức vững vàng về an toàn số. Hãy
                    chia sẻ kiến thức này với người thân!
                  </p>
                )}
                {result.level === "Tốt" && (
                  <p>
                    Khá tốt! Bạn đã nắm được những kiến thức cơ bản. Hãy học
                    thêm các module để hoàn thiện hơn.
                  </p>
                )}
                {result.level === "Khá" && (
                  <p>
                    Bạn đã có nền tảng nhưng cần học thêm. Hãy đọc kỹ các module
                    để nâng cao khả năng tự bảo vệ.
                  </p>
                )}
                {result.level === "Cần cải thiện" && (
                  <p>
                    Đừng lo lắng! Hãy bắt đầu học từ module "An toàn số" để
                    trang bị kiến thức cần thiết.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={resetQuiz}
                  variant="outline"
                  className="flex-1"
                >
                  🔄 Làm lại
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  📚 Học ngay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <Brain className="inline h-8 w-8 mr-2 text-blue-600" />
            Kiểm Tra Kiến Thức An Toàn Số
          </h2>
          <p className="text-gray-600">
            5 câu hỏi nhanh để đánh giá mức độ hiểu biết của bạn
          </p>
          <div className="mt-4">
            <Badge variant="outline" className="text-sm">
              Câu {currentQuestion + 1}/{questions.length} •{" "}
              {question.difficulty === "easy"
                ? "😊 Dễ"
                : question.difficulty === "medium"
                  ? "🤔 Trung bình"
                  : "🧠 Khó"}
            </Badge>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-sm font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {showResult && index === question.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                  )}
                  {showResult &&
                    selectedAnswer === index &&
                    index !== question.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                    )}
                </div>
              </button>
            ))}

            {showResult && (
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">
                      Giải thích:
                    </h4>
                    <p className="text-yellow-700 mt-1">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center pt-4">
              <div className="text-sm text-gray-500">
                Điểm hiện tại: {score}/{currentQuestion + (showResult ? 1 : 0)}
              </div>
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null || showResult}
                className="min-w-[120px]"
              >
                {currentQuestion === questions.length - 1
                  ? "🏁 Hoàn thành"
                  : "➡️ Tiếp theo"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
