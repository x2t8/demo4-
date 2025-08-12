import React, { useState } from "react";
import {
  Users,
  Smartphone,
  Briefcase,
  Heart,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AgeGroup {
  id: string;
  title: string;
  age: string;
  icon: React.ElementType;
  color: string;
  description: string;
  commonScams: string[];
  specificTips: string[];
  platforms: string[];
  realExample: string;
}

const ageGroups: AgeGroup[] = [
  {
    id: "gen-z",
    title: "Gen Z - Thế hệ số",
    age: "16-25 tuổi",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    description:
      "Sinh ra trong thời đại số, nhưng vẫn cần cảnh giác với các thủ đoạn mới",
    commonScams: [
      "Lừa đảo việc làm online với lương cao",
      "Đầu tư crypto/NFT không rõ nguồn gốc",
      "Fake shop trên social media",
      "Romance scam qua dating apps",
      "Phishing qua game online",
    ],
    specificTips: [
      '🎯 Không tin vào "kiếm tiền dễ dàng" trên TikTok/YouTube',
      "💸 Chỉ đầu tư số tiền có thể mất mà không ảnh hưởng cuộc sống",
      "📱 Kiểm tra kỹ app trước khi tải, đọc review thật",
      "👥 Không chia sẻ thông tin cá nhân với người lạ online",
      '🎮 Cẩn thận với các game "pay-to-earn" hứa hẹn lời to',
      "❤️ Video call trước khi tin tưởng người yêu qua mạng",
    ],
    platforms: "TikTok, Instagram, Discord, Telegram, Dating apps",
    realExample:
      "Tình huống minh họa: Sinh viên bị lừa đầu tư vào game NFT với lời hứa lãi suất bất thường qua nhóm Telegram.",
  },
  {
    id: "millennials",
    title: "Millennials - Thế hệ Y",
    age: "26-40 tuổi",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    description:
      "Đang ở độ tuổi làm việc chính, có thu nhập ổn định, dễ bị nhắm vào",
    commonScams: [
      "Lừa đảo đầu tư tài chính qua Zalo/Facebook",
      "Giả danh ngân hàng qua SMS/call",
      "Lừa đảo bảo hiểm, vay vốn online",
      "Phishing email công việc/thuế",
      "Lừa đảo mua bán BĐS online",
    ],
    specificTips: [
      "💼 Xác minh mọi thông tin tài chính qua kênh chính thức",
      "🏦 Ngân hàng không bao giờ yêu cầu mật khẩu qua điện thoại",
      "📧 Kiểm tra email sender cẩn thận, đặc biệt email công việc",
      "🏠 Gặp trực tiếp khi giao dịch BĐS giá trị lớn",
      "💰 Không vay tiền/đầu tư theo quảng cáo Facebook",
      "📋 Đọc kỹ hợp đồng trước khi ký",
    ],
    platforms: "Facebook, Zalo, LinkedIn, Email, SMS",
    realExample:
      'Tình huống minh họa: Người có thu nhập ổn định bị lừa đầu tư vào "sàn forex" qua nhóm Facebook.',
  },
  {
    id: "gen-x",
    title: "Gen X - Thế hệ X",
    age: "41-55 tuổi",
    icon: Users,
    color: "from-green-500 to-teal-500",
    description:
      "Có kinh nghiệm sống nhưng ít quen thuộc với công nghệ, dễ bị lừa qua điện thoại",
    commonScams: [
      "Lừa đảo qua điện thoại giả danh công an",
      "SMS/call giả danh ngân hàng về tài khoản",
      "Lừa đảo y tế/thuốc men thần kỳ",
      "Giả danh con/cháu gặp khó khăn",
      "Lừa đảo trúng thưởng qua SMS",
    ],
    specificTips: [
      "📞 Cúp máy khi có cuộc gọi đáng ngờ, gọi lại số chính thức",
      "👨‍👩‍👧‍👦 Xác minh với con cháu khi nhận tin nhắn khẩn cấp",
      "💊 Không mua thuốc/thực phẩm chức năng qua điện thoại",
      '🎁 Không có chuyện "trúng thưởng" mà không tham gia',
      "💳 Không đưa thông tin thẻ ATM qua điện thoại",
      "👪 Hỏi ý kiến con cháu trước khi chuyển tiền lớn",
    ],
    platforms: "Điện thoại, SMS, Facebook, Zalo",
    realExample:
      "Tình huống minh họa: Người trung tuổi bị lừa qua cuộc gọi giả danh cơ quan chức năng thông báo con em gặp khó khăn.",
  },
  {
    id: "boomers",
    title: "Baby Boomers - Cao tuổi",
    age: "56+ tuổi",
    icon: Heart,
    color: "from-orange-500 to-red-500",
    description:
      "Ít quen với công nghệ, thường tin tưởng và tốt bụng, dễ bị lợi dụng",
    commonScams: [
      "Lừa đảo qua điện thoại về sức khỏe",
      "Giả danh cháu/con gọi vay tiền khẩn cấp",
      "Bán thuốc/thực phẩm chức năng giả",
      "Lừa đảo từ thiện/tôn giáo",
      "Giả danh cán bộ chính quyền",
    ],
    specificTips: [
      "👴👵 Luôn hỏi con cháu trước khi quyết định tài chính",
      "📞 Không cung cấp thông tin cá nhân qua điện thoại",
      "💊 Chỉ mua thuốc ở nhà thuốc có giấy phép",
      '🏥 Khám bệnh ở bệnh viện thay vì "thầy thuốc" lạ',
      "💰 Không cho vay tiền người lạ dù có lý do gì",
      "📱 Nhờ con cháu hướng dẫn sử dụng smartphone an toàn",
    ],
    platforms: "Điện thoại chủ yếu, ít dùng mạng xã hội",
    realExample:
      "Tình huống minh họa: Người cao tuổi bị lừa mua thuốc không rõ nguồn gốc được quảng cáo qua điện thoại.",
  },
];

export default function AgeSpecificGuidance() {
  const [selectedAge, setSelectedAge] = useState<string>("gen-z");
  const selectedGroup =
    ageGroups.find((group) => group.id === selectedAge) || ageGroups[0];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hướng Dẫn Theo Độ Tuổi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mỗi độ tuổi có những nguy cơ riêng. Tìm hiểu cách bảo vệ bản thân
            phù hợp với lứa tuổi của bạn.
          </p>
        </div>

        {/* Age Group Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ageGroups.map((group) => (
            <Button
              key={group.id}
              onClick={() => setSelectedAge(group.id)}
              variant={selectedAge === group.id ? "default" : "outline"}
              className={`flex items-center space-x-2 px-6 py-3 ${
                selectedAge === group.id
                  ? `bg-gradient-to-r ${group.color} text-white`
                  : "hover:bg-gray-100"
              }`}
            >
              <group.icon className="h-5 w-5" />
              <span>{group.age}</span>
            </Button>
          ))}
        </div>

        {/* Selected Age Group Content */}
        <Card className="overflow-hidden">
          <CardHeader
            className={`bg-gradient-to-r ${selectedGroup.color} text-white`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white bg-opacity-20">
                <selectedGroup.icon className="h-8 w-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  {selectedGroup.title}
                </CardTitle>
                <p className="text-lg opacity-90 mt-2">
                  {selectedGroup.description}
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {/* Real Example */}
            <div className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                📖 Ví dụ thực tế cho độ tuổi này:
              </h4>
              <p className="text-yellow-700 leading-relaxed">
                {selectedGroup.realExample}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Common Scams */}
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  🚨 Các thủ đoạn thường gặp
                </h3>
                <ul className="space-y-3">
                  {selectedGroup.commonScams.map((scam, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{scam}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-700">
                    <strong>Nền tảng chính:</strong> {selectedGroup.platforms}
                  </p>
                </div>
              </div>

              {/* Specific Tips */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2" />✅ Lời khuyên cụ thể
                </h3>
                <ul className="space-y-3">
                  {selectedGroup.specificTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Age-specific Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">
                💡 Dành riêng cho {selectedGroup.title}:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedGroup.id === "gen-z" && (
                  <>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      📱 Tải app bảo mật cho smartphone
                    </Button>
                    <Button variant="outline">🎮 Quiz về an toàn gaming</Button>
                  </>
                )}
                {selectedGroup.id === "millennials" && (
                  <>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      💼 Bảo mật công việc & tài chính
                    </Button>
                    <Button variant="outline">🏠 An toàn giao dịch BĐS</Button>
                  </>
                )}
                {selectedGroup.id === "gen-x" && (
                  <>
                    <Button className="bg-green-600 hover:bg-green-700">
                      📞 Cách xử lý cuộc gọi lạ
                    </Button>
                    <Button variant="outline">👨‍👩‍👧‍👦 Bảo vệ gia đình</Button>
                  </>
                )}
                {selectedGroup.id === "boomers" && (
                  <>
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      👴👵 Hướng dẫn cơ bản
                    </Button>
                    <Button variant="outline">📱 Nhờ con cháu hỗ trợ</Button>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Advice */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                🤝 Lời khuyên chung cho mọi độ tuổi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">👨‍👩‍👧‍👦 Gia đình</h4>
                  <p className="text-sm opacity-90">
                    Thường xuyên trao đổi với nhau về các thủ đoạn lừa đảo mới.
                    Người trẻ hướng dẫn người già, người già chia sẻ kinh
                    nghiệm.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🧠 Học hỏi</h4>
                  <p className="text-sm opacity-90">
                    Cập nhật kiến thức thường xuyên. Tham gia các khóa học, đọc
                    tin tức về an toàn số từ nguồn uy tín.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🤔 Thận trọng</h4>
                  <p className="text-sm opacity-90">
                    "Nghi ngờ là bước đầu của sự khôn ngoan". Luôn xác minh
                    thông tin trước khi đưa ra quyết định tài chính.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
