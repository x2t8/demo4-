import React, { useState } from "react";
import { createPortal } from "react-dom";
import { X, User, Mail, Lock, Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../contexts/AuthContext";

// Validation schemas
const loginSchema = z.object({
  email: z.string().min(1, "Email/Username không được để trống"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

const adminLoginSchema = z.object({
  email: z.string().min(1, "Tên đăng nhập không được để trống"),
  password: z.string().min(1, "Mật khẩu không được để trống"),
});

const registerSchema = z.object({
  fullName: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
});

type LoginForm = z.infer<typeof loginSchema>;
type RegisterForm = z.infer<typeof registerSchema>;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "login" | "register";
  adminMode?: boolean;
}

export default function AuthModal({ isOpen, onClose, defaultMode = "login", adminMode = false }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(adminMode ? "login" : defaultMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(adminMode ? adminLoginSchema : loginSchema),
  });

  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  if (!isOpen) return null;

  const handleLogin = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      let success = false;

      if (adminMode) {
        // Admin login - use username field instead of email
        // For admin, we use the email field as username input
        success = await login(data.email, data.password);
        if (success) {
          alert("Đăng nhập admin thành công!");
          onClose();
        } else {
          alert("Tài khoản hoặc mật khẩu admin không đúng!\n\nThử: admin / admin123");
        }
      } else {
        // Regular user login - would connect to real API later
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
        alert("Đăng nhập người dùng thành công! (Mockup)");
        onClose();
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Đã xảy ra lỗi khi đăng nhập");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data: RegisterForm) => {
    setIsLoading(true);
    // Mockup registration - replace with real API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      // Registration API call would be implemented here
      // Mock success
      alert("Đăng ký thành công! (Mockup)");
      onClose();
    } catch (error) {
      console.error("Register error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-4" style={{ zIndex: 90 }}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6" />
              <div>
                <h2 className="text-xl font-bold">
                  {adminMode ? "Đăng Nhập Admin" : (mode === "login" ? "Đăng Nhập" : "Đăng Ký")}
                </h2>
                <p className="text-blue-100 text-sm">
                  {adminMode
                    ? "Truy cập trang quản trị hệ thống"
                    : (mode === "login"
                      ? "Truy cập vào tài khoản của bạn"
                      : "Tạo tài khoản mới để bắt đầu"
                    )
                  }
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 transition-colors p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Form content */}
        <div className="p-6">
          {mode === "login" ? (
            <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  {adminMode ? "Tên đăng nhập" : "Email/Username"}
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="text"
                    placeholder={adminMode ? "admin" : "email@example.com hoặc username"}
                    className="pl-10"
                    {...loginForm.register("email")}
                  />
                </div>
                {loginForm.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {loginForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Mật khẩu
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    {...loginForm.register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {loginForm.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
                </label>
                <button type="button" className="text-sm text-blue-600 hover:text-blue-800">
                  Quên mật khẩu?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={isLoading}
              >
                {isLoading ? "Đang đăng nhập..." : "Đăng Nhập"}
              </Button>
            </form>
          ) : (
            <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Họ và tên
                </Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="pl-10"
                    {...registerForm.register("fullName")}
                  />
                </div>
                {registerForm.formState.errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {registerForm.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="pl-10"
                    {...registerForm.register("email")}
                  />
                </div>
                {registerForm.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {registerForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Mật khẩu
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    {...registerForm.register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {registerForm.formState.errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {registerForm.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Xác nhận mật khẩu
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    {...registerForm.register("confirmPassword")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {registerForm.formState.errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {registerForm.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="rounded text-blue-600 mt-1" required />
                <span className="ml-2 text-xs text-gray-600">
                  Tôi đồng ý với{" "}
                  <button type="button" className="text-blue-600 hover:text-blue-800 underline">
                    Điều khoản sử dụng
                  </button>{" "}
                  và{" "}
                  <button type="button" className="text-blue-600 hover:text-blue-800 underline">
                    Chính sách bảo mật
                  </button>
                </span>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={isLoading}
              >
                {isLoading ? "Đang đăng ký..." : "Đăng Ký"}
              </Button>
            </form>
          )}

          {/* Mode switch - Hide in admin mode */}
          {!adminMode && (
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {mode === "login" ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
                <button
                  type="button"
                  onClick={() => setMode(mode === "login" ? "register" : "login")}
                  className="ml-1 text-blue-600 hover:text-blue-800 font-medium"
                >
                  {mode === "login" ? "Đăng ký ngay" : "Đăng nhập"}
                </button>
              </p>
            </div>
          )}

          {/* Mockup notice */}
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-xs text-center">
              <strong>Lưu ý:</strong> {adminMode
                ? "Tài khoản admin demo: admin / admin123"
                : "Đây là giao diện mockup để chuẩn bị cho hệ thống xác thực. Chức năng đăng ký/đăng nhập sẽ được tích hợp với backend trong tương lai."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
