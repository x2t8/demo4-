import React from "react";
import {
  AlertTriangle,
  Shield,
  Phone,
  MessageSquare,
  Mail,
  CreditCard,
  Users,
  BookOpen,
  ChevronRight,
  Bot,
  Scale,
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
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Footer from "@/components/Footer";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";
import { CaringToastProvider } from "@/components/CaringToast";
import ReportGuideModal from "@/components/ReportGuideModal";
import FloatingActionButton from "@/components/FloatingActionButton";
import Carousel3D from "@/components/Carousel3D";
import { digitalModules } from "./IndexModules";

export default function Index() {
  // Initialize scroll-based animations
  useScrollReveal();
  useStaggeredReveal();

  // Modal states
  const [isReportModalOpen, setIsReportModalOpen] = React.useState(false);

  // Module tracking
  const [currentModuleIndex, setCurrentModuleIndex] = React.useState(2); // Start with AI module
  const digitalModules = [
    {
      icon: Shield,
      title: "An Toàn Số",
      description:
        "Nhận biết và phòng tránh lừa đảo, bảo vệ thông tin cá nhân", // Sửa "bảo v��" thành "bảo vệ"
      color: "text-red-600 bg-red-200",
      link: "/scam-types",
    },
    {
      icon: Users,
      title: "Đạo Đức Số",
      description: "Quy tắc ứng xử văn minh và giao tiếp tích cực online",
      color: "text-purple-600 bg-purple-200",
      link: "/digital-ethics",
    },
    {
      icon: Bot,
      title: "AI An Toàn", // Sửa "AI An To��n" thành "AI An Toàn"
      description: "Sử dụng AI thông minh, nhận biết deepfake và nội dung giả",
      color: "text-blue-600 bg-blue-200",
      link: "/ai-safety",
    },
    {
      icon: Scale,
      title: "Pháp Luật Số",
      description: "Hiểu biết bản quyền, sở hữu trí tuệ và chia sẻ hợp pháp",
      color: "text-indigo-600 bg-indigo-200",
      link: "/digital-law",
    },
    {
      icon: BookOpen,
      title: "Kỹ Năng Số",
      description: "Digital literacy và công cụ collaboration hiện đại",
      color: "text-green-600 bg-green-200",
      link: "/digital-skills",
    },
  ];

  const protectionTips = [
    "Không cung cấp thông tin cá nhân qua điện thoại", // Sửa "đi���n" thành "điện"
    "Kiểm tra kỹ nguồn gốc tin nhắn, email",
    "Không click vào link lạ trong tin nhắn",
    "Xác minh thông tin qua kênh chính thức",
    "Tham khảo ý kiến người thân trước khi chuyển tiền",
  ];

  return (
    <CaringToastProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <Header />
        <DisclaimerBanner />

        {/* Hero Section */}
        <section
          id="home"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight animate-slide-up">
              Trở Thành
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block animate-text-breathe pb-2">
                Công Dân Số Thông Minh
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Nền tảng giáo dục toàn diện về an toàn số, đạo đức số, AI và kỹ
              năng công nghệ cho người Việt Nam
            </p>
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto hover-caring-lift group"
              >
                <BookOpen className="h-5 w-5 mr-2 group-hover:animate-gentle-wave" />
                Tìm hiểu ngay
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto hover-caring-lift emergency-pulse group"
                onClick={() => setIsReportModalOpen(true)}
              >
                <Phone className="h-5 w-5 mr-2 group-hover:animate-heartbeat" />
                Báo cáo lừa đảo
              </Button>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <strong>Lưu ý:</strong> Các số liệu dưới đây chỉ mang tính
                  minh họa. Để có dữ liệu chính thức, vui lòng tham khảo báo cáo
                  từ{" "}
                  <a
                    href="https://mic.gov.vn"
                    className="underline font-medium"
                    target="_blank"
                    rel="noopener"
                  >
                    Bộ TT&TT
                  </a>{" "}
                  và{" "}
                  <a
                    href="https://bocongan.gov.vn"
                    className="underline font-medium"
                    target="_blank"
                    rel="noopener"
                  >
                    Bộ Công An
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center stagger-children">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                  Hàng nghìn
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Vụ lừa đảo online/năm
                </div>
                <div className="text-xs text-red-500 mt-1">
                  Theo báo cáo chính thức
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
                  Hàng tỷ
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  VNĐ thiệt hại/năm
                </div>
                <div className="text-xs text-orange-500 mt-1">
                  Ước tính từ các cơ quan
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
                  Phần lớn
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Qua mạng xã hội & app
                </div>
                <div className="text-xs text-purple-500 mt-1">
                  Xu hướng hiện tại
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  Có thể
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Phòng tránh được
                </div>
                <div className="text-xs text-green-500 mt-1">
                  Với kiến thức đúng đắn
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Modules */}
        <section
          id="modules"
          className="py-12 sm:py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-education-blue to-education-purple rounded-full mb-4 animate-protective-pulse">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-up">
                5 Mô-đun Học Tập Thiết Yếu
              </h2>
              <p
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Khám phá từng mô-đun để trở thành công dân số thông minh
              </p>
            </div>

            <Carousel3D
              modules={digitalModules}
              onModuleChange={setCurrentModuleIndex}
            />


            {/* Call to Action */}
            <div className="text-center mt-12 sm:mt-16">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Bắt đầu hành trình học tập của bạn ngay hôm nay
              </p>
              <Button
                size="sm"
                className="bg-gradient-to-r from-education-blue to-education-purple hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Khám phá tất cả mô-đun
                <BookOpen className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Protection Tips */}
        <section
          id="protection"
          className="py-20 bg-gradient-to-r from-green-50 to-cyan-50 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  5 Nguyên Tắc Vàng
                  <span className="text-green-600 block">Bảo Vệ Bản Thân</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Áp dụng những nguyên tắc đơn giản này để giảm thiểu rủi ro bị
                  lừa đảo
                </p>
                <ul className="space-y-4">
                  {protectionTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-gray-700 text-lg">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-8 transform rotate-3 hover:rotate-0 transition-transform hover-caring-lift">
                  <div className="text-center">
                    <Shield className="h-20 w-20 text-green-600 mx-auto mb-6 animate-protective-pulse" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Bảo Vệ 100%
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Kiến thức là vũ khí mạnh nhất chống lại lừa đảo
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Users className="h-4 w-4 mr-2" />
                      Chia sẻ với người thân
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section
          id="report"
          className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Đã Bị Lừa Đảo? Báo Cáo Ngay!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Hãy liên hệ ngay với cơ quan chức năng để được hỗ trợ kịp thời
              {/* Sửa "đ��" thành "để" */}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white text-gray-900 hover-caring-lift">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-red-600 mx-auto mb-4 animate-heartbeat" />
                  <h3 className="text-xl font-bold mb-2">Hotline Khẩn Cấp</h3>
                  <p className="text-3xl font-bold text-red-600 animate-protective-pulse">
                    113
                  </p>
                  <p className="text-gray-600 mt-2">Công an toàn quốc</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Báo Cáo Online</h3>
                  <p className="text-lg font-semibold text-blue-600">
                    report@antiscam.gov.vn
                  </p>
                  <p className="text-gray-600 mt-2">Email chính thức</p>
                </CardContent>
              </Card>
            </div>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setIsReportModalOpen(true)}
            >
              <AlertTriangle className="h-5 w-5 mr-2" />
              Xem hướng dẫn báo cáo
            </Button>
          </div>
        </section>

        <Footer />

        {/* Modals */}
        <ReportGuideModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
        />
        <FloatingActionButton />
      </div>
    </CaringToastProvider>
  );
}
