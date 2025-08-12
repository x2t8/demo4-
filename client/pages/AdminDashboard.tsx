import React, { useState, useEffect } from "react";
import {
  Users,
  FileText,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Download,
  MoreHorizontal,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - replace with real API calls
const mockStats = {
  totalUsers: 12567,
  activeUsers: 8934,
  totalContent: 156,
  publishedContent: 134,
  scamReports: 23,
  resolvedReports: 18,
  systemUptime: 99.8,
  avgSessionTime: "8m 34s",
};

const mockChartData = [
  { date: "01/12", users: 120, reports: 5 },
  { date: "02/12", users: 145, reports: 3 },
  { date: "03/12", users: 180, reports: 8 },
  { date: "04/12", users: 165, reports: 2 },
  { date: "05/12", users: 200, reports: 6 },
  { date: "06/12", users: 185, reports: 4 },
  { date: "07/12", users: 220, reports: 7 },
];

const mockRecentActivities = [
  {
    id: 1,
    type: "user_register",
    message: "Người dùng mới đăng ký",
    user: "Nguyễn Văn A",
    time: "2 phút trước",
    status: "success",
  },
  {
    id: 2,
    type: "content_published",
    message: "Nội dung mới được xuất bản",
    user: "Admin",
    time: "15 phút trước",
    status: "info",
  },
  {
    id: 3,
    type: "report_received",
    message: "Báo cáo lừa đảo mới",
    user: "Trần Thị B",
    time: "1 giờ trước",
    status: "warning",
  },
  {
    id: 4,
    type: "security_alert",
    message: "Phát hiện hoạt động đáng ngờ",
    user: "System",
    time: "2 giờ trước",
    status: "error",
  },
];

const mockTopContent = [
  {
    id: 1,
    title: "Cách nhận biết email lừa đảo",
    views: 15240,
    engagement: 89,
    category: "An toàn số",
  },
  {
    id: 2,
    title: "Bảo vệ thông tin cá nhân trên mạng",
    views: 12450,
    engagement: 92,
    category: "Kỹ năng số",
  },
  {
    id: 3,
    title: "Pháp luật về không gian mạng",
    views: 9870,
    engagement: 76,
    category: "Pháp luật số",
  },
  {
    id: 4,
    title: "Đạo đức trong giao tiếp online",
    views: 8560,
    engagement: 85,
    category: "Đạo đức số",
  },
];

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("7d");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const statCards = [
    {
      title: "Tổng người dùng",
      value: mockStats.totalUsers.toLocaleString(),
      change: "+12.5%",
      changeType: "increase",
      icon: Users,
      color: "blue",
    },
    {
      title: "Người dùng hoạt động",
      value: mockStats.activeUsers.toLocaleString(),
      change: "+8.2%",
      changeType: "increase",
      icon: Eye,
      color: "green",
    },
    {
      title: "Báo cáo lừa đảo",
      value: mockStats.scamReports.toString(),
      change: "-5.1%",
      changeType: "decrease",
      icon: AlertTriangle,
      color: "red",
    },
    {
      title: "Độ tin cậy hệ thống",
      value: `${mockStats.systemUptime}%`,
      change: "+0.1%",
      changeType: "increase",
      icon: Shield,
      color: "purple",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user_register":
        return <Users className="h-4 w-4" />;
      case "content_published":
        return <FileText className="h-4 w-4" />;
      case "report_received":
        return <AlertTriangle className="h-4 w-4" />;
      case "security_alert":
        return <Shield className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-600 bg-green-100";
      case "info":
        return "text-blue-600 bg-blue-100";
      case "warning":
        return "text-orange-600 bg-orange-100";
      case "error":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-96 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Tổng quan hoạt động hệ thống Công Dân Số An Toàn
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">7 ngày qua</SelectItem>
              <SelectItem value="30d">30 ngày qua</SelectItem>
              <SelectItem value="90d">90 ngày qua</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center text-xs">
                {stat.changeType === "increase" ? (
                  <ChevronUp className="h-3 w-3 text-green-600" />
                ) : (
                  <ChevronDown className="h-3 w-3 text-red-600" />
                )}
                <span
                  className={`ml-1 ${
                    stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="ml-1 text-gray-500">so với tuần trước</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động người dùng</CardTitle>
            <CardDescription>
              Số lượng người dùng hoạt động theo ngày
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockChartData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{data.date}</span>
                  <div className="flex items-center space-x-4 flex-1 mx-4">
                    <div className="flex-1">
                      <Progress value={(data.users / 250) * 100} className="h-2" />
                    </div>
                    <span className="text-sm font-medium">{data.users}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>
              Các sự kiện mới nhất trong hệ thống
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${getActivityColor(activity.status)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Content Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Nội dung phổ biến nhất</CardTitle>
          <CardDescription>
            Các bài viết có lượt xem và tương tác cao nhất
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tiêu đề</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Lượt xem</TableHead>
                <TableHead>Tương tác</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTopContent.map((content) => (
                <TableRow key={content.id}>
                  <TableCell className="font-medium">
                    {content.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{content.category}</Badge>
                  </TableCell>
                  <TableCell>{content.views.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={content.engagement} className="w-16 h-2" />
                      <span className="text-sm">{content.engagement}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Server Status</CardTitle>
            <CheckCircle className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Online</div>
            <p className="text-xs text-gray-500">
              Uptime: {mockStats.systemUptime}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thời gian phiên</CardTitle>
            <Clock className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {mockStats.avgSessionTime}
            </div>
            <p className="text-xs text-gray-500">
              Trung bình mỗi phiên
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Báo cáo đã xử lý</CardTitle>
            <TrendingUp className="h-5 w-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              {mockStats.resolvedReports}/{mockStats.scamReports}
            </div>
            <p className="text-xs text-gray-500">
              {Math.round((mockStats.resolvedReports / mockStats.scamReports) * 100)}% hoàn thành
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
