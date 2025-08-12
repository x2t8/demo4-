import { useState, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Users,
  Eye,
  Lock,
  AlertCircle,
  CheckCircle,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Bookmark,
  Share2,
  TrendingUp,
  Globe,
  Lightbulb,
  Brain,
  Zap,
  Coffee,
  Headphones,
  Smile,
  Target,
  Menu,
  Home,
  BarChart3,
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function DigitalEthics() {
  const [selectedEthics, setSelectedEthics] = useState<string | null>(null);
  const [bookmarkedEthics, setBookmarkedEthics] = useState<string[]>([]);
  const [currentMobileSection, setCurrentMobileSection] =
    useState<string>("main");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isGoingBack, setIsGoingBack] = useState<boolean>(false);
  const [selectedEthicsDetail, setSelectedEthicsDetail] = useState<
    string | null
  >(null);

  // Advanced features state
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState<boolean>(false);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);

  const toggleBookmark = (ethicsId: string) => {
    setBookmarkedEthics((prev) =>
      prev.includes(ethicsId)
        ? prev.filter((id) => id !== ethicsId)
        : [...prev, ethicsId],
    );
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const navigateToSection = (section: string) => {
    setIsGoingBack(false);
    setCurrentMobileSection(section);
  };

  const goBack = () => {
    setIsGoingBack(true);
    setCurrentMobileSection("main");
    setSelectedEthics(null);
  };

  // Skeleton loading component
  const SkeletonCard = () => (
    <Card className="animate-pulse">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
        </div>
      </CardContent>
    </Card>
  );

  // Advanced feature functions

  const toggleItemBookmark = (itemId: string) => {
    setBookmarkedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
    // Haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsRefreshing(false);
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Add search logic here
  };

  // Swipe gesture handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (currentMobileSection === "main") return;

    if (isRightSwipe) {
      // Swipe right to go back
      goBack();
      if (navigator.vibrate) {
        navigator.vibrate(30);
      }
    } else if (isLeftSwipe) {
      // Swipe left to go to next section
      const sections = [
        "ethics",
        "stats",
        "wellbeing",
        "communication",
        "misinformation",
      ];
      const currentIndex = sections.indexOf(currentMobileSection);
      if (currentIndex < sections.length - 1) {
        navigateToSection(sections[currentIndex + 1]);
        if (navigator.vibrate) {
          navigator.vibrate(30);
        }
      }
    }
  };

  // PWA Installation
  const handleInstallPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      });
    }
  };

  // PWA and scroll effects
  useEffect(() => {
    // PWA install prompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, [currentMobileSection]);

  const ethicsStats = [
    {
      value: "78%",
      label: "Người dùng muốn internet tích cực hơn",
      color: "from-purple-500 to-purple-600",
      description: "Khảo sát 2023",
    },
    {
      value: "4.2 tỷ",
      label: "Người dùng internet toàn cầu",
      color: "from-blue-500 to-blue-600",
      description: "Cần đạo đức số",
    },
    {
      value: "85%",
      label: "Tin giả lan truyền qua MXH",
      color: "from-pink-500 to-pink-600",
      description: "Cần kiểm chứng",
    },
    {
      value: "67%",
      label: "Gặp cyberbullying online",
      color: "from-indigo-500 to-indigo-600",
      description: "Cần bảo vệ",
    },
  ];

  const ethicsRules = [
    {
      id: "respect",
      icon: Heart,
      title: "Tôn trọng và lịch sự",
      importance: "Cực k�� quan trọng",
      importanceLevel: 98,
      color: "text-pink-600 bg-pink-100",
      gradient: "from-pink-500 to-red-500",
      shortDesc: "Đối xử với người khác như ngoài đời thực",
      impact: "Xây dựng môi trường tích cực",
      usage: "Mọi tương tác online",
      description:
        "Đối xử với người khác trên mạng như ngoài đời thực với sự tôn trọng và lịch sự.",
      dos: [
        "S�� dụng ngôn ngữ lịch sự, tôn trọng",
        "Lắng nghe ý kiến khác biệt",
        "Thể hiện sự đồng cảm",
        "Ghi nhận đóng góp của người khác",
        "Hỗ trợ người mới trong cộng đồng",
        "Thể hiện lòng biết ơn khi được giúp đỡ",
      ],
      donts: [
        "Sử dụng ngôn từ thô tục, xúc phạm",
        "Tấn công cá nhân thay vì thảo luận ý kiến",
        "Phân biệt đối xử",
        "Bắt nạt hay quấy rối",
        "Từ chối lắng nghe quan điểm khác",
        "Làm tổn thương danh tiếng người khác",
      ],
    },
    {
      id: "communication",
      icon: MessageCircle,
      title: "Giao tiếp có trách nhiệm",
      importance: "R��t quan trọng",
      importanceLevel: 95,
      color: "text-blue-600 bg-blue-100",
      gradient: "from-blue-500 to-cyan-500",
      shortDesc: "Chia sẻ thông tin chính xác và có ích",
      impact: "Ngăn chặn tin giả",
      usage: "Mọi nền tảng truyền thông",
      description:
        "Chia sẻ thông tin chính xác và có ích cho cộng đồng, ngăn chặn lan truyền tin giả.",
      dos: [
        "Kiểm tra thông tin trư��c khi chia sẻ",
        "Trích dẫn nguồn tin đáng tin cậy",
        "Thừa nhận khi mắc lỗi",
        "Đóng góp nội dung có giá trị",
        "Sử dụng fact-checking tools",
        "Giáo dục người khác về tin giả",
      ],
      donts: [
        "Chia sẻ tin giả, tin đồn",
        "Spam hay flood tin nhắn",
        "Clickbait gây hiểu lầm",
        "Đăng nội dung không phù hợp",
        "Tạo panic không cần thiết",
        "Lan truyền thông tin chưa kiểm chứng",
      ],
    },
    {
      id: "community",
      icon: Users,
      title: "Xây dựng cộng đồng tích cực",
      importance: "Quan trọng cao",
      importanceLevel: 92,
      color: "text-green-600 bg-green-100",
      gradient: "from-green-500 to-emerald-500",
      shortDesc: "Tạo môi trường online an toàn cho mọi người",
      impact: "Cộng đồng hạnh phúc",
      usage: "Tất cả platform xã hội",
      description:
        "Tạo ra môi trường online an toàn và tích cực cho mọi người, xây dựng cộng đồng mạnh mẽ.",
      dos: [
        "Khuyến khích thảo luận xây dựng",
        "Hỗ trợ thành viên mới",
        "Báo cáo hành vi không phù hợp",
        "Tham gia các hoạt động tích cực",
        "Tạo nội dung giáo dục",
        "Kết nối những người có cùng sở thích",
      ],
      donts: [
        "Tạo drama hay xung đột",
        "Phân chia cộng đồng",
        "Né tránh trách nhiệm",
        "Làm tổn hại danh tiếng nhóm",
        "Tạo các nhóm độc hại",
        "Khuyến khích hành vi tiêu cực",
      ],
    },
    {
      id: "privacy",
      icon: Eye,
      title: "Bảo vệ quyền riêng tư",
      importance: "Cực kỳ quan trọng",
      importanceLevel: 97,
      color: "text-indigo-600 bg-indigo-100",
      gradient: "from-indigo-500 to-purple-500",
      shortDesc: "Tôn trọng thông tin cá nhân của mọi người",
      impact: "An toàn dữ liệu",
      usage: "Mọi hoạt động số",
      description:
        "Tôn trọng và bảo vệ thông tin cá nhân của bản thân và người khác trong môi trường số.",
      dos: [
        "Xin phép trước khi chia sẻ ảnh/thông tin của người khác",
        "Sử dụng cài đặt riêng tư phù hợp",
        "Bảo vệ thông tin nhạy cảm",
        "Giáo dục người thân về an toàn",
        "Sử dụng mật khẩu mạnh",
        "Kiểm tra quyền truy cập ứng dụng",
      ],
      donts: [
        "Đăng thông tin cá nhân nhạy cảm",
        "Theo dõi hay stalking người khác",
        "Chia sẻ ảnh riêng tư không được phép",
        "Xâm phạm tài khoản của người khác",
        "Thu thập thông tin cá nhân trái phép",
        "Bán hoặc chia sẻ dữ liệu cá nhân",
      ],
    },
    {
      id: "citizenship",
      icon: Globe,
      title: "Công dân số có trách nhiệm",
      importance: "Quan trọng cao",
      importanceLevel: 89,
      color: "text-purple-600 bg-purple-100",
      gradient: "from-purple-500 to-pink-500",
      shortDesc: "Thực hiện quyền và nghĩa vụ công dân online",
      impact: "Xã hội số văn minh",
      usage: "Mọi không gian mạng",
      description:
        "Thực hiện quyền và nghĩa vụ của một công dân trong không gian mạng một cách có trách nhiệm.",
      dos: [
        "Tham gia thảo luận xã hội một cách có trách nhiệm",
        "Báo cáo nội dung có hại cho cộng đồng",
        "Tôn trọng luật pháp và quy định của từng nền tảng",
        "Hỗ trợ các sáng kiến tích cực trên mạng",
        "Bỏ phiếu và tham gia dân chủ kỹ thuật số",
        "Đóng góp vào các dự án mã nguồn mở",
      ],
      donts: [
        "Lan truyền tin giả, thông tin sai lệch",
        "Tham gia các hoạt động bất hợp pháp online",
        "Lạm dụng quyền tự do ngôn luận",
        "Phá hoại hay tấn công hệ thống",
        "Tạo tài khoản giả",
        "Thao túng dư luận",
      ],
    },
    {
      id: "ai-ethics",
      icon: Brain,
      title: "Đạo đức AI và công nghệ mới",
      importance: "Đang nổi lên",
      importanceLevel: 85,
      color: "text-orange-600 bg-orange-100",
      gradient: "from-orange-500 to-red-500",
      shortDesc: "Sử dụng AI và công nghệ tiên tiến có đạo đức",
      impact: "Tương lai AI an toàn",
      usage: "AI tools và platforms",
      description:
        "Sử dụng AI và công nghệ tiên tiến một cách có đạo đức và có trách nhiệm với tương lai.",
      dos: [
        "Sử dụng AI để giải quyết vấn đề xã hội",
        "Học hỏi về bias trong AI",
      ],
      donts: [
        "Tạo deepfake để lừa dối",
        "Sử dụng AI để làm hại người khác",
        "Đưa thông tin nhạy cảm vào AI công cộng",
        "Tin hoàn toàn vào kết quả AI không kiểm chứng",
        "Tạo nội dung AI để thao túng",
        "Phụ thuộc hoàn toàn vào AI",
      ],
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <Header />
      <DisclaimerBanner />

      {/* =================================== */}
      {/* DESKTOP VERSION - Full Featured     */}
      {/* =================================== */}
      <div className="hidden lg:block">
        {/* Hero Section - Desktop */}
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Heart className="h-12 w-12 mr-4 animate-pulse" />
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    XÂY DỰNG INTERNET TÍCH CỰC
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Đạo Đức Số &{" "}
                  <span className="text-yellow-300">Giao Tiếp Online</span>
                </h1>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Học cách ứng xử văn minh, tôn trọng và xây dựng cộng đồng mạng
                  tích cực trong thời đại số hiện đại.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      78%
                    </div>
                    <div className="text-sm opacity-80">
                      Muốn internet tích cực
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      4.2 tỷ
                    </div>
                    <div className="text-sm opacity-80">
                      Người dùng internet
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      85%
                    </div>
                    <div className="text-sm opacity-80">Tin giả qua MXH</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {ethicsRules.slice(0, 4).map((ethics, index) => (
                    <Card
                      key={ethics.id}
                      className={`transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${index % 2 === 1 ? "mt-8" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div
                          className={`w-12 h-12 rounded-lg ${ethics.color} flex items-center justify-center mb-3`}
                        >
                          <ethics.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">
                          {ethics.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">
                              Tầm quan trọng
                            </span>
                            <span className="text-xs font-semibold text-purple-600">
                              {ethics.importanceLevel}%
                            </span>
                          </div>
                          <Progress
                            value={ethics.importanceLevel}
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


        {/* Detailed Ethics Rules - Desktop (Zigzag Layout) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📖 Nguyên Tắc Đạo Đức Số
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              6 nguyên tắc cốt lõi để xây dựng một không gian mạng văn minh, an toàn và tích cực cho tất cả mọi người
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-24">
            {ethicsRules.map((ethics, index) => (
              <div key={ethics.id} id={ethics.id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

                  {/* Content Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Card className="overflow-hidden shadow-xl border-0 h-full">
                      {/* Card Header with Gradient */}
                      <div className={`bg-gradient-to-r ${ethics.gradient} text-white p-6`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                              <ethics.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold mb-1">
                                {ethics.title}
                              </h2>
                              <Badge
                                variant="secondary"
                                className="bg-white/20 text-white border-white/30 text-xs"
                              >
                                {ethics.importance}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-4xl font-bold text-white/30">
                              0{index + 1}
                            </div>
                          </div>
                        </div>
                        <p className="text-base opacity-90 leading-relaxed">
                          {ethics.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4" />
                            <span>Tác động: {ethics.impact}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4" />
                            <span>Áp dụng: {ethics.usage}</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 gap-6">
                          {/* Should Do */}
                          <div className="bg-green-50 rounded-xl p-4">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </div>
                              <h3 className="text-lg font-bold text-green-800">
                                NÊN LÀM
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {ethics.dos.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2 group"
                                >
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Should Not Do */}
                          <div className="bg-red-50 rounded-xl p-4">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                <XCircle className="h-4 w-4 text-red-600" />
                              </div>
                              <h3 className="text-lg font-bold text-red-800">
                                KHÔNG NÊN LÀM
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {ethics.donts.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2 group"
                                >
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex items-center justify-center space-x-3">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Share2 className="h-4 w-4 mr-2" />
                            Chia sẻ
                          </Button>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex items-center"
                            onClick={() => toggleBookmark(ethics.id)}
                          >
                            {bookmarkedEthics.includes(ethics.id) ? (
                              <Heart className="h-4 w-4 mr-2 fill-current" />
                            ) : (
                              <Bookmark className="h-4 w-4 mr-2" />
                            )}
                            {bookmarkedEthics.includes(ethics.id) ? 'Đã lưu' : 'Lưu lại'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Visual Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative">
                      {/* Background decoration */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${ethics.gradient} opacity-10 rounded-3xl transform rotate-6`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${ethics.gradient} opacity-5 rounded-3xl transform -rotate-3`}></div>

                      {/* Main visual card */}
                      <Card className="relative bg-white shadow-2xl border-0 p-8 text-center">
                        <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${ethics.gradient} flex items-center justify-center shadow-lg`}>
                          <ethics.icon className="h-12 w-12 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {ethics.shortDesc}
                        </h3>

                        {/* Progress indicator */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Tầm quan trọng</span>
                            <span className="font-semibold text-purple-600">
                              {ethics.importanceLevel}%
                            </span>
                          </div>
                          <Progress
                            value={ethics.importanceLevel}
                            className="h-2"
                          />
                        </div>

                        {/* Quick stats */}
                        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{ethics.dos.length}</div>
                            <div className="text-xs text-green-600">Nên làm</div>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg">
                            <div className="text-lg font-bold text-red-600">{ethics.donts.length}</div>
                            <div className="text-xs text-red-600">Không nên</div>
                          </div>
                        </div>

                        {/* Floating number */}
                        <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${ethics.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {index + 1}
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ethics Statistics Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Thống Kê Đạo Đức Số Toàn Cầu
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những con số cho thấy tầm quan trọng của đạo đức trong không
                gian số
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ethicsStats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {stat.value}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Digital Wellbeing Section */}
          <div className="mt-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🧠 Sức Khỏe Số & Phúc Lợi Kỹ Thuật Số
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Cách sử dụng công nghệ một cách lành mạnh và cân bằng cho
                cuộc sống tốt đẹp hơn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⏰",
                  title: "Cân bằng thời gian online",
                  description: "Sử dụng công nghệ một cách có ý thức",
                  tips: [
                    "Đặt giới hạn thời gian",
                    "Tạo thói quen offline",
                    "Sử dụng digital wellness apps",
                  ],
                },
                {
                  icon: "📱",
                  title: "Tránh nghiện mạng xã hội",
                  description: "Nhận biết và kiểm soát thói quen sử dụng",
                  tips: [
                    "Tắt thông báo không cần thiết",
                    "Xóa apps gây nghiện",
                    "Tạo không gian không có điện thoại",
                  ],
                },
                {
                  icon: "🧠",
                  title: "Bảo vệ sức khỏe tinh thần",
                  description: "Tránh so sánh và áp lực từ mạng xã hội",
                  tips: [
                    "Unfollow tài khoản tiêu cực",
                    "Tập mindfulness",
                    "Tìm kiếm hỗ trợ khi cần",
                  ],
                },
                {
                  icon: "📚",
                  title: "Học hỏi liên tục",
                  description: "Sử dụng internet để phát triển bản thân",
                  tips: [
                    "Theo dõi kênh giáo dục",
                    "Tham gia khóa học online",
                    "Đọc nội dung chất lượng",
                  ],
                },
                {
                  icon: "����",
                  title: "Ý thức môi trường số",
                  description:
                    "Giảm thiểu tác động môi trường của hoạt động số",
                  tips: [
                    "Giảm streaming không cần thiết",
                    "Xóa email và file cũ",
                    "Chọn thiết bị bền vững",
                  ],
                },
                {
                  icon: "🔒",
                  title: "Bảo vệ dữ liệu cá nhân",
                  description: "Kiểm soát thông tin cá nhân được chia sẻ",
                  tips: [
                    "Kiểm tra cài đặt privacy",
                    "Sử dụng mật khẩu mạnh",
                    "Cẩn thận với thông tin nhạy cảm",
                  ],
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-1">
                      {item.tips.map((tip, tipIndex) => (
                        <div
                          key={tipIndex}
                          className="text-xs text-gray-500 flex items-center"
                        >
                          <span className="w-1 h-1 bg-purple-400 rounded-full mr-2"></span>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Communication Tips Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                💬 Kỹ Năng Giao Tiếp Online Hiệu Quả
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những mẹo thực tế để giao tiếp hiệu quả và xây dựng mối quan hệ
                tích cực
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Giao tiếp hiệu quả",
                  color: "text-green-600 bg-green-100",
                  tips: [
                    "Rõ ràng và súc tích",
                    "Sử dụng emoji phù hợp để thể hiện cảm xúc",
                    "Đọc kỹ trước khi trả lời",
                    "Tránh viết hoa toàn bộ (có vẻ như đang la hét)",
                    "Sử dụng ngôn ngữ tích cực",
                    "Cảm ơn và ghi nhận người khác",
                  ],
                },
                {
                  icon: AlertCircle,
                  title: "Xử lý xung đột",
                  color: "text-orange-600 bg-orange-100",
                  tips: [
                    "Bình tĩnh, không phản ứng cảm xúc",
                    "Tìm điểm chung thay vì nhấn mạnh khác biệt",
                    "Chuyển sang chat riêng nếu cần",
                    "Biết khi nào nên dừng cuộc tranh luận",
                    "Xin lỗi khi mắc lỗi",
                    "Tập trung vào giải pháp",
                  ],
                },
                {
                  icon: ThumbsUp,
                  title: "Xây dựng mối quan hệ",
                  color: "text-blue-600 bg-blue-100",
                  tips: [
                    "Ghi nhận và khen người đóng góp tích cực",
                    "Chia sẻ kinh nghiệm và kiến thức",
                    "Hỗ trợ người khác khi có thể",
                    "Tham gia thảo luận một cách tích cực",
                    "Tạo cộng đồng tích cực",
                    "Kết nối những người có cùng quan tâm",
                  ],
                },
              ].map((section, index) => (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${section.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <section.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <ThumbsUp className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Fighting Misinformation Section */}
          <div className="mt-20 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12">
            <div className="text-center mb-16">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🛡️ Chống Tin Giả & Thông Tin Sai Lệch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Làm thế nào để nhận biết và ngăn chặn sự lan truyền thông tin
                sai lệch
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <Eye className="h-6 w-6 mr-2" />
                    Nhận biết tin giả
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Kiểm tra nguồn gốc thông tin</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Tìm kiếm các nguồn tin khác</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Chú ý ngày tháng và bối cảnh</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Phân tích hình ảnh và video</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <XCircle className="h-6 w-6 mr-2" />
                    Không lan truyền
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Dừng lại trước khi chia sẻ</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Kiểm tra fact-check</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Không chia sẻ khi nghi ngờ</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Báo cáo nội dung sai lệch</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Giáo dục cộng đồng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Chia sẻ kiến thức về tin giả</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Hướng dẫn người thân cách kiểm tra</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Khuyến khích tư duy phản biện</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Tạo môi trường thảo luận lành mạnh</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              <CardContent className="p-12">
                <Heart className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Cùng Xây Dựng Internet Tích Cực!
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Mỗi hành động nhỏ của bạn đều góp phần tạo nên một môi tr��ờng
                  mạng an toàn và tích cực cho tất cả mọi người
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Cam kết thực hành đạo đức số
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Chia sẻ với cộng đồng
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* =================================== */}
      {/* MOBILE VERSION - Full Content       */}
      {/* =================================== */}
      <div className="lg:hidden">
        {/* Pull-to-Refresh Indicator */}
        {isRefreshing && (
          <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 text-center z-50 animate-in slide-in-from-top duration-300">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm">Đang làm mới...</span>
            </div>
          </div>
        )}

        {/* Mobile Header - Enhanced with Controls */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 transform -translate-x-12 translate-y-12"></div>

          {/* Header Controls */}
          <div className="relative flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              className="text-white hover:bg-white/10 p-2 rounded-full"
              disabled={isRefreshing}
            >
              <Heart
                className={`h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`}
              />
            </Button>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:bg-white/10 p-2 rounded-full"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative px-6 pb-8 text-center">
            <div className="animate-in zoom-in duration-500">
              <Heart className="h-14 w-14 mx-auto mb-6 animate-pulse drop-shadow-lg" />
            </div>
            <div className="animate-in slide-in-from-bottom duration-700 delay-200">
              <h1 className="text-3xl font-bold mb-3 tracking-wide leading-tight">
                Đạo Đức Số
              </h1>
              <p className="text-base opacity-95 mb-8 leading-relaxed px-4">
                Xây dựng internet tích cực cùng nhau một cách có trách nhiệm
              </p>
            </div>

            {/* Enhanced Quick Stats Mobile - Better Readability */}
            <div className="grid grid-cols-3 gap-3 mt-8 animate-in slide-in-from-bottom duration-700 delay-300">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/25 transition-colors">
                <div className="text-2xl font-bold mb-1">78%</div>
                <div className="text-sm opacity-90 leading-tight">
                  Muốn internet tích cực
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/25 transition-colors">
                <div className="text-2xl font-bold mb-1">4.2 tỷ</div>
                <div className="text-sm opacity-90 leading-tight">
                  Người dùng toàn cầu
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/25 transition-colors">
                <div className="text-2xl font-bold mb-1">85%</div>
                <div className="text-sm opacity-90 leading-tight">
                  Tin giả qua MXH
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Modal */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
            <div className="fixed top-0 left-0 right-0 bg-white animate-in slide-in-from-top duration-300">
              <div className="p-4 border-b">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Tìm kiếm nguyên tắc, mẹo..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      autoFocus
                    />
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2"
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {searchQuery && (
                <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                  {ethicsRules
                    .filter(
                      (rule) =>
                        rule.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                        rule.description
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()),
                    )
                    .map((rule) => (
                      <Card
                        key={rule.id}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => {
                          setSelectedEthicsDetail(rule.id);
                          setIsSearchOpen(false);
                        }}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-8 h-8 rounded-lg ${rule.color} flex items-center justify-center`}
                            >
                              <rule.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">
                                {rule.title}
                              </h4>
                              <p className="text-xs text-gray-600">
                                {rule.shortDesc}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* PWA Install Prompt */}
        {showInstallPrompt && (
          <div className="fixed bottom-32 left-4 right-4 z-50 lg:hidden animate-in slide-in-from-bottom duration-500">
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 shadow-2xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Cài đặt App</h4>
                      <p className="text-xs opacity-90">
                        Truy cập nhanh hơn, offline
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowInstallPrompt(false)}
                      className="text-white hover:bg-white/10 px-3 py-1 h-8"
                    >
                      Bỏ qua
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleInstallPWA}
                      className="bg-white text-blue-600 hover:bg-gray-100 px-3 py-1 h-8"
                    >
                      Cài đặt
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Mobile Navigation Menu - Enhanced */}
        <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-40">
          <div className="px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-purple-300"></div>
                  <div className="w-1 h-1 rounded-full bg-purple-200"></div>
                </div>
                <h2 className="font-bold text-gray-900 text-xl leading-tight">
                  {currentMobileSection === "main"
                    ? "🎯 Khám phá nội dung"
                    : "📖 Đang học"}
                </h2>
              </div>
              <Badge
                variant="outline"
                className={`text-sm px-4 py-2 rounded-full font-medium transition-colors ${
                  currentMobileSection === "main"
                    ? "bg-purple-50 text-purple-700 border-purple-200"
                    : currentMobileSection === "ethics"
                      ? "bg-pink-50 text-pink-700 border-pink-200"
                      : currentMobileSection === "stats"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : currentMobileSection === "wellbeing"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : currentMobileSection === "communication"
                            ? "bg-orange-50 text-orange-700 border-orange-200"
                            : currentMobileSection === "misinformation"
                              ? "bg-red-50 text-red-700 border-red-200"
                              : "bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                {currentMobileSection === "main"
                  ? "Trang chính"
                  : currentMobileSection === "ethics"
                    ? "Nguyên tắc"
                    : currentMobileSection === "stats"
                      ? "Thống kê"
                      : currentMobileSection === "wellbeing"
                        ? "Sức khỏe số"
                        : currentMobileSection === "communication"
                          ? "Giao tiếp"
                          : currentMobileSection === "misinformation"
                            ? "Chống tin giả"
                            : "Khác"}
              </Badge>
            </div>

            {/* Learning Context - Hiểu được đang ở đâu */}
            {currentMobileSection !== "main" && (
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="flex items-center space-x-2 text-purple-700 mb-2">
                  <Lightbulb className="h-4 w-4" />
                  <span className="text-sm font-semibold">
                    Mẹo học tập hiệu quả:
                  </span>
                </div>
                <p className="text-sm text-purple-600 leading-relaxed">
                  Đọc từ từ, suy ngẫm từng ý và thử áp dụng vào tình huống thực
                  tế để ghi nhớ tốt nhất
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Content with Swipe Gestures */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="select-none"
        >
          {/* Main Section */}
          {currentMobileSection === "main" && (
            <div
              className={`px-4 py-6 space-y-6 ${isGoingBack ? "animate-in slide-in-from-left duration-300" : "animate-in slide-in-from-right duration-300"}`}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  💜 Khám phá đạo đức số
                </h2>
                <p className="text-gray-600 text-base leading-relaxed px-4">
                  Chọn chủ đề bạn muốn tìm hiểu. Mỗi phần được thiết kế dễ đọc
                  và dễ hiểu.
                </p>

                {/* Learning Steps Guide */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-center space-x-2 text-blue-700 mb-2">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      Cách học hiệu quả
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-8 text-xs text-blue-600">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Đọc</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Hiểu</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Thực hành</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Menu Cards - Improved Touch Targets */}
              <div className="space-y-4 pb-24">
                <Card
                  className="cursor-pointer active:scale-98 transition-all duration-200 border-l-4 border-purple-400 hover:shadow-lg touch-manipulation"
                  onClick={() => navigateToSection("ethics")}
                >
                  <CardContent className="p-7">
                    <div className="flex items-center justify-between min-h-[80px]">
                      <div className="flex items-center space-x-5 flex-1">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shadow-sm">
                          <Heart className="h-8 w-8 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                            6 Nguyên tắc đạo đ���c
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed mb-3">
                            Hướng dẫn ứng xử văn minh và có trách nhiệm trong
                            không gian mạng
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 text-purple-600">
                              <Lightbulb className="h-3 w-3" />
                              <span>6 bài học</span>
                            </div>
                            <div className="flex items-center space-x-1 text-green-600">
                              <CheckCircle className="h-3 w-3" />
                              <span>Dễ hiểu</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-7 w-7 text-purple-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer active:scale-98 transition-all duration-200 border-l-4 border-blue-400 hover:shadow-lg touch-manipulation"
                  onClick={() => navigateToSection("stats")}
                >
                  <CardContent className="p-7">
                    <div className="flex items-center justify-between min-h-[80px]">
                      <div className="flex items-center space-x-5 flex-1">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-sm">
                          <BarChart3 className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                            Thống kê toàn cầu
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed mb-3">
                            Các con số đáng chú ý về đạo đức số trên thế giới
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 text-blue-600">
                              <BarChart3 className="h-3 w-3" />
                              <span>4 số liệu</span>
                            </div>
                            <div className="flex items-center space-x-1 text-orange-600">
                              <Eye className="h-3 w-3" />
                              <span>Trực quan</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-7 w-7 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer active:scale-98 transition-all duration-200 border-l-4 border-green-400 hover:shadow-lg touch-manipulation"
                  onClick={() => navigateToSection("wellbeing")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between min-h-[60px]">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center shadow-sm">
                          <Brain className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                            Sức khỏe số
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed mb-3">
                            Cân bằng và sử dụng công nghệ một cách lành mạnh
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 text-green-600">
                              <Coffee className="h-3 w-3" />
                              <span>6 mẹo hay</span>
                            </div>
                            <div className="flex items-center space-x-1 text-blue-600">
                              <Smile className="h-3 w-3" />
                              <span>Thư giãn</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer active:scale-98 transition-all duration-200 border-l-4 border-orange-400 hover:shadow-lg touch-manipulation"
                  onClick={() => navigateToSection("communication")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between min-h-[60px]">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center shadow-sm">
                          <MessageCircle className="h-8 w-8 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                            K�� năng giao tiếp
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed mb-3">
                            Cách giao tiếp hiệu quả và xây dựng mối quan hệ tích
                            cực
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 text-orange-600">
                              <MessageCircle className="h-3 w-3" />
                              <span>3 kỹ năng</span>
                            </div>
                            <div className="flex items-center space-x-1 text-purple-600">
                              <Users className="h-3 w-3" />
                              <span>Tương tác</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer active:scale-98 transition-all duration-200 border-l-4 border-red-400 hover:shadow-lg touch-manipulation"
                  onClick={() => navigateToSection("misinformation")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between min-h-[60px]">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center shadow-sm">
                          <Shield className="h-8 w-8 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                            Chống tin giả
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed mb-3">
                            Nhận biết và ngăn chặn sự lan truyền thông tin sai
                            lệch
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 text-red-600">
                              <Shield className="h-3 w-3" />
                              <span>3 cách</span>
                            </div>
                            <div className="flex items-center space-x-1 text-green-600">
                              <CheckCircle className="h-3 w-3" />
                              <span>Kiểm chứng</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Quick Action Card - Learning Focused */}
              <div className="mt-8 mb-16">
                <Card className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border-0 shadow-xl animate-in zoom-in duration-500 delay-500">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      {/* Visual Icon */}
                      <div className="relative mx-auto w-20 h-20">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <Heart className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-md">
                          <CheckCircle className="h-3 w-3 text-green-800" />
                        </div>
                      </div>

                      {/* Clear Learning Message */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-purple-800 text-xl leading-tight">
                          🌟 Sẵn sàng bắt đầu hành trình học?
                        </h3>
                        <p className="text-purple-700 text-base leading-relaxed px-4">
                          Cam kết thực hành những nguyên tắc đạo đức số và trở
                          thành công dân số có trách nhiệm
                        </p>

                        {/* Learning Benefits */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Brain className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-xs text-blue-600 font-medium">
                              Dễ học
                            </span>
                          </div>
                          <div className="text-center">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Target className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-xs text-green-600 font-medium">
                              Thực tế
                            </span>
                          </div>
                          <div className="text-center">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Zap className="h-4 w-4 text-orange-600" />
                            </div>
                            <span className="text-xs text-orange-600 font-medium">
                              Hiệu quả
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Clear Action Button */}
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 font-semibold">
                        <Heart className="h-5 w-5 mr-3" />
                        Bắt đầu học ngay
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Ethics Section */}
          {currentMobileSection === "ethics" && (
            <div className="animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="p-3 rounded-xl hover:bg-purple-50 active:scale-95 transition-all duration-200 touch-manipulation"
                >
                  <ArrowLeft className="h-5 w-5 text-purple-600" />
                </Button>
                <h2 className="font-bold text-gray-900 text-lg">
                  6 Nguyên tắc đạo đức
                </h2>
                <div className="w-12"></div>
              </div>

              <div className="p-6 space-y-6 pb-16">
                {/* Learning Progress Indicator */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Tầm quan trọng
                    </span>
                    <span className="text-sm font-bold text-purple-600">
                      {ethicsRules.length}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {ethicsRules.map((_, idx) => (
                      <div
                        key={idx}
                        className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden"
                      >
                        <div className="h-full bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
                {ethicsRules.map((ethics, index) => (
                  <Card
                    key={ethics.id}
                    className="cursor-pointer hover:shadow-lg transition-all duration-200 active:scale-98 touch-manipulation border-l-4"
                    style={{
                      borderLeftColor: ethics.color
                        .split(" ")[0]
                        .replace("text-", "")
                        .replace("-600", ""),
                    }}
                    onClick={() => setSelectedEthicsDetail(ethics.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between min-h-[60px]">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${ethics.color} flex items-center justify-center`}
                          >
                            <ethics.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-base text-left mb-1">
                              {ethics.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {ethics.shortDesc}
                            </p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {ethics.importance}
                              </Badge>
                              <span className="text-xs text-purple-600 font-semibold">
                                {ethics.importanceLevel}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleItemBookmark(
                                  `section_${["ethics", "stats", "wellbeing", "communication", "misinformation"][index]}`,
                                );
                              }}
                              className="p-1 hover:bg-gray-100 rounded-full"
                            >
                              {bookmarkedItems.includes(
                                `section_${["ethics", "stats", "wellbeing", "communication", "misinformation"][index]}`,
                              ) ? (
                                <Heart className="h-4 w-4 text-red-500 fill-current" />
                              ) : (
                                <Heart className="h-4 w-4 text-gray-400" />
                              )}
                            </Button>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                          <span className="text-xs text-gray-500">
                            Xem chi tiết
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Statistics Section */}
          {currentMobileSection === "stats" && (
            <div className="animate-in slide-in-from-right duration-300">
                           <div className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="p-3 rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-200 touch-manipulation"
                >
                  <ArrowLeft className="h-5 w-5 text-blue-600" />
                </Button>
                <h2 className="font-bold text-gray-900 text-lg">
                  Thống kê toàn cầu
                </h2>
                <div className="w-12"></div>
              </div>

              <div className="p-6 space-y-6 pb-24">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    📊 Đạo đức số trên thế giới
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Những con s��� cho thấy tầm quan tr��ng của đạo đ��c trong không
                    gian số
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {ethicsStats.map((stat, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-4">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                        >
                          <span className="text-2xl font-bold text-white">
                            {stat.value}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">
                          {stat.label}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {stat.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Digital Wellbeing Section */}
          {currentMobileSection === "wellbeing" && (
            <div className="animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="p-3 rounded-xl hover:bg-green-50 active:scale-95 transition-all duration-200 touch-manipulation"
                >
                  <ArrowLeft className="h-5 w-5 text-green-600" />
                </Button>
                <h2 className="font-bold text-gray-900 text-lg">Sức khỏe số</h2>
                <div className="w-12"></div>
              </div>

              <div className="p-6 space-y-6 pb-24">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    🧠 Phúc lợi kỹ thuật số
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Cách sử dụng công nghệ một cách lành mạnh và cân bằng
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      icon: "⏰",
                      title: "Cân bằng thời gian online",
                      description: "Sử dụng công nghệ một cách có ý thức",
                      tips: [
                        "Đặt giới hạn thời gian",
                        "Tạo thói quen offline",
                        "Sử dụng digital wellness apps",
                      ],
                    },
                    {
                      icon: "📱",
                      title: "Tránh nghiện mạng xã hội",
                      description: "Nhận biết và kiểm soát thói quen sử dụng",
                      tips: [
                        "Tắt thông báo không cần thiết",
                        "Xóa apps gây nghiện",
                        "Tạo không gian không có điện thoại",
                      ],
                    },
                    {
                      icon: "🧠",
                      title: "Bảo vệ sức khỏe tinh thần",
                      description: "Tránh so sánh và áp lực từ mạng xã hội",
                      tips: [
                        "Unfollow tài khoản tiêu cực",
                        "Tập mindfulness",
                        "Tìm kiếm hỗ trợ khi cần",
                      ],
                    },
                    {
                      icon: "📚",
                      title: "Học hỏi liên tục",
                      description: "Sử dụng internet để phát triển bản thân",
                      tips: [
                        "Theo dõi kênh giáo dục",
                        "Tham gia khóa học online",
                        "Đọc nội dung chất lượng",
                      ],
                    },
                    {
                      icon: "🌱",
                      title: "Ý thức môi trường số",
                      description:
                        "Giảm thiểu tác động môi trường của hoạt động số",
                      tips: [
                        "Giảm streaming không cần thiết",
                        "Xóa email và file cũ",
                        "Chọn thiết bị bền vững",
                      ],
                    },
                    {
                      icon: "🔒",
                      title: "Bảo vệ dữ liệu cá nhân",
                      description: "Kiểm soát thông tin cá nhân được chia sẻ",
                      tips: [
                        "Kiểm tra cài đặt privacy",
                        "Sử dụng mật khẩu mạnh",
                        "Cẩn thận với thông tin nhạy cảm",
                      ],
                    },
                  ].map((item, index) => (
                    <Collapsible key={index}>
                      <Card>
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-gray-50">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{item.icon}</span>
                                <div className="text-left">
                                  <h3 className="font-semibold text-sm">
                                    {item.title}
                                  </h3>
                                  <p className="text-xs text-gray-600">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <div className="space-y-2">
                              {item.tips.map((tip, tipIndex) => (
                                <div
                                  key={tipIndex}
                                  className="flex items-start space-x-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                  <span className="text-sm text-gray-700">
                                    {tip}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Communication Section */}
          {currentMobileSection === "communication" && (
            <div className="animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="p-3 rounded-xl hover:bg-orange-50 active:scale-95 transition-all duration-200 touch-manipulation"
                >
                  <ArrowLeft className="h-5 w-5 text-orange-600" />
                </Button>
                <h2 className="font-bold text-gray-900 text-lg">
                  Kỹ năng giao tiếp
                </h2>
                <div className="w-12"></div>
              </div>

              <div className="p-6 space-y-6 pb-24">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    💬 Giao tiếp online hiệu quả
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Những mẹo thực tế để giao tiếp hiệu quả và xây dựng mối quan
                    hệ tích cực
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: CheckCircle,
                      title: "Giao tiếp hiệu quả",
                      color: "text-green-600 bg-green-100",
                      tips: [
                        "Rõ ràng và súc tích",
                        "Sử dụng emoji phù hợp để thể hiện cảm xúc",
                        "Đọc kỹ trước khi trả lời",
                        "Tránh viết hoa toàn bộ (có vẻ như đang la hét)",
                        "Sử dụng ngôn ngữ tích cực",
                        "Cảm ơn và ghi nhận người khác",
                      ],
                    },
                    {
                      icon: AlertCircle,
                      title: "Xử lý xung đột",
                      color: "text-orange-600 bg-orange-100",
                      tips: [
                        "Bình tĩnh, không phản ứng cảm xúc",
                        "Tìm điểm chung thay vì nhấn mạnh khác biệt",
                        "Chuyển sang chat riêng nếu cần",
                        "Biết khi nào nên dừng cuộc tranh luận",
                        "Xin lỗi khi mắc lỗi",
                        "Tập trung vào giải pháp",
                      ],
                    },
                    {
                      icon: ThumbsUp,
                      title: "Xây dựng mối quan hệ",
                      color: "text-blue-600 bg-blue-100",
                      tips: [
                        "Ghi nhận và khen người đóng góp tích cực",
                        "Chia sẻ kinh nghiệm và kiến thức",
                        "Hỗ trợ người khác khi có thể",
                        "Tham gia thảo luận một cách tích cực",
                        "Tạo cộng đồng tích cực",
                        "Kết nối những người có cùng quan tâm",
                      ],
                    },
                  ].map((section, index) => (
                    <Collapsible key={index}>
                      <Card>
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-gray-50">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-10 h-10 rounded-lg ${section.color} flex items-center justify-center`}
                                >
                                  <section.icon className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-sm text-left">
                                  {section.title}
                                </h3>
                              </div>
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <div className="space-y-2">
                              {section.tips.map((tip, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start space-x-2"
                                >
                                  <ThumbsUp className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">
                                    {tip}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Misinformation Section */}
          {currentMobileSection === "misinformation" && (
            <div className="animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="p-3 rounded-xl hover:bg-red-50 active:scale-95 transition-all duration-200 touch-manipulation"
                >
                  <ArrowLeft className="h-5 w-5 text-red-600" />
                </Button>
                <h2 className="font-bold text-gray-900 text-lg">
                  Chống tin giả
                </h2>
                <div className="w-12"></div>
              </div>

              <div className="p-6 space-y-6 pb-24">
                <div className="text-center mb-6">
                  <AlertCircle className="h-12 w-12 mx-auto mb-3 text-orange-600" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    🛡️ Chống thông tin sai lệch
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Làm thế nào đ��� nhận biết và ngăn chặn sự lan truyền thông
                    tin sai lệch
                  </p>
                </div>

                <div className="space-y-4">
                  <Card className="border-orange-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-orange-700">
                        <Eye className="h-5 w-5 mr-2" />
                        Nhận biết tin giả
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          "Kiểm tra nguồn gốc thông tin",
                          "Tìm kiếm các nguồn tin khác",
                          "Chú ý ngày tháng và bối cảnh",
                          "Phân tích hình ảnh và video",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-sm text-gray-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-red-700">
                        <XCircle className="h-5 w-5 mr-2" />
                        Không lan truyền
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          "Dừng lại trước khi chia sẻ",
                          "Kiểm tra fact-check",
                          "Không chia sẻ khi nghi ngờ",
                          "Báo cáo nội dung sai lệch",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-sm text-gray-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-700">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Giáo dục cộng đồng
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          "Chia sẻ kiến thức về tin giả",
                          "Hướng dẫn người thân cách kiểm tra",
                          "Khuyến khích tư duy phản biện",
                          "Tạo môi trường thảo luận lành mạnh",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-sm text-gray-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Integrated Floating Navigation Button */}
        <div className="fixed bottom-6 right-6 lg:hidden z-50">
          <Button
            size="lg"
            onClick={() => setShowFloatingNav(!showFloatingNav)}
            className={`w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-500 active:scale-95 ${
              showFloatingNav ? "rotate-45 scale-110" : "rotate-0 scale-100"
            }`}
          >
            <div
              className={`transition-all duration-300 ${showFloatingNav ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
            >
              <Heart className="h-7 w-7 text-white" />
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${showFloatingNav ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            >
              <XCircle className="h-6 w-6 text-white" />
            </div>
          </Button>
        </div>

        {/* Vertical Floating Navigation Menu */}
        {showFloatingNav && (
          <div
            className="fixed inset-0 lg:hidden z-40"
            onClick={() => setShowFloatingNav(false)}
          >
            <div className="fixed bottom-24 right-6 flex flex-col-reverse items-center space-y-reverse space-y-2">
              {/* Navigation Buttons - Animate from bottom to top */}
              {[
                {
                  icon: Home,
                  section: "main",
                  color: "purple",
                  delay: "delay-[50ms]",
                },
                {
                  icon: Heart,
                  section: "ethics",
                  color: "pink",
                  delay: "delay-[100ms]",
                },
                {
                  icon: BarChart3,
                  section: "stats",
                  color: "blue",
                  delay: "delay-[150ms]",
                },
                {
                  icon: Brain,
                  section: "wellbeing",
                  color: "green",
                  delay: "delay-[200ms]",
                },
                {
                  icon: MessageCircle,
                  section: "communication",
                  color: "orange",
                  delay: "delay-[250ms]",
                },
                {
                  icon: Shield,
                  section: "misinformation",
                  color: "red",
                  delay: "delay-[300ms]",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                const isActive = currentMobileSection === item.section;

                return (
                  <Button
                    key={item.section}
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.section === "main") {
                        setCurrentMobileSection("main");
                      } else {
                        navigateToSection(item.section);
                      }
                      setShowFloatingNav(false);
                    }}
                    className={`
                      w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95
                      animate-in slide-in-from-bottom ${item.delay}
                      ${
                        isActive
                          ? item.color === "purple"
                            ? "bg-purple-500 hover:bg-purple-600 text-white scale-105"
                            : item.color === "pink"
                              ? "bg-pink-500 hover:bg-pink-600 text-white scale-105"
                              : item.color === "blue"
                                ? "bg-blue-500 hover:bg-blue-600 text-white scale-105"
                                : item.color === "green"
                                  ? "bg-green-500 hover:bg-green-600 text-white scale-105"
                                  : item.color === "orange"
                                    ? "bg-orange-500 hover:bg-orange-600 text-white scale-105"
                                    : "bg-red-500 hover:bg-red-600 text-white scale-105"
                          : item.color === "purple"
                            ? "bg-white hover:bg-purple-50 text-purple-600 border-2 border-purple-200"
                            : item.color === "pink"
                              ? "bg-white hover:bg-pink-50 text-pink-600 border-2 border-pink-200"
                              : item.color === "blue"
                                ? "bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-200"
                                : item.color === "green"
                                  ? "bg-white hover:bg-green-50 text-green-600 border-2 border-green-200"
                                  : item.color === "orange"
                                    ? "bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-200"
                                    : "bg-white hover:bg-red-50 text-red-600 border-2 border-red-200"
                      }
                    `}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Sheet Modal for Ethics Details */}
        {selectedEthicsDetail && (
          <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
            <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-hidden animate-in slide-in-from-bottom duration-300">
              {/* Bottom Sheet Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white sticky top-0">
                <h3 className="text-lg font-bold text-gray-900">
                  Chi tiết nguyên tắc
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedEthicsDetail(null)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <XCircle className="h-5 w-5 text-gray-500" />
                </Button>
              </div>

              {/* Bottom Sheet Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-6 space-y-6">
                {selectedEthicsDetail &&
                  ethicsRules.find(
                    (rule) => rule.id === selectedEthicsDetail,
                  ) && (
                    <>
                      {(() => {
                        const rule = ethicsRules.find(
                          (r) => r.id === selectedEthicsDetail,
                        )!;
                        return (
                          <>
                            {/* Rule Header */}
                            <div className="text-center space-y-4">
                              <div
                                className={`w-16 h-16 mx-auto rounded-2xl ${rule.color} flex items-center justify-center`}
                              >
                                <rule.icon className="h-8 w-8" />
                              </div>
                              <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">
                                  {rule.title}
                                </h2>
                                <Badge variant="outline" className="mb-3">
                                  {rule.importance}
                                </Badge>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {rule.description}
                                </p>
                              </div>
                            </div>

                            {/* Progress */}
                            <div className="bg-gray-50 rounded-xl p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-700">
                                  Tầm quan trọng
                                </span>
                                <span className="text-sm font-bold text-purple-600">
                                  {rule.importanceLevel}%
                                </span>
                              </div>
                              <Progress
                                value={rule.importanceLevel}
                                className="h-2"
                              />
                            </div>

                            {/* Do's and Don'ts */}
                            <div className="space-y-4">
                              <div className="bg-green-50 rounded-xl p-4">
                                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  NÊN LÀM
                                </h4>
                                <div className="space-y-2">
                                  {rule.dos.map((item, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start space-x-2"
                                    >
                                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-sm text-gray-700">
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="bg-red-50 rounded-xl p-4">
                                <h4 className="font-bold text-red-800 mb-3 flex items-center">
                                  <XCircle className="h-4 w-4 mr-2" />
                                  KHÔNG NÊN LÀM
                                </h4>
                                <div className="space-y-2">
                                  {rule.donts.map((item, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start space-x-2"
                                    >
                                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-sm text-gray-700">
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 pt-4">
                              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-xl">
                                <Heart className="h-4 w-4 mr-2" />
                                Cam kết thực hành nguyên tắc này
                              </Button>
                              <Button
                                variant="outline"
                                className="w-full py-3 rounded-xl"
                              >
                                <Share2 className="h-4 w-4 mr-2" />
                                Chia sẻ nguyên tắc
                              </Button>
                            </div>
                          </>
                        );
                      })()}
                    </>
                  )}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
