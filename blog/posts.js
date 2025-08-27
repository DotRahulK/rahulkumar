window.blogPosts = [
  {
    slug: "how-i-built-my-portfolio-site",
    title: "How I built my portfolio site",
    date: "March 2025",
    summary:
      "An in-depth look at the process and tools used to build my personal portfolio, including design decisions and implementation details.",
    image: "post1.png",
    imageDescription: "A serene golden meadow with a lone tree stands against misty rolling hills at sunrise.",
    content: [
      "Building my portfolio was both a fun side project and an exercise in polishing my full-stack skills. I started by listing everything I wanted to include: a hero section, an about page, a summary of my experience and projects, a blog, and a way for visitors to get in touch. I researched designs I admire and settled on a simple single-page scroll with a fixed navigation bar and smooth fade-in animations.",
      "The site is built using plain HTML, CSS and a little vanilla JavaScript for the dark-mode toggle and scroll animations. For styling I chose the Inter and JetBrains Mono typefaces and used CSS variables to make it easy to switch between light and dark themes. The result is a page that's easy to extend as I add new projects or blog posts.",
      "I plan to gradually convert parts of the site to a proper static generator so that adding posts is as simple as writing Markdown. For now, though, it's a handcrafted snapshot of who I am and what I like to build. Thanks for reading!"
    ]
  },
  {
    "slug": "breaking-a-monolith-into-modular-services",
    "title": "Breaking a monolith into modular services",
    "date": "April 2025",
    "summary": "Refactoring a monolithic backend into modular endpoints for faster responses, lazy loading, and easier scalability.",
    "image": "post2.png",
    "imageDescription": "Diagram illustrating the breakdown of a monolithic API into modular endpoints for faster loading and lazy handling of features.",
    "content": [
      "When your application starts to groan under its own weight, it's time to rethink how it's structured. In this article, I share the journey of evolving a monolithic backend API into a set of modular, well-defined endpoints within the same service.",
      "We began by identifying clear domain boundaries and splitting the API so each major section (users, orders, products, payments) had its own endpoint. This allowed us to speed up loading for main sections, push non-critical features into lazy loading, and keep the codebase cleaner.",
      "The result? A 25% improvement in average API response times and a system that's easier to maintain and evolve without the risk of a full redeploy.",
      "Along the way we discovered some gotchas with shared data models and authentication, and I'll dive into how we addressed those challenges in a future post."
    ]
  }

];
