import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockSystemSettings } from "@/lib/mockData";
import { Languages, ToggleRight, Info } from "lucide-react";
import { toast } from "sonner";

const SettingsPage = () => {
  const handleSaveChanges = () => {
    toast.success("System settings saved!", {
      description: "Your changes have been successfully applied.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="admin" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">System Settings</h1>
            <p className="text-muted-foreground">
              Manage global configurations for the Pratibha Setu platform.
            </p>
          </div>
          <Button onClick={handleSaveChanges} variant="hero">
            Save All Changes
          </Button>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="languages">
              <Languages className="mr-2 h-4 w-4" /> Languages
            </TabsTrigger>
            <TabsTrigger value="features">
              <ToggleRight className="mr-2 h-4 w-4" /> Feature Flags
            </TabsTrigger>
          </TabsList>

          {/* Languages Tab */}
          <TabsContent value="languages">
            <Card>
              <CardHeader>
                <CardTitle>Supported Languages</CardTitle>
                <CardDescription>
                  Enable or disable languages available to users in the mobile app.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockSystemSettings.languages.map((lang) => (
                  <div key={lang.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <span className="font-medium">{lang.name}</span>
                    <Switch defaultChecked={lang.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feature Flags Tab */}
          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle>Feature Flags</CardTitle>
                <CardDescription>
                  Activate or deactivate major features across the platform. Use with caution.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockSystemSettings.featureFlags.map((flag) => (
                  <div key={flag.id} className="flex items-start justify-between p-4 rounded-lg bg-muted/30">
                    <div>
                      <p className="font-semibold">{flag.name}</p>
                      <p className="text-sm text-muted-foreground flex items-start">
                        <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{flag.description}</span>
                      </p>
                    </div>
                    <Switch defaultChecked={flag.enabled} className="mt-1"/>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default SettingsPage;
