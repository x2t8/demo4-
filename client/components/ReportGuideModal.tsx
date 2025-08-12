import React from "react";
import {
  X,
  Phone,
  Users,
  Building,
  AlertTriangle,
  Clock,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReportGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportGuideModal({
  isOpen,
  onClose,
}: ReportGuideModalProps) {
  if (!isOpen) return null;

  const reportSteps = [
    {
      icon: Users,
      title: "1. Nhờ Người Thân Hỗ Trợ",
      description: "Không đi một mình, hãy nhờ gia đình hoặc bạn bè đi cùng",
      details: [
        "Kể lại chi tiết sự việc với người thân",
        "Nhờ họ đi cùng đến cơ quan chức năng",
        "Có người làm chứng sẽ có lợi cho việc điều tra",
      ],
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      icon: Phone,
      title: "2. Gọi Hotline Khẩn Cấp",
      description: "Gọi ngay để được hướng dẫn chi tiết",
      details: [
        "📞 Công an: 113 (miễn phí, 24/7)",
        "🏛️ Số điện thoại đồn công an địa phương",
        "💰 Ngân hàng (nếu liên quan đến tài khoản)",
        "📱 Nhà mạng (nếu bị lừa qua tin nhắn/cuộc gọi)",
      ],
      color: "bg-red-100 text-red-700 border-red-200",
    },
    {
      icon: Building,
      title: "3. Đến Đồn Công An",
      description: "Trình báo trực tiếp tại cơ quan công an gần nhất",
      details: [
        "Mang theo CMND/CCCD và các giấy tờ liên quan",
        "Chuẩn bị sẵn các bằng chứng (tin nhắn, cuộc gọi, chuyển khoản)",
        "Kể lại sự việc một cách chi tiết và trung thực",
        "Yêu cầu biên bản và số hồ sơ vụ việc",
      ],
      color: "bg-green-100 text-green-700 border-green-200",
    },
  ];

  const importantNotes = [
    {
      icon: Clock,
      title: "Thời Gian Vàng",
      content:
        "Báo cáo càng sớm càng tốt, trong vòng 24h đầu để tăng khả năng truy tìm",
    },
    {
      icon: FileText,
      title: "Bằng Chứng",
      content: "Lưu giữ tất cả tin nhắn, cuộc gọi, email, và lịch sử giao dịch",
    },
    {
      icon: AlertTriangle,
      title: "Không Tự Ý",
      content: "Không tự liên hệ với kẻ lừa đảo hay theo đuổi v��� việc một mình",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200] p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-8 w-8 animate-warning-glow" />
              <div>
                <h2 className="text-2xl font-bold">Hướng Dẫn Tố Cáo Lừa Đảo</h2>
                <p className="text-red-100">
                  Các bước cụ thể để báo cáo với cơ quan chức năng
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-200 transition-colors p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Important Warning */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800">
                  ⚠️ LƯU Ý QUAN TRỌNG
                </h3>
                <p className="text-yellow-700 mt-1">
                  Website này chỉ hướng dẫn cách báo cáo. Để được hỗ trợ chính
                  thức, bạn phải liên hệ trực tiếp với cơ quan chức năng.
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 text-center">
              3 Bước Báo Cáo Lừa Đảo Hiệu Quả
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reportSteps.map((step, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 ${step.color}`}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <step.icon className="h-8 w-8 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-sm opacity-90">{step.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-sm flex items-start space-x-2"
                      >
                        <span className="text-xs mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              📋 Điều Cần Nhớ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {importantNotes.map((note, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white p-4 rounded border"
                >
                  <note.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {note.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{note.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-lg font-bold text-red-800 mb-3 text-center">
              🆘 Liên Hệ Khẩn Cấp
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded border border-red-200">
                <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h4 className="font-bold text-red-800">Công An</h4>
                <p className="text-2xl font-bold text-red-600">113</p>
                <p className="text-sm text-red-600">Miễn phí - 24/7</p>
              </div>
              <div className="bg-white p-4 rounded border border-red-200">
                <Building className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h4 className="font-bold text-red-800">Đồn Công An</h4>
                <p className="text-sm text-red-600">Địa phương gần nhất</p>
                <p className="text-sm text-red-600">Tìm qua Google Maps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg flex justify-center">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8"
          >
            Tôi đã hiểu - Đóng hướng dẫn
          </Button>
        </div>
      </div>
    </div>
  );
}
