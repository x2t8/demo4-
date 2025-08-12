import React, { useState, useEffect } from "react";
import {
  FileText,
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Filter,
  Calendar,
  User,
  BarChart3,
  Globe,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Mock content data
const mockContent = [
  {
    id: 1,
    title: "Cách nhận biết email lừa đảo",
    category: "An toàn số",
    status: "published",
    author: "Admin",
    publishDate: "2024-01-10",
    lastModified: "2024-01-12",
    views: 15240,
    engagement: 89,
    type: "article",
  },
  {
    id: 2,
    title: "Bảo vệ thông tin cá nhân trên mạng",
    category: "Kỹ năng số",
    status: "published",
    author: "Editor1",
    publishDate: "2024-01-08",
    lastModified: "2024-01-10",
    views: 12450,
    engagement: 92,
    type: "guide",
  },
  {
    id: 3,
    title: "Pháp luật về không gian mạng Việt Nam",
    category: "Pháp luật số",
    status: "draft",
    author: "Legal Expert",
    publishDate: null,
    lastModified: "2024-01-14",
    views: 0,
    engagement: 0,
    type: "article",
  },
  {
    id: 4,
    title: "Quiz: Kiểm tra kiến thức an toàn số",
    category: "An toàn số",
    status: "published",
    author: "Quiz Master",
    publishDate: "2024-01-05",
    lastModified: "2024-01-05",
    views: 8940,
    engagement: 76,
    type: "quiz",
  },
  {
    id: 5,
    title: "Video: Hướng dẫn sử dụng 2FA",
    category: "Kỹ năng số",
    status: "review",
    author: "Video Team",
    publishDate: null,
    lastModified: "2024-01-13",
    views: 0,
    engagement: 0,
    type: "video",
  },
  {
    id: 6,
    title: "Đạo đức trong giao tiếp online",
    category: "Đạo đức số",
    status: "published",
    author: "Ethics Expert",
    publishDate: "2024-01-01",
    lastModified: "2024-01-02",
    views: 7650,
    engagement: 85,
    type: "article",
  },
];

type Content = typeof mockContent[0];
type StatusFilter = "all" | "published" | "draft" | "review";
type CategoryFilter = "all" | "An toàn số" | "Kỹ năng số" | "Pháp luật số" | "Đạo đức số" | "AI an toàn";

export default function AdminContent() {
  const [content, setContent] = useState<Content[]>(mockContent);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter content based on search and filters
  const filteredContent = content.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getContentStats = () => {
    return {
      total: content.length,
      published: content.filter(c => c.status === "published").length,
      draft: content.filter(c => c.status === "draft").length,
      review: content.filter(c => c.status === "review").length,
      totalViews: content.reduce((sum, c) => sum + c.views, 0),
      avgEngagement: Math.round(content.reduce((sum, c) => sum + c.engagement, 0) / content.length),
    };
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">Đã xuất bản</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">Bản nháp</Badge>;
      case "review":
        return <Badge className="bg-yellow-100 text-yellow-800">Chờ duyệt</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "article":
        return <Badge variant="outline">Bài viết</Badge>;
      case "guide":
        return <Badge className="bg-blue-100 text-blue-800">Hướng dẫn</Badge>;
      case "quiz":
        return <Badge className="bg-purple-100 text-purple-800">Quiz</Badge>;
      case "video":
        return <Badge className="bg-red-100 text-red-800">Video</Badge>;
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <FileText className="h-4 w-4" />;
      case "guide":
        return <FileText className="h-4 w-4" />;
      case "quiz":
        return <BarChart3 className="h-4 w-4" />;
      case "video":
        return <Globe className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const handleContentAction = (action: string, item: Content) => {
    switch (action) {
      case "edit":
        setSelectedContent(item);
        break;
      case "publish":
        setContent(prev => prev.map(c => 
          c.id === item.id ? { ...c, status: "published", publishDate: new Date().toISOString().split('T')[0] } : c
        ));
        break;
      case "unpublish":
        setContent(prev => prev.map(c => 
          c.id === item.id ? { ...c, status: "draft", publishDate: null } : c
        ));
        break;
      case "delete":
        setContent(prev => prev.filter(c => c.id !== item.id));
        break;
    }
  };

  const stats = getContentStats();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="h-96 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý nội dung</h1>
          <p className="text-gray-600">
            Quản lý bài viết, video, quiz và tài liệu giáo dục
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Tạo nội dung
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Tạo nội dung mới</DialogTitle>
                <DialogDescription>
                  Tạo bài viết, hướng dẫn, quiz hoặc video mới
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Tiêu đề
                  </Label>
                  <Input id="title" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Danh mục
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="safety">An toàn số</SelectItem>
                      <SelectItem value="skills">Kỹ năng số</SelectItem>
                      <SelectItem value="law">Pháp luật số</SelectItem>
                      <SelectItem value="ethics">Đạo đức số</SelectItem>
                      <SelectItem value="ai">AI an toàn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Loại nội dung
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Chọn loại" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="article">Bài viết</SelectItem>
                      <SelectItem value="guide">Hướng dẫn</SelectItem>
                      <SelectItem value="quiz">Quiz</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Mô tả
                  </Label>
                  <Textarea id="description" className="col-span-3" rows={3} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Lưu nháp</Button>
                <Button type="submit">Tạo và xuất bản</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng nội dung</CardTitle>
            <FileText className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-gray-500">
              {stats.published} đã xuất bản
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chờ duyệt</CardTitle>
            <Eye className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.review}</div>
            <p className="text-xs text-gray-500">
              {stats.draft} bản nháp
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng lượt xem</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {stats.totalViews.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500">
              Trung bình: {Math.round(stats.totalViews / stats.published).toLocaleString()}/bài
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tương tác TB</CardTitle>
            <Globe className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.avgEngagement}%</div>
            <p className="text-xs text-gray-500">
              Đánh giá tương tác
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Danh sách nội dung</CardTitle>
              <CardDescription>
                Tìm thấy {filteredContent.length} nội dung
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Tìm kiếm theo tiêu đề, tác giả hoặc danh mục..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={(value: StatusFilter) => setStatusFilter(value)}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="published">Đã xuất bản</SelectItem>
                <SelectItem value="draft">Bản nháp</SelectItem>
                <SelectItem value="review">Chờ duyệt</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={(value: CategoryFilter) => setCategoryFilter(value)}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả danh mục</SelectItem>
                <SelectItem value="An toàn số">An toàn số</SelectItem>
                <SelectItem value="Kỹ năng số">Kỹ năng số</SelectItem>
                <SelectItem value="Pháp luật số">Pháp luật số</SelectItem>
                <SelectItem value="Đạo đức số">Đạo đức số</SelectItem>
                <SelectItem value="AI an toàn">AI an toàn</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Content Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nội dung</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Tác giả</TableHead>
                <TableHead>Thống kê</TableHead>
                <TableHead>Cập nhật</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded">
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          {getTypeBadge(item.type)}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{item.author}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{item.views.toLocaleString()} lượt xem</div>
                      <div className="text-gray-500">{item.engagement}% tương tác</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-500">
                      {item.lastModified}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleContentAction("edit", item)}
                        title="Xem chi tiết"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleContentAction("edit", item)}
                        title="Chỉnh sửa"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      {item.status === "published" ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleContentAction("unpublish", item)}
                          title="Hủy xuất bản"
                          className="text-orange-600 hover:text-orange-700"
                        >
                          <Lock className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleContentAction("publish", item)}
                          title="Xuất bản"
                          className="text-green-600 hover:text-green-700"
                        >
                          <Globe className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredContent.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Không tìm thấy nội dung
              </h3>
              <p className="text-gray-500">
                Thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
