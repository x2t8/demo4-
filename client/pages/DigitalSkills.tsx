import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Monitor,
  Smartphone,
  Cloud,
  Users,
  Globe,
  Keyboard,
  Mouse,
  Wifi,
  Lock,
  Search,
  Mail,
  Calendar,
  FileText,
  Video,
  MessageSquare,
  BookOpen,
  ExternalLink,
  Brain,
  Target,
  Settings,
  Accessibility,
  Zap,
  GraduationCap,
  Briefcase,
  Heart,
  Building,
  Star,
  CheckCircle,
  XCircle,
  PlayCircle,
  Download,
  Eye,
  Volume2,
  Lightbulb,
  Cpu,
  Shield,
  Coins,
  Home,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import LazySection from "@/components/LazySection";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

interface LearningResource {
  title: string;
  provider: string;
  url: string;
  type: "course" | "video" | "article" | "pdf";
  level: "Cơ bản" | "Trung bình" | "Nâng cao";
  duration: string;
  free: boolean;
  vietnamese: boolean;
}

interface IndustryProfile {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: string[];
  tools: string[];
  resources: LearningResource[];
}

export default function DigitalSkills() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [accessibilityMode, setAccessibilityMode] = useState(false);
  const [fontSize, setFontSize] = useState("normal");
  const [highContrast, setHighContrast] = useState(false);

  // Sample quiz questions (in real app, would fetch from API)
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Cách tốt nhất để tạo mật khẩu mạnh là gì?",
      options: [
        "Sử dụng tên và ngày sinh",
        "Kết hợp chữ cái, số và ký tự đặc biệt",
        "Sử dụng từ trong từ điển",
        "Dùng cùng mật khẩu cho tất cả tài khoản",
      ],
      correctAnswer: 1,
      explanation:
        "Mật khẩu mạnh cần kết hợp nhiều loại ký tự khác nhau và không dễ đoán.",
      category: "Bảo mật",
    },
    {
      id: 2,
      question: "Google Sheets được sử dụng chủ yếu để làm gì?",
      options: [
        "Chỉnh sửa ảnh",
        "Tạo và quản lý bảng tính",
        "Thiết kế website",
        "Gửi email",
      ],
      correctAnswer: 1,
      explanation:
        "Google Sheets là công cụ tạo và quản lý bảng tính trực tuyến.",
      category: "Ứng dụng văn phòng",
    },
    {
      id: 3,
      question: "Phím tắt Ctrl+C dùng để làm gì?",
      options: [
        "Đóng ứng dụng",
        "Sao chép nội dung",
        "Tạo file mới",
        "In tài liệu",
      ],
      correctAnswer: 1,
      explanation: "Ctrl+C là phím tắt để sao chép (copy) nội dung đã ch��n.",
      category: "Kỹ năng cơ bản",
    },
    {
      id: 4,
      question: "Đâu là dấu hiệu của website an toàn?",
      options: [
        "URL bắt đầu bằng http://",
        "URL bắt đầu bằng https://",
        "Website có nhiều quảng cáo",
        "Website yêu cầu thông tin cá nhân ngay lập tức",
      ],
      correctAnswer: 1,
      explanation: "HTTPS cho biết kết nối được mã hóa và an toàn hơn HTTP.",
      category: "An ninh mạng",
    },
    {
      id: 5,
      question: "Cloud storage có ưu điểm gì?",
      options: [
        "Chỉ truy cập được từ một thiết bị",
        "Truy cập từ nhiều thiết bị, đồng bộ dữ liệu",
        "Không cần internet",
        "Chỉ lưu được file nhỏ",
      ],
      correctAnswer: 1,
      explanation:
        "Cloud storage cho phép truy cập và đồng bộ dữ liệu từ nhiều thiết bị qua internet.",
      category: "Công nghệ đám mây",
    },
    {
      id: 6,
      question: "Zoom được sử dụng chủ yếu để làm gì?",
      options: [
        "Chỉnh sửa video",
        "Họp video trực tuyến",
        "Chơi game",
        "Mua sắm online",
      ],
      correctAnswer: 1,
      explanation: "Zoom là nền tảng họp video và webinar trực tuyến phổ biến.",
      category: "Công cụ collaboration",
    },
    {
      id: 7,
      question: "AI (Trí tuệ nhân tạo) có thể giúp gì trong công việc?",
      options: [
        "Chỉ thay thế hoàn toàn con người",
        "Tự động hóa tác vụ lặp lại và hỗ trợ ra quyết định",
        "Chỉ dùng để chơi game",
        "Không có ứng dụng thực tế",
      ],
      correctAnswer: 1,
      explanation:
        "AI giúp tự động hóa công việc lặp lại và hỗ trợ con người ra quyết định tốt hơn.",
      category: "Công nghệ mới",
    },
    {
      id: 8,
      question: "Phishing là gì?",
      options: [
        "Một loại phần mềm văn phòng",
        "Hình thức lừa đảo qua email hoặc website giả mạo",
        "Cách thức sao lưu dữ liệu",
        "Phương pháp tìm kiếm thông tin",
      ],
      correctAnswer: 1,
      explanation:
        "Phishing là hình thức lừa đảo bằng cách giả mạo email hoặc website để đánh cắp thông tin.",
      category: "An ninh mạng",
    },
    {
      id: 9,
      question: "Blockchain được ứng dụng trong lĩnh vực nào?",
      options: [
        "Chỉ trong tiền điện tử",
        "Tiền điện tử, bảo mật dữ liệu, hợp đồng thông minh",
        "Chỉ trong gaming",
        "Không có ứng dụng thực tế",
      ],
      correctAnswer: 1,
      explanation:
        "Blockchain có nhiều ứng dụng: tiền điện tử, bảo mật dữ liệu, smart contracts, truy xuất nguồn gốc.",
      category: "Công nghệ mới",
    },
    {
      id: 10,
      question: "No-code platform giúp gì?",
      options: [
        "Chỉ dành cho lập trình viên",
        "Tạo ứng dụng và website không cần biết code",
        "Chỉ để thiết kế đồ họa",
        "Chỉ để quản lý file",
      ],
      correctAnswer: 1,
      explanation:
        "No-code platform cho phép người không biết lập trình tạo ra ứng dụng và website.",
      category: "Công nghệ mới",
    },
  ];

  // Learning Resources
  const learningResources: { [key: string]: LearningResource[] } = {
    "Excel cơ bản": [
      {
        title: "Excel từ Zero đến Hero",
        provider: "Coursera",
        url: "https://coursera.org/excel-basics",
        type: "course",
        level: "Cơ bản",
        duration: "4 tuần",
        free: true,
        vietnamese: true,
      },
      {
        title: "Hướng dẫn Excel cơ bản",
        provider: "YouTube - Thầy Giáo CNTT",
        url: "https://youtube.com/excel-vietnamese",
        type: "video",
        level: "Cơ bản",
        duration: "2 giờ",
        free: true,
        vietnamese: true,
      },
      {
        title: "Excel Handbook 2024",
        provider: "Microsoft",
        url: "https://support.microsoft.com/excel",
        type: "pdf",
        level: "Cơ bản",
        duration: "Tự học",
        free: true,
        vietnamese: false,
      },
    ],
    "Digital Marketing": [
      {
        title: "Google Digital Garage",
        provider: "Google",
        url: "https://digitalgarage.google.com",
        type: "course",
        level: "Cơ bản",
        duration: "6 tuần",
        free: true,
        vietnamese: true,
      },
      {
        title: "Facebook Blueprint",
        provider: "Meta",
        url: "https://facebook.com/business/learn",
        type: "course",
        level: "Trung bình",
        duration: "4 tuần",
        free: true,
        vietnamese: true,
      },
    ],
    Cybersecurity: [
      {
        title: "An ninh mạng cho người mới",
        provider: "FPT Edu",
        url: "https://fpt.edu.vn/cybersecurity",
        type: "video",
        level: "Cơ bản",
        duration: "3 giờ",
        free: true,
        vietnamese: true,
      },
      {
        title: "BKAV Security Guide",
        provider: "BKAV",
        url: "https://bkav.com/security-guide",
        type: "article",
        level: "Trung bình",
        duration: "1 giờ",
        free: true,
        vietnamese: true,
      },
    ],
  };

  // Industry-specific profiles
  const industryProfiles: IndustryProfile[] = [
    {
      id: "teacher",
      title: "Giáo viên",
      icon: GraduationCap,
      description: "Kỹ năng số thiết yếu cho giáo dục hiện đại",
      skills: [
        "Google Classroom",
        "Zoom/Teams for education",
        "Kahoot/Quizizz",
        "PowerPoint/Canva",
        "Quản lý điểm số điện tử",
        "Tạo video bài giảng",
      ],
      tools: [
        "Google Workspace for Education",
        "Microsoft Teams for Education",
        "Kahoot",
        "Padlet",
        "Flipgrid",
        "Screencastify",
      ],
      resources: [
        {
          title: "Google for Education Certification",
          provider: "Google",
          url: "https://edu.google.com/teacher-center/",
          type: "course",
          level: "Cơ bản",
          duration: "20 giờ",
          free: true,
          vietnamese: true,
        },
      ],
    },
    {
      id: "office",
      title: "Nhân viên văn phòng",
      icon: Briefcase,
      description: "Tối ưu hóa hiệu quả công việc văn phòng",
      skills: [
        "Excel nâng cao",
        "Microsoft Teams",
        "Project management",
        "PowerBI/Data analysis",
        "Automation tools",
        "Digital documentation",
      ],
      tools: [
        "Microsoft 365",
        "Slack",
        "Trello/Asana",
        "Power BI",
        "Zapier",
        "Notion",
      ],
      resources: [
        {
          title: "Microsoft 365 Productivity",
          provider: "Microsoft Learn",
          url: "https://learn.microsoft.com/training/",
          type: "course",
          level: "Trung bình",
          duration: "15 giờ",
          free: true,
          vietnamese: false,
        },
      ],
    },
    {
      id: "business",
      title: "Kinh doanh",
      icon: BarChart3,
      description: "Kỹ năng số cho doanh nghiệp và marketing",
      skills: [
        "Social media marketing",
        "E-commerce platforms",
        "CRM basics",
        "Analytics & reporting",
        "Digital advertising",
        "Content creation",
      ],
      tools: [
        "Facebook Ads Manager",
        "Google Analytics",
        "Shopify/WooCommerce",
        "HubSpot",
        "Canva Pro",
        "Mailchimp",
      ],
      resources: [
        {
          title: "Digital Marketing Fundamentals",
          provider: "Google Digital Garage",
          url: "https://digitalgarage.google.com",
          type: "course",
          level: "Cơ bản",
          duration: "40 giờ",
          free: true,
          vietnamese: true,
        },
      ],
    },
    {
      id: "healthcare",
      title: "Y tế",
      icon: Heart,
      description: "Công nghệ số trong chăm sóc sức khỏe",
      skills: [
        "Telemedicine platforms",
        "Patient data security",
        "Digital health records",
        "Medical device integration",
        "Health apps usage",
        "HIPAA compliance",
      ],
      tools: [
        "Epic/Cerner EHR",
        "Teladoc",
        "Zoom for Healthcare",
        "Microsoft Healthcare Bot",
        "Health tracking apps",
        "Secure messaging",
      ],
      resources: [
        {
          title: "Digital Health Literacy",
          provider: "WHO",
          url: "https://who.int/digital-health",
          type: "article",
          level: "Trung bình",
          duration: "5 giờ",
          free: true,
          vietnamese: false,
        },
      ],
    },
  ];

  // Emerging Technologies
  const emergingTechnologies = [
    {
      category: "AI Tools",
      icon: Brain,
      description: "Công cụ AI giúp tăng hiệu quả công việc",
      tools: [
        {
          name: "ChatGPT",
          purpose: "Hỗ trợ viết lách, brainstorming, Q&A",
          level: "Cơ bản",
          practical: "Viết email, tóm tắt tài liệu, �� tưởng content",
        },
        {
          name: "Midjourney/DALL-E",
          purpose: "Tạo hình ảnh từ mô tả văn bản",
          level: "Trung bình",
          practical: "Thiết kế poster, minh họa bài viết",
        },
        {
          name: "Notion AI",
          purpose: "AI tích hợp trong quản lý công việc",
          level: "Trung bình",
          practical: "Tự động hóa ghi chú, tổ chức thông tin",
        },
      ],
    },
    {
      category: "Blockchain & Crypto",
      icon: Coins,
      description: "Hiểu biết cơ bản về công nghệ blockchain",
      tools: [
        {
          name: "Bitcoin/Ethereum basics",
          purpose: "Hiểu tiền điện tử và cách hoạt động",
          level: "Cơ bản",
          practical: "Đầu tư, thanh toán, bảo mật tài sản",
        },
        {
          name: "NFT marketplace",
          purpose: "Tạo và giao dịch tài sản số",
          level: "Nâng cao",
          practical: "Bán nghệ thuật số, sưu tầm",
        },
        {
          name: "Smart contracts",
          purpose: "Hợp đồng tự động thực thi",
          level: "Nâng cao",
          practical: "Giao dịch không qua trung gian",
        },
      ],
    },
    {
      category: "IoT & Smart Devices",
      icon: Home,
      description: "Internet of Things và thiết bị thông minh",
      tools: [
        {
          name: "Smart home setup",
          purpose: "Điều khiển nhà thông minh",
          level: "Cơ bản",
          practical: "Tiết kiệm năng lượng, an ninh nhà",
        },
        {
          name: "Wearable devices",
          purpose: "Thiết bị đeo theo dõi sức khỏe",
          level: "Cơ bản",
          practical: "Theo dõi v���n động, giấc ngủ",
        },
        {
          name: "Industrial IoT",
          purpose: "IoT trong sản xuất và logistics",
          level: "Nâng cao",
          practical: "Tối ưu quy trình sản xuất",
        },
      ],
    },
    {
      category: "No-Code/Low-Code",
      icon: Zap,
      description: "Tạo ứng dụng không cần lập trình",
      tools: [
        {
          name: "Bubble",
          purpose: "Tạo web app không code",
          level: "Trung bình",
          practical: "Startup MVP, tool nội bộ",
        },
        {
          name: "Webflow",
          purpose: "Thiết kế website professional",
          level: "Trung bình",
          practical: "Website doanh nghiệp, portfolio",
        },
        {
          name: "Zapier/Make",
          purpose: "Tự động hóa workflow",
          level: "Cơ bản",
          practical: "Kết nối apps, tự động hóa task",
        },
      ],
    },
  ];

  const skillCategories = [
    {
      icon: Monitor,
      title: "Kỹ năng máy tính cơ bản",
      description: "Sử dụng thành thạo máy tính và các phần mềm thiết yếu",
      level: "Cơ bản",
      color: "bg-blue-100 text-blue-800",
      skills: [
        {
          name: "Hệ điều hành",
          details: [
            "Windows/macOS/Linux basics",
            "File management",
            "System settings",
            "Software installation",
          ],
        },
        {
          name: "Microsoft Office/Google Workspace",
          details: [
            "Word/Docs processing",
            "Excel/Sheets calculations",
            "PowerPoint/Slides presentations",
            "Basic formulas & formatting",
          ],
        },
        {
          name: "Internet Browser",
          details: [
            "Efficient web navigation",
            "Bookmarks management",
            "Privacy settings",
            "Extensions usage",
          ],
        },
        {
          name: "File Management",
          details: [
            "Organize folders effectively",
            "File compression/extraction",
            "Cloud storage sync",
            "Backup strategies",
          ],
        },
      ],
    },
    {
      icon: Globe,
      title: "Tìm kiếm & Đánh giá thông tin",
      description: "Kỹ năng tìm kiếm, lọc và đánh giá thông tin trực tuyến",
      level: "Trung bình",
      color: "bg-green-100 text-green-800",
      skills: [
        {
          name: "Tìm kiếm nâng cao",
          details: [
            "Google search operators",
            "Academic databases",
            "Boolean search",
            "Reverse image search",
          ],
        },
        {
          name: "Đánh giá nguồn tin",
          details: [
            "Source credibility check",
            "Fact-checking techniques",
            "Bias identification",
            "Cross-referencing",
          ],
        },
        {
          name: "Research methods",
          details: [
            "Primary vs secondary sources",
            "Citation practices",
            "Information synthesis",
            "Data interpretation",
          ],
        },
        {
          name: "Digital note-taking",
          details: [
            "Note apps (Notion, Obsidian)",
            "Tagging systems",
            "Link connections",
            "Knowledge management",
          ],
        },
      ],
    },
    {
      icon: Users,
      title: "Collaboration & Communication",
      description: "Làm việc nhóm hiệu quả với công cụ số",
      level: "Nâng cao",
      color: "bg-purple-100 text-purple-800",
      skills: [
        {
          name: "Video Conferencing",
          details: [
            "Zoom/Teams/Meet mastery",
            "Screen sharing",
            "Virtual backgrounds",
            "Meeting etiquette",
          ],
        },
        {
          name: "Project Management",
          details: [
            "Trello/Asana/Monday.com",
            "Task delegation",
            "Timeline planning",
            "Progress tracking",
          ],
        },
        {
          name: "Real-time Collaboration",
          details: [
            "Google Docs editing",
            "Slack/Discord communication",
            "Version control basics",
            "Conflict resolution",
          ],
        },
        {
          name: "Digital Presentations",
          details: [
            "Interactive presentations",
            "Live polling",
            "Q&A management",
            "Recording & sharing",
          ],
        },
      ],
    },
    {
      icon: Lock,
      title: "An ninh & Quyền riêng tư",
      description: "Bảo vệ dữ liệu và quyền riêng tư trong môi trường số",
      level: "Nâng cao",
      color: "bg-red-100 text-red-800",
      skills: [
        {
          name: "Password Security",
          details: [
            "Strong password creation",
            "Password managers",
            "Two-factor authentication",
            "Security questions",
          ],
        },
        {
          name: "Privacy Settings",
          details: [
            "Social media privacy",
            "Browser privacy",
            "App permissions",
            "Data sharing controls",
          ],
        },
        {
          name: "Safe Browsing",
          details: [
            "Phishing recognition",
            "Safe download practices",
            "VPN usage",
            "Secure connections (HTTPS)",
          ],
        },
        {
          name: "Data Backup",
          details: [
            "Regular backup schedules",
            "Cloud vs local storage",
            "Recovery procedures",
            "Data encryption",
          ],
        },
      ],
    },
  ];

  const collaborationTools = [
    {
      category: "Communication",
      icon: MessageSquare,
      tools: [
        { name: "Slack", purpose: "Team messaging", level: "Workplace" },
        {
          name: "Discord",
          purpose: "Community chat",
          level: "Gaming/Communities",
        },
        {
          name: "Microsoft Teams",
          purpose: "Enterprise communication",
          level: "Business",
        },
        {
          name: "Zalo/Telegram",
          purpose: "Personal messaging",
          level: "Daily use",
        },
      ],
    },
    {
      category: "Video Conferencing",
      icon: Video,
      tools: [
        { name: "Zoom", purpose: "Meetings & webinars", level: "Professional" },
        { name: "Google Meet", purpose: "Quick video calls", level: "Simple" },
        {
          name: "Microsoft Teams",
          purpose: "Enterprise meetings",
          level: "Business",
        },
        { name: "Skype", purpose: "Personal video calls", level: "Personal" },
      ],
    },
    {
      category: "Project Management",
      icon: Calendar,
      tools: [
        { name: "Trello", purpose: "Kanban boards", level: "Visual" },
        { name: "Asana", purpose: "Task management", level: "Detailed" },
        { name: "Notion", purpose: "All-in-one workspace", level: "Advanced" },
        { name: "Monday.com", purpose: "Team workflows", level: "Enterprise" },
      ],
    },
    {
      category: "File Sharing",
      icon: Cloud,
      tools: [
        {
          name: "Google Drive",
          purpose: "Cloud storage & docs",
          level: "Collaboration",
        },
        { name: "Dropbox", purpose: "File synchronization", level: "Simple" },
        { name: "OneDrive", purpose: "Microsoft ecosystem", level: "Business" },
        { name: "WeTransfer", purpose: "Large file transfer", level: "Quick" },
      ],
    },
  ];

  const digitalLiteracyLevels = [
    {
      level: "Beginner",
      title: "Người mới bắt đầu",
      percentage: "30%",
      description: "Sử dụng cơ bản máy tính và internet",
      skills: [
        "Gửi email đơn giản",
        "Tìm kiếm Google",
        "Sử dụng Facebook",
        "Xem video YouTube",
      ],
      nextSteps: ["Học Microsoft Office", "Cài đặt ứng dụng", "Bảo mật cơ bản"],
    },
    {
      level: "Intermediate",
      title: "Trình độ trung bình",
      percentage: "50%",
      description: "Sử dụng thành thạo các công cụ phổ biến",
      skills: [
        "Tạo tài liệu Word",
        "Excel cơ bản",
        "Video call",
        "Mua sắm online",
      ],
      nextSteps: ["Collaboration tools", "Digital marketing", "Data analysis"],
    },
    {
      level: "Advanced",
      title: "Trình độ nâng cao",
      percentage: "80%",
      description: "Làm việc hiệu quả với công nghệ số",
      skills: [
        "Project management",
        "Digital marketing",
        "Data analysis",
        "Automation",
      ],
      nextSteps: ["AI integration", "Advanced security", "Digital leadership"],
    },
    {
      level: "Expert",
      title: "Chuyên gia",
      percentage: "95%",
      description: "Dẫn dắt chuyển đổi số và đổi mới",
      skills: [
        "Digital strategy",
        "AI implementation",
        "Tech leadership",
        "Innovation",
      ],
      nextSteps: ["Mentoring others", "Tech evangelism", "Continuous learning"],
    },
  ];

  const practicalExercises = [
    {
      title: "Thử thách Email hiệu quả",
      description:
        "Viết email chuyên nghiệp với subject line rõ ràng, nội dung súc tích",
      time: "15 phút",
      difficulty: "Cơ bản",
    },
    {
      title: "Tạo presentation tương tác",
      description:
        "Sử dụng Canva/PowerPoint tạo slide có animation và interactive elements",
      time: "45 phút",
      difficulty: "Trung bình",
    },
    {
      title: "Setup workspace hiệu quả",
      description:
        "Tổ chức desktop, bookmarks, và shortcuts để làm việc nhanh hơn",
      time: "30 phút",
      difficulty: "Cơ bản",
    },
    {
      title: "Collaborative project",
      description:
        "Làm việc nhóm online với Google Docs và Trello trong 1 tuần",
      time: "1 tuần",
      difficulty: "Nâng cao",
    },
  ];

  // Quiz logic
  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setQuizCompleted(false);
    setQuizScore(0);
  };

  // Accessibility helpers
  const getAccessibilityClasses = () => {
    let classes = "";
    if (fontSize === "large") classes += " text-lg ";
    if (fontSize === "xlarge") classes += " text-xl ";
    if (highContrast) classes += " contrast-125 ";
    return classes;
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-blue-100 ${getAccessibilityClasses()}`}
    >
      <Header />
      <DisclaimerBanner />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Keyboard className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kỹ Năng Số & Digital Literacy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Phát triển kỹ năng công nghệ thiết yếu cho thời đại số
          </p>
        </div>
      </div>

      {/* Self-Assessment Tool */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {!quizCompleted &&
          currentQuestionIndex === 0 &&
          selectedAnswers.length === 0 ? (
            // Initial Assessment Landing - Clean Design like Reference
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto border border-gray-100">
                <div className="w-24 h-24 mx-auto mb-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <Target className="h-12 w-12 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Đánh Giá Trình Độ Của Bạn
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
                  Hoàn thành bài đánh giá tương tác để nhận được lộ trình học
                  t���p cá nhân hóa
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Đánh Giá Kỹ Năng Số Của Bạn
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Trả lời 10 câu hỏi để biết trình độ digital literacy hiện
                    tại
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                    onClick={() => {
                      // Start the quiz by moving to first question
                      setCurrentQuestionIndex(0);
                      setSelectedAnswers([]);
                      setQuizCompleted(false);
                    }}
                  >
                    Bắt đầu đánh giá
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Quiz Interface
            <Card className="mb-8 shadow-xl border border-gray-100">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Target className="h-6 w-6" />
                  Quiz Đánh Giá Kỹ Năng Số
                </CardTitle>
                <CardDescription>
                  Hoàn thành 10 câu hỏi để biết trình độ hiện tại và lộ trình
                  phát triển
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {!quizCompleted ? (
                  <div>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">
                          Câu {currentQuestionIndex + 1} /{" "}
                          {quizQuestions.length}
                        </span>
                        <Badge variant="outline">
                          {quizQuestions[currentQuestionIndex].category}
                        </Badge>
                      </div>
                      <Progress
                        value={
                          (currentQuestionIndex / quizQuestions.length) * 100
                        }
                        className="h-2"
                      />
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">
                        {quizQuestions[currentQuestionIndex].question}
                      </h3>

                      <RadioGroup
                        value={selectedAnswers[
                          currentQuestionIndex
                        ]?.toString()}
                        onValueChange={(value) =>
                          handleAnswerSelect(parseInt(value))
                        }
                      >
                        {quizQuestions[currentQuestionIndex].options.map(
                          (option, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={index.toString()}
                                id={`option-${index}`}
                              />
                              <Label
                                htmlFor={`option-${index}`}
                                className="flex-1 cursor-pointer"
                              >
                                {option}
                              </Label>
                            </div>
                          ),
                        )}
                      </RadioGroup>

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={() =>
                            setCurrentQuestionIndex(
                              Math.max(0, currentQuestionIndex - 1),
                            )
                          }
                          disabled={currentQuestionIndex === 0}
                        >
                          Câu trước
                        </Button>
                        <Button
                          onClick={goToNextQuestion}
                          disabled={
                            selectedAnswers[currentQuestionIndex] === undefined
                          }
                          className="bg-green-600 hover:bg-green-700"
                        >
                          {currentQuestionIndex === quizQuestions.length - 1
                            ? "Hoàn thành"
                            : "Câu tiếp"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="p-8 bg-green-50 rounded-lg">
                      <div className="text-6xl mb-4">
                        {quizScore >= 8
                          ? "🏆"
                          : quizScore >= 6
                            ? "🥉"
                            : quizScore >= 4
                              ? "📚"
                              : "💪"}
                      </div>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">
                        Kết quả: {quizScore}/{quizQuestions.length} điểm
                      </h3>
                      <p className="text-green-700">
                        {quizScore >= 8 &&
                          "Xuất sắc! Bạn có kỹ năng số rất tốt."}
                        {quizScore >= 6 &&
                          quizScore < 8 &&
                          "Tốt! Bạn đang trên đúng hướng."}
                        {quizScore >= 4 &&
                          quizScore < 6 &&
                          "Khá ổn! Còn nhiều điều để học hỏi."}
                        {quizScore < 4 &&
                          "Đừng lo! Đây là cơ hội để phát triển kỹ năng."}
                      </p>
                    </div>

                    <div className="text-left bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">
                        Đề xuất lộ trình học tập:
                      </h4>
                      <ul className="space-y-2">
                        {quizScore < 4 && (
                          <>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Bắt đầu với kỹ năng máy tính cơ bản
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Học Microsoft Office/Google Workspace
                            </li>
                          </>
                        )}
                        {quizScore >= 4 && quizScore < 8 && (
                          <>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Tăng cường kỹ năng collaboration
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Học về bảo mật và quyền riêng tư
                            </li>
                          </>
                        )}
                        {quizScore >= 8 && (
                          <>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Khám phá công nghệ mới như AI, Blockchain
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Trở thành mentor cho người khác
                            </li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="flex gap-4 justify-center">
                      <Button onClick={resetQuiz} variant="outline">
                        Làm lại quiz
                      </Button>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => {
                          // Scroll to skill categories
                          document
                            .getElementById("skill-categories")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Xem kỹ năng cốt lõi
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Digital Literacy Levels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📊 C��c Cấp Độ Digital Literacy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Xác định vị trí hiện tại và lộ trình phát triển kỹ năng số
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalLiteracyLevels.map((level, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - parseInt(level.percentage) / 100)}`}
                      className="text-green-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-600">
                      {level.percentage}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg">{level.title}</CardTitle>
                <Badge className="mx-auto">{level.level}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {level.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Kỹ năng chủ chốt:</h4>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {level.skills.slice(0, 3).map((skill, idx) => (
                      <li key={idx}>• {skill}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Emerging Technologies */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚀 Công Nghệ Tương Lai
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá và làm quen với các công nghệ mới nổi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergingTechnologies.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center gap-4">
                    <category.icon className="h-8 w-8 text-purple-600" />
                    <div>
                      <CardTitle className="text-xl">
                        {category.category}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="border-l-4 border-purple-200 pl-4 hover:border-purple-400 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-sm">{tool.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {tool.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {tool.purpose}
                        </p>
                        <div className="bg-purple-50 p-2 rounded text-xs">
                          <strong>Ứng dụng thực tế:</strong> {tool.practical}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-100 to-pink-100">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">
                  Tips cho việc học công nghệ mới
                </h3>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bắt đầu với các công cụ miễn phí và dễ sử dụng
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Tham gia cộng đồng và diễn đàn thảo luận
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Thực hành thường xuyên với dự án nhỏ
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cập nhật tin tức công nghệ định kỳ
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Skill Categories */}
      <div
        id="skill-categories"
        className="bg-gradient-to-br from-teal-50 to-emerald-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4 Nhóm Kỹ Năng Số Cốt Lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Phát triển toàn diện khả năng sử dụng công nghệ số
            </p>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 rounded-full bg-white shadow-sm">
                        <category.icon className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={category.color}>{category.level}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-lg mb-3 text-gray-800">
                          {skill.name}
                        </h4>
                        <ul className="space-y-2">
                          {skill.details.map((detail, detailIdx) => (
                            <li
                              key={detailIdx}
                              className="flex items-start space-x-2"
                            >
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm text-gray-600">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Công Cụ Collaboration Phổ Biến
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Làm chủ các công cụ làm việc nhóm thiết yếu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborationTools.map((toolCategory, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <toolCategory.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">
                  {toolCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {toolCategory.tools.map((tool, idx) => (
                    <div key={idx} className="border-l-4 border-blue-200 pl-4">
                      <h4 className="font-semibold text-sm">{tool.name}</h4>
                      <p className="text-xs text-gray-600">{tool.purpose}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {tool.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Bắt Đầu Hành Trình Digital Literacy
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Kỹ năng số không chỉ là xu hướng - đó là yêu cầu thiết yếu của tương
          lai
        </p>
        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Monitor className="h-5 w-5 mr-2" />
                Đánh giá kỹ năng hiện tại
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Quiz Đánh Giá Kỹ Năng Số</DialogTitle>
                <DialogDescription>
                  Scroll lên trên để làm bài quiz đánh giá toàn diện về kỹ năng
                  số của bạn.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
