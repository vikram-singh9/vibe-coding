export interface Author {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  imageUrl: string;
  categoryId: string;
  authorId: string;
  featured: boolean;
}

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'John Doe',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'author-2',
    name: 'Jane Smith',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'author-3',
    name: 'Robert Johnson',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export const categories: Category[] = [
  {
    id: 'category-1',
    name: 'Technology',
    slug: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'category-2',
    name: 'Lifestyle',
    slug: 'lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'category-3',
    name: 'Travel',
    slug: 'travel',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'category-4',
    name: 'Food',
    slug: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Future of Web Development: What to Expect in 2024',
    description: 'Explore the upcoming trends and technologies that will shape web development in the coming year.',
    content: `
      <p>The web development landscape is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look ahead to 2024, several key trends are poised to reshape how we build and interact with web applications.</p>
      
      <h2>1. AI-Driven Development</h2>
      <p>Artificial intelligence is increasingly being integrated into development workflows. From code completion to automated testing, AI tools are helping developers work more efficiently and with fewer errors. Expect to see more sophisticated AI assistants that can understand context and provide more accurate suggestions.</p>
      
      <h2>2. WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has been gaining traction, and 2024 might be the year it becomes a standard part of web development. By allowing code written in languages like C++, Rust, and Go to run in the browser at near-native speed, Wasm opens up new possibilities for web applications.</p>
      
      <h2>3. Edge Computing Expansion</h2>
      <p>The edge computing paradigm will continue to grow, with more logic moving from centralized servers to CDN edges closer to users. This approach reduces latency and improves user experience, particularly for global applications.</p>
      
      <h2>4. Increased Focus on Accessibility</h2>
      <p>Web accessibility is becoming a priority rather than an afterthought. In 2024, we'll see more tools and frameworks that make it easier to build accessible websites from the ground up, along with stricter enforcement of accessibility standards.</p>
      
      <h2>5. Sustainable Web Design</h2>
      <p>As awareness of the web's environmental impact grows, developers will increasingly adopt practices that reduce the carbon footprint of websites and applications. This includes optimizing assets, reducing unnecessary data transfer, and choosing green hosting providers.</p>
      
      <p>The future of web development looks exciting, with technologies that enable faster, more accessible, and more powerful web applications. By staying informed about these trends, developers can position themselves at the forefront of the industry and build better experiences for users worldwide.</p>
    `,
    date: 'January 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    categoryId: 'category-1',
    authorId: 'author-1',
    featured: true,
  },
  {
    id: 'post-2',
    title: 'Mindfulness in the Digital Age: Finding Balance',
    description: 'Discover practical strategies for maintaining mental well-being in our increasingly connected world.',
    content: `
      <p>In today's hyperconnected world, the constant stream of notifications, emails, and social media updates can leave us feeling overwhelmed and mentally drained. Mindfulness—the practice of being fully present and engaged in the moment—offers a powerful antidote to digital overload.</p>
      
      <h2>Understanding Digital Overwhelm</h2>
      <p>The average person checks their phone 96 times a day—that's once every 10 minutes. This constant switching of attention takes a toll on our cognitive resources and can lead to what psychologists call "technostress." Symptoms include difficulty concentrating, increased anxiety, and poor sleep quality.</p>
      
      <h2>Practical Mindfulness Techniques</h2>
      <p>Incorporating mindfulness into your daily routine doesn't require hours of meditation. Here are some simple practices that can make a significant difference:</p>
      
      <h3>1. Mindful Breathing</h3>
      <p>Take three deep breaths before checking your phone in the morning. Focus completely on the sensation of breathing, allowing your mind to center before engaging with digital information.</p>
      
      <h3>2. Tech-Free Zones</h3>
      <p>Designate certain areas of your home, such as the dining table or bedroom, as tech-free zones. This creates physical spaces where you can fully engage with your surroundings or loved ones.</p>
      
      <h3>3. Digital Sunset</h3>
      <p>Implement a "digital sunset" by turning off screens 1-2 hours before bedtime. This not only improves sleep quality but creates space for reflection and unwinding.</p>
      
      <h2>Mindful Digital Consumption</h2>
      <p>Being selective about what you consume online is another aspect of digital mindfulness. Consider these approaches:</p>
      
      <ul>
        <li>Curate your social media feeds to include content that inspires and uplifts you</li>
        <li>Schedule specific times for checking email and social media rather than responding to every notification</li>
        <li>Practice the "one-minute rule"—if you find yourself mindlessly scrolling, pause and ask if this is how you want to spend your time</li>
      </ul>
      
      <p>By incorporating these mindfulness practices into your digital life, you can enjoy the benefits of technology while maintaining your mental well-being and staying connected to what truly matters.</p>
    `,
    date: 'February 3, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    categoryId: 'category-2',
    authorId: 'author-2',
    featured: false,
  },
  {
    id: 'post-3',
    title: 'Hidden Gems: Unexplored Destinations for Your Next Adventure',
    description: 'Venture off the beaten path with these stunning yet underrated travel destinations.',
    content: `
      <p>While popular tourist destinations offer reliable experiences, there's something magical about discovering places that haven't yet made it to the top of most travelers' lists. These hidden gems often provide more authentic cultural experiences, fewer crowds, and the thrill of exploration.</p>
      
      <h2>Comporta, Portugal</h2>
      <p>Just an hour south of Lisbon lies Comporta, a stretch of pristine beaches and laid-back villages that locals have managed to keep relatively secret. With its rice fields, pine forests, and miles of unspoiled coastline, Comporta offers a refreshing alternative to the Algarve's more developed beach towns.</p>
      
      <p>Where to stay: Sublime Comporta, a luxury retreat nestled among cork trees and sand dunes.</p>
      
      <h2>Svaneti, Georgia</h2>
      <p>Tucked away in the Caucasus Mountains, Svaneti is a highland region with medieval stone towers dotting the landscape. The area is home to the Svan people, who maintain their own unique cultural traditions and language. Hiking between remote villages offers breathtaking mountain vistas and glimpses into a way of life that has remained largely unchanged for centuries.</p>
      
      <p>Don't miss: The village of Ushguli, one of the highest continuously inhabited settlements in Europe and a UNESCO World Heritage site.</p>
      
      <h2>Isla Holbox, Mexico</h2>
      <p>While Tulum has become increasingly crowded, Isla Holbox (pronounced "hole-bosh") remains a tranquil paradise. This car-free island north of Mexico's Yucatán Peninsula features white sand beaches, bioluminescent waters, and abundant wildlife, including flamingos and whale sharks (seasonal).</p>
      
      <p>Best time to visit: June to September for whale shark swimming; November to March for perfect beach weather without the humidity.</p>
      
      <h2>Faroe Islands</h2>
      <p>Halfway between Iceland and Norway, this autonomous archipelago belonging to Denmark offers dramatic landscapes that rival New Zealand's—without the crowds. Think cascading waterfalls, grass-roofed houses, and sheer cliffs plunging into the Atlantic Ocean.</p>
      
      <p>Photographer's tip: Visit Múlafossur Waterfall in Gásadalur village for one of the most spectacular photo opportunities in all of Europe.</p>
      
      <h2>Responsible Travel Tips</h2>
      <p>As you explore these lesser-known destinations, remember that part of their charm lies in their unspoiled nature. Practice sustainable tourism by:</p>
      
      <ul>
        <li>Respecting local customs and traditions</li>
        <li>Supporting locally-owned businesses</li>
        <li>Minimizing your environmental footprint</li>
        <li>Being mindful about sharing on social media (some places are better kept as personal discoveries)</li>
      </ul>
      
      <p>The world is full of extraordinary places waiting to be discovered. By venturing beyond the guidebook highlights, you'll not only create unique memories but also spread tourism benefits to communities off the conventional tourist trail.</p>
    `,
    date: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    categoryId: 'category-3',
    authorId: 'author-3',
    featured: true,
  },
  {
    id: 'post-4',
    title: 'Plant-Based Cooking: Simple Recipes for Beginners',
    description: 'Start your plant-based journey with these easy, nutritious, and delicious recipes anyone can make.',
    content: `
      <p>Incorporating more plant-based meals into your diet doesn't have to be complicated or bland. Whether you're considering a full vegan lifestyle or simply want to embrace Meatless Mondays, these beginner-friendly recipes will help you discover the delicious possibilities of plant-based cooking.</p>
      
      <h2>Breakfast: Creamy Overnight Oats</h2>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>½ cup rolled oats</li>
        <li>1 tablespoon chia seeds</li>
        <li>1 cup plant milk (almond, oat, or soy)</li>
        <li>1 tablespoon maple syrup</li>
        <li>¼ teaspoon vanilla extract</li>
        <li>Pinch of salt</li>
        <li>Toppings: fresh berries, sliced banana, chopped nuts, or nut butter</li>
      </ul>
      
      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Combine oats, chia seeds, plant milk, maple syrup, vanilla, and salt in a jar or container.</li>
        <li>Stir well, cover, and refrigerate overnight or for at least 4 hours.</li>
        <li>In the morning, add a splash more milk if needed and top with your favorite fruits and nuts.</li>
      </ol>
      
      <h2>Lunch: Rainbow Buddha Bowl</h2>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>1 cup cooked quinoa or brown rice</li>
        <li>1 cup roasted vegetables (sweet potato, bell pepper, zucchini)</li>
        <li>1 cup raw vegetables (shredded carrot, sliced cucumber, cherry tomatoes)</li>
        <li>¼ avocado, sliced</li>
        <li>¼ cup cooked beans or lentils</li>
        <li>Handful of leafy greens</li>
        <li>2 tablespoons tahini or hummus</li>
        <li>Lemon juice, salt, and pepper to taste</li>
      </ul>
      
      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Arrange the quinoa or rice in a bowl.</li>
        <li>Arrange the roasted vegetables, raw vegetables, avocado, beans, and greens in sections around the bowl.</li>
        <li>Drizzle with tahini or add a dollop of hummus.</li>
        <li>Squeeze lemon juice over the bowl and season with salt and pepper.</li>
      </ol>
      
      <h2>Dinner: One-Pot Lentil Pasta</h2>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>8 oz pasta (any shape)</li>
        <li>1 cup red lentils, rinsed</li>
        <li>1 onion, diced</li>
        <li>2 cloves garlic, minced</li>
        <li>1 can (14 oz) diced tomatoes</li>
        <li>1 tablespoon Italian herbs</li>
        <li>4 cups vegetable broth</li>
        <li>2 cups spinach or kale, chopped</li>
        <li>Salt and pepper to taste</li>
        <li>Nutritional yeast or vegan parmesan for serving (optional)</li>
      </ul>
      
      <p><strong>Instructions:</strong></p>
      <ol>
        <li>In a large pot, sauté onion and garlic in a little water or olive oil until soft.</li>
        <li>Add pasta, lentils, diced tomatoes, Italian herbs, and vegetable broth.</li>
        <li>Bring to a boil, then reduce heat and simmer for about 15 minutes, stirring occasionally, until pasta and lentils are tender.</li>
        <li>Stir in greens and cook until wilted.</li>
        <li>Season with salt and pepper, and serve with a sprinkle of nutritional yeast if desired.</li>
      </ol>
      
      <h2>Tips for Plant-Based Cooking Success</h2>
      <ul>
        <li><strong>Stock your pantry:</strong> Keep beans, lentils, whole grains, nuts, and seeds on hand for quick meals.</li>
        <li><strong>Embrace herbs and spices:</strong> They add flavor without adding animal products.</li>
        <li><strong>Don't stress about perfection:</strong> Even incorporating a few plant-based meals each week makes a difference.</li>
        <li><strong>Experiment with plant proteins:</strong> Try tofu, tempeh, seitan, or legumes to find what you enjoy.</li>
      </ul>
      
      <p>Plant-based cooking is an adventure in discovering new flavors and textures. With these simple recipes as your starting point, you'll be well on your way to creating delicious, nutritious meals that are good for you and the planet.</p>
    `,
    date: 'April 5, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    categoryId: 'category-4',
    authorId: 'author-2',
    featured: false,
  },
  {
    id: 'post-5',
    title: 'The Rise of No-Code Development: Democratizing Software Creation',
    description: 'How no-code platforms are changing who can build software and what that means for the future of tech.',
    content: `
      <p>Software development has traditionally been the domain of those with coding expertise, creating a divide between those who can build digital solutions and those who cannot. However, the rise of no-code development platforms is rapidly changing this landscape, democratizing the ability to create software and potentially reshaping the technology industry.</p>
      
      <h2>What is No-Code Development?</h2>
      <p>No-code development platforms allow users to create applications through graphical user interfaces and configuration instead of traditional computer programming. Using drag-and-drop components and model-driven logic, these platforms enable users to build everything from simple automations to complex applications without writing a single line of code.</p>
      
      <h2>The Current No-Code Landscape</h2>
      <p>The no-code ecosystem has expanded dramatically in recent years, with platforms catering to various needs:</p>
      
      <ul>
        <li><strong>Web and mobile app builders:</strong> Platforms like Bubble, Webflow, and Adalo allow users to create fully functional web and mobile applications.</li>
        <li><strong>Automation tools:</strong> Zapier, Make (formerly Integromat), and Power Automate enable workflow automation across different services.</li>
        <li><strong>Internal tool builders:</strong> Retool, Appsmith, and Tooljet help companies create custom internal applications quickly.</li>
        <li><strong>Database and backend solutions:</strong> Airtable, Notion, and Xano provide flexible database capabilities with user-friendly interfaces.</li>
      </ul>
      
      <h2>Who Benefits from No-Code?</h2>
      
      <h3>Non-Technical Founders</h3>
      <p>Entrepreneurs with great ideas but limited technical skills can now build MVPs (Minimum Viable Products) to test concepts and attract investment without hiring developers or learning to code.</p>
      
      <h3>Business Teams</h3>
      <p>Marketing, sales, and operations teams can create tools tailored to their specific needs without waiting for IT department bandwidth, increasing organizational agility.</p>
      
      <h3>Professional Developers</h3>
      <p>Even experienced developers benefit from no-code tools for rapid prototyping and handling routine aspects of development, allowing them to focus on more complex problems.</p>
      
      <h2>The Impact on the Tech Industry</h2>
      
      <h3>Expanding the Creator Pool</h3>
      <p>By lowering the technical barrier to entry, no-code platforms are enabling a more diverse group of people to become software creators, potentially leading to more varied and innovative solutions.</p>
      
      <h3>Changing Developer Roles</h3>
      <p>As basic application development becomes accessible to non-developers, professional developers may shift toward more specialized roles focusing on complex systems, architecture, and extending no-code platforms.</p>
      
      <h3>Addressing the Developer Shortage</h3>
      <p>With the global shortage of software developers, no-code tools help organizations build and maintain applications despite hiring challenges.</p>
      
      <h2>Limitations and Challenges</h2>
      <p>Despite their benefits, no-code platforms have limitations:</p>
      
      <ul>
        <li><strong>Complexity ceiling:</strong> Highly complex or unique applications may still require traditional coding.</li>
        <li><strong>Performance considerations:</strong> Applications built with no-code platforms may not be as optimized as custom-coded solutions.</li>
        <li><strong>Vendor lock-in:</strong> Dependence on specific no-code platforms can create risks if those platforms change pricing or features.</li>
        <li><strong>Integration challenges:</strong> Some systems may be difficult to connect with no-code tools without custom development.</li>
      </ul>
      
      <h2>The Future of No-Code</h2>
      <p>The no-code movement is likely to continue growing, with several trends emerging:</p>
      
      <ul>
        <li><strong>AI-enhanced capabilities:</strong> Artificial intelligence will make no-code platforms smarter and more capable.</li>
        <li><strong>Hybrid approaches:</strong> The line between no-code and traditional development will blur, with more platforms offering both options.</li>
        <li><strong>Enterprise adoption:</strong> Larger organizations will increasingly embrace no-code for certain applications, particularly for department-specific tools.</li>
        <li><strong>Education shifts:</strong> Digital literacy education may evolve to include no-code development as a fundamental skill.</li>
      </ul>
      
      <p>The democratization of software development through no-code platforms represents a significant shift in how digital solutions are created. While traditional coding will remain essential for many applications, the expanding no-code ecosystem is opening new possibilities for innovation and problem-solving across industries and skill levels.</p>
    `,
    date: 'April 18, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    categoryId: 'category-1',
    authorId: 'author-1',
    featured: false,
  },
  {
    id: 'post-6',
    title: 'Sustainable Fashion: Building an Eco-Friendly Wardrobe',
    description: 'Practical tips for making more environmentally conscious clothing choices without sacrificing style.',
    content: `
      <p>The fashion industry is one of the world's largest polluters, responsible for about 10% of global carbon emissions and nearly 20% of wastewater. As consumers become more aware of these environmental impacts, many are looking for ways to make their wardrobes more sustainable. Fortunately, building an eco-friendly wardrobe doesn't mean sacrificing style or breaking the bank.</p>
      
      <h2>Understanding Sustainable Fashion</h2>
      <p>Sustainable fashion encompasses several key principles:</p>
      
      <ul>
        <li><strong>Environmental consideration:</strong> Minimizing the ecological footprint of clothing production and disposal</li>
        <li><strong>Ethical labor practices:</strong> Ensuring fair wages and safe working conditions for garment workers</li>
        <li><strong>Durability and longevity:</strong> Creating and choosing clothing that lasts longer and stays out of landfills</li>
        <li><strong>Circular economy:</strong> Designing products that can be reused, recycled, or biodegraded</li>
      </ul>
      
      <h2>Building a Sustainable Wardrobe: Practical Steps</h2>
      
      <h3>1. Adopt a Quality-Over-Quantity Mindset</h3>
      <p>The foundation of a sustainable wardrobe is buying less but better. Consider:</p>
      <ul>
        <li>Investing in well-made basics that will last for years</li>
        <li>Choosing classic designs that won't quickly go out of style</li>
        <li>Paying attention to construction details like strong seams and quality materials</li>
      </ul>
      
      <h3>2. Research Sustainable Brands</h3>
      <p>When you do need to buy new items, look for brands that prioritize sustainability:</p>
      <ul>
        <li>Seek out certifications like GOTS (Global Organic Textile Standard), Fair Trade, or B Corp</li>
        <li>Look for transparency in supply chains and manufacturing processes</li>
        <li>Support smaller, local designers who produce in limited quantities</li>
      </ul>
      
      <h3>3. Choose Better Materials</h3>
      <p>The environmental impact of clothing largely depends on its materials:</p>
      <ul>
        <li><strong>Best options:</strong> Organic cotton, hemp, linen, Tencel/lyocell, recycled fibers</li>
        <li><strong>Approach with caution:</strong> Conventional cotton (high pesticide use), wool (consider animal welfare)</li>
        <li><strong>Most problematic:</strong> Polyester and nylon (microplastic pollution), leather (unless recycled or plant-based)</li>
      </ul>
      
      <h3>4. Embrace Secondhand Shopping</h3>
      <p>Perhaps the most sustainable way to shop is to give existing clothing a second life:</p>
      <ul>
        <li>Explore thrift stores, vintage shops, and online marketplaces like ThredUp, Poshmark, or Depop</li>
        <li>Attend clothing swaps with friends or community groups</li>
        <li>Consider rental services for special occasion wear</li>
      </ul>
      
      <h3>5. Care for Your Clothes Properly</h3>
      <p>Extending the life of your existing wardrobe is crucial for sustainability:</p>
      <ul>
        <li>Wash clothes less frequently and at lower temperatures</li>
        <li>Air dry when possible instead of using a dryer</li>
        <li>Learn basic mending skills to repair minor damage</li>
        <li>Store items properly to prevent stretching or moth damage</li>
      </ul>
      
      <h2>Creating a Versatile Capsule Wardrobe</h2>
      <p>A capsule wardrobe—a curated collection of versatile pieces that work well together—is an excellent approach to sustainable fashion:</p>
      
      <ol>
        <li><strong>Audit your current wardrobe</strong> to identify what you actually wear and what gaps exist</li>
        <li><strong>Define your personal style</strong> with a consistent color palette and silhouettes you love</li>
        <li><strong>Select versatile pieces</strong> that can be mixed and matched for different occasions</li>
        <li><strong>Add thoughtful accessories</strong> to transform basic outfits</li>
      </ol>
      
      <h2>The Future of Your Clothes</h2>
      <p>When you no longer want an item, consider these alternatives to throwing it away:</p>
      
      <ul>
        <li>Sell or donate items that are still in good condition</li>
        <li>Repurpose damaged clothing into cleaning rags or other household items</li>
        <li>Look for textile recycling programs for items that can't be reused</li>
        <li>Upcycle or redesign pieces to give them new life</li>
      </ul>
      
      <p>Building a sustainable wardrobe is a journey rather than an overnight transformation. By making more conscious choices and gradually replacing fast fashion with sustainable alternatives, you can significantly reduce your environmental footprint while developing a more personal, intentional style.</p>
    `,
    date: 'May 2, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    categoryId: 'category-2',
    authorId: 'author-2',
    featured: true,
  },
];

// Helper function to get category by ID
export function getCategoryById(id: string): Category | undefined {
  return categories.find(category => category.id === id);
}

// Helper function to get author by ID
export function getAuthorById(id: string): Author | undefined {
  return authors.find(author => author.id === id);
}

// Helper function to get posts by category ID
export function getPostsByCategoryId(categoryId: string): BlogPost[] {
  return blogPosts.filter(post => post.categoryId === categoryId);
}

// Helper function to get featured posts
export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

// Helper function to get post by ID
export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}