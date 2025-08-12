import React from "react";
import {
  TrendingUp,
  Bot,
  DollarSign,
  Camera,
  MessageCircle,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trendingScams = [
  {
    id: 1,
    title: "AI Deepfake Lừa Đảo",
    icon: Bot,
    trend: "new",
    severity: "high",
    description:
      "Sử dụng AI để tạo video giả của người thân, CEO, hoặc celebrity để lừa đảo",
    techniques: [
      "Tạo video call fake với khuôn mặt người thân",
      "Voice cloning để mô phỏng giọng nói",
      "Deepfake video của CEO yêu cầu chuyển tiền",
      "Fake livestream của celebrity bán hàng",
    ],
    realExample:
      "Tình huống minh họa: Kẻ lừa đảo sử dụng deepfake để giả danh người thân trong video call, tạo tình huống khẩn cấp để yêu cầu chuyển tiền.",
    prevention: [
      "Luôn xác minh qua nhiều kênh liên lạc",
      "Hỏi thông tin chỉ có người thân mới biết",
      "Không chuyển tiền dựa trên video call",
      "Gặp trực tiếp khi có thể",
    ],
    targetAge: "35-55 tuổi",
    platform: "Video call, Facebook, TikTok",
  },
  {
    id: 2,
    title: "Lừa Đảo Crypto/NFT",
    icon: DollarSign,
    trend: "hot",
    severity: "high",
    description:
      "Dụ dỗ đầu tư vào các đồng tiền ảo, NFT hoặc sàn giao dịch crypto giả",
    techniques: [
      "Tạo sàn crypto giả với giao diện giống thật",
      "Hứa hẹn lợi nhuận khủng từ đầu tư crypto",
      "Bán NFT không có giá trị thực",
      "Ponzi scheme với tiền điện tử",
    ],
    realExample:
      "Tình huống minh họa: Người trẻ bị dụ dỗ đầu tư vào sàn crypto giả mạo với giao diện giống các sàn uy tín.",
    prevention: [
      "Chỉ dùng sàn crypto được cấp phép",
      "Không tin vào lời hứa lãi suất cao",
      "Tìm hiểu kỹ về dự án trước khi đầu tư",
      "Bắt đầu với số tiền nhỏ",
    ],
    targetAge: "18-35 tuổi",
    platform: "Telegram, Discord, Instagram",
  },
  {
    id: 3,
    title: "Romance Scam 2.0",
    icon: MessageCircle,
    trend: "rising",
    severity: "medium",
    description:
      "Lừa đảo tình cảm qua dating apps với profile fake cực kỳ tinh vi",
    techniques: [
      "Tạo profile hoàn hảo với ảnh AI-generated",
      "Xây dựng mối quan hệ lâu dài (3-6 tháng)",
      "Giả vờ gặp khó khăn tài chính đột xuất",
      "Hẹn gặp nhưng luôn có lý do hủy",
    ],
    realExample:
      "Tình huống minh họa: Người dùng dating app bị lừa tình cảm qua thời gian dài, cuối cùng chuyển tiền cho người yêu ảo.",
    prevention: [
      "Video call trước khi tin tưởng",
      "Không chuyển tiền cho người chưa gặp",
      "Kiểm tra ảnh bằng Google reverse search",
      "Thận trọng với câu chuyện quá hoàn hảo",
    ],
    targetAge: "25-45 tuổi",
    platform: "Tinder, Bumble, Facebook Dating",
  },
  {
    id: 4,
    title: "Job Scam Remote",
    icon: Camera,
    trend: "rising",
    severity: "medium",
    description:
      "Lừa đảo việc làm online với mức lương hấp dẫn, nhắm vào thế hệ Gen Z",
    techniques: [
      "Đăng tin tuyển dụng với lương cao bất thường",
      "Yêu cầu 'phí đào tạo' hoặc 'deposit bảo mật'",
      "Phỏng vấn qua video call ngắn và dễ dàng",
      "Hứa hẹn làm việc từ xa 100%",
    ],
    realExample:
      "Tình huống minh họa: Sinh viên bị lừa 'phí đào tạo' cho công việc online có mức lương cao bất thường.",
    prevention: [
      "Nghiên cứu kỹ về công ty tuyển dụng",
      "Công ty thật không yêu cầu phí trước",
      "Gặp mặt tại văn phòng công ty",
      "Kiểm tra giấy phép kinh doanh",
    ],
    targetAge: "18-28 tuổi",
    platform: "LinkedIn, Facebook Jobs, Zalo",
  },
  {
    id: 5,
    title: "E-commerce Fake Shop",
    icon: AlertTriangle,
    trend: "steady",
    severity: "low",
    description:
      "Shop online giả mạo bán hàng với giá rẻ bất thường, nhận tiền rồi biến mất",
    techniques: [
      "Copy hình ảnh sản phẩm từ shop khác",
      "Giá bán rẻ hơn thị trường 50-70%",
      "Chỉ nhận thanh toán trước, không COD",
      "Feedback và review đều giả",
    ],
    realExample:
      "Tình huống minh họa: Khách hàng mua hàng từ shop online giả có giá quá rẻ và social proof giả mạo.",
    prevention: [
      "Mua từ các sàn uy tín như Shopee, Tiki",
      "Ưu tiên thanh toán COD",
      "Kiểm tra review từ khách hàng thật",
      "Cảnh giác với giá rẻ bất thường",
    ],
    targetAge: "16-35 tuổi",
    platform: "Facebook, Instagram, TikTok Shop",
  },
];

const getTrendBadge = (trend: string) => {
  switch (trend) {
    case "new":
      return (
        <Badge className="bg-red-100 text-red-700">🔥 Mới xuất hiện</Badge>
      );
    case "hot":
      return (
        <Badge className="bg-orange-100 text-orange-700">
          🚨 Đang rất phổ biến
        </Badge>
      );
    case "rising":
      return (
        <Badge className="bg-yellow-100 text-yellow-700">📈 Đang tăng</Badge>
      );
    default:
      return <Badge className="bg-blue-100 text-blue-700">➡️ Ổn định</Badge>;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "border-l-red-500 bg-red-50";
    case "medium":
      return "border-l-yellow-500 bg-yellow-50";
    default:
      return "border-l-blue-500 bg-blue-50";
  }
};

export default function TrendingScams() {
  return (
    <div className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <TrendingUp className="h-8 w-8 mr-3 text-red-600" />
            Các Thủ Đoạn Lừa Đảo Cần Cảnh Giác
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Tìm hiểu các thủ đoạn phổ biến để nâng cao nhận thức phòng chống lừa
            đảo
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-sm text-yellow-800">
              <strong>Lưu ý:</strong> Nội dung mang tính giáo dục và minh họa.
              Theo dõi thông tin chính thức tại{" "}
              <a
                href="https://mic.gov.vn"
                className="underline font-medium"
                target="_blank"
                rel="noopener"
              >
                Bộ TT&TT
              </a>{" "}
              và các cơ quan chức năng.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {trendingScams.map((scam, index) => (
            <Card
              key={scam.id}
              className={`border-l-4 ${getSeverityColor(scam.severity)} hover:shadow-xl transition-shadow`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-white shadow-sm">
                      <scam.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{scam.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        {getTrendBadge(scam.trend)}
                        <Badge variant="outline" className="text-xs">
                          {scam.targetAge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">{scam.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Real Example */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    📰 Ví dụ thực tế:
                  </h4>
                  <p className="text-yellow-700">{scam.realExample}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Techniques */}
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Thủ đoạn thường dùng
                    </h4>
                    <ul className="space-y-2">
                      {scam.techniques.map((technique, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700">
                            {technique}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-xs text-gray-500">
                      <strong>Nền tảng chính:</strong> {scam.platform}
                    </div>
                  </div>

                  {/* Prevention */}
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <Camera className="h-5 w-5 mr-2" />
                      Cách phòng tránh
                    </h4>
                    <ul className="space-y-2">
                      {scam.prevention.map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">🚨 Cập Nhật Liên Tục!</h3>
              <p className="text-lg mb-6 opacity-90">
                Các thủ đoạn lừa đảo thay đổi liên tục. Hãy theo dõi để luôn
                được cập nhật những thông tin mới nhất.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  📱 Đăng ký nhận thông báo
                </button>
                <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  📋 Báo cáo thủ đoạn mới
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
