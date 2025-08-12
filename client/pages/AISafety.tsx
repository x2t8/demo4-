import { useState, useEffect } from "react";
import {
  Bot,
  Brain,
  Eye,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Camera,
  Mic,
  Search,
  Zap,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Star,
  Cpu,
  Network,
  Code,
  Lightbulb,
  Target,
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

export default function AISafety() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [aiChatVisible, setAiChatVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const aiTopics = [
    {
      id: "future",
      icon: Sparkles,
      title: "Tương Lai AI",
      subtitle: "2024-2030",
      color: "from-cyan-400 to-blue-500",
      gradient: "bg-gradient-to-br from-cyan-100 to-blue-100",
      description: "AI sẽ thay đổi thế giới như thế nào?",
      stats: ["95% tự động hóa", "2.1 tỷ job mới", "45% GDP tăng"],
    },
    {
      id: "brain",
      icon: Brain,
      title: "AI & Trí Tuệ",
      subtitle: "Cognitive AI",
      color: "from-purple-400 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-100 to-pink-100",
      description: "Máy móc có thể suy nghĩ như con người?",
      stats: ["IQ 200+", "0.01s phản xạ", "∞ bộ nhớ"],
    },
    {
      id: "ethics",
      icon: Shield,
      title: "Đạo Đức AI",
      subtitle: "Responsible AI",
      color: "from-green-400 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-100 to-emerald-100",
      description: "Sử dụng AI một cách có trách nhiệm",
      stats: ["100% minh bạch", "0 bias", "∞ công bằng"],
    },
    {
      id: "risks",
      icon: AlertTriangle,
      title: "Rủi Ro AI",
      subtitle: "AI Threats",
      color: "from-red-400 to-orange-500",
      gradient: "bg-gradient-to-br from-red-100 to-orange-100",
      description: "Những nguy hiểm tiềm ẩn từ AI",
      stats: ["40% deepfake", "15% job loss", "∞ monitoring"],
    },
  ];

  const aiDemos = [
    {
      id: "chat",
      title: "AI Chat Demo",
      description: "Trò chuyện với AI thông minh",
      icon: Bot,
      active: false,
    },
    {
      id: "image",
      title: "AI Image Generator",
      description: "Tạo hình ảnh từ văn bản",
      icon: Camera,
      active: false,
    },
    {
      id: "voice",
      title: "AI Voice Clone",
      description: "Nhân bản giọng nói AI",
      icon: Mic,
      active: false,
    },
  ];

  const toggleDemo = (demoId: string) => {
    setActiveDemo(activeDemo === demoId ? null : demoId);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Header />
      <DisclaimerBanner />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className={`absolute inset-0 opacity-30 transition-all duration-2000 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="10" cy="10" r="2" fill="currentColor"/>
                <circle cx="90" cy="90" r="2" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-500"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Futuristic Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Floating AI Icon */}
            <div className="relative mb-8">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl transition-all duration-1000 ${isAnimating ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}`}>
                <Bot className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>

            {/* Holographic Title */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                AI SAFETY
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                <span className="text-cyan-400">Artificial</span>{" "}
                <span className="text-blue-400">Intelligence</span>{" "}
                <span className="text-purple-400">Security</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Khám phá tương lai của AI trong thế giới số hiện đại. Học cách sử dụng công nghệ một cách an toàn và thông minh.
              </p>
            </div>

            {/* Interactive Topic Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {aiTopics.map((topic, index) => (
                <div
                  key={topic.id}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${selectedTopic === index ? 'scale-105' : ''}`}
                  onClick={() => setSelectedTopic(index)}
                >
                  <Card className={`border-0 bg-gradient-to-br ${topic.gradient} backdrop-blur-sm shadow-2xl hover:shadow-cyan-500/25`}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${topic.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                        <topic.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-1">{topic.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{topic.subtitle}</p>
                      <div className="space-y-1">
                        {topic.stats.map((stat, idx) => (
                          <div key={idx} className="text-xs text-gray-700 bg-white/50 rounded-full px-2 py-1">
                            {stat}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Live Demo Area */}
            <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                AI Interactive Demo
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiDemos.map((demo) => (
                  <Button
                    key={demo.id}
                    onClick={() => toggleDemo(demo.id)}
                    className={`h-auto p-6 transition-all duration-300 ${
                      activeDemo === demo.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50'
                        : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600'
                    }`}
                    variant="outline"
                  >
                    <div className="text-center">
                      <demo.icon className={`w-8 h-8 mx-auto mb-2 ${activeDemo === demo.id ? 'text-white' : 'text-cyan-400'}`} />
                      <div className={`font-bold ${activeDemo === demo.id ? 'text-white' : 'text-white'}`}>
                        {demo.title}
                      </div>
                      <div className={`text-sm mt-1 ${activeDemo === demo.id ? 'text-cyan-100' : 'text-gray-400'}`}>
                        {demo.description}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
              
              {/* Demo Content Area */}
              {activeDemo && (
                <div className="mt-8 p-6 bg-black/50 rounded-2xl border border-cyan-500/20">
                  <div className="text-center text-white">
                    <div className="animate-pulse mb-4">
                      <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm text-green-400">Demo đang chạy...</p>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-4 text-left">
                      <div className="text-cyan-400 text-sm mb-2">AI Response:</div>
                      <div className="text-gray-300">
                        {activeDemo === 'chat' && "Xin chào! Tôi là AI assistant. Tôi có thể giúp bạn tìm hiểu về an toàn AI..."}
                        {activeDemo === 'image' && "Đang tạo hình ảnh từ mô tả: 'Một robot thông minh trong tương lai'..."}
                        {activeDemo === 'voice' && "Đang phân tích mẫu giọng nói và tạo bản sao AI..."}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* AI Knowledge Matrix */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  AI Knowledge Matrix
                </span>
              </h2>
              <p className="text-xl text-gray-300">Khám phá các khía cạnh của trí tuệ nhân tạo</p>
            </div>

            {/* Hexagonal Grid Layout */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Brain, title: "Machine Learning", desc: "Thuật toán học máy tiên tiến", level: 95 },
                  { icon: Eye, title: "Computer Vision", desc: "Nhận diện hình ảnh thông minh", level: 88 },
                  { icon: Mic, title: "Speech AI", desc: "Xử lý ngôn ngữ tự nhiên", level: 92 },
                  { icon: Shield, title: "AI Security", desc: "Bảo mật hệ thống AI", level: 78 },
                  { icon: Network, title: "Neural Networks", desc: "Mạng nơ-ron sâu", level: 90 },
                  { icon: Code, title: "AI Programming", desc: "Lập trình AI và robotics", level: 85 }
                ].map((item, index) => (
                  <Card key={index} className="group bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 hover:scale-105 backdrop-blur-xl">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300">
                            <item.icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{item.desc}</p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Progress</span>
                            <span className="text-cyan-400 font-bold">{item.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${item.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Timeline */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                AI Evolution Timeline
              </h2>
              <p className="text-xl text-gray-300">Hành trình phát triển của trí tuệ nhân tạo</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>
              
              <div className="space-y-16">
                {[
                  { year: "2024", title: "AI Chatbots Mainstream", desc: "ChatGPT, Claude thay đổi cách làm việc", side: "left" },
                  { year: "2025", title: "AI in Everything", desc: "AI tích hợp vào mọi thiết bị", side: "right" },
                  { year: "2027", title: "AGI Breakthrough", desc: "AI đạt trí tuệ tổng quát", side: "left" },
                  { year: "2030", title: "AI Society", desc: "Xã hội hoàn toàn tự động hóa", side: "right" }
                ].map((event, index) => (
                  <div key={index} className={`flex items-center ${event.side === 'right' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${event.side === 'right' ? 'pl-8' : 'pr-8'}`}>
                      <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-cyan-500/30 backdrop-blur-xl">
                        <CardContent className="p-6">
                          <div className="text-cyan-400 text-2xl font-bold mb-2">{event.year}</div>
                          <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
                          <p className="text-gray-300">{event.desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-black shadow-lg"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border-cyan-500/50 backdrop-blur-xl">
              <CardContent className="p-12">
                <div className="mb-8">
                  <Sparkles className="w-16 h-16 mx-auto text-cyan-400 animate-pulse" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Sẵn Sàng Khám Phá Tương Lai AI?
                </h2>
                <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                  Tham gia cùng chúng tôi trong hành trình khám phá và sử dụng AI một cách an toàn, thông minh
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Bot className="w-5 h-5 mr-2" />
                    Bắt Đầu Học AI
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold py-4 px-8 rounded-2xl"
                  >
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Khám Phá Thêm
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Floating AI Assistant */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setAiChatVisible(!aiChatVisible)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
        >
          <Bot className="w-8 h-8 text-white" />
        </Button>
        
        {aiChatVisible && (
          <Card className="absolute bottom-20 right-0 w-80 bg-gray-900/95 backdrop-blur-xl border-cyan-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-cyan-400">Xin chào! Tôi có thể giúp bạn tìm hiểu về AI an toàn.</p>
              </div>
              <div className="bg-blue-900/50 rounded-lg p-3">
                <p className="text-white">Hãy hỏi tôi bất cứ điều gì về AI!</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
