import {
  ShoppingCart,
  ListChecks,
  BarChart,
  Users,
} from "lucide-react";

export const projects = [
    {
      icon: (
        <ShoppingCart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "E-Commerce Platform",
      slug: "e-commerce-platform",
      description:
        "A fully-featured e-commerce platform with product catalog, shopping cart, and payment processing.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      icon: <ListChecks className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Task Management App",
      slug: "task-management-app",
      description:
        "A collaborative task management application with real-time updates and team workspace features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      icon: <BarChart className="h-6 w-6 text-rose-600 dark:text-rose-400" />,
      title: "Finance Dashboard",
      slug: "finance-dashboard",
      description:
        "An analytics dashboard for tracking financial data with interactive charts and reports.",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
      title: "Social Media Platform",
      slug: "social-media-platform",
      description:
        "A social networking platform with user profiles, posts, and real-time messaging.",
      technologies: ["React", "GraphQL", "AWS", "DynamoDB"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];