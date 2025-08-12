import { useState, useEffect } from "react";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";
import {
  Scale,
  Copyright,
  Shield,
  FileText,
  Image,
  Music,
  Video,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Gavel,
  Users,
  Lock,
  Smartphone,
  Flag,
  DollarSign,
  Eye,
  Heart,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  TrendingUp,
  Globe,
  Lightbulb,
  Brain,
  Zap,
  Coffee,
  Target,
  ArrowLeft,
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

export default function DigitalLaw() {
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);
  const [selectedRule, setSelectedRule] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<string[]>([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Page entrance animation
  useEffect(() => {
    // Set page as loaded to trigger animations
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    // Simple animation for legal rules when component mounts
    const cards = document.querySelectorAll(".legal-rule-card");
    cards.forEach((card, index) => {
      setTimeout(
        () => {
          card.classList.add("animate-in");
        },
        800 + index * 150,
      ); // Delay after page animation
    });
  }, []);

  // Cleanup body scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const toggleBookmark = (itemId: string) => {
    setBookmarkedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const toggleCardExpansion = (ruleId: string) => {
    setExpandedCards((prev) =>
      prev.includes(ruleId)
        ? prev.filter((id) => id !== ruleId)
        : [...prev, ruleId],
    );
  };

  const showRuleDetails = (ruleId: string) => {
    setSelectedRule(ruleId);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const hideRuleDetails = () => {
    setSelectedRule(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = "unset";
  };

  const digitalLawStats = [
    {
      value: "89%",
      label: "Vi ph��m bản quyền không cố ý",
      color: "from-purple-500 to-purple-600",
      description: "Do thiếu hiểu biết",
    },
    {
      value: "2.1 tỷ",
      label: "Thiệt hại bản quyền toàn cầu",
      color: "from-blue-500 to-blue-600",
      description: "USD/năm 2023",
    },
    {
      value: "75 triệu",
      label: "Mức phạt tối đa cá nhân",
      color: "from-red-500 to-red-600",
      description: "VNĐ tại Việt Nam",
    },
    {
      value: "150 triệu",
      label: "Mức phạt tối đa tổ chức",
      color: "from-orange-500 to-orange-600",
      description: "VNĐ tại Việt Nam",
    },
  ];

  const legalRules = [
    {
      id: "copyright",
      icon: Copyright,
      title: "Bản quyền tác phẩm",
      importance: "Cực kỳ quan trọng",
      importanceLevel: 98,
      color: "text-purple-600 bg-purple-100",
      gradient: "from-purple-500 to-indigo-500",
      shortDesc: "Tôn trọng quyền sở hữu trí tuệ của tác giả",
      impact: "Bảo vệ sáng tạo",
      usage: "Mọi tác phẩm số",
      description:
        "Bản quyền bảo vệ quyền của tác giả đối với tác phẩm sáng tạo, bao gồm văn bản, hình ảnh, âm nhạc và video.",
      dos: [
        "Xin phép tác giả trước khi sử dụng",
        "Sử dụng tài nguyên Creative Commons",
        "Tạo nội dung gốc của riêng m��nh",
        "Trích dẫn nguồn rõ ràng khi cần",
        "Mua license khi sử dụng thư��ng mại",
        "Tôn trọng quyền moral của tác giả",
      ],
      donts: [
        "Copy/paste nội dung không phép",
        "Crop watermark của tác giả",
        "Sử dụng ảnh từ Google Images",
        "Download nhạc, phim bản quyền trái phép",
        "Bán lại tác phẩm không phải của mình",
        "Tự nhận mình là tác giả tác phẩm",
      ],
    },
    {
      id: "privacy",
      icon: Shield,
      title: "B���o vệ dữ liệu cá nhân",
      importance: "Rất quan trọng",
      importanceLevel: 96,
      color: "text-blue-600 bg-blue-100",
      gradient: "from-blue-500 to-cyan-500",
      shortDesc: "Tuân thủ luật bảo vệ dữ liệu cá nhân",
      impact: "An toàn thông tin",
      usage: "Mọi hoạt động số",
      description:
        "Luật Bảo vệ dữ liệu cá nhân quy định nghiêm ngặt về việc thu thập, xử lý và sử dụng thông tin cá nhân.",
      dos: [
        "Xin đồng ý trước khi thu thập dữ liệu",
        "Giải thích rõ mục đích sử dụng",
        "Bảo mật dữ liệu thu thập được",
        "Cho phép người dùng chỉnh sửa/xóa",
        "Thông báo khi có rò rỉ dữ li��u",
        "Tuân thủ quyền được quên",
      ],
      donts: [
        "Thu thập d��� liệu không cần thiết",
        "Chia sẻ thông tin cho bên thứ ba",
        "S��� dụng sai mục đích đã khai báo",
        "Lưu trữ dữ liệu quá thời hạn",
        "Không bảo mật d��� liệu đúng cách",
        "Từ chối quyền truy cập dữ liệu",
      ],
    },
    {
      id: "content",
      icon: FileText,
      title: "Nội dung hợp pháp",
      importance: "Quan trọng cao",
      importanceLevel: 94,
      color: "text-green-600 bg-green-100",
      gradient: "from-green-500 to-emerald-500",
      shortDesc: "Đăng tải nội dung không vi phạm pháp luật",
      impact: "Môi trường lành mạnh",
      usage: "Mạng xã hội, website",
      description:
        "Nội dung đăng tải phải tuân thủ luật pháp Việt Nam, không vi phạm đạo đức xã hội và quy ��ịnh nền tảng.",
      dos: [
        "Ki���m tra tính chính xác thông tin",
        "Tôn trọng các giá trị xã hội",
        "Tuân thủ quy ��ịnh nền tảng",
        "Khai báo hợp tác th��ơng mại",
        "Bảo vệ danh tiếng người khác",
        "Sử dụng ngôn ngữ văn minh",
      ],
      donts: [
        "Đăng tin giả, tin đồn thất thiệt",
        "Xúc phạm danh dự, nhân phẩm",
        "Kích động bạo lực, thù hận",
        "Quảng cáo sản phẩm trái phép",
        "Tuyên truyền chống phá nhà nước",
        "Chia sẻ nội dung khiêu dâm",
      ],
    },
    {
      id: "social-media",
      icon: Smartphone,
      title: "Quy định mạng xã hội",
      importance: "Quan trọng cao",
      importanceLevel: 91,
      color: "text-orange-600 bg-orange-100",
      gradient: "from-orange-500 to-red-500",
      shortDesc: "Tuân thủ luật khi sử dụng Facebook, TikTok, YouTube",
      impact: "Sử dụng an toàn",
      usage: "Các nền tảng MXH",
      description:
        "Mỗi nền tảng mạng xã hội có quy định riêng, song song với luật pháp Việt Nam về an toàn thông tin mạng.",
      dos: [
        "Đọc và tuân thủ Community Guidelines",
        "Báo cáo nội dung vi phạm",
        "Bảo vệ tài khoản bằng 2FA",
        "Khai báo quảng cáo có trả tiền",
        "Tôn trọng quyền riêng tư người khác",
        "Sử dụng real name trên nền tảng yêu cầu",
      ],
      donts: [
        "Tạo tài khoản giả mạo",
        "Spam tin nhắn, bình luận",
        "Harassment, cyberbullying",
        "Chia sẻ link độc h���i",
        "Livestream nội dung vi phạm",
        "Mua bán tài khoản, like, follow",
      ],
    },
    {
      id: "business",
      icon: DollarSign,
      title: "Kinh doanh online",
      importance: "Quan trọng",
      importanceLevel: 88,
      color: "text-indigo-600 bg-indigo-100",
      gradient: "from-indigo-500 to-purple-500",
      shortDesc: "Tuân thủ pháp luật khi bán hàng, kinh doanh trên mạng",
      impact: "Kinh doanh bền vững",
      usage: "E-commerce, livestream",
      description:
        "Kinh doanh online phải tuân thủ luật thương mại điện tử, thuế, và bảo vệ người tiêu dùng.",
      dos: [
        "Đăng ký kinh doanh khi cần thiết",
        "Khai báo và nộp thuế đúng quy định",
        "Cung cấp thông tin sản phẩm chính xác",
        "Có chính sách đổi trả rõ ràng",
        "Bảo vệ thông tin khách hàng",
        "Tu��n thủ quy định về quảng cáo",
      ],
      donts: [
        "Bán hàng giả, hàng nhái",
        "Quảng cáo gian dối, thổi phồng",
        "Trốn thuế, không khai báo doanh thu",
        "Lừa đảo, chiếm đoạt tài sản",
        "Bán hàng cấm, hạn chế",
        "Vi phạm quyền lợi người tiêu dùng",
      ],
    },
    {
      id: "cybersecurity",
      icon: Lock,
      title: "An toàn thông tin mạng",
      importance: "Đang nổi lên",
      importanceLevel: 85,
      color: "text-red-600 bg-red-100",
      gradient: "from-red-500 to-pink-500",
      shortDesc: "Bảo vệ hệ thống và dữ liệu khỏi tấn công mạng",
      impact: "An ninh quốc gia",
      usage: "Hệ thống thông tin",
      description:
        "Luật An toàn thông tin mạng quy định về bảo vệ hệ thống thông tin quan trọng và phòng chống tấn công mạng.",
      dos: [
        "Cập nhật phần mềm bảo mật định kỳ",
        "Sử dụng mật khẩu mạnh, unique",
        "Backup dữ liệu quan trọng",
        "Báo cáo sự cố an ninh mạng",
        "Đào tạo nhân viên về cybersecurity",
        "Tuân thủ tiêu chuẩn bảo mật",
      ],
      donts: [
        "Tấn công, x��m nhập hệ thống",
        "Tạo và phát tán malware",
        "DDoS các website",
        "Hack tài khoản người khác",
        "Bán thông tin cá nhân trái phép",
        "Sử dụng công cụ hack",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-1000 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 ${
        isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Header />
      <DisclaimerBanner />

      {/* =================================== */}
      {/* DESKTOP VERSION - Full Featured     */}
      {/* =================================== */}
      <div
        className={`hidden lg:block transition-all duration-800 delay-300 ${
          isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Hero Section - Desktop */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Scale className="h-12 w-12 mr-4 animate-pulse" />
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    CÔNG LÝ VÀ PHÁP QUYỀN
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Pháp Luật Số &{" "}
                  <span className="text-yellow-300">Bản Quyền</span>
                </h1>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Hiểu biết về luật pháp, bảo vệ bản quyền và sử dụng công nghệ
                  một cách hợp pháp trong thời đ���i số.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      89%
                    </div>
                    <div className="text-sm opacity-80">Vi phạm không cố ý</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      75 triệu
                    </div>
                    <div className="text-sm opacity-80">
                      Mức phạt tối đa VNĐ
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      2.1 tỷ
                    </div>
                    <div className="text-sm opacity-80">USD thiệt hại/năm</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Bi���u tượng cân công lý lớn l��m button */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <Scale className="h-48 w-48 mx-auto text-yellow-300 drop-shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300" />

                    {/* Bên trái cân: Pháp luật số - TO HƠN */}
                    <div className="absolute -left-24 top-12">
                      <Button
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 h-auto flex-col"
                        variant="ghost"
                      >
                        <div className="text-center">
                          <Gavel className="h-12 w-12 mx-auto mb-3 text-white" />
                          <div className="text-lg font-bold text-white">
                            Pháp Luật Số
                          </div>
                          <div className="text-sm opacity-90 text-white">
                            Quy ��ịnh & Luật lệ
                          </div>
                        </div>
                      </Button>
                    </div>

                    {/* Bên phải cân: Bản quyền - TO HƠN */}
                    <div className="absolute -right-24 top-12">
                      <Button
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 h-auto flex-col"
                        variant="ghost"
                      >
                        <div className="text-center">
                          <Copyright className="h-12 w-12 mx-auto mb-3 text-white" />
                          <div className="text-lg font-bold text-white">
                            Bản Quyền
                          </div>
                          <div className="text-sm opacity-90 text-white">
                            Sở hữu trí tuệ
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-3">
                      Cân Bằng Công Lý
                    </h3>
                    <p className="text-lg opacity-90">
                      Sự kết hợp hoàn hảo giữa tuân th�� pháp luật và bảo vệ
                      quyền sáng tạo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Concepts Overview */}
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 delay-500 ${
            isPageLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khái Niệm Pháp Lý Cơ Bản
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những kiến thức nền tảng về luật sở hữu trí tuệ trong thời đ���i
              số
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Copyright className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Bản quyền (Copyright)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Quyền độc quyền của tác giả đối với tác phẩm do mình sáng tạo
                </p>
                <Badge variant="outline" className="mb-3">
                  Tự động có từ khi tác ph��m được tạo ra, không cần đăng ký
                </Badge>
                <div className="text-xs text-gray-500">
                  VD: Sách, Nhạc, Phim
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Sở hữu trí tuệ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Quyền pháp lý đối với các sáng tạo trí tuệ
                </p>
                <Badge variant="outline" className="mb-3">
                  Bao gồm bản quyền, thương hiệu, bằng sáng chế
                </Badge>
                <div className="text-xs text-gray-500">
                  VD: Logo Apple, Công thức Coca-Cola
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">
                  Fair Use/Sử dụng hợp lý
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Sử dụng tác phẩm có bản quyền mà không cần xin ph��p
                </p>
                <Badge variant="outline" className="mb-3">
                  Giáo dục, nghiên cứu, phê bình, tin tức
                </Badge>
                <div className="text-xs text-gray-500">
                  VD: Review phim, Trích dẫn luận văn
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Creative Commons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Hệ thống license cho phép chia sẻ có điều kiện
                </p>
                <Badge variant="outline" className="mb-3">
                  Các mức ��ộ từ attribution đến no derivatives
                </Badge>
                <div className="text-xs text-gray-500">
                  VD: Wikipedia, Unsplash
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Rules - CLEAN & ORGANIZED DESIGN */}
        <div
          className={`bg-gradient-to-br from-slate-50 to-blue-50 py-20 transition-all duration-1000 delay-700 ${
            isPageLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-2 shadow-sm border mb-6">
                <Scale className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium text-indigo-600">PHÁP LUẬT SỐ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                📋 Quy Định Pháp Lý
                <span className="block text-3xl md:text-4xl text-indigo-600 mt-2">Chi Tiết</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hiểu rõ và tuân thủ 6 lĩnh vực pháp lý quan trọng nhất trong hoạt động số
              </p>
            </div>

            {/* Clean Grid Layout with Better Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalRules.map((rule, index) => (
                <Card
                  key={rule.id}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-2 overflow-hidden legal-rule-card opacity-0 translate-y-8 ${
                    index === 0 ? 'bg-purple-100 border-purple-200' :
                    index === 1 ? 'bg-blue-100 border-blue-200' :
                    index === 2 ? 'bg-green-100 border-green-200' :
                    index === 3 ? 'bg-orange-100 border-orange-200' :
                    index === 4 ? 'bg-indigo-100 border-indigo-200' :
                    'bg-red-100 border-red-200'
                  }`}
                  style={{
                    animationDelay: `${800 + index * 200}ms`
                  }}
                >
                  {/* Clean Header with Priority Indicator */}
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${rule.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <rule.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-300">#{index + 1}</div>
                        <Badge variant="outline" className="text-xs">
                          {rule.importance}
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {rule.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="font-medium">{rule.importance}</span>
                      <span className="font-bold">{rule.importanceLevel}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                      <div
                        className={`h-1.5 rounded-full bg-gradient-to-r ${rule.gradient} transition-all duration-1000`}
                        style={{ width: `${rule.importanceLevel}%` }}
                      ></div>
                    </div>

                    {/* Expandable Rules Content */}
                    <div className="mb-4">
                      {/* Always show preview */}
                      <div className="bg-gray-50 rounded-lg p-3 text-xs">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="flex items-center gap-1 mb-2">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span className="font-medium text-green-700">Được phép</span>
                            </div>
                            <div className="space-y-1">
                              {rule.dos.slice(0, 2).map((item, idx) => (
                                <div key={idx} className="text-gray-600">• {item}</div>
                              ))}
                              {rule.dos.length > 2 && !expandedCards.includes(rule.id) && (
                                <div className="text-gray-400">+{rule.dos.length - 2} khác</div>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 mb-2">
                              <XCircle className="h-3 w-3 text-red-600" />
                              <span className="font-medium text-red-700">Cấm</span>
                            </div>
                            <div className="space-y-1">
                              {rule.donts.slice(0, 2).map((item, idx) => (
                                <div key={idx} className="text-gray-600">• {item}</div>
                              ))}
                              {rule.donts.length > 2 && !expandedCards.includes(rule.id) && (
                                <div className="text-gray-400">+{rule.donts.length - 2} khác</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expanded content */}
                      {expandedCards.includes(rule.id) && (
                        <div className="mt-3 bg-white rounded-lg border p-3 text-xs">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Được phép list */}
                            <div>
                              <div className="flex items-center gap-1 mb-3">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="font-bold text-green-700">✅ Toàn bộ được phép làm ({rule.dos.length})</span>
                              </div>
                              <div className="space-y-2">
                                {rule.dos.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2 p-2 bg-green-50 rounded border-l-4 border-green-200">
                                    <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span className="text-gray-700 leading-relaxed">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Full Cấm list */}
                            <div>
                              <div className="flex items-center gap-1 mb-3">
                                <XCircle className="h-4 w-4 text-red-600" />
                                <span className="font-bold text-red-700">❌ Toàn bộ không được làm ({rule.donts.length})</span>
                              </div>
                              <div className="space-y-2">
                                {rule.donts.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2 p-2 bg-red-50 rounded border-l-4 border-red-200">
                                    <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span className="text-gray-700 leading-relaxed">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className={`w-full shadow-sm ${
                          rule.gradient.includes("purple")
                            ? "bg-purple-600 hover:bg-purple-700"
                            : rule.gradient.includes("blue")
                              ? "bg-blue-600 hover:bg-blue-700"
                              : rule.gradient.includes("green")
                                ? "bg-green-600 hover:bg-green-700"
                                : rule.gradient.includes("orange")
                                  ? "bg-orange-600 hover:bg-orange-700"
                                  : rule.gradient.includes("indigo")
                                    ? "bg-indigo-600 hover:bg-indigo-700"
                                    : "bg-red-600 hover:bg-red-700"
                        }`}
                        onClick={() => toggleCardExpansion(rule.id)}
                      >
                        {expandedCards.includes(rule.id) ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-2" />
                            Thu gọn quy tắc
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-2" />
                            Xem tất cả quy tắc
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Lưu ý quan trọng
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tại sao cần tuân thủ pháp luật số?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">75 tri���u VNĐ</div>
                  <div className="text-sm text-gray-700 font-medium">Mức phạt tối đa cá nhân</div>
                  <div className="text-xs text-gray-500 mt-1">Theo luật Việt Nam</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">150 triệu VNĐ</div>
                  <div className="text-sm text-gray-700 font-medium">Mức phạt tối đa tổ chức</div>
                  <div className="text-xs text-gray-500 mt-1">Doanh nghiệp vi phạm</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                  <div className="text-sm text-gray-700 font-medium">Vi phạm không cố ý</div>
                  <div className="text-xs text-gray-500 mt-1">Do thiếu hiểu biết</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Impact Numbers */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🎯 Tác Động Pháp Lý Trong Thời Đại Số
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những con số thực tế về vi phạm và tổn thất từ việc không tuân
                thủ luật
              </p>
            </div>

            {/* Stats in horizontal layout */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 shadow-sm border">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {digitalLawStats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="mb-4">
                      <div
                        className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                      >
                        {stat.value}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
                        {stat.label}
                      </h3>
                    </div>
                    <div className="text-xs text-gray-500 border-t pt-3">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom insight */}
            <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white text-center">
              <div className="flex items-center justify-center mb-3">
                <AlertTriangle className="h-6 w-6 mr-2" />
                <span className="font-semibold">Thông tin quan trọng</span>
              </div>
              <p className="text-indigo-100">
                89% vi phạm bản quyền xảy ra do thiếu hiểu biết pháp luật, không
                phải cố ý làm sai
              </p>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">
            <CardContent className="p-12">
              <Scale className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cùng Xây Dựng Không Gian Số Hợp Pháp!
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Hiểu biết pháp luật giúp bạn sáng tạo tự do và bảo vệ quyền lợi
                của bản thân cũng như ng����i khác
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-indigo-600 hover:bg-gray-100"
                >
                  <Scale className="h-5 w-5 mr-2" />
                  Tìm hiểu thêm luật Việt Nam
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* =================================== */}
      {/* MOBILE VERSION                      */}
      {/* =================================== */}
      <div
        className={`lg:hidden transition-all duration-800 delay-300 ${
          isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Mobile Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

          <div className="relative px-6 py-12 text-center">
            <Scale className="h-14 w-14 mx-auto mb-6 animate-pulse drop-shadow-lg" />
            <h1 className="text-3xl font-bold mb-3 tracking-wide leading-tight">
              Pháp Luật Số & Bản Quyền
            </h1>
            <p className="text-base opacity-95 mb-8 leading-relaxed px-4">
              Hi���u biết pháp luật để sử dụng công nghệ một cách hợp pháp và an
              toàn
            </p>

            {/* Quick Stats Mobile */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl font-bold mb-1">89%</div>
                <div className="text-sm opacity-90 leading-tight">
                  Vi phạm không cố ý
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl font-bold mb-1">75 triệu</div>
                <div className="text-sm opacity-90 leading-tight">
                  Mức phạt tối đa VNĐ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="px-4 py-6 space-y-6">
          {/* Legal Concepts Mobile */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
              💼 Khái niệm pháp lý cơ bản
            </h2>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <Card className="p-4 text-center">
                <Copyright className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-sm font-semibold">Bản quyền</div>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-sm font-semibold">Sở hữu trí tuệ</div>
              </Card>
              <Card className="p-4 text-center">
                <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-sm font-semibold">Fair Use</div>
              </Card>
              <Card className="p-4 text-center">
                <Lock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-sm font-semibold">Creative Commons</div>
              </Card>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
              ⚖️ Quy định pháp lý chi tiết
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              6 lĩnh vực pháp lý quan trọng khi hoạt động số
            </p>
          </div>

          <div className="space-y-4 pb-24">
            {legalRules.map((rule, index) => (
              <Card
                key={rule.id}
                className="cursor-pointer transition-all duration-200 border-l-4 hover:shadow-lg"
                style={{
                  borderLeftColor: rule.gradient.includes("purple")
                    ? "#8b5cf6"
                    : rule.gradient.includes("blue")
                      ? "#3b82f6"
                      : rule.gradient.includes("green")
                        ? "#10b981"
                        : rule.gradient.includes("orange")
                          ? "#f59e0b"
                          : rule.gradient.includes("indigo")
                            ? "#6366f1"
                            : "#ef4444",
                }}
                onClick={() => showRuleDetails(rule.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${rule.gradient} flex items-center justify-center shadow-sm`}
                    >
                      <rule.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                        {rule.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {rule.shortDesc}
                      </p>
                      <div className="flex items-center space-x-4 text-xs">
                        <div className="flex items-center space-x-1 text-indigo-600">
                          <Scale className="h-3 w-3" />
                          <span>{rule.importance}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-green-600">
                          <CheckCircle className="h-3 w-3" />
                          <span>
                            {rule.dos.length + rule.donts.length} quy tắc
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Rule View Modal */}
      {selectedRule && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={hideRuleDetails}
          data-modal="rule-details"
          style={{
            position: "fixed !important",
            top: "0 !important",
            left: "0 !important",
            right: "0 !important",
            bottom: "0 !important",
            zIndex: 9999,
          }}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: "calc(100vh - 8rem)",
              margin: "auto",
            }}
          >
            {(() => {
              const rule = legalRules.find((r) => r.id === selectedRule);
              if (!rule) return null;

              return (
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${rule.gradient} text-white p-6 rounded-t-2xl relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="relative flex items-start justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <rule.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            {rule.title}
                          </h2>
                          <Badge
                            variant="secondary"
                            className="bg-white/20 text-white border-white/30 text-sm"
                          >
                            {rule.importance}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={hideRuleDetails}
                        className="text-white hover:bg-white/20 ml-4"
                      >
                        <XCircle className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 overflow-y-auto flex-1">
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                      {rule.description}
                    </p>

                    {/* Stats - Compact Design */}
                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4 mb-6">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <TrendingUp className="h-5 w-5 text-indigo-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-500">Tác động</div>
                          <div className="font-semibold text-sm">
                            {rule.impact}
                          </div>
                        </div>
                        <div>
                          <Globe className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-500">Phạm vi</div>
                          <div className="font-semibold text-sm">
                            {rule.usage}
                          </div>
                        </div>
                        <div>
                          <Target className="h-5 w-5 text-purple-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-500">
                            Quan trọng
                          </div>
                          <div className="font-semibold text-sm">
                            {rule.importanceLevel}%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Do's and Don'ts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <h3 className="text-lg font-bold text-green-700">
                            ✅ Nên làm
                          </h3>
                        </div>
                        <div className="space-y-2">
                          {rule.dos.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2 p-3 bg-green-50 rounded-lg border-l-4 border-green-200"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <XCircle className="h-5 w-5 text-red-600" />
                          <h3 className="text-lg font-bold text-red-700">
                            ❌ Không nên làm
                          </h3>
                        </div>
                        <div className="space-y-2">
                          {rule.donts.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2 p-3 bg-red-50 rounded-lg border-l-4 border-red-200"
                            >
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 mt-6 pt-4 border-t">
                      <Button
                        onClick={() => toggleBookmark(rule.id)}
                        size="sm"
                        className={`${
                          rule.gradient.includes("purple")
                            ? "bg-purple-600 hover:bg-purple-700"
                            : rule.gradient.includes("blue")
                              ? "bg-blue-600 hover:bg-blue-700"
                              : rule.gradient.includes("green")
                                ? "bg-green-600 hover:bg-green-700"
                                : rule.gradient.includes("orange")
                                  ? "bg-orange-600 hover:bg-orange-700"
                                  : rule.gradient.includes("indigo")
                                    ? "bg-indigo-600 hover:bg-indigo-700"
                                    : "bg-red-600 hover:bg-red-700"
                        }`}
                      >
                        {bookmarkedItems.includes(rule.id) ? (
                          <Heart className="h-4 w-4 mr-2 fill-current" />
                        ) : (
                          <Bookmark className="h-4 w-4 mr-2" />
                        )}
                        {bookmarkedItems.includes(rule.id)
                          ? "Đã lưu"
                          : "Lưu để học sau"}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={hideRuleDetails}
                        size="sm"
                        className="ml-auto"
                      >
                        Đóng
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
