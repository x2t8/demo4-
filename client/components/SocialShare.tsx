import React from "react";
import { Share2, Facebook, Twitter, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SocialShareProps {
  title: string;
  url?: string;
  description?: string;
}

export default function SocialShare({
  title,
  url,
  description,
}: SocialShareProps) {
  const currentUrl = url || window.location.href;
  const shareText = description || title;

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      // You might want to show a toast notification here
      alert("Đã sao chép link!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-center">
            <Share2 className="h-5 w-5 mr-2" />
            Chia Sẻ Kiến Thức Này
          </h3>
          <p className="text-gray-600">
            Giúp bạn bè và gia đình bảo vệ bản thân khỏi lừa đảo
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={shareToFacebook}
            variant="outline"
            size="sm"
            className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
          >
            <Facebook className="h-4 w-4 mr-2" />
            Facebook
          </Button>

          <Button
            onClick={shareToTwitter}
            variant="outline"
            size="sm"
            className="bg-sky-500 text-white hover:bg-sky-600 border-sky-500"
          >
            <Twitter className="h-4 w-4 mr-2" />
            Twitter
          </Button>

          <Button
            onClick={copyToClipboard}
            variant="outline"
            size="sm"
            className="hover:bg-gray-100"
          >
            <Link className="h-4 w-4 mr-2" />
            Sao chép link
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
