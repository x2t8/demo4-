import React from "react";
import {
  AlertTriangle,
  Phone,
  MessageSquare,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const realWorldExamples = [
  {
    id: 1,
    title: "Lừa đảo 'Công an gọi điện'",
    type: "Điện thoại",
    icon: Phone,
    color: "text-red-600 bg-red-50",
    story:
      "Tình huống minh họa: Một người nhận cuộc gọi từ số lạ tự xưng là Công an, nói tài khoản liên quan đến vụ rửa tiền. Kẻ lừa đảo yêu cầu chuyển tiền để 'bảo toàn tài sản'.",
    damage: "Có thể mất hàng chục triệu",
    redFlags: [
      "Gọi từ số di động, không phải đường dây nóng chính thức",
      "Yêu cầu chuyển tiền ngay lập tức",
      "Không cho thời gian xác minh",
      "Đe dọa bắt giữ nếu không hợp tác",
    ],
    prevention: [
      "Cúp máy và gọi lại số chính thức 113",
      "Công an không bao giờ yêu cầu chuyển tiền qua điện thoại",
      "Luôn xác minh thông tin với cơ quan chức năng",
      "Thông báo cho gia đình khi nhận cuộc gọi đáng ngờ",
    ],
    trending: true,
  },
  {
    id: 2,
    title: "Lừa đảo đầu tư Forex qua Zalo",
    type: "Mạng xã hội",
    icon: TrendingUp,
    color: "text-purple-600 bg-purple-50",
    story:
      "Tình huống minh họa: Một người được bạn Zalo giới thiệu sàn đầu tư Forex với lãi suất bất thường. Sau khi nạp tiền, họ không thể rút tiền và bị chặn liên lạc.",
    damage: "Có thể mất toàn bộ số tiền đầu tư",
    redFlags: [
      "Lãi suất quá cao, không hợp lý (30%/tháng)",
      "Không có giấy phép hoạt động tại Việt Nam",
      "Khuyến khích nạp tiền liên tục",
      "Website và app có dấu hiệu giả mạo",
    ],
    prevention: [
      "Kiểm tra giấy phép của sàn giao dịch trên website SBV",
      "Không tin vào lời hứa lãi suất cao bất thường",
      "Đầu tư thử với số tiền nhỏ trước",
      "Tham khảo ý kiến chuyên gia tài chính",
    ],
    trending: true,
  },
  {
    id: 3,
    title: "Lừa đảo 'Trúng thưởng' qua SMS",
    type: "Tin nhắn",
    icon: MessageSquare,
    color: "text-orange-600 bg-orange-50",
    story:
      "Tình huống minh họa: Một người nhận SMS thông báo trúng thưởng lớn từ chương trình khuyến mãi ngân hàng. Để nhận thưởng, họ được yêu cầu nộp 'phí thuế' trước.",
    damage: "Có thể mất hàng triệu VNĐ",
    redFlags: [
      "Không tham gia chương trình nào nhưng vẫn 'trúng thưởng'",
      "Yêu cầu nộp phí trước khi nhận thưởng",
      "Số điện thoại gửi tin lạ, không chính thức",
      "Thông tin người liên hệ mơ hồ",
    ],
    prevention: [
      "Liên hệ trực tiếp với ngân hàng để xác minh",
      "Không chuyển tiền cho bất kỳ 'phí' nào",
      "Ngân hàng thực sự không yêu cầu phí để nhận thưởng",
      "Chặn và báo cáo số điện thoại spam",
    ],
    trending: false,
  },
  {
    id: 4,
    title: "Lừa đảo việc làm online",
    type: "Việc làm",
    icon: Shield,
    color: "text-blue-600 bg-blue-50",
    story:
      "Tình huống minh họa: Một sinh viên được tuyển làm việc online với mức lương cao bất thường. Công ty yêu cầu đóng 'phí đào tạo' và biến mất sau khi nhận tiền.",
    damage: "Có thể mất vài triệu VNĐ",
    redFlags: [
      "Mức lương quá cao so với công việc đơn giản",
      "Yêu cầu đóng phí trước khi làm việc",
      "Không có địa chỉ văn phòng cụ thể",
      "Thông tin công ty mơ hồ, không rõ ràng",
    ],
    prevention: [
      "Tìm hiểu kỹ về công ty qua Google, Facebook",
      "Công ty uy tín không yêu cầu đóng phí trước",
      "Gặp mặt trực tiếp tại văn phòng công ty",
      "Kiểm tra giấy phép kinh doanh của công ty",
    ],
    trending: true,
  },
];

export default function RealWorldExamples() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tình Huống Minh Họa Thường Gặp
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Các tình huống minh họa dựa trên thủ đoạn phổ biến để bạn nhận biết
            và phòng tránh
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Lưu ý:</strong> Đây là các tình huống minh họa nhằm mục
              đích giáo dục. Để cập nhật thông tin chính thức về tình hình lừa
              đảo, vui lòng theo dõi{" "}
              <a
                href="https://canhbao.anbinhduong.vn/"
                className="underline font-medium"
                target="_blank"
                rel="noopener"
              >
                Trang cảnh báo chính thức
              </a>{" "}
              của các cơ quan chức năng.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {realWorldExamples.map((example, index) => (
            <Card
              key={example.id}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <CardHeader className="bg-gradient-to-r from-white to-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${example.color}`}>
                      <example.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{example.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline">{example.type}</Badge>
                        {example.trending && (
                          <Badge className="bg-red-100 text-red-700">
                            🔥 Đang xảy ra nhiều
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">
                      -{example.damage}
                    </div>
                    <div className="text-sm text-gray-500">Thiệt hại</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Story */}
                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    📖 Câu chuyện:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {example.story}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Red Flags */}
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      🚩 Dấu hiệu lừa đảo
                    </h4>
                    <ul className="space-y-2">
                      {example.redFlags.map((flag, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700">{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention */}
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />✅ Cách phòng tránh
                    </h4>
                    <ul className="space-y-2">
                      {example.prevention.map((tip, idx) => (
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
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                💡 Bạn có câu chuyện tương tự?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Chia sẻ kinh nghiệm để giúp cộng đồng học hỏi và phòng tránh
              </p>
              <div className="flex justify-center">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  📧 Chia sẻ câu chuyện
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
