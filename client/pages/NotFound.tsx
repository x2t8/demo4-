import React from "react";
import { Home, Search, ArrowLeft, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const navigate = useNavigate();

  const quickLinks = [
    {
      title: "An Toàn Số",
      description: "Tìm hiểu các loại lừa đảo phổ biến",
      icon: Shield,
      link: "/scam-types",
      color: "text-red-600 bg-red-100",
    },
    {
      title: "Đạo Đức Số",
      description: "Quy tắc ứng xử văn minh online",
      icon: BookOpen,
      link: "/digital-ethics",
      color: "text-purple-600 bg-purple-100",
    },
    {
      title: "AI An Toàn",
      description: "Sử dụng AI một cách thông minh",
      icon: BookOpen,
      link: "/ai-safety",
      color: "text-blue-600 bg-blue-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-cyan-100">
      <Header />

      <div className="flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="text-9xl font-bold text-blue-200 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center animate-bounce">
                  <Search className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Trang không tồn tại
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Có vẻ như trang bạn đang tìm kiếm đã bị di chuyển hoặc không còn
              tồn tại.
            </p>
            <p className="text-lg text-gray-500">
              Đừng lo lắng, hãy khám phá những nội dung hữu ích khác của chúng
              tôi!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Quay lại trang trước
            </Button>
            <Link to="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Home className="h-5 w-5 mr-2" />
                Về trang chủ
              </Button>
            </Link>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-3">
                  <div
                    className={`inline-flex p-4 rounded-full ${item.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <Link to={item.link}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Khám phá ngay →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cần hỗ trợ?
                </h3>
                <p className="text-gray-600 mb-6">
                  Nếu bạn tin rằng đây là lỗi hoặc cần hỗ trợ, hãy liên hệ với
                  chúng tôi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline">📧 Gửi phản hồi</Button>
                  <Button variant="outline">💬 Chat hỗ trợ</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
