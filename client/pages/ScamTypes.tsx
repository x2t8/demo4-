import { useState } from "react";
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  Mail,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ChevronRight,
  Shield,
  Eye,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Star,
  Heart,
  Bookmark,
  Share2,
  Info,
  Fingerprint,
  ShieldCheck,
  Siren,
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
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";
import Statistics from "@/components/Statistics";
import SocialShare from "@/components/SocialShare";
import RealWorldExamples from "@/components/RealWorldExamples";

export default function ScamTypes() {
  const [selectedScams, setSelectedScams] = useState<string[]>([]);
  const [bookmarkedScams, setBookmarkedScams] = useState<string[]>([]);

  // Initialize protective animations
  useScrollReveal();
  useStaggeredReveal();

  const toggleBookmark = (scamId: string) => {
    setBookmarkedScams((prev) =>
      prev.includes(scamId)
        ? prev.filter((id) => id !== scamId)
        : [...prev, scamId],
    );
  };

  const scamStatistics = [
    {
      value: "15,000+",
      label: "Vụ lừa đảo online năm 2023",
      color: "from-red-500 to-red-600",
      description: "Tăng 35% so với năm trước",
    },
    {
      value: "2,500 tỷ",
      label: "VNĐ thiệt hại/năm",
      color: "from-orange-500 to-orange-600",
      description: "Trung bình 167 triệu/vụ",
    },
    {
      value: "68%",
      label: "Qua điện thoại & SMS",
      color: "from-purple-500 to-purple-600",
      description: "Hình thức phổ biến nhất",
    },
    {
      value: "25-45",
      label: "Tuổi bị lừa nhiều nhất",
      color: "from-blue-500 to-blue-600",
      description: "Độ tuổi lao động chính",
    },
  ];

  const scamDetails = [
    {
      id: "phone",
      icon: Phone,
      title: "Lừa đảo qua điện thoại",
      danger: "Cực kỳ nguy hiểm",
      dangerLevel: 92,
      color: "text-red-600 bg-red-100",
      gradient: "from-red-500 to-red-600",
      shortDesc: "Giả danh cơ quan, yêu cầu chuyển tiền",
      popularity: "92%",
      avgLoss: "45 triệu VNĐ",
      description:
        "Kẻ lừa đảo gọi điện giả danh cơ quan công an, ngân hàng, tòa án để lừa thông tin cá nhân và tiền bạc.",
      techniques: [
        "Giả danh công an, ngân hàng",
        "Tạo áp lực tâm lý",
        "Yêu cầu chuyển tiền khẩn cấp",
        "Đe dọa bắt giữ, phạt tiền",
      ],
      prevention: [
        "Không cung cấp thông tin qua điện thoại",
        "Liên hệ trực tiếp cơ quan để xác minh",
        "Không chuyển tiền theo yêu cầu",
        "Ghi âm cuộc gọi làm bằng chứng",
      ],
    },
    {
      id: "sms",
      icon: MessageSquare,
      title: "Lừa đảo qua tin nhắn",
      danger: "Rất nguy hiểm",
      dangerLevel: 78,
      color: "text-orange-600 bg-orange-100",
      gradient: "from-orange-500 to-orange-600",
      shortDesc: "Link độc hại, mã OTP giả",
      popularity: "78%",
      avgLoss: "12 triệu VNĐ",
      description:
        "Tin nhắn chứa link độc hại hoặc yêu cầu cung cấp mã OTP, thông tin thẻ ngân hàng.",
      techniques: [
        "Gửi link đ��c hại",
        "Giả mạo thông báo ngân hàng",
        "Yêu cầu mã OTP",
        "Khuyến mại giả",
      ],
      prevention: [
        "Không click link lạ",
        "Kiểm tra số điện thoại gửi",
        "Không chia sẻ mã OTP",
        "Xác minh qua kênh chính thức",
      ],
    },
    {
      id: "email",
      icon: Mail,
      title: "Lừa đảo qua email",
      danger: "Nguy hiểm",
      dangerLevel: 65,
      color: "text-yellow-600 bg-yellow-100",
      gradient: "from-yellow-500 to-yellow-600",
      shortDesc: "Phishing, đầu tư tài chính",
      popularity: "65%",
      avgLoss: "25 triệu VNĐ",
      description:
        "Email giả mạo các tổ chức uy tín để lừa thông tin đăng nhập hoặc dụ dỗ đầu tư.",
      techniques: [
        "Giả mạo website ngân hàng",
        "Lừa đầu tư forex, chứng khoán",
        "Phishing thông tin đăng nhập",
        "Đính kèm virus, malware",
      ],
      prevention: [
        "Kiểm tra địa chỉ email gửi",
        "Không tải file đính kèm lạ",
        "Xác minh website trước khi đăng nhập",
        "Sử dụng xác thực 2 lớp",
      ],
    },
    {
      id: "card",
      icon: CreditCard,
      title: "Lừa đảo thẻ chính",
      danger: "Cực kỳ nguy hiểm",
      dangerLevel: 88,
      color: "text-blue-600 bg-blue-100",
      gradient: "from-blue-500 to-blue-600",
      shortDesc: "Sao chép thẻ, đánh cắp PIN",
      popularity: "45%",
      avgLoss: "35 triệu VNĐ",
      description:
        "Sử dụng thiết bị sao chép thẻ tại ATM hoặc cửa hàng để đánh cắp thông tin thẻ.",
      techniques: [
        "Lắp thiết bị sao chép tại ATM",
        "Camera quay lén mã PIN",
        "Thẻ ATM giả",
        "Máy POS giả",
      ],
      prevention: [
        "Che tay khi nhập m�� PIN",
        "Kiểm tra ATM trước khi sử dụng",
        "Theo dõi giao dịch thường xuyên",
        "Báo ngay khi phát hiện bất thường",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 md:bg-white">
      <Header />
      <DisclaimerBanner />

      {/* Desktop/Tablet: New Layout theo hình */}
      <div className="hidden md:block">
        {/* Hero Section - Layout như DigitalEthics */}
        <section className="bg-gradient-to-br from-red-400 via-pink-400 to-red-500 relative overflow-hidden py-16 lg:py-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="text-white space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">BẢO VỆ AN TOÀN SỐ</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    An Toàn Số &
                    <span className="text-yellow-300 block">Phòng Chống</span>
                    <span className="text-yellow-300">Lừa Đảo</span>
                  </h1>

                  <p className="text-lg lg:text-xl opacity-90 leading-relaxed max-w-lg">
                    Học cách nhận biết, phòng tránh và bảo vệ b��n thân khỏi các
                    hình thức lừa đảo trực tuyến trong thời đại số hiện đại.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold">15K+</div>
                    <div className="text-sm opacity-80">Vụ lừa đảo online</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold">
                      2.5K tỷ
                    </div>
                    <div className="text-sm opacity-80">Thiệt hại/năm</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold">68%</div>
                    <div className="text-sm opacity-80">Qua đi��n thoại</div>
                  </div>
                </div>
              </div>

              {/* Right side - Cards (DigitalEthics style - Simple Grid 2x2) */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Phone,
                    title: "Lừa đảo điện thoại",
                    subtitle: "Giả danh cơ quan",
                    value: "92%",
                    color: "bg-white",
                    textColor: "text-red-600",
                  },
                  {
                    icon: MessageSquare,
                    title: "Lừa đảo SMS",
                    subtitle: "Link độc hại",
                    value: "78%",
                    color: "bg-white/90",
                    textColor: "text-orange-600",
                  },
                  {
                    icon: Mail,
                    title: "Lừa đảo Email",
                    subtitle: "Phishing tài khoản",
                    value: "65%",
                    color: "bg-white/80",
                    textColor: "text-yellow-600",
                  },
                  {
                    icon: CreditCard,
                    title: "Lừa đảo thẻ",
                    subtitle: "Sao chép thông tin",
                    value: "45%",
                    color: "bg-white/70",
                    textColor: "text-blue-600",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className={`${item.color} border-0 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 ${
                            item.textColor === "text-red-600"
                              ? "bg-red-100"
                              : item.textColor === "text-orange-600"
                                ? "bg-orange-100"
                                : item.textColor === "text-yellow-600"
                                  ? "bg-yellow-100"
                                  : "bg-blue-100"
                          } rounded-lg flex items-center justify-center`}
                        >
                          <item.icon className={`h-5 w-5 ${item.textColor}`} />
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-2">
                        {item.subtitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Tỷ lệ gặp</span>
                        <span className={`font-bold text-sm ${item.textColor}`}>
                          {item.value}
                        </span>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-1000 ${
                            item.textColor === "text-red-600"
                              ? "bg-red-500"
                              : item.textColor === "text-orange-600"
                                ? "bg-orange-500"
                                : item.textColor === "text-yellow-600"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                          }`}
                          style={{ width: item.value }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Scam Cards - New Design */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center mb-3 text-gray-900">
              Phân loại chi tiết
            </h2>
            <div className="flex justify-center gap-6 mb-12 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" />
                <span>Lừa đảo qua điện thoại</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-orange-500" />
                <span>Lừa đảo qua SMS</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span>Lừa đảo qua Email</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-blue-500" />
                <span>Lừa đảo thẻ chính</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-gray-500" />
                <span>Chia sẻ</span>
              </div>
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-gray-500" />
                <span>Đáo Cầu Trợ</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scamDetails.map((scam, index) => {
                const cardColors = [
                  {
                    bg: "bg-red-100",
                    icon: "text-red-600",
                    progress: "bg-red-500",
                    border: "border-red-200",
                  },
                  {
                    bg: "bg-orange-100",
                    icon: "text-orange-600",
                    progress: "bg-orange-500",
                    border: "border-orange-200",
                  },
                  {
                    bg: "bg-yellow-100",
                    icon: "text-yellow-600",
                    progress: "bg-yellow-500",
                    border: "border-yellow-200",
                  },
                  {
                    bg: "bg-blue-100",
                    icon: "text-blue-600",
                    progress: "bg-blue-500",
                    border: "border-blue-200",
                  },
                ];
                const colors = cardColors[index % 4];

                return (
                  <Card
                    key={scam.id}
                    className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${colors.bg} ${colors.border}`}
                    onClick={() => {
                      setSelectedScams((prev) =>
                        prev.includes(scam.id)
                          ? prev.filter((id) => id !== scam.id)
                          : [...prev, scam.id],
                      );
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl ${colors.bg} border-2 border-white shadow-sm flex items-center justify-center`}
                        >
                          <scam.icon className={`h-8 w-8 ${colors.icon}`} />
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-2 text-sm leading-tight">
                        {scam.title}
                      </h3>

                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        {scam.shortDesc}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-600">Tỷ lệ gặp phải</span>
                          <span className={`font-semibold ${colors.icon}`}>
                            {scam.popularity}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${colors.progress} transition-all duration-1000`}
                            style={{ width: scam.popularity }}
                          ></div>
                        </div>

                        <div className="flex justify-between items-center text-xs mt-2">
                          <span className="text-gray-600">Avg thiệt hại</span>
                          <span className={`font-semibold ${colors.icon}`}>
                            {scam.avgLoss}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${colors.progress} transition-all duration-1000`}
                            style={{ width: `${scam.dangerLevel}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {selectedScams.includes(scam.id) && (
                        <div className="mt-4 pt-4 border-t text-left">
                          <div className="grid grid-cols-1 gap-4">
                            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                              <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-1 text-xs">
                                <XCircle className="h-3 w-3" />
                                Thủ đoạn
                              </h4>
                              <div className="space-y-1">
                                {scam.techniques
                                  .slice(0, 2)
                                  .map((technique, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start gap-1 text-xs"
                                    >
                                      <span className="text-red-500 mt-0.5">
                                        •
                                      </span>
                                      <span className="text-gray-700">
                                        {technique}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            </div>

                            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-1 text-xs">
                                <CheckCircle className="h-3 w-3" />
                                Phòng chống
                              </h4>
                              <div className="space-y-1">
                                {scam.prevention
                                  .slice(0, 2)
                                  .map((prevention, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start gap-1 text-xs"
                                    >
                                      <span className="text-green-500 mt-0.5">
                                        ✓
                                      </span>
                                      <span className="text-gray-700">
                                        {prevention}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mt-3">
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleBookmark(scam.id);
                              }}
                              variant={
                                bookmarkedScams.includes(scam.id)
                                  ? "default"
                                  : "outline"
                              }
                              className="flex-1 text-xs h-7"
                            >
                              <Bookmark
                                className={`h-3 w-3 mr-1 ${bookmarkedScams.includes(scam.id) ? "fill-current" : ""}`}
                              />
                              {bookmarkedScams.includes(scam.id)
                                ? "Đã lưu"
                                : "Lưu"}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs h-7 px-2"
                            >
                              <Share2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Desktop Statistics */}
        <Statistics
          stats={scamStatistics.map((stat) => ({
            value: stat.value,
            label: stat.label,
            trend: "+35%",
            color: stat.color,
          }))}
          title="📊 Thống kê lừa đảo 2024"
          subtitle="Dữ liệu từ Bộ Công An Việt Nam"
        />

        <RealWorldExamples />
        <SocialShare />
      </div>

      {/* Mobile Only: Clean Red Theme Design */}
      <div className="md:hidden min-h-screen bg-red-50">
        {/* Mobile Hero Section */}
        <section className="bg-gradient-to-br from-red-500 to-red-600 px-4 py-6 text-white">
          <div className="max-w-sm mx-auto text-center">
            {/* Shield Icon - More Friendly */}
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Shield className="w-8 h-8 text-white" />
            </div>

            {/* Hero Title - Shorter & Cleaner */}
            <h1 className="text-xl font-bold mb-1">🛡️ An Toàn Số</h1>
            <p className="text-red-100 text-sm mb-5">
              Bảo vệ bản thân khỏi lừa đảo
            </p>

            {/* Quick Stats - Smaller */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/20 rounded-lg p-2.5">
                <div className="font-bold text-base">15K+</div>
                <div className="text-xs text-red-100">vụ/năm</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2.5">
                <div className="font-bold text-base">2.5K tỷ</div>
                <div className="text-xs text-red-100">thiệt hại</div>
              </div>
              <div className="bg-white/20 rounded-lg p-2.5">
                <div className="font-bold text-base">68%</div>
                <div className="text-xs text-red-100">qua ĐT</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Scam Types */}
        <section className="px-4 py-8">
          <div className="max-w-sm mx-auto">
            <h2 className="text-base font-bold text-gray-900 mb-2 text-center">
              🔍 Các loại lừa đảo
            </h2>
            <p className="text-gray-600 text-xs mb-6 text-center">
              Chạm vào thẻ để xem chi tiết
            </p>

            <div className="space-y-3">
              {scamDetails.map((scam, index) => (
                <Card
                  key={scam.id}
                  className="bg-white border border-red-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    setSelectedScams((prev) =>
                      prev.includes(scam.id)
                        ? prev.filter((id) => id !== scam.id)
                        : [...prev, scam.id],
                    );
                  }}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className={`w-9 h-9 rounded-lg ${scam.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <scam.icon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">
                          {scam.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-xs mb-2 leading-relaxed">
                          {scam.shortDesc}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-red-600 font-medium">
                              📈 {scam.popularity}
                            </span>
                            <span className="text-orange-600 font-medium">
                              💰 {scam.avgLoss}
                            </span>
                          </div>
                          <ChevronRight
                            className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${selectedScams.includes(scam.id) ? "rotate-90" : ""}`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedScams.includes(scam.id) && (
                      <div className="mt-3 pt-3 border-t border-red-100">
                        {/* Warning Badge */}
                        <div className="flex justify-center mb-3">
                          <Badge className="bg-red-100 text-red-700 border border-red-200 text-xs">
                            Nguy hiểm: {scam.dangerLevel}%
                          </Badge>
                        </div>

                        {/* Techniques */}
                        <div className="mb-3">
                          <h4 className="font-medium text-red-700 text-xs mb-1.5 flex items-center gap-1">
                            <XCircle className="w-3 h-3" />
                            Thủ đoạn
                          </h4>
                          <div className="bg-red-50 rounded-lg p-2.5 space-y-1">
                            {scam.techniques.map((technique, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-1.5 text-xs"
                              >
                                <span className="text-red-500 mt-0.5">•</span>
                                <span className="text-gray-700">
                                  {technique}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Prevention */}
                        <div className="mb-3">
                          <h4 className="font-medium text-green-700 text-xs mb-1.5 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Phòng chống
                          </h4>
                          <div className="bg-green-50 rounded-lg p-2.5 space-y-1">
                            {scam.prevention.map((prevention, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-1.5 text-xs"
                              >
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span className="text-gray-700">
                                  {prevention}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-red-200 text-red-600 hover:bg-red-50 text-xs h-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(scam.id);
                            }}
                          >
                            <Bookmark
                              className={`w-3 h-3 mr-1 ${bookmarkedScams.includes(scam.id) ? "fill-current" : ""}`}
                            />
                            {bookmarkedScams.includes(scam.id)
                              ? "Đã lưu"
                              : "Lưu"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-200 text-red-600 hover:bg-red-50 text-xs h-8 px-3"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Share2 className="w-3 h-3" />
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

        {/* Mobile Statistics */}
        <section className="px-4 py-6 bg-gray-50">
          <div className="max-w-sm mx-auto">
            <h2 className="text-base font-bold text-center text-gray-900 mb-4">
              📊 Thống kê 2024
            </h2>

            <div className="grid grid-cols-2 gap-2.5">
              {scamStatistics.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 text-center"
                >
                  <CardContent className="p-2.5">
                    <div className="text-lg font-bold text-red-600 mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Emergency Contact */}
        <section className="px-4 py-5">
          <div className="max-w-sm mx-auto">
            <Card className="bg-red-600 border-0 text-center text-white">
              <CardContent className="p-4">
                <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center mb-2">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-semibold text-sm mb-1">SOS Khẩn cấp</h3>
                <p className="text-red-100 text-xs mb-3">
                  Bị lừa đảo? Gọi ngay
                </p>
                <Button className="bg-white text-red-600 hover:bg-red-50 font-semibold w-full text-sm h-9">
                  📞 Hotline: 113
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mobile Real World Examples */}
        <section className="px-4 py-6 bg-gray-50">
          <div className="max-w-md mx-auto">
            <h2 className="text-lg font-bold text-center text-gray-900 mb-2">
              📖 Tình Huống Minh Họa
            </h2>
            <p className="text-center text-gray-600 text-sm mb-6">
              Câu chuyện thực tế để bạn nhận biết thủ đoạn
            </p>

            {/* Real World Examples for Mobile */}
            <div className="space-y-4">
              {[
                {
                  title: "Lừa đảo 'Công an gọi điện'",
                  type: "Điện thoại",
                  icon: Phone,
                  story:
                    "Một người nhận cuộc gọi từ số lạ tự xưng là Công an, nói tài khoản liên quan đến vụ rửa tiền. Kẻ lừa đảo yêu cầu chuyển tiền để 'bảo toàn tài sản'.",
                  damage: "45 triệu VNĐ",
                  redFlags: [
                    "Gọi từ số di động",
                    "Yêu cầu chuyển tiền ngay",
                    "Đe dọa bắt giữ",
                  ],
                  prevention: [
                    "Cúp máy và gọi lại 113",
                    "Công an không yêu cầu chuyển tiền",
                    "Thông báo cho gia đình",
                  ],
                },
                {
                  title: "Lừa đảo đầu tư Forex",
                  type: "Mạng xã hội",
                  icon: TrendingUp,
                  story:
                    "Một người được bạn Zalo giới thiệu sàn đầu tư Forex với lãi suất bất thường. Sau khi nạp tiền, họ không thể rút tiền và bị chặn liên lạc.",
                  damage: "100 triệu VNĐ",
                  redFlags: [
                    "Lãi suất quá cao (30%/tháng)",
                    "Không có giấy phép",
                    "Khuyến khích nạp tiền liên tục",
                  ],
                  prevention: [
                    "Kiểm tra giấy phép trên website SBV",
                    "Không tin lời hứa lãi cao",
                    "Tham khảo chuyên gia",
                  ],
                },
                {
                  title: "Lừa đảo 'Trúng thưởng' SMS",
                  type: "Tin nhắn",
                  icon: MessageSquare,
                  story:
                    "Một người nhận SMS thông báo trúng thưởng lớn từ ngân hàng. Để nhận thưởng, họ được yêu cầu nộp 'phí thuế' trước.",
                  damage: "5 triệu VNĐ",
                  redFlags: [
                    "Không tham gia nhưng trúng thưởng",
                    "Yêu cầu nộp phí trước",
                    "Số điện thoại lạ",
                  ],
                  prevention: [
                    "Liên hệ trực tiếp ngân hàng",
                    "Không chuyển tiền phí",
                    "Chặn số spam",
                  ],
                },
              ].map((example, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                  <CardContent className="p-4">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <example.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                          {example.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {example.type}
                          </Badge>
                          <span className="text-xs text-red-600 font-medium">
                            -{example.damage}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="bg-yellow-50 border-l-2 border-yellow-400 rounded-r p-3 mb-3">
                      <p className="text-xs text-gray-700 leading-relaxed">
                        📖 {example.story}
                      </p>
                    </div>

                    {/* Red Flags */}
                    <div className="mb-3">
                      <h4 className="font-medium text-red-700 text-xs mb-2">
                        🚩 Dấu hiệu lừa đảo:
                      </h4>
                      <div className="bg-red-50 rounded p-2 space-y-1">
                        {example.redFlags.map((flag, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-1 text-xs"
                          >
                            <span className="text-red-500 mt-0.5">•</span>
                            <span className="text-gray-700">{flag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Prevention */}
                    <div>
                      <h4 className="font-medium text-green-700 text-xs mb-2">
                        ✅ Cách phòng tránh:
                      </h4>
                      <div className="bg-green-50 rounded p-2 space-y-1">
                        {example.prevention.map((tip, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-1 text-xs"
                          >
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span className="text-gray-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Warning Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-6">
              <p className="text-xs text-blue-800 text-center">
                <strong>Lưu ý:</strong> Đây là tình huống minh họa nhằm mục đích
                giáo dục. Thông tin chính thức tại{" "}
                <a
                  href="https://canhbao.anbinhduong.vn/"
                  className="underline font-medium"
                >
                  trang cảnh báo chính thức
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Social Share */}
        <section className="px-4 py-6">
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center justify-center text-sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Chia Sẻ Kiến Thức
                </h3>
                <p className="text-gray-600 text-xs mb-4">
                  Giúp bạn bè và gia đình tránh bị lừa đảo
                </p>

                <div className="grid grid-cols-3 gap-2">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                    onClick={() => {
                      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                      window.open(url, "_blank", "width=600,height=400");
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50 text-xs"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Đã sao chép link!");
                    }}
                  >
                    Copy link
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50 text-xs"
                  >
                    Zalo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mobile Back Button */}
        <section className="px-4 pb-6">
          <div className="max-w-md mx-auto">
            <Link to="/">
              <Button
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50 w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Về trang chủ
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
