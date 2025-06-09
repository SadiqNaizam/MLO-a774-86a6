import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from 'lucide-react'; // Example icons

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle?: string;
  avatarUrl?: string;
  avatarFallback?: string; // Fallback text for avatar (e.g., initials)
  rating?: number; // Rating from 0-5
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorTitle,
  avatarUrl,
  avatarFallback,
  rating,
  className,
}) => {
  console.log("Rendering TestimonialCard for:", authorName);

  const renderStars = () => {
    if (typeof rating !== 'number' || rating < 0 || rating > 5) return null;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
        />
      );
    }
    return <div className="flex items-center space-x-1">{stars}</div>;
  };

  return (
    <Card className={`flex flex-col h-full ${className}`}>
      <CardHeader className="pb-4">
        {avatarUrl || avatarFallback ? (
            <div className="flex items-center space-x-3">
                <Avatar>
                    {avatarUrl && <AvatarImage src={avatarUrl} alt={authorName} />}
                    <AvatarFallback>{avatarFallback || authorName.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-sm">{authorName}</p>
                    {authorTitle && <p className="text-xs text-muted-foreground">{authorTitle}</p>}
                </div>
            </div>
        ) : (
            <div> {/* Fallback if no avatar info */}
                <p className="font-semibold text-sm">{authorName}</p>
                {authorTitle && <p className="text-xs text-muted-foreground">{authorTitle}</p>}
            </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <Quote className="w-8 h-8 text-muted-foreground/50 float-left mr-2 -mt-2" />
        <p className="text-sm text-muted-foreground italic leading-relaxed">"{quote}"</p>
      </CardContent>
      {rating !== undefined && (
        <CardFooter className="pt-4">
          {renderStars()}
        </CardFooter>
      )}
    </Card>
  );
};
export default TestimonialCard;