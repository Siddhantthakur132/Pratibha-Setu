import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { mockTalentHotspots } from "@/lib/mockData";
import { MapPin, Trophy, Users } from "lucide-react";

const IndiaMap = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="w-full h-full"
    style={{ strokeLinejoin: "round", stroke: "#a1a1aa", strokeWidth: 0.2 }}
  >
    <path
      d="M72.5,1.2C72,1,71.2,1.3,71,1.8L63.2,12.1L62.7,11.5C62.3,11.1,61.7,11,61.2,11.2C60.8,11.5,60.5,12,60.5,12.5L61.1,17.4L58.4,18.8L57,17.2L55.5,18.6L54,16L53,16.6V15.1L51.6,13.2L48.1,15.7L46.6,12.9L44.8,13.6L44.2,11.8L41,13.5L39.7,12.2L36.3,13.9L35.2,10.6L36.1,9.4L35.4,8.5C35,8.1,34.4,8.1,34,8.5L32.2,10.3L30.1,9.6L29.1,11L25.9,10.1L24.8,11.6L22.9,11.9L22.3,15.8L20.4,16.8L20.6,22.5L18.4,24.1L18.9,26.4L16.4,28.8L15.3,31.7L13.7,32.3L13.5,34.7L12.7,35.6L14.7,40.1L15.4,43.7L12,47.5L12.8,50.7L16,53.4L18,57.1L17.2,59.3L18.4,61.6L20.9,62.8L21,65.8L23.4,69.5L25.5,71.2L24,73.4L25,75.9L29,78.5L33.4,83.4L37,87.6L40.2,90.2L44.2,93.4L48.9,96.8L53.9,99.2L59.1,98.6L63.8,96.2L68.6,92.8L72.8,88.7L76.9,84.1L80.3,79.8L83.1,75.4L85.6,70.9L87.4,66.3L88.5,61.7L89,57.2L88.9,52.8L88,48.4L86.5,44.1L84.6,39.9L82.2,35.8L79.4,31.9L76.3,28.1L74.8,24.2L76.1,22.3L75,19.3L77,17.2L76.2,14.6L78.8,11.2L78.1,8.3L79.8,6.2L77.9,3.7L75.3,2.4C74.8,2.1,74.2,2.1,73.8,2.4L72.5,1.2Z"
      fill="#27272a"
    ></path>
  </svg>
);

const HeatmapPage = () => {
  const [selectedSport, setSelectedSport] = useState("all");

  const filteredHotspots =
    selectedSport === "all"
      ? mockTalentHotspots
      : mockTalentHotspots.filter((h) => h.topSport === selectedSport);

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="coach" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
            <MapPin className="mr-3 h-8 w-8 text-primary" />
            Geo Talent Heatmap
          </h1>
          <p className="text-muted-foreground">
            Visualize talent concentration across India to identify key areas for scouting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Talent Distribution Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full aspect-[4/3] bg-muted/20 rounded-lg p-4">
                <IndiaMap />
                {filteredHotspots.map((hotspot) => (
                  <Tooltip key={hotspot.id}>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute w-4 h-4 rounded-full bg-primary/80 border-2 border-primary-foreground shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                        style={{
                          left: `${hotspot.x}%`,
                          top: `${hotspot.y}%`,
                          animationDelay: `${Math.random() * 1}s`,
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-bold">{hotspot.name}, {hotspot.state}</p>
                      <p>Talent Count: {hotspot.talentCount}</p>
                      <p>Top Sport: {hotspot.topSport}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Controls & List Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sports</SelectItem>
                    <SelectItem value="Cricket">Cricket</SelectItem>
                    <SelectItem value="Football">Football</SelectItem>
                    <SelectItem value="Athletics">Athletics</SelectItem>
                    <SelectItem value="Badminton">Badminton</SelectItem>
                    <SelectItem value="Hockey">Hockey</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Hotspots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredHotspots
                    .sort((a, b) => b.talentCount - a.talentCount)
                    .map((hotspot) => (
                      <div key={hotspot.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{hotspot.name}</p>
                          <p className="text-sm text-muted-foreground">{hotspot.state}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold flex items-center justify-end">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            {hotspot.talentCount}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center justify-end">
                            <Trophy className="h-4 w-4 mr-2 text-badge-gold" />
                            {hotspot.topSport}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeatmapPage;
