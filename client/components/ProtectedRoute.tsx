import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Hiển thị loading khi đang kiểm tra auth state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Nếu cần admin access nhưng chưa đăng nhập hoặc không phải admin
  if (requireAdmin && (!isAuthenticated || !isAdmin)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-auto p-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m2-8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h5m5 0h5a2 2 0 002-2V7a2 2 0 00-2-2h-5m-5 0V5a2 2 0 012-2h5a2 2 0 012 2v2"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Truy Cập Bị Hạn Chế
            </h2>
            <p className="text-gray-600 mb-6">
              Bạn cần đăng nhập với tài khoản quản trị viên để truy cập trang này.
            </p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Đăng Nhập Admin
            </button>
          </div>
        </div>
        
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)}
          adminMode={true}
        />
      </div>
    );
  }

  // Nếu cần authentication nhưng chưa đăng nhập
  if (!requireAdmin && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-auto p-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Cần Đăng Nhập
            </h2>
            <p className="text-gray-600 mb-6">
              Bạn cần đăng nhập để truy cập trang này.
            </p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Đăng Nhập
            </button>
          </div>
        </div>
        
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)}
          adminMode={false}
        />
      </div>
    );
  }

  // Nếu đã authentication và có quyền truy cập
  return <>{children}</>;
};

export default ProtectedRoute;
