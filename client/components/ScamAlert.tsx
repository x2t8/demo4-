import React, { useState, useEffect } from "react";
import { AlertTriangle, Clock, TrendingUp, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ScamAlert {
  id: string;
  title: string;
  description: string;
  type: "urgent" | "warning" | "info";
  timestamp: string;
  source: string;
  affectedArea?: string;
  reportCount?: number;
}

const mockAlerts: ScamAlert[] = [
  {
    id: "1",
    title: "🚨 Lừa đảo giả mạo Vietcombank qua Zalo",
    description:
      "Phát hiện hàng loạt tin nhắn giả mạo ngân hàng Vietcombank yêu cầu cập nhật thông tin tài khoản qua link lạ.",
    type: "urgent",
    timestamp: "2 phút trước",
    source: "Báo cáo từ cộng đồng",
    affectedArea: "TP.HCM, Hà Nội",
    reportCount: 127,
  },
  {
    id: "2",
    title: "⚠️ Sàn đầu tư FXPro giả mạo",
    description:
      "Cảnh báo về website fxpro-vn.com giả mạo sàn FXPro quốc tế, đã có nhiều người bị lừa tiền đầu tư.",
    type: "warning",
    timestamp: "15 phút trước",
    source: "Xác minh từ chuyên gia",
    affectedArea: "Toàn quốc",
    reportCount: 85,
  },
  {
    id: "3",
    title: "📢 Thủ đoạn mới: AI Voice giả mạo",
    description:
      "Xuất hiện thủ đoạn sử dụng AI để giả giọng nói người thân qua điện thoại, yêu cầu chuyển tiền khẩn cấp.",
    type: "info",
    timestamp: "1 giờ trước",
    source: "Cập nhật từ Bộ Công An",
    affectedArea: "Miền Bắc",
    reportCount: 43,
  },
  {
    id: "4",
    title: "🔍 Website fake shop thời trang",
    description:
      "Phát hiện nhóm website bán hàng thời trang giả (shop-fashion-vn.com và các domain tương tự) nhận tiền không giao hàng.",
    type: "warning",
    timestamp: "3 giờ trước",
    source: "Báo cáo từ khách hàng",
    affectedArea: "Toàn quốc",
    reportCount: 234,
  },
];

export default function ScamAlert() {
  const [alerts, setAlerts] = useState<ScamAlert[]>(mockAlerts);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getAlertStyle = (type: ScamAlert["type"]) => {
    switch (type) {
      case "urgent":
        return "border-red-500 bg-red-50 dark:bg-red-900/20";
      case "warning":
        return "border-orange-500 bg-orange-50 dark:bg-orange-900/20";
      case "info":
        return "border-blue-500 bg-blue-50 dark:bg-blue-900/20";
      default:
        return "border-gray-300 bg-gray-50 dark:bg-gray-800";
    }
  };

  const getAlertIcon = (type: ScamAlert["type"]) => {
    switch (type) {
      case "urgent":
        return <AlertTriangle className="h-5 w-5 text-red-600 animate-pulse" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case "info":
        return <TrendingUp className="h-5 w-5 text-blue-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getBadgeVariant = (type: ScamAlert["type"]) => {
    switch (type) {
      case "urgent":
        return "destructive";
      case "warning":
        return "secondary";
      case "info":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
            🚨 Cảnh Báo Lừa Đảo Realtime
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Cập nhật liên tục từ cộng đồng và các cơ quan chức năng
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            Cập nhật: {currentTime.toLocaleTimeString("vi-VN")}
          </div>
          <Badge variant="outline" className="mt-1">
            {alerts.length} cảnh báo mới
          </Badge>
        </div>
      </div>

      {/* Alert List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            className={`border-l-4 ${getAlertStyle(alert.type)} transition-all hover:shadow-md`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight text-gray-900 dark:text-white">
                      {alert.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge
                        variant={getBadgeVariant(alert.type)}
                        className="text-xs"
                      >
                        {alert.type === "urgent"
                          ? "KHẨN CẤP"
                          : alert.type === "warning"
                            ? "CẢNH BÁO"
                            : "THÔNG TIN"}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {alert.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
                {alert.reportCount && (
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">
                      {alert.reportCount}
                    </div>
                    <div className="text-xs text-gray-500">báo cáo</div>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                {alert.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>📍 {alert.affectedArea}</span>
                  <span>📊 {alert.source}</span>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Chi tiết
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            💡 Phát hiện lừa đảo mới?
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Hãy báo cáo ngay để cộng đồng được biết và phòng tránh
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline">📋 Kiểm tra website</Button>
            <Button variant="outline">🤖 Chat với AI</Button>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>Lưu ý:</strong> Đây là dữ liệu mô phỏng cho mục đích demo. Để
          có thông tin cảnh báo chính thức, vui lòng truy cập website chính thức
          của các cơ quan chức năng hoặc{" "}
          <a
            href="https://chongluadao.vn"
            className="underline font-medium"
            target="_blank"
            rel="noopener"
          >
            chongluadao.vn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
