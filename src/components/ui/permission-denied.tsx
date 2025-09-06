import * as React from 'react';
import { ShieldX, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PermissionDeniedProps {
  message?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  className?: string;
}

export const PermissionDenied = React.forwardRef<
  HTMLDivElement,
  PermissionDeniedProps
>(
  (
    {
      message = "You don't have permission to view this page",
      showBackButton = false,
      onBack,
      className,
      ...props
    },
    ref,
  ) => {
    const handleBack = () => {
      if (onBack) {
        onBack();
      } else {
        window.history.back();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center min-h-[400px] p-4',
          className,
        )}
        {...props}
      >
        <Card className="w-full max-w-md mx-auto text-center border-destructive/20">
          <CardHeader className="pb-4">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
              <ShieldX className="h-8 w-8 text-destructive" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">
                Access Denied
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {message}
              </p>
            </div>

            <div className="text-xs text-muted-foreground">
              Please contact your administrator if you believe this is an error.
            </div>

            {showBackButton && (
              <div className="pt-2">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  },
);

PermissionDenied.displayName = 'PermissionDenied';
