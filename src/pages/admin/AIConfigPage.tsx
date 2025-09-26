import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockAIConfig } from "@/lib/mockData";
import { Cpu, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";

const AIConfigPage = () => {
  // We use state to make the UI interactive, even though we are not saving it.
  const [config, setConfig] = useState(mockAIConfig);

  const handleSaveChanges = () => {
    toast.success("AI configuration saved!", {
      description: "Changes will be applied across the system shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="admin" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">AI Model Configuration</h1>
            <p className="text-muted-foreground">
              Fine-tune the AI engines powering Pratibha Setu.
            </p>
          </div>
          <Button onClick={handleSaveChanges} variant="hero">
            Save Changes
          </Button>
        </div>

        <div className="space-y-6">
          {config.map((module) => (
            <Card key={module.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-6 w-6 text-ai-processing" />
                    <div>
                      <CardTitle>{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={module.status === 'Active' ? 'success' : 'destructive'}>
                    {module.status === 'Active' ? <CheckCircle className="h-4 w-4 mr-1" /> : <XCircle className="h-4 w-4 mr-1" />}
                    {module.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {module.settings.map((setting) => (
                  <div key={setting.id} className="p-4 bg-muted/30 rounded-lg">
                    <Label className="font-semibold">{setting.label}</Label>
                    <p className="text-sm text-muted-foreground mb-3">{setting.description}</p>
                    
                    {setting.type === 'select' && (
                      <Select defaultValue={setting.value as string}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {setting.options?.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    )}

                    {setting.type === 'slider' && (
                      <div className="flex items-center space-x-4">
                        <Slider defaultValue={[setting.value as number]} max={100} step={1} className="flex-1" />
                        <span className="font-bold text-primary w-10 text-center">{setting.value}%</span>
                      </div>
                    )}

                    {setting.type === 'switch' && (
                       <Switch defaultChecked={setting.value as boolean} />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AIConfigPage;
