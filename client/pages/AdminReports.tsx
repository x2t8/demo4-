import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  AlertTriangle,
  Download,
  Calendar,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for reports
const mockReportsData = {
  scamReports: [
    { month: "T1", reports: 45, resolved: 42 },
    { month: "T2", reports: 38, resolved: 35 },
    { month: "T3", reports: 52, resolved: 48 },
    { month: "T4", reports: 41, resolved: 39 },
    { month: "T5", reports: 35, resolved: 33 },
    { month: "T6", reports: 29, resolved: 27 },
  ],
  userGrowth: [
    { month: "T1", users: 8900, active: 7200 },
    { month: "T2", users: 9450, active: 7800 },
    { month: "T3", users: 10100, active: 8300 },
    { month: "T4", users: 10800, active: 8900 },
    { month: "T5", users: 11600, active: 9400 },
    { month: "T6", users: 12567, active: 10200 },
  ],
  topScamTypes: [
    { type: "Email phishing", count: 156, percentage: 35 },
    { type: "Fake websites", count: 128, percentage: 29 },
    { type: "SMS scams", count: 89, percentage: 20 },
    { type: "Social media", count: 67, percentage: 16 },
  ],
};

export default function AdminReports() {
  const [timeRange, setTimeRange] = useState("6m");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Báo cáo & Phân tích</h1>
          <p className="text-gray-600">
            Thống kê hoạt động và hiệu quả của hệ thống
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1 tháng qua</SelectItem>
              <SelectItem value="3m">3 tháng qua</SelectItem>
              <SelectItem value="6m">6 tháng qua</SelectItem>
              <SelectItem value="1y">1 năm qua</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Báo cáo lừa đảo</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">240</div>
            <p className="text-xs text-green-600">
              ↓ 12% so với tháng trước
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tỷ lệ giải quyết</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">94.2%</div>
            <p className="text-xs text-green-600">
              ↑ 2.1% so với tháng trước
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Người dùng mới</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">967</div>
            <p className="text-xs text-green-600">
              ↑ 8.4% so với tháng trước
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nội dung mới</CardTitle>
            <FileText className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">23</div>
            <p className="text-xs text-green-600">
              ↑ 15.2% so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scam Reports Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Báo cáo lừa đảo theo tháng</CardTitle>
            <CardDescription>
              Số lượng báo cáo nhận được và đã giải quyết
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockReportsData.scamReports.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium w-8">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="flex space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3 relative">
                        <div 
                          className="bg-red-500 h-3 rounded-full"
                          style={{ width: `${(data.reports / 60) * 100}%` }}
                        />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3 relative">
                        <div 
                          className="bg-green-500 h-3 rounded-full"
                          style={{ width: `${(data.resolved / 60) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 w-16 text-right">
                    {data.resolved}/{data.reports}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm">Báo cáo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm">Đã giải quyết</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Tăng trưởng người dùng</CardTitle>
            <CardDescription>
              Tổng người dùng và người dùng hoạt động
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockReportsData.userGrowth.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium w-8">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="flex space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3 relative">
                        <div 
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ width: `${(data.users / 15000) * 100}%` }}
                        />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3 relative">
                        <div 
                          className="bg-cyan-500 h-3 rounded-full"
                          style={{ width: `${(data.active / 15000) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 w-20 text-right">
                    {data.users.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm">Tổng số</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                <span className="text-sm">Hoạt động</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Scam Types */}
      <Card>
        <CardHeader>
          <CardTitle>Loại lừa đảo phổ biến nhất</CardTitle>
          <CardDescription>
            Phân tích các hình thức lừa đảo được báo cáo nhiều nhất
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockReportsData.topScamTypes.map((scam, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium">{scam.type}</div>
                    <div className="text-sm text-gray-500">{scam.count} báo cáo</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${scam.percentage}%` }}
                    />
                  </div>
                  <Badge variant="outline">{scam.percentage}%</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle>Xuất báo cáo</CardTitle>
          <CardDescription>
            Tải xuống các báo cáo chi tiết theo định dạng mong muốn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="font-medium">Báo cáo tổng quan</span>
              <span className="text-xs text-gray-500">PDF, XLSX</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span className="font-medium">Báo cáo người dùng</span>
              <span className="text-xs text-gray-500">CSV, XLSX</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
              <AlertTriangle className="h-6 w-6" />
              <span className="font-medium">Báo cáo lừa đảo</span>
              <span className="text-xs text-gray-500">PDF, CSV</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
