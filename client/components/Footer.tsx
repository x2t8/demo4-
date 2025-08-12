import React, { useState } from "react";
import { Shield, Phone, Mail, MapPin, Building } from "lucide-react";
import { Link } from "react-router-dom";
import TermsModal from "./TermsModal";

export default function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Công Dân Số An Toàn</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nâng cao năng lực công dân về an toàn số, phòng chống lừa đảo
              online.
            </p>
          </div>

          {/* Useful Links & Documents */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tài liệu hữu ích</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://mic.gov.vn/Pages/VanBan/13436/Nghi-dinh-15-2020-ND-CP.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Nghị định 15/2020/NĐ-CP
                </a>
              </li>
              <li>
                <a
                  href="https://thuvienphapluat.vn/van-ban/Cong-nghe-thong-tin/Luat-An-ninh-mang-2018-351416.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Luật An ninh mạng 2018
                </a>
              </li>
              <li>
                <a
                  href="https://www.mic.gov.vn/mic_2020/Pages/TinTuc/140962/Huong-dan-bao-cao-su-co-an-ninh-mang.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Hướng dẫn báo cáo
                </a>
              </li>
              <li>
                <a
                  href="https://www.sbv.gov.vn/webcenter/portal/vi/menu/rm/ndhttm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  An toàn thanh toán
                </a>
              </li>
              <li>
                <a
                  href="https://congan.com.vn/tin-tuc-su-kien/canh-bao-cac-hinh-thuc-lua-dao-qua-mang_83525.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Cảnh báo lừa đảo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>Hotline: 113</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>Email: info@antiscam.gov.vn</span>
              </li>
              <li className="flex items-center space-x-2">
                <Building className="h-4 w-4 text-blue-400" />
                <span>Website: antiscam.gov.vn</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; 2024 Website Tuyên Truyền Chống Lừa Đảo. Được phát triển
              cho cuộc thi khoa học kỹ thuật giáo dục.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="hover:text-blue-400 transition-colors underline"
              >
                Điều khoản sử dụng
              </button>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Hỗ trợ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      <TermsModal
        isVisible={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </footer>
  );
}
