import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Optional: use Card for structure
import { LucideIcon } from 'lucide-react'; // For icon type

interface FeatureShowcaseItemProps {
  icon?: LucideIcon; // Optional: Pass Lucide icon component directly
  iconElement?: React.ReactNode; // Or pass a full icon element
  title: string;
  description: string;
  className?: string;
}

const FeatureShowcaseItem: React.FC<FeatureShowcaseItemProps> = ({
  icon: IconComponent,
  iconElement,
  title,
  description,
  className,
}) => {
  console.log("Rendering FeatureShowcaseItem:", title);

  return (
    <div className={`flex flex-col items-center text-center p-4 space-y-3 ${className}`}>
      {(IconComponent || iconElement) && (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
          {IconComponent && <IconComponent className="w-6 h-6" />}
          {!IconComponent && iconElement}
        </div>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

// Example usage with Card variant:
// const FeatureShowcaseItem: React.FC<FeatureShowcaseItemProps> = ({ icon: Icon, title, description, className }) => {
//   console.log("Rendering FeatureShowcaseItem with Card:", title);
//   return (
//     <Card className={`text-center ${className}`}>
//       <CardHeader className="items-center">
//         {Icon && (
//            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-2">
//               <Icon className="w-6 h-6" />
//            </div>
//         )}
//         <CardTitle>{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="text-sm text-muted-foreground">{description}</p>
//       </CardContent>
//     </Card>
//   );
// };

export default FeatureShowcaseItem;