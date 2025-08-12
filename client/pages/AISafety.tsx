import {
  Bot,
  Brain,
  Eye,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Zap,
  Camera,
  Mic,
  FileText,
  Search,
  Target,
  Lightbulb,
  Users,
  Globe,
  Sparkles,
  TrendingUp,
  Play,
  Star,
  Bookmark,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { useState } from "react";

export default function AISafety() {
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [showAIToolsModal, setShowAIToolsModal] = useState<boolean>(false);

  const aiTools = {
    "📹 VIDEO": [
      "11 Labs", "Veed", "Descript", "Capcut",
      "Suno", "Fliki", "Shuffll", "HeyGen"
    ],
    "🎨 THIẾT KẾ": [
      "Midjourney", "Canva AI", "Adobe Firefly", "DALLE-2",
      "Playground", "Leonardo", "Ideogram", "Figma AI"
    ],
    "✍️ VIẾT CONTENT": [
      "ChatGPT", "Claude", "Notion AI", "Jenni AI",
      "Grammarly", "Copilot", "Google Gemini", "HyperWrite"
    ],
    "🤖 CHATBOT": [
      "Chatbase", "Tidio", "Intercom", "Drift",
      "ManyChat", "Botsify", "Landbot", "Collect.chat"
    ],
    "📈 MARKETING": [
      "Jasper", "Copy.ai", "Writesonic", "AdCreative",
      "Semrush", "Hootsuite AI", "Buffer AI", "Sprout Social"
    ],
    "⚡ NĂNG SUẤT": [
      "Notion AI", "Calendly AI", "Zapier", "IFTTT",
      "Todoist", "ClickUp AI", "Slack AI", "Microsoft 365 AI"
    ]
  };

  const aiApplications = [
    {
      id: "chatbot",
      icon: Bot,
      title: "Chatbot & AI Assistant",
      description: "ChatGPT, Gemini, Claude - Trợ lý AI thông minh",
      popularity: "92%",
      safety: "78%",
      color: "text-blue-600",
      bg: "bg-blue-100",
      benefits: [
        "Hỗ trợ học tập và nghiên cứu",
        "Viết và chỉnh sửa văn bản",
        "Giải đáp thắc mắc nhanh chóng",
        "Brainstorming ý tưởng",
      ],
      risks: [
        "Thông tin có thể không chính xác",
        "Thiếu suy nghĩ phản biện",
        "Phụ thuộc quá mức vào AI",
        "Vi phạm bản quyền nếu sao chép",
      ],
      tips: [
        "Luôn kiểm tra thông tin từ AI",
        "Sử dụng AI như công cụ hỗ trợ, không thay thế",
        "Không chia sẻ thông tin nhạy cảm",
        "Ghi nhận nguồn khi sử dụng AI",
      ],
    },
    {
      id: "image",
      icon: Camera,
      title: "AI Tạo Hình Ảnh",
      description: "Midjourney, DALL-E, Stable Diffusion",
      popularity: "85%",
      safety: "65%",
      color: "text-purple-600",
      bg: "bg-purple-100",
      benefits: [
        "Tạo artwork và illustration",
        "Design đồ họa nhanh chóng",
        "Concept art và prototype",
        "Giáo dục và giải trí",
      ],
      risks: [
        "Deepfake và hình ảnh giả",
        "Vi phạm bản quyền hình ảnh",
        "Nội dung không phù hợp",
        "Nhầm lẫn thật-giả",
      ],
      tips: [
        "Kiểm tra nguồn gốc hình ảnh",
        "Sử dụng watermark khi cần",
        "Không tạo hình ảnh có hại",
        "Tôn trọng quyền riêng tư người khác",
      ],
    },
    {
      id: "voice",
      icon: Mic,
      title: "AI Giọng Nói",
      description: "Text-to-speech, voice cloning, audio AI",
      popularity: "73%",
      safety: "55%",
      color: "text-orange-600",
      bg: "bg-orange-100",
      benefits: [
        "Hỗ trợ người khuyết tật",
        "Tạo nội dung audio",
        "Học ngoại ngữ",
        "Chatbot có giọng nói",
      ],
      risks: [
        "Voice deepfake lừa đảo",
        "Giả mạo giọng nói người khác",
        "Tin tức giả với âm thanh",
        "Quấy rối qua giọng nói AI",
      ],
      tips: [
        "Xác thực qua nhiều kênh",
        "Nghi ngờ cuộc gọi lạ",
        "Không tin hoàn toàn vào giọng nói",
        "Báo cáo nếu gặp voice deepfake",
      ],
    },
    {
      id: "search",
      icon: Search,
      title: "AI Tìm Kiếm & Phân Tích",
      description: "AI-powered search, data analysis",
      popularity: "88%",
      safety: "82%",
      color: "text-green-600",
      bg: "bg-green-100",
      benefits: [
        "Tìm kiếm thông tin chính xác",
        "Phân tích dữ liệu phức tạp",
        "Tóm tắt nội dung dài",
        "Dịch thuật tự động",
      ],
      risks: [
        "Bias trong kết quả tìm kiếm",
        "Thông tin thiên lệch",
        "Filter bubble effect",
        "Mất khả năng tư duy độc lập",
      ],
      tips: [
        "So sánh nhiều nguồn thông tin",
        "Tìm hiểu cách AI hoạt động",
        "Đặt câu hỏi phản biện",
        "Giữ thói quen suy nghĩ độc lập",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 md:bg-white page-fade-in">
      <Header />
      <DisclaimerBanner />

      {/* Desktop/Tablet: ScamTypes-style Header */}
      <div className="hidden md:block">
        {/* Hero Section - Exact Digital Ethics Layout */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Bot className="h-12 w-12 mr-4 animate-pulse" />
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TR��Í TUỆ NHÂN TẠO AN TOÀN
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  AI Safety &{" "}
                  <span className="text-cyan-300">Sử Dụng Thông Minh</span>
                </h1>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Khám phá tương lai của AI trong thế giới số hiện đại. Học cách
                  sử dụng công nghệ trí tuệ nhân tạo một cách an toàn và có trách nhiệm.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">
                      85%
                    </div>
                    <div className="text-sm opacity-80">
                      Người dùng AI
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">
                      42%
                    </div>
                    <div className="text-sm opacity-80">
                      Rủi ro bảo mật
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">
                      95%
                    </div>
                    <div className="text-sm opacity-80">Cần học cách dùng</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {aiApplications.slice(0, 4).map((app, index) => (
                    <Card
                      key={app.id}
                      className={`transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${index % 2 === 1 ? "mt-8" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div
                          className={`w-12 h-12 rounded-lg ${app.bg} flex items-center justify-center mb-3`}
                        >
                          <app.icon className={`h-6 w-6 ${app.color}`} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">
                          {app.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">
                              Phổ biến
                            </span>
                            <span className={`text-xs font-semibold ${app.color}`}>
                              {app.popularity}
                            </span>
                          </div>
                          <Progress
                            value={parseInt(app.popularity)}
                            className="h-1"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Applications Grid */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center mb-3 text-gray-900">
              Ứng dụng AI phổ biến
            </h2>
            <div className="flex justify-center gap-6 mb-12 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-500" />
                <span>AI Chatbots</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-purple-500" />
                <span>Tạo hình ảnh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-orange-500" />
                <span>AI giọng nói</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-green-500" />
                <span>Tìm kiếm AI</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiApplications.map((app, index) => (
                <Card
                  key={app.id}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${app.bg} border-gray-200 hover:border-gray-300`}
                  onClick={() => setSelectedApplication(selectedApplication === app.id ? null : app.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl ${app.bg} border-2 border-white shadow-sm flex items-center justify-center`}>
                        <app.icon className={`h-8 w-8 ${app.color}`} />
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2 text-sm leading-tight">
                      {app.title}
                    </h3>

                    <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                      {app.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Phổ biến</span>
                        <span className={`font-semibold ${app.color}`}>
                          {app.popularity}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            app.color === "text-blue-600" ? "bg-blue-500" :
                            app.color === "text-purple-600" ? "bg-purple-500" :
                            app.color === "text-orange-600" ? "bg-orange-500" : "bg-green-500"
                          }`}
                          style={{ width: app.popularity }}
                        ></div>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">An toàn</span>
                        <span className={`font-semibold ${app.color}`}>
                          {app.safety}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            app.color === "text-blue-600" ? "bg-blue-500" :
                            app.color === "text-purple-600" ? "bg-purple-500" :
                            app.color === "text-orange-600" ? "bg-orange-500" : "bg-green-500"
                          }`}
                          style={{ width: app.safety }}
                        ></div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedApplication === app.id && (
                      <div className="mt-4 pt-4 border-t text-left space-y-3">
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-1 text-xs">
                            <CheckCircle className="h-3 w-3" />
                            Lợi ích
                          </h4>
                          <div className="space-y-1">
                            {app.benefits.slice(0, 2).map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-1 text-xs">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span className="text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                          <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-1 text-xs">
                            <XCircle className="h-3 w-3" />
                            Rủi ro
                          </h4>
                          <div className="space-y-1">
                            {app.risks.slice(0, 2).map((risk, idx) => (
                              <div key={idx} className="flex items-start gap-1 text-xs">
                                <span className="text-red-500 mt-0.5">•</span>
                                <span className="text-gray-700">{risk}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1 text-xs h-7">
                            <Bookmark className="h-3 w-3 mr-1" />
                            Lưu
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs h-7 px-2">
                            <Share2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* AI Ethics & Safety Guidelines */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🛡️ Đạo đức AI & Hướng dẫn an toàn
              </h2>
              <p className="text-lg text-gray-600">Nguyên tắc sử dụng AI có trách nhiệm</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Sử dụng có trách nhiệm",
                  color: "blue",
                  principles: [
                    "Minh bạch về việc sử dụng AI",
                    "Không tạo nội dung có hại",
                    "Tôn tr��ng quyền riêng tư",
                    "Không phân biệt đối xử",
                  ],
                },
                {
                  icon: Eye,
                  title: "Nhận biết AI content",
                  color: "purple",
                  principles: [
                    "Luôn kiểm tra nguồn gốc",
                    "Tìm hiểu các dấu hiệu AI",
                    "Sử dụng công cụ detection",
                    "Giáo dục người khác",
                  ],
                },
                {
                  icon: Brain,
                  title: "Giữ tư duy phản biện",
                  color: "green",
                  principles: [
                    "Đặt câu hỏi về thông tin AI",
                    "So sánh nhiều nguồn",
                    "Phát triển critical thinking",
                    "Không phụ thuộc hoàn toàn vào AI",
                  ],
                },
              ].map((ethics, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${ethics.color}-100 flex items-center justify-center`}>
                      <ethics.icon className={`h-8 w-8 text-${ethics.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{ethics.title}</h3>
                    <ul className="space-y-3 text-left">
                      {ethics.principles.map((principle, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Zap className={`h-4 w-4 text-${ethics.color}-500 mt-1 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deepfake Detection Guide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                👁️ Nhận biết Deepfake & Nội dung AI
              </h2>
              <p className="text-lg text-gray-600">Các dấu hiệu để phát hiện nội dung được tạo bởi AI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  type: "Video Deepfake",
                  icon: "🎥",
                  color: "red",
                  signs: [
                    "Chuyển động mắt không tự nhiên",
                    "Đồng bộ môi-âm thanh kém",
                    "Chất lượng ảnh không đồng đều",
                    "Ánh sáng và bóng đổ lạ",
                    "Tóc và viền mặt mờ ảo",
                  ],
                },
                {
                  type: "Audio Deepfake",
                  icon: "🔊",
                  color: "orange",
                  signs: [
                    "Giọng nói máy móc, thiếu cảm xúc",
                    "Tốc độ nói không nhất quán",
                    "Âm thanh nền bất thường",
                    "Phát âm một số từ kỳ lạ",
                    "Chất lượng âm thanh khác biệt",
                  ],
                },
                {
                  type: "Text AI-Generated",
                  icon: "📝",
                  color: "blue",
                  signs: [
                    "Văn phong quá hoàn hảo",
                    "Thiếu cá tính, cảm xúc cá nhân",
                    "Lặp lại cấu trúc câu",
                    "Thông tin chung chung, mơ hồ",
                    "Không có trải nghiệm cụ thể",
                  ],
                },
              ].map((detection, index) => (
                <Card key={index} className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-2">{detection.icon}</div>
                    <Badge variant="outline" className={`mb-4 mx-auto border-${detection.color}-200 text-${detection.color}-700`}>
                      {detection.type}
                    </Badge>
                    <CardTitle className="text-xl">Dấu hiệu nhận biết</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {detection.signs.map((sign, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Eye className={`h-4 w-4 text-${detection.color}-500 mt-1 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI for Students & Workers */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎓 AI trong Học tập & Công việc
              </h2>
              <p className="text-lg text-gray-600">Hướng dẫn sử dụng AI hiệu quả và có trách nhiệm</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Students */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    Học sinh & Sinh viên
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        ✅ NÊN LÀM
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Brainstorming ý tưởng",
                          "Giải thích khái niệm khó",
                          "Luyện tập ngôn ngữ",
                          "Kiểm tra ngữ pháp",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        ❌ KHÔNG NÊN
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Copy nguyên văn bài AI viết",
                          "Làm bài tập hoàn toàn bằng AI",
                          "Nộp bài không ghi nguồn AI",
                          "Tin hoàn toàn vào thông tin AI",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <XCircle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Workers */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-2xl">💼</span>
                    Người đi làm
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        🛡️ AN TOÀN
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Viết email draft chuyên nghiệp",
                          "Tóm tắt meeting notes",
                          "Phân tích dữ liệu cơ bản",
                          "Tạo presentation outline",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        ⚠️ RỦI RO
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Chia sẻ thông tin công ty với AI public",
                          "Tin hoàn toàn vào AI analysis",
                          "Thay thế hoàn toàn tư duy con người",
                          "Upload dữ liệu nhạy cảm lên AI",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <AlertTriangle className="h-3 w-3 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Human vs AI Content Comparison */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔍 So sánh: Nội dung Human vs AI
              </h2>
              <p className="text-lg text-gray-600">Học cách phân biệt nội dung do con người và AI tạo ra</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Human Content */}
              <Card className="border-2 border-green-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👤</span>
                  </div>
                  <CardTitle className="text-2xl text-green-800">HUMAN CONTENT</CardTitle>
                  <p className="text-green-600">N���i dung do con người tạo</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { title: "Cảm xúc tự nhiên", desc: "Thể hiện cảm xúc chân thực, có chiều sâu" },
                      { title: "Chi tiết cá nhân", desc: "Có trải nghiệm và câu chuyện riêng" },
                      { title: "Lỗi nhỏ bình thường", desc: "Có thể có lỗi chính tả, ngữ pháp nhỏ" },
                      { title: "Phong cách nhất quán", desc: "Giữ được tính cách và style riêng" },
                      { title: "Context phù hợp", desc: "Hiểu rõ bối cảnh và văn hóa" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-gray-900">{item.title}</span>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Content */}
              <Card className="border-2 border-orange-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100 text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-orange-800">AI GENERATED</CardTitle>
                  <p className="text-orange-600">Nội dung do AI tạo ra</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { title: "Cảm xúc giả tạo", desc: "Cảm xúc có vẻ được lập trình" },
                      { title: "Thông tin chung chung", desc: "Thiếu chi tiết cá nhân cụ thể" },
                      { title: "Quá hoàn hảo", desc: "Ngữ pháp và cấu trúc quá chuẩn" },
                      { title: "Nhảy topic đột ngột", desc: "Chuyển đề không mạch lạc" },
                      { title: "Pattern lặp lại", desc: "Cấu trúc câu có xu hướng lặp" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-gray-900">{item.title}</span>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Detection Tips */}
            <div className="mt-12">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🔍 Mẹo Nhận Biết Nhanh</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { icon: Eye, title: "Đọc kỹ toàn bộ", desc: "Chú ý pattern và cấu trúc", color: "blue" },
                      { icon: Brain, title: "Dùng common sense", desc: "Cảm nhận tự nhiên hay giả tạo", color: "purple" },
                      { icon: Search, title: "Cross-check", desc: "Kiểm tra với nguồn khác", color: "green" },
                    ].map((tip, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className={`w-12 h-12 bg-${tip.color}-100 rounded-full flex items-center justify-center mb-3`}>
                          <tip.icon className={`h-6 w-6 text-${tip.color}-600`} />
                        </div>
                        <span className="font-medium text-gray-900">{tip.title}</span>
                        <p className="text-sm text-gray-600 mt-1">{tip.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="mb-8">
              <Sparkles className="w-16 h-16 mx-auto text-cyan-300 animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn Sàng Sử Dụng AI An Toàn?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              AI là công cụ mạnh mẽ - hãy sử dụng một cách thông minh, có trách nhiệm và an toàn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Bot className="w-5 h-5 mr-2" />
                Bắt Đầu Học AI
              </Button>
              <Button
                size="lg"
                onClick={() => setShowAIToolsModal(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                50+ Công Cụ AI Thật Sự
              </Button>
            </div>
          </div>
        </section>

        {/* AI Tools Modal */}
        {showAIToolsModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">🤖 Bộ Sưu Tập AI Tools Chuyên Nghiệp</h2>
                  <p className="opacity-90">40+ công cụ AI ��ược chọn lọc kỹ càng cho từng mục đích sử dụng cụ thể</p>
                </div>
                <Button
                  onClick={() => setShowAIToolsModal(false)}
                  variant="ghost"
                  className="text-white hover:bg-white/10 p-2 rounded-full"
                >
                  <XCircle className="w-6 h-6" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(aiTools).map(([category, tools], categoryIndex) => (
                    <Card key={category} className="h-fit">
                      <CardHeader className={`pb-4 ${
                        categoryIndex === 0 ? 'bg-gradient-to-r from-red-50 to-pink-50' :
                        categoryIndex === 1 ? 'bg-gradient-to-r from-purple-50 to-indigo-50' :
                        categoryIndex === 2 ? 'bg-gradient-to-r from-green-50 to-emerald-50' :
                        categoryIndex === 3 ? 'bg-gradient-to-r from-blue-50 to-cyan-50' :
                        categoryIndex === 4 ? 'bg-gradient-to-r from-orange-50 to-yellow-50' :
                        'bg-gradient-to-r from-gray-50 to-slate-50'
                      }`}>
                        <CardTitle className={`text-lg flex items-center gap-2 ${
                          categoryIndex === 0 ? 'text-red-700' :
                          categoryIndex === 1 ? 'text-purple-700' :
                          categoryIndex === 2 ? 'text-green-700' :
                          categoryIndex === 3 ? 'text-blue-700' :
                          categoryIndex === 4 ? 'text-orange-700' :
                          'text-gray-700'
                        }`}>
                          {category}
                          <Badge variant="secondary" className="text-xs">
                            {tools.length}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="grid grid-cols-1 gap-2">
                          {tools.map((tool, index) => (
                            <div
                              key={index}
                              className={`p-3 rounded-lg border hover:shadow-md transition-all duration-200 cursor-pointer ${
                                categoryIndex === 0 ? 'border-red-200 hover:border-red-300 hover:bg-red-50' :
                                categoryIndex === 1 ? 'border-purple-200 hover:border-purple-300 hover:bg-purple-50' :
                                categoryIndex === 2 ? 'border-green-200 hover:border-green-300 hover:bg-green-50' :
                                categoryIndex === 3 ? 'border-blue-200 hover:border-blue-300 hover:bg-blue-50' :
                                categoryIndex === 4 ? 'border-orange-200 hover:border-orange-300 hover:bg-orange-50' :
                                'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900 text-sm">{tool}</span>
                                <div className={`w-2 h-2 rounded-full ${
                                  categoryIndex === 0 ? 'bg-red-400' :
                                  categoryIndex === 1 ? 'bg-purple-400' :
                                  categoryIndex === 2 ? 'bg-green-400' :
                                  categoryIndex === 3 ? 'bg-blue-400' :
                                  categoryIndex === 4 ? 'bg-orange-400' :
                                  'bg-gray-400'
                                }`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Footer note */}
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                  <div className="text-center">
                    <p className="text-blue-800 font-medium mb-2">💡 Lưu ý quan trọng</p>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      Danh sách được cập nhật thường xuyên. Hãy luôn đánh giá kỹ và sử dụng các công cụ AI một cách có trách nhiệm.
                      Đọc kỹ điều khoản sử dụng trước khi đăng ký tài khoản.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile version - Simple clean design */}
      <div className="md:hidden min-h-screen bg-blue-50">
        {/* Mobile Hero */}
        <section className="bg-gradient-to-br from-blue-500 to-purple-600 px-4 py-6 text-white">
          <div className="max-w-sm mx-auto text-center">
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-xl font-bold mb-1">🤖 AI An Toàn</h1>
            <p className="text-blue-100 text-sm mb-5">Sử dụng AI thông minh & có trách nhiệm</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/20 rounded-lg p-2.5">
                <div className="font-bold text-base">4.2B</div>
                <div className="text-xs text-blue-100">người dùng</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2.5">
                <div className="font-bold text-base">6 loại</div>
                <div className="text-xs text-blue-100">AI phổ biến</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2.5">
                <div className="font-bold text-base">40+</div>
                <div className="text-xs text-blue-100">công cụ</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Content */}
        <section className="px-4 py-8">
          <div className="max-w-sm mx-auto">
            <h2 className="text-base font-bold text-gray-900 mb-2 text-center">
              🚀 Ứng dụng AI phổ biến
            </h2>
            <p className="text-gray-600 text-xs mb-6 text-center">
              Chạm để xem chi tiết từng loại AI
            </p>

            <div className="space-y-3">
              {aiApplications.map((app) => (
                <Card key={app.id} className="bg-white border border-blue-200 shadow-sm">
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg ${app.bg} flex items-center justify-center flex-shrink-0`}>
                        <app.icon className={`w-4 h-4 ${app.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{app.title}</h3>
                        <p className="text-gray-600 text-xs mb-2">{app.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-blue-600 font-medium">📈 {app.popularity}</span>
                          <span className="text-green-600 font-medium">🛡️ {app.safety}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Quick Tips */}
        <section className="px-4 py-6 bg-gray-50">
          <div className="max-w-sm mx-auto">
            <h2 className="text-base font-bold text-center text-gray-900 mb-4">💡 Mẹo sử dụng AI an toàn</h2>
            <div className="space-y-2">
              {[
                "✅ Luôn kiểm tra thông tin từ AI",
                "❌ Không copy nguyên văn bài AI",
                "🔍 So sánh nhiều nguồn thông tin",
                "🛡️ Không chia sẻ dữ liệu nhạy cảm",
                "🎯 Sử dụng AI như công cụ hỗ trợ",
              ].map((tip, idx) => (
                <Card key={idx} className="bg-white border border-gray-200">
                  <CardContent className="p-2.5">
                    <p className="text-sm text-gray-700">{tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile AI Tools Button */}
            <div className="mt-6">
              <Button
                onClick={() => setShowAIToolsModal(true)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg"
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                🔍 Khám Phá AI Tools
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
