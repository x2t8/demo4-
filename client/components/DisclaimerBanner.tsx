import React, { useState } from "react";
import { Info, X, Phone, Building, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-sm text-yellow-800">
              <strong>Tuyên bố miễn trách:</strong> Website này chỉ cung cấp
              thông tin giáo dục về an toàn số. Tất cả số liệu, ví dụ và tình
              huống đều mang tính minh họa, không phải dữ liệu thực tế.
              <br className="hidden sm:block mt-1" />
              <div className="mt-2 space-y-1 sm:space-y-0 sm:space-x-4 sm:flex items-center">
                <span className="font-medium">Thông tin chính thức:</span>
                <a
                  href="https://bocongan.gov.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-700 hover:text-blue-900 underline"
                >
                  <Building className="h-3 w-3 mr-1" />
                  Bộ Công An
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <a
                  href="https://mic.gov.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-700 hover:text-blue-900 underline"
                >
                  <Building className="h-3 w-3 mr-1" />
                  Bộ TT&TT
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <span className="inline-flex items-center">
                  <Phone className="h-3 w-3 mr-1" />
                  <strong>Báo cáo: 113</strong>
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="p-1 h-6 w-6 text-yellow-600 hover:text-yellow-800 hover:bg-yellow-100 flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
