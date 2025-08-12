# 🛡️ Công Dân Số An Toàn

> **Nền tảng giáo dục an toàn số toàn diện** - Bảo vệ bản thân và gia đình khỏi lừa đảo trực tuyến

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-green.svg)](https://vitejs.dev/)

## 📖 Giới thiệu

**Công Dân Số An Toàn** là một ứng dụng web giáo dục được thiết kế để nâng cao nhận thức về an toàn số cho người dân Việt Nam. Dự án cung cấp kiến thức toàn diện về:

- 🔒 **An toàn số**: Phòng chống lừa đảo trực tuyến
- ⚖️ **Pháp luật số**: Hiểu biết pháp lý trong môi trường số
- 💡 **Đạo đức số**: Hành vi có trách nhiệm trong không gian mạng
- 🤖 **AI an toàn**: Sử dụng trí tuệ nhân tạo một cách an toàn
- 💻 **Kỹ năng số**: Nâng cao khả năng sử dụng công nghệ

## ✨ Tính năng chính

### 🎯 **Core Features**

- **📚 6 Modules học tập**: Nội dung được cấu trúc khoa học
- **🎮 Quiz tương tác**: Đánh giá kiến thức thông qua bài test
- **📱 Responsive Design**: Tối ưu cho mọi thiết bị
- **🌙 Dark/Light Mode**: Giao diện thân thiện với mắt
- **🔔 Caring Toasts**: Thông báo chăm sóc người dùng
- **🚨 Emergency Actions**: Nút hỗ trợ khẩn cấp

### 🛠️ **Technical Features**

- **⚡ Lazy Loading**: Tối ưu hiệu suất tải trang
- **📱 PWA Ready**: Có thể cài đặt như ứng dụng native
- **🎨 Motion Design**: Animation mượt mà, professional
- **♿ Accessibility**: Hỗ trợ đầy đủ cho người khuyết tật
- **🔍 SEO Optimized**: Tối ưu cho công cụ tìm kiếm

## 🚀 Bắt đầu nhanh

### Yêu cầu hệ thống

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 hoặc **yarn** >= 1.22.0

### Cài đặt

```bash
# Clone repository
git clone https://github.com/your-username/cong-dan-so-an-toan.git
cd cong-dan-so-an-toan

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Mở browser và truy cập http://localhost:8080
```

### Scripts có sẵn

```bash
# Development
npm run dev              # Chạy dev server với hot reload
npm run typecheck        # Kiểm tra TypeScript types

# Production
npm run build           # Build cho production
npm run start           # Chạy production server
npm run preview         # Preview production build

# Testing & Quality
npm test               # Chạy test suite
npm run format.fix     # Format code với Prettier
```

## 🏗️ Kiến trúc dự án

```
├── client/                     # Frontend React application
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components (Radix + Tailwind)
│   │   ├── AuthModal.tsx     # Authentication modal
│   │   ├── CaringToast.tsx   # Caring notification system
│   │   ├── Carousel3D.tsx    # 3D module carousel
│   │   └── ...               # Other feature components
│   ├── hooks/                # Custom React hooks
│   │   ├── useDisclaimerBanner.ts
│   │   ├── useScrollReveal.ts
│   │   └─�� use-toast.ts
│   ├── lib/                  # Utility libraries
│   │   ├── animations.ts     # Animation utilities
│   │   └── utils.ts          # General utilities
│   ├── pages/                # Route components
│   │   ├── Index.tsx         # Homepage
│   │   ├── ScamTypes.tsx     # Scam education page
│   │   ├── DigitalEthics.tsx # Digital ethics module
│   │   ├── DigitalLaw.tsx    # Digital law module
│   │   ├── AISafety.tsx      # AI safety module
│   │   ├── DigitalSkills.tsx # Digital skills module
│   │   └── NotFound.tsx      # 404 page
│   ├── App.tsx               # Main app component with routing
│   └── global.css            # Global styles and animations
├── server/                    # Express backend (minimal)
│   ├── routes/               # API route handlers
│   └── index.ts              # Server configuration
├── shared/                    # Shared TypeScript types
│   └── api.ts                # API interface definitions
└── public/                    # Static assets
```

## 🎨 Tech Stack

### **Frontend**

- **React 18** - Modern UI library với concurrent features
- **TypeScript 5.5** - Type-safe JavaScript
- **Vite 6.2** - Blazing fast build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful SVG icons
- **Framer Motion** - Production-ready animations
- **React Router 6** - Declarative routing
- **React Hook Form** - Performant forms
- **Zod** - Schema validation
- **TanStack Query** - Server state management

### **Backend & Tools**

- **Express** - Minimal web framework
- **Vitest** - Fast unit testing
- **ESLint + Prettier** - Code quality tools
- **PostCSS** - CSS processing

## 🎯 Modules chi tiết

### 🔒 **An toàn số (ScamTypes)**

- Nhận diện các loại lừa đảo phổ biến
- Cách phòng tránh và xử lý khi gặp lừa đảo
- Thống kê thực tế về tình hình lừa đảo tại Việt Nam
- **Route**: `/scam-types`

### ⚖️ **Pháp luật số (DigitalLaw)**

- Tìm hiểu luật pháp Việt Nam về không gian mạng
- Quyền và nghĩa vụ của công dân trong môi trường số
- Các quy định về bảo vệ dữ liệu cá nhân
- **Route**: `/digital-law`

### 💡 **Đạo đức số (DigitalEthics)**

- Nguyên tắc đạo đức trong không gian số
- Cách giao tiếp văn minh trên mạng
- Chống tin giả và thông tin sai lệch
- **Route**: `/digital-ethics`

### 🤖 **AI an toàn (AISafety)**

- Hiểu về trí tuệ nhân tạo và tác động
- Cách sử dụng AI một cách có trách nhiệm
- Nhận biết nội dung được tạo bởi AI
- **Route**: `/ai-safety`

### 💻 **Kỹ năng số (DigitalSkills)**

- Đánh giá và nâng cao kỹ năng số cá nhân
- Công cụ và phần mềm hữu ích
- Xu hướng công nghệ tương lai
- **Route**: `/digital-skills`

## 🎨 Design System

### **Colors**

```css
/* Primary Colors */
--primary: hsl(217 91% 60%) /* Blue */ --secondary: hsl(142 71% 45%) /* Green */
  --accent: hsl(38 92% 50%) /* Orange */ /* Educational Theme */
  --education-blue: hsl(217 91% 65%) --education-green: hsl(142 76% 52%)
  --education-purple: hsl(262 90% 65%);
```

### **Typography**

- **Font Stack**: Inter, SF Pro Display, System fonts
- **Responsive Text**: `text-xl sm:text-2xl md:text-3xl lg:text-4xl`
- **Vietnamese Support**: Full diacritics support

### **Animations**

- **Entrance**: Fade in, slide up, scale in
- **Interaction**: Hover lift, protective pulse
- **Accessibility**: Respects `prefers-reduced-motion`

## 📱 Features đặc biệt

### **🧠 Caring Toast System**

Hệ thống thông báo độc đáo mang tính chăm sóc:

```typescript
// Auto-show caring messages
const careMessages = [
  "💚 Bạn đang bảo vệ bản thân và gia đình khỏi lừa đảo",
  "🛡️ Kiến thức là vũ khí mạnh nhất chống lại kẻ xấu",
  "❤️ Hãy chia sẻ kiến thức này với người thân yêu",
];
```

### **🎮 Interactive Quiz System**

Đánh giá kiến thức với feedback real-time:

- Progress tracking
- Kết quả chi tiết
- Recommendations based on score

### **🌙 Smart Theme System**

```typescript
// Auto-detect system preference
const [theme, setTheme] = useState<"light" | "dark">(
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
);
```

### **♿ Accessibility Features**

- **Keyboard Navigation**: Full support
- **Screen Reader**: ARIA labels và descriptions
- **High Contrast**: Color accessibility compliant
- **Reduced Motion**: Animation controls

## 🔧 Configuration

### **Environment Variables**

```bash
# .env.local
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME="Công Dân Số An Toàn"
```

### **Tailwind Config**

```typescript
// Custom theme extensions
theme: {
  extend: {
    colors: {
      education: {
        blue: "hsl(var(--education-blue))",
        green: "hsl(var(--education-green))",
        // ... more colors
      }
    }
  }
}
```

## 🚀 Performance

### **Core Web Vitals**

- **LCP**: < 2.5s (Lazy loading + code splitting)
- **FID**: < 100ms (Optimized interactions)
- **CLS**: < 0.1 (Stable layouts)

### **Optimizations**

- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: SVG icons, minimal images
- **Bundle Size**: Tree-shaking, minimal dependencies
- **Caching**: Service worker ready

## 🧪 Testing

```bash
# Run all tests
npm test

# Test coverage
npm run test:coverage

# E2E testing (coming soon)
npm run test:e2e
```

### **Testing Strategy**

- **Unit Tests**: Vitest + React Testing Library
- **Integration Tests**: Component interactions
- **E2E Tests**: Playwright (planned)
- **Accessibility Tests**: axe-core integration

## 📦 Deployment

### **Build cho Production**

```bash
npm run build
npm run start
```

### **Deploy Options**

- **Netlify**: Connect via MCP integration
- **Vercel**: One-click deployment
- **Self-hosted**: Docker container available

### **CI/CD Pipeline**

```yaml
# .github/workflows/deploy.yml
- name: Build and Test
  run: |
    npm ci
    npm run typecheck
    npm run test
    npm run build
```

## 🤝 Contributing

### **Development Workflow**

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### **Code Standards**

- **TypeScript**: Strict mode enabled
- **ESLint**: Enforced rules
- **Prettier**: Auto-formatting
- **Conventional Commits**: Semantic versioning

### **PR Guidelines**

- Include tests for new features
- Update documentation
- Follow accessibility standards
- Ensure mobile responsiveness

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first styling
- **Lucide** - For beautiful icons
- **React Team** - For the amazing framework
- **Vite Team** - For blazing fast tooling

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/cong-dan-so-an-toan/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/cong-dan-so-an-toan/discussions)
- **Email**: support@congdansoanoan.vn

---

<div align="center">

**Made with ❤️ for safer digital citizenship in Vietnam**

[🏠 Homepage](/) • [📚 Documentation](https://docs.congdansoanoan.vn) • [🐛 Report Bug](https://github.com/your-username/cong-dan-so-an-toan/issues) • [💡 Request Feature](https://github.com/your-username/cong-dan-so-an-toan/issues)

</div>
