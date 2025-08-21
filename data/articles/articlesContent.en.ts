import { Article } from '../../types/index.ts';

export const articlesContentData: Omit<Article, 'views' | 'trending'>[] = [
  {
    slug: 'menurunkan-insulin-basal-tanpa-kelaparan',
    title: "Lowering Basal Insulin Without Starvation",
    desc: "Strategies for protein & fiber-conscious eating, plus flexible fasting tips to control insulin and boost metabolism.",
    publishDate: "2024-07-15",
    tags: ["insulin", "diet", "protein"],
    featured: true,
    claps: 152,
    imageUrl: 'https://picsum.photos/id/101/800/600',
    category: 'Metabolik',
    categoryKey: 'metabolik',
    authorId: 'drlita',
    series: { id: 'metabolic-health', title: 'Metabolic Health Fundamentals', order: 1 },
    keyTakeaways: [
      "Focus on **protein and fiber** on every plate to increase satiety and control blood sugar.",
      "**Flexible** intermittent fasting is more sustainable than rigid schedules; listen to your body's cues.",
      "Combining diet strategy and meal timing can effectively lower insulin **without needing to feel extremely hungry**."
    ],
    footnotes: {
      "1": "Soluble fiber (like in oats and apples) forms a gel in the digestive tract, while insoluble fiber (like in leafy greens) adds bulk to stool."
    },
    content: `
      <p>Many people think that to lower insulin, they must endure extreme hunger. However, a more sustainable approach is to focus on the quality of the food you consume. The main key is to prioritize protein and fiber in every meal.</p>
      <img src="https://picsum.photos/id/211/800/400" alt="Healthy meal with protein and fiber" />
      
      <h2>The Importance of Protein and Fiber</h2>
      <p>Protein has the highest thermic effect of food, meaning the body burns more calories digesting it. Additionally, protein is highly satiating, which helps control appetite naturally. Ensure every plate has a quality protein source like fish, chicken, eggs, or legumes.</p>
      <p>Fiber, especially from non-starchy vegetables, slows down digestion and the absorption of sugar into the bloodstream. This prevents sharp spikes in blood sugar and insulin after meals. The goal is to fill half your plate with colorful vegetables. There are two main types of fiber: soluble and insoluble.<sup id="footnote-ref-1" data-footnote="1"><a href="#footnote-1">1</a></sup> Both are crucial for gut and metabolic health.</p>
      
      <h2>Example of an Ideal Plate</h2>
      <p>For a practical picture, imagine your plate divided into three sections:</p>
      <ul>
        <li><strong>Half the Plate:</strong> Non-starchy vegetables (broccoli, spinach, cauliflower, bell peppers).</li>
        <li><strong>A Quarter of the Plate:</strong> Quality protein source (grilled chicken breast, salmon, tofu).</li>
        <li><strong>A Quarter of the Plate:</strong> Healthy fats or complex carbs (avocado, sweet potato, quinoa).</li>
      </ul>
      <img src="https://picsum.photos/id/237/800/400" alt="A well-balanced plate of food." />

      <h2>Flexible Fasting</h2>
      <p>Intermittent fasting or flexible fasting can also be a powerful tool. Instead of a rigid schedule, listen to your body. Some days you might eat within an 8-hour window, while on other days you eat normally. The key is to give your body a break from constant digestion, allowing insulin levels to fall.</p>
      <pre><code class="language-js">
// Pseudo-code for determining an eating window
function getEatingWindow(isWorkoutDay, socialEvent) {
  if (isWorkoutDay) {
    return { start: 12, end: 21 }; // 9-hour window
  } else if (socialEvent) {
    return { start: 14, end: 22 }; // Shift for a late event
  }
  return { start: 12, end: 20 }; // Standard 8-hour window
}
      </code></pre>
      <p>This approach is much more maintainable long-term and yields significant results in improving insulin sensitivity.</p>
    `
  },
  {
    slug: 'vitamin-d-dosis-status-keamanan',
    title: "Vitamin D: Dosing, Status, & Safety",
    desc: "How to interpret 25(OH)D and when you need K2 for optimal immune and bone health.",
    publishDate: "2024-07-10",
    tags: ["vitamin d", "supplements", "immunity"],
    claps: 113,
    imageUrl: 'https://picsum.photos/id/102/800/600',
    category: 'Imun',
    categoryKey: 'imun',
    authorId: 'drlita',
    keyTakeaways: [
      "The optimal blood level of Vitamin D (25(OH)D) is **50-80 ng/mL** according to many functional medicine experts.",
      "When taking high-dose Vitamin D supplements, it is highly recommended to pair it **with Vitamin K2 (MK-7)**.",
      "Vitamin K2 helps **direct calcium to the bones** and away from the arteries, reducing the risk of calcification."
    ],
    footnotes: {
      "1": "Cholecalciferol (D3) is generally considered more effective at raising blood 25(OH)D levels than Ergocalciferol (D2)."
    },
    content: `
      <p>Vitamin D is a crucial hormone that is often deficient in modern populations. To know your status, the most reliable blood test is 25-hydroxyvitamin D, or 25(OH)D.</p>
      <img src="https://picsum.photos/id/212/800/400" alt="Sunlight exposure for Vitamin D" />
      <h2>Understanding Vitamin D Levels</h2>
      <p>The optimal level suggested by many functional medicine experts is between 50-80 ng/mL. Below 30 ng/mL is considered a deficiency. Supplementation doses vary widely depending on your starting level, sun exposure, and body weight. A common maintenance dose is around 2000-5000 IU per day. It's important to choose Vitamin D3 supplements over D2 for better bioavailability.<sup id="footnote-ref-1" data-footnote="1"><a href="#footnote-1">1</a></sup></p>
      
      <h2>The Crucial Role of Vitamin K2</h2>
      <p>Safety is paramount. While Vitamin D toxicity is rare, it can happen with very high doses over a long period. One concern is arterial calcification. This is where Vitamin K2 comes in. Vitamin K2 (especially the MK-7 form) activates proteins that help direct calcium to where it belongs: bones and teeth, and away from arteries and soft tissues. Therefore, when taking high-dose Vitamin D, it is often recommended to consume it along with Vitamin K2.</p>
      <pre><code class="language-js">
// Example vitamin level check
function checkVitaminDLevel(level) {
  if (level < 30) {
    return "Deficiency. Consult a doctor.";
  } else if (level >= 50 && level <= 80) {
    return "Optimal level. Consider K2 if supplementing.";
  } else if (level > 100) {
    return "Level is too high. Stop supplements and consult.";
  }
  return "Level is outside the optimal range.";
}
console.log(checkVitaminDLevel(65)); // Output: Optimal level. Consider K2 if supplementing.
      </code></pre>
      <p>Always re-test after 3 months of supplementation to adjust your dose and ensure you are in the optimal range.</p>
    `
  },
  {
    slug: 'senolytics-aman-efektif',
    title: "Senolytics: Safe & Effective?",
    desc: "When, who, and what combinations make sense for combating cellular aging and improving healthspan.",
    publishDate: "2024-07-05",
    tags: ["longevity", "anti-aging", "senolytics"],
    claps: 189,
    imageUrl: 'https://picsum.photos/id/103/800/600',
    category: 'Longevity',
    categoryKey: 'longevity',
    authorId: 'drlita',
    keyTakeaways: [
      "Senolytics are compounds that **clear out old (senescent) cells** that accumulate with age.",
      "Natural compounds like **Quercetin and Fisetin** have shown potential as senolytics in early research.",
      "A 'hit-and-run' approach (high dose for a few days, followed by a long break) is a common usage strategy to mimic clinical studies."
    ],
    content: `
      <p>Senolytics are a class of compounds designed to clear senescent cells—old cells that have stopped dividing but don't die, often called 'zombie cells'. These cells accumulate as we age and release pro-inflammatory substances (SASP), contributing to many age-related diseases.</p>
      <img src="https://picsum.photos/id/301/800/400" alt="Cellular structure" />
      <h2>Natural Senolytic Compounds</h2>
      <p>The most researched natural senolytic compounds are Quercetin (found in apples and onions) and Fisetin (found in strawberries). Preliminary research, especially in animals, shows promising results in improving healthspan by reducing the burden of senescent cells.</p>
      
      <h2>When to Use Them?</h2>
      <p>When should one consider them? Typically, senolytics are not necessary for people under 40 unless there's a specific health condition. A common approach is a "hit-and-run" cycle, where a high dose is taken for a few days (e.g., 3 consecutive days), followed by a break of a month or more. This mimics how they work in studies and aims to periodically clear out senescent cells.</p>
      
      <h2>Popular Combinations</h2>
      <p>The most popular combination in research is Dasatinib (a prescription drug) with Quercetin (D+Q). For a non-prescription approach, Fisetin is often considered one of the most potent natural senolytics. Always consult with a healthcare practitioner before starting any senolytic regimen, as they can interact with other conditions and medications.</p>
    `
  },
  {
    slug: 'pentingnya-tidur-untuk-metabolisme',
    title: "The Importance of Sleep for Metabolic Health",
    desc: "Sleep deprivation can wreck your metabolism more than you think. Learn why and how to fix it.",
    publishDate: "2024-06-28",
    tags: ["sleep", "metabolism", "health"],
    claps: 98,
    imageUrl: 'https://picsum.photos/id/104/800/600',
    category: 'Metabolik',
    categoryKey: 'metabolik',
    authorId: 'drlita',
    series: { id: 'metabolic-health', title: 'Metabolic Health Fundamentals', order: 2 },
    keyTakeaways: [
      "Chronic sleep deprivation is directly linked to **insulin resistance** and increased risk of type 2 diabetes.",
      "Poor sleep disrupts appetite hormones: increasing **ghrelin (hunger)** and decreasing **leptin (satiety)**.",
      "Creating a **consistent sleep routine** and an optimal sleep environment is a powerful health intervention."
    ],
    content: `
      <p>Sleep is not just for rest. It is an active repair process crucial for almost every system in the body, especially metabolism. Chronic sleep deprivation is directly linked to insulin resistance, increased appetite, and a higher risk for obesity and type 2 diabetes.</p>
      <img src="https://picsum.photos/id/355/800/400" alt="A dark, quiet bedroom for sleep." />
      <h2>Hormones and Sleep</h2>
      <p>When you're sleep-deprived, your cortisol (stress hormone) levels stay elevated, which can increase blood sugar. Furthermore, your appetite-regulating hormones get thrown out of balance: ghrelin (the hunger hormone) increases, and leptin (the satiety hormone) decreases. This is why you tend to crave high-carb, unhealthy foods when you're tired.</p>
      
      <h2>Impact on Insulin Sensitivity</h2>
      <p>Studies have shown that even a single night of poor sleep can significantly reduce insulin sensitivity in healthy individuals. Over time, this can lead to your body needing more insulin to do the same job, which is a precursor to type 2 diabetes.</p>

      <h2>Practical Tips for Better Sleep</h2>
      <ul>
        <li><strong>Consistency:</strong> Maintain a consistent sleep schedule, even on weekends. Go to bed and wake up at the same time every day.</li>
        <li><strong>Environment:</strong> Create a cool (around 18°C or 65°F), dark (use blackout curtains), and quiet sleep environment.</li>
        <li><strong>Screen Time:</strong> Avoid screens (phones, TV, laptops) for at least an hour before bed. The blue light suppresses melatonin production.</li>
        <li><strong>Meal Timing:</strong> Avoid large meals or alcohol a few hours before bedtime.</li>
      </ul>
    `
  },
  {
    slug: 'kesehatan-usus-dan-imunitas',
    title: "The Gut-Immunity Connection",
    desc: "About 70% of your immune system is in your gut. Learn how to support it through food.",
    publishDate: "2024-06-20",
    tags: ["gut", "microbiome", "immunity"],
    claps: 75,
    imageUrl: 'https://picsum.photos/id/105/800/600',
    category: 'Imun',
    categoryKey: 'imun',
    authorId: 'drlita',
    keyTakeaways: [
      "Approximately **70% of the immune system** resides in the gut-associated lymphoid tissue (GALT).",
      "Microbiome imbalance (dysbiosis) can lead to **'leaky gut'**, which triggers systemic inflammation.",
      "Consuming **fermented foods (probiotics)**, **fiber (prebiotics)**, and **polyphenols** is key for a healthy gut and immune system."
    ],
    content: `
      <p>Your gut lining is the gatekeeper between the outside world (the food you eat) and your bloodstream. A healthy microbiome—the community of trillions of bacteria in your gut—is essential for maintaining the integrity of this barrier and for "training" your immune system.</p>
      
      <h2>Dysbiosis and 'Leaky Gut'</h2>
      <p>When the microbiome is out of balance (dysbiosis), it can lead to increased intestinal permeability, or "leaky gut." This allows undigested food particles and toxins to enter the bloodstream, triggering an immune response and chronic inflammation, which is at the root of many autoimmune diseases.</p>
      <img src="https://picsum.photos/id/401/800/400" alt="Fermented foods like kimchi and yogurt." />
      <h2>Foods for a Healthy Gut</h2>
      <p>You can actively improve your gut health through diet:</p>
      <ul>
        <li><strong>Fermented Foods (Probiotics):</strong> Foods like unsweetened yogurt, kefir, kimchi, and sauerkraut provide beneficial live bacteria.</li>
        <li><strong>Prebiotic Fiber:</strong> Onions, garlic, asparagus, leeks, and slightly green bananas provide food for your good bacteria.</li>
        <li><strong>Polyphenols:</strong> Brightly colored plant compounds found in berries, green tea, extra virgin olive oil, and dark chocolate are powerful antioxidants that your microbiome also loves.</li>
        <li><strong>Bone Broth:</strong> Rich in amino acids like glutamine, which helps repair the gut lining.</li>
      </ul>
    `
  },
  {
    slug: 'mitokondria-kunci-energi-dan-longevity',
    title: "Mitochondria: The Powerhouse for Energy and Longevity",
    desc: "Mitochondrial health is the foundation of vitality. Learn how to keep your cellular 'batteries' fully charged.",
    publishDate: "2024-06-12",
    tags: ["longevity", "mitochondria", "energy"],
    claps: 210,
    imageUrl: 'https://picsum.photos/id/106/800/600',
    category: 'Longevity',
    categoryKey: 'longevity',
    authorId: 'drlita',
    keyTakeaways: [
      "Mitochondria produce the **vast majority of the body's energy (ATP)**, and their decline is linked to aging.",
      "**Exercise (especially HIIT)** is one of the most effective ways to stimulate the creation of new mitochondria (biogenesis).",
      "Key nutrients like **CoQ10, PQQ, and L-carnitine** are essential for optimal mitochondrial function."
    ],
    content: `
      <p>Mitochondria are tiny organelles inside your cells responsible for generating most of the body's energy in the form of ATP. They are the cellular 'powerhouses'. As we age, mitochondrial function tends to decline, leading to fatigue, cognitive decline, and accelerated aging.</p>
      <img src="https://picsum.photos/id/431/800/400" alt="Person exercising energetically." />
      <h2>Supporting Your Mitochondria</h2>
      <p>Fortunately, there are many lifestyle strategies to support and even regenerate your mitochondria:</p>
      <ul>
        <li><strong>Exercise:</strong> Especially high-intensity interval training (HIIT) and resistance training, stimulates the body to create new mitochondria (mitochondrial biogenesis).</li>
        <li><strong>Mitochondrial Nutrients:</strong> Nutrients like CoQ10, PQQ, L-carnitine, and B vitamins are crucial for mitochondrial function. Foods like organ meats, fatty fish, and broccoli are rich in these.</li>
        <li><strong>Hormetic Stress:</strong> Cold exposure (like cold showers) and heat exposure (like saunas) can trigger adaptive responses that strengthen mitochondria and make them more efficient.</li>
        <li><strong>Caloric Restriction:</strong> Intermittent fasting and general caloric restriction can trigger a process called 'mitophagy,' where the cell cleans out damaged mitochondria.</li>
      </ul>
    `
  }
];