import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { mockReviewQueue } from "@/lib/mockData";
import { Flag, PlayCircle, Check, X } from "lucide-react";
import { toast } from "sonner";

const ReviewQueuePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="coach" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
            <Flag className="mr-3 h-8 w-8 text-accent" />
            Review Queue
          </h1>
          <p className="text-muted-foreground">
            Manually review athlete performances flagged by the AI for potential
            issues.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockReviewQueue.map((athlete) => (
            <Card key={athlete.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{athlete.name}</CardTitle>
                  <Badge variant="outline" className="text-sm">
                    TSI: {athlete.tsi}
                  </Badge>
                </div>
                <CardDescription>
                  {athlete.age} years | {athlete.sport} | Test: {athlete.test}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-accent mb-2">
                    Reason for Flag:
                  </p>
                  <p className="text-sm text-foreground">{athlete.reason}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    toast.info("Video player would open here.")
                  }
                >
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Watch Video
                </Button>
                <div className="flex space-x-2">
                   <Button
                    variant="destructive_outline"
                    size="icon"
                    onClick={() =>
                      toast.error(`${athlete.name}'s performance rejected.`)
                    }
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="success"
                    size="icon"
                    onClick={() =>
                      toast.success(`${athlete.name}'s performance approved.`)
                    }
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ReviewQueuePage;
