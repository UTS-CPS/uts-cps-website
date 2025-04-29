import { ChevronRight, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from "../ui/card.tsx";
import { Button } from "../ui/button.tsx";

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <Calendar className="h-10 w-10 text-purple-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded mb-8"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            Join us for our upcoming competitions, workshops, and practice
            sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-gray-800 border-purple-500/20 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <CardTitle className="text-white">Coming Soon!</CardTitle>
              <CardDescription> December 31, 1999 • 11:59 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Shhh..</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10"
              >
                Register
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 border-purple-500/20 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <CardTitle className="text-white">Coming Soon!</CardTitle>
              <CardDescription>December 31, 1999 • 11:59 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Shhh..</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10"
              >
                Register
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 border-purple-500/20 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <CardTitle className="text-white">Coming Soon!</CardTitle>
              <CardDescription>December 31, 1999 • 11:59 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Shhh..</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10"
              >
                Register
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-purple-600 hover:bg-purple-700">
            View All Events <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
