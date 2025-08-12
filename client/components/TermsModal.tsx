import React, { useState, useEffect } from "react";
import { X, AlertCircle, Info, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TermsModalProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export default function TermsModal({
  isVisible: externalVisible,
  onClose: externalOnClose,
}: TermsModalProps = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Auto-show only if not manually controlled
    if (externalVisible === undefined) {
      const hasSeenTerms = localStorage.getItem("hasSeenTerms");
      if (!hasSeenTerms) {
        setIsVisible(true);
      }
    }
  }, [externalVisible]);

  const handleAccept = () => {
    localStorage.setItem("hasSeenTerms", "true");
    if (externalOnClose) {
      externalOnClose();
    } else {
      setIsVisible(false);
    }
  };

  const handleDecline = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      // Redirect to government official site for auto-show
      window.location.href = "https://congan.gov.vn";
    }
  };

  const modalVisible =
    externalVisible !== undefined ? externalVisible : isVisible;

  if (!modalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-6 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-8 w-8 animate-warning-glow" />
            <div>
              <h2 className="text-2xl font-bold">Điều Khoản Sử Dụng</h2>
              <p className="text-blue-100">
                Vui lòng đọc kỹ trước khi tiếp tục
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  🚨 THÔNG BÁO QUAN TRỌNG
                </h3>
                <p className="text-red-700 text-sm leading-relaxed">
                  Website này{" "}
                  <strong>
                    CHỈ DÀNH CHO MỤC ĐÍCH GIÁO DỤC VÀ TUYÊN TRUYỀN
                  </strong>{" "}
                  về an toàn số. Chúng tôi{" "}
                  <strong>KHÔNG HỖ TRỢ BÁO CÁO LỪA ĐẢO</strong> dưới mọi hình
                  thức.
                </p>
              </div>
            </div>
          </div>

          {/* Educational Purpose */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  📚 Mục Đích Giáo Dục
                </h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Nâng cao nhận thức về an toàn số</li>
                  <li>• Giáo dục kỹ năng phòng chống lừa đảo</li>
                  <li>• Chia sẻ kiến thức bảo vệ thông tin cá nhân</li>
                  <li>• Hướng dẫn sử dụng công nghệ an toàn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What we DON'T do */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              ❌ Chúng Tôi KHÔNG Cung Cấp:
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• Dịch vụ báo cáo lừa đảo</li>
              <li>• Hỗ trợ pháp lý hay tư vấn luật</li>
              <li>• Giải quyết tranh chấp tài chính</li>
              <li>• Hỗ trợ khôi phục tài sản bị lừa đảo</li>
              <li>• Điều tra hay truy tìm kẻ lừa đảo</li>
            </ul>
          </div>

          {/* Where to report */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              ✅ Khi Gặp Lừa Đảo, Hãy Liên Hệ:
            </h3>
            <div className="text-green-700 text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium">🚔 Công an:</span>
                <span className="font-bold text-red-600">113</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">🏛️ Đồn công an địa phương</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">
                  👨‍👩‍👧‍👦 Nhờ người thân đi cùng đến cơ quan chức năng
                </span>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="text-xs text-gray-500 bg-gray-100 p-3 rounded">
            <p>
              <strong>Tuyên bố pháp lý:</strong> Website này được phát triển cho
              mục đích giáo dục trong cuộc thi khoa học kỹ thuật. Mọi thông tin
              được cung cấp chỉ mang tính chất tham khảo. Chúng tôi không chịu
              trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng
              thông tin trên website.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg flex flex-col sm:flex-row gap-3 justify-end">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Tôi không đồng ý
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
          >
            Tôi đã hiểu và đồng ý tiếp tục
          </Button>
        </div>
      </div>
    </div>
  );
}
