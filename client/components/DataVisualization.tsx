import React from "react";
import { TrendingUp, AlertTriangle, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  color: string;
  icon: React.ComponentType<any>;
  description: string;
}

const cybersecurityStats: StatCard[] = [
  {
    title: "Vụ lừa đảo trực tuyến",
    value: "15,847",
    change: "+23%",
    trend: "up",
    color: "text-red-600 bg-red-100",
    icon: AlertTriangle,
    description: "Tăng so với năm 2023",
  },
  {
    title: "Thiệt hại tài chính",
    value: "2,456 tỷ VNĐ",
    change: "+18%",
    trend: "up",
    color: "text-orange-600 bg-orange-100",
    icon: TrendingUp,
    description: "Tổng thiệt hại năm 2024",
  },
  {
    title: "Người dùng được bảo vệ",
    value: "1.2M+",
    change: "+45%",
    trend: "up",
    color: "text-green-600 bg-green-100",
    icon: Shield,
    description: "Qua các chương trình giáo dục",
  },
  {
    title: "Cộng đồng tham gia",
    value: "89,324",
    change: "+67%",
    trend: "up",
    color: "text-blue-600 bg-blue-100",
    icon: Users,
    description: "Người dùng hoạt động",
  },
];

const ageGroups = [
  { group: "18-25", percentage: 28, color: "bg-red-500" },
  { group: "26-35", percentage: 35, color: "bg-orange-500" },
  { group: "36-45", percentage: 22, color: "bg-yellow-500" },
  { group: "46-55", percentage: 12, color: "bg-green-500" },
  { group: "55+", percentage: 3, color: "bg-blue-500" },
];

const scamTypes = [
  { type: "Điện thoại", percentage: 45, color: "bg-red-500" },
  { type: "SMS", percentage: 28, color: "bg-orange-500" },
  { type: "Email", percentage: 15, color: "bg-yellow-500" },
  { type: "Mạng xã hội", percentage: 12, color: "bg-purple-500" },
];

export default function DataVisualization() {
  return (
    <div className="space-y-8">
      {/* Important Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
              ⚠️ QUAN TRỌNG: Dữ liệu minh họa
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
              <strong>Tất cả số liệu dưới đây đều là GIẢ</strong> - chỉ nhằm mục
              đích minh họa cho dự án khoa học kỹ thuật. Để có số liệu chính
              thức về tình hình lừa đảo tại Việt Nam, vui lòng tham khảo báo cáo
              từ{" "}
              <a
                href="https://mic.gov.vn"
                className="underline font-medium hover:text-yellow-600"
                target="_blank"
                rel="noopener"
              >
                Bộ TT&TT
              </a>
              ,{" "}
              <a
                href="https://bocongan.gov.vn"
                className="underline font-medium hover:text-yellow-600"
                target="_blank"
                rel="noopener"
              >
                Bộ Công An
              </a>
              , và{" "}
              <a
                href="https://sbv.gov.vn"
                className="underline font-medium hover:text-yellow-600"
                target="_blank"
                rel="noopener"
              >
                Ngân hàng Nhà nước
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cybersecurityStats.map((stat, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      {stat.description}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Age Groups Chart */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900 dark:text-white">
              <Users className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              Độ tuổi bị lừa đảo nhiều nhất
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ageGroups.map((group, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{group.group} tuổi</span>
                    <span className="text-gray-600">{group.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${group.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${group.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Dữ liệu dựa trên báo cáo của các cơ quan chức năng năm 2024
            </p>
          </CardContent>
        </Card>

        {/* Scam Types Chart */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900 dark:text-white">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
              Các hình thức lừa đảo phổ biến
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scamTypes.map((type, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{type.type}</span>
                    <span className="text-gray-600">{type.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${type.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${type.percentage}%`,
                        animationDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Thống kê từ các báo cáo lừa đảo được xác thực
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Trend Chart */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-900 dark:text-white">
            <TrendingUp className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
            Xu hướng lừa đảo 12 tháng qua
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 relative">
            {/* Chart container */}
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
              {[45, 52, 48, 61, 55, 67, 72, 78, 71, 85, 89, 94].map(
                (value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 mx-1"
                  >
                    {/* Bar */}
                    <div className="relative w-full max-w-8 flex justify-center">
                      <div
                        className="w-6 bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm transition-all duration-1000 ease-out shadow-sm"
                        style={{
                          height: `${Math.max(value * 2, 10)}px`,
                          animationDelay: `${index * 150}ms`,
                        }}
                      />
                    </div>
                    {/* Value label */}
                    <span className="text-xs font-medium text-gray-700 mt-1">
                      {value}
                    </span>
                    {/* Month label */}
                    <span className="text-xs text-gray-500 mt-1">
                      T{index + 1}
                    </span>
                  </div>
                ),
              )}
            </div>

            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-gray-500">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-t from-red-600 to-red-400 rounded mr-2"></div>
              <span>Số vụ lừa đảo (nghìn vụ)</span>
            </div>
            <div className="flex items-center text-red-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="font-medium">Tăng 23% so với năm trước</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
            <p className="text-sm text-green-700 font-medium">
              Giảm thiểu rủi ro
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Khi có kiến thức phòng chống
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
            <p className="text-sm text-blue-700 font-medium">Nhận biết được</p>
            <p className="text-xs text-gray-600 mt-1">
              Sau khi học các khóa đào tạo
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3.2M</div>
            <p className="text-sm text-purple-700 font-medium">
              Người được bảo vệ
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Thông qua chia sẻ kiến thức
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
