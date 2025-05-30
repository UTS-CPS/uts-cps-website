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
    <section id="events" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <Calendar className="h-10 w-10 text-indigo-300 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-indigo-400 rounded mb-8"></div>
          <p className="max-w-3xl text-slate-400 text-lg">
            Join us for our upcoming competitions, workshops, and practice
            sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-gray-900 border-slate-600/30 hover:border-slate-500 transition-all">
            <CardHeader>
              <CardTitle className="text-slate-100">Coming Soon!</CardTitle>
              <CardDescription className="text-slate-400">
                December 31, 1999 • 11:59 PM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">Shhh..</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-slate-500 text-slate-300 hover:bg-slate-600/10"
              >
                Register
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900 border-slate-600/30 hover:border-slate-500 transition-all">
            <CardHeader>
              <CardTitle className="text-slate-100">Coming Soon!</CardTitle>
              <CardDescription className="text-slate-400">
                December 31, 1999 • 11:59 PM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">Shhh..</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-slate-500 text-slate-300 hover:bg-slate-600/10"
              >
                Register
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900 border-slate-600/30 hover:border-slate-500 transition-all">
            <CardHeader>
              <CardTitle className="text-slate-100">Coming Soon!</CardTitle>
              <CardDescription className="text-slate-400">
                December 31, 1999 • 11:59 PM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">Shhh..</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-slate-500 text-slate-300 hover:bg-slate-600/10"
              >
                Register
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-slate-700 hover:bg-slate-600 text-white">
            View All Events <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
