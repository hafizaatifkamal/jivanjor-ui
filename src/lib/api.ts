export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category_id: string;
  material_id: string;
  metadata: string; // comma-separated or JSON
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent_category: string; // id or empty string
  description: string;
}

export interface Material {
  id: string;
  name: string;
  description: string;
}

export interface UseCase {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface Issue {
  id: string;
  issue_title: string;
  slug: string;
  problem: string;
  solution: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publish_date: string;
  image?: string;
}

export interface SeoMetadata {
  id: string;
  page_type: string; // 'home', 'product', 'category', 'blog', 'use-case', 'issue'
  page_id: string; // ID of record or 'home'
  meta_title: string;
  meta_description: string;
  canonical_url: string;
}

// Key names for localStorage
const KEYS = {
  PRODUCTS: "jivanjor_products",
  CATEGORIES: "jivanjor_categories",
  MATERIALS: "jivanjor_materials",
  USE_CASES: "jivanjor_use_cases",
  ISSUES: "jivanjor_issues",
  BLOG_POSTS: "jivanjor_blog_posts",
  SEO_METADATA: "jivanjor_seo_metadata",
};

// Seed Data
const SEED_CATEGORIES: Category[] = [
  { id: "cat-1", name: "Premium Adhesives", slug: "premium-adhesives", parent_category: "", description: "High-strength wood adhesives and glues for laminates and veneers." },
  { id: "cat-2", name: "Waterproof Adhesives", slug: "waterproof-adhesives", parent_category: "", description: "Advanced water-resistant adhesives ideal for kitchens, bathrooms, and marine furniture." },
  { id: "cat-3", name: "Fast Curing", slug: "fast-curing", parent_category: "cat-1", description: "Quick-setting formulations that cut down clamping time." },
  { id: "cat-4", name: "Wood Finishes", slug: "wood-finishes", parent_category: "", description: "Premium polishes, varnishes, and sealants to preserve and enhance wood grain." },
];

const SEED_MATERIALS: Material[] = [
  { id: "mat-1", name: "Plywood", description: "Standard structural engineered wood panels." },
  { id: "mat-2", name: "MDF & Particle Board", description: "Medium-density fiberboards sensitive to moisture and requiring specialized bonding." },
  { id: "mat-3", name: "Veneer & Laminates", description: "Thin decorative sheets used for premium surface finishing." },
  { id: "mat-4", name: "Solid Wood", description: "Natural lumber logs of teak, oak, mahogany, etc." },
];

const SEED_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Jivanjor WaterShield 2-in-1",
    slug: "jivanjor-watershield-2-in-1",
    description: "Our flagship synthetic resin adhesive offering premium water resistance and unmatched bond strength. Specifically formulated for high-end furniture items subject to heavy moisture exposure.",
    category_id: "cat-2",
    material_id: "mat-1",
    metadata: "water-resistant, synthetic resin, marine-grade, high-bond",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "prod-2",
    name: "Jivanjor FastXpress",
    slug: "jivanjor-fastxpress",
    description: "An incredibly fast-curing adhesive designed to reach strong bonding strength in under 2 hours. Cuts down clamping time by 60%, allowing craftsmen to work efficiently.",
    category_id: "cat-3",
    material_id: "mat-3",
    metadata: "quick-dry, fast-bond, efficient, time-saver",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "prod-3",
    name: "Lamino Super Strong",
    slug: "lamino-super-strong",
    description: "Specially formulated for pasting laminates and veneers to wood/plywood surfaces. Spreads evenly, prevents bubbling, and guarantees zero edge warping over time.",
    category_id: "cat-1",
    material_id: "mat-3",
    metadata: "laminate adhesive, veneer-glue, bubbles-free, uniform-spread",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400&auto=format&fit=crop"
  }
];

const SEED_USE_CASES: UseCase[] = [
  {
    id: "uc-1",
    title: "Kitchen & Bathroom Cabinets Bonding",
    slug: "kitchen-bathroom-cabinets-bonding",
    description: "High-humidity environments require adhesives that block moisture penetration. Using Jivanjor WaterShield prevents joint splits and peeling laminate edges due to steam and splashes."
  },
  {
    id: "uc-2",
    title: "Premium Office Veneer Inlays",
    slug: "premium-office-veneer-inlays",
    description: "Delicate veneer designs require non-staining, smooth-spreading adhesives. Learn how Lamino Super Strong provides flawless bonding without damaging thin expensive sheets."
  }
];

const SEED_ISSUES: Issue[] = [
  {
    id: "iss-1",
    issue_title: "How to prevent bubbles under pasted laminates?",
    slug: "preventing-bubbles-laminates",
    problem: "When applying laminate sheets on MDF or Plywood, small air pockets or uneven application can lead to unsightly bumps and bubbles that ruin the surface finish.",
    solution: "1. Ensure the substrate is completely clean and dust-free.\n2. Apply the adhesive uniformly using a notched trowel on both surfaces.\n3. Let the solvent vent for 5-10 minutes until tacky.\n4. Apply pressure from the center outwards using a heavy roller to squeeze out all air before clamping."
  },
  {
    id: "iss-2",
    issue_title: "How to glue joints in high humidity locations?",
    slug: "gluing-humid-locations",
    problem: "Standard white glues degrade over time when subjected to constant humidity, causing structural wooden furniture joints to fail or open up.",
    solution: "Always utilize Jivanjor WaterShield adhesive. It contains a specialized water-resistant polymer mesh that does not dissolve or soften when exposed to water or steam, maintaining joint integrity for decades."
  }
];

const SEED_BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "5 Essential Furniture Carpentry Tips for Beginners",
    slug: "essential-furniture-carpentry-tips",
    content: "Building furniture is an incredibly rewarding trade, but starting out can feel overwhelming. In this blog, we explore the top 5 carpentry secrets every beginner must master to achieve professional-grade finishes, from wood moisture reading to selecting the correct synthetic adhesive grade like Jivanjor.",
    category: "Carpentry Guide",
    tags: ["woodworking", "carpentry", "beginner-tips", "adhesives"],
    author: "Master Craftsman Anand",
    publish_date: "2026-05-10",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "blog-2",
    title: "Why Waterproof Adhesives are Non-Negotiable for Kitchen Decors",
    slug: "why-waterproof-adhesives-non-negotiable",
    content: "Kitchen counters and cupboards face severe moisture stress daily due to sink splashes, cooking steam, and spillages. Using standard wooden glue is a recipe for disaster. This article explains the science behind waterproof polymers and why marine-grade solutions protect your expensive modular kitchen investments.",
    category: "Product Science",
    tags: ["waterproof", "kitchen-design", "jivanjor", "innovation"],
    author: "Dr. R. K. Mehta (R&D Lead)",
    publish_date: "2026-05-22",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop"
  }
];

const SEED_SEO: SeoMetadata[] = [
  { id: "seo-1", page_type: "home", page_id: "home", meta_title: "Jivanjor - Premium Adhesives & Wood Finishes", meta_description: "Explore Jivanjor's collection of high-strength synthetic adhesives, waterproof marine glues, and exquisite wood finishes designed for perfectionists.", canonical_url: "https://jivanjor.com" },
  { id: "seo-2", page_type: "product", page_id: "prod-1", meta_title: "Jivanjor WaterShield 2-in-1 - Extreme Water Resistant Glue", meta_description: "Discover WaterShield 2-in-1, Jivanjor's top marine-grade wood adhesive. Perfect for high-moisture kitchen, bathroom, and outdoor structural woodwork.", canonical_url: "https://jivanjor.com/products/jivanjor-watershield-2-in-1" },
  { id: "seo-3", page_type: "blog", page_id: "blog-2", meta_title: "Why Marine Grade Adhesives Matter in Modular Kitchens", meta_description: "Learn how steam and water splash impact standard glues, and why Jivanjor marine waterproof adhesives are essential for beautiful modular setups.", canonical_url: "https://jivanjor.com/blog/why-waterproof-adhesives-non-negotiable" }
];

// Helper to check if browser environment is ready
function isClient() {
  return typeof window !== "undefined";
}

// Retrieve from localStorage or seed
function getStorageItem<T>(key: string, seed: T[]): T[] {
  if (!isClient()) return seed;
  const item = localStorage.getItem(key);
  if (!item) {
    localStorage.setItem(key, JSON.stringify(seed));
    return seed;
  }
  try {
    return JSON.parse(item);
  } catch (e) {
    console.error("Failed to parse storage key: " + key, e);
    return seed;
  }
}

// Save to localStorage
function setStorageItem<T>(key: string, data: T[]) {
  if (!isClient()) return;
  localStorage.setItem(key, JSON.stringify(data));
}

// API methods
export const api = {
  // PRODUCTS
  getProducts: (): Product[] => getStorageItem<Product>(KEYS.PRODUCTS, SEED_PRODUCTS),
  getProductById: (id: string): Product | undefined => api.getProducts().find(p => p.id === id),
  saveProduct: (product: Omit<Product, "id"> & { id?: string }): Product => {
    const products = api.getProducts();
    let savedProduct: Product;
    if (product.id) {
      // Edit
      products.forEach((p, idx) => {
        if (p.id === product.id) {
          products[idx] = { ...p, ...product } as Product;
        }
      });
      savedProduct = products.find(p => p.id === product.id)!;
    } else {
      // Create
      savedProduct = {
        ...product,
        id: `prod-${Date.now()}`,
      };
      products.push(savedProduct);
    }
    setStorageItem(KEYS.PRODUCTS, products);
    return savedProduct;
  },
  deleteProduct: (id: string): boolean => {
    const products = api.getProducts();
    const filtered = products.filter(p => p.id !== id);
    if (filtered.length === products.length) return false;
    setStorageItem(KEYS.PRODUCTS, filtered);
    return true;
  },

  // CATEGORIES
  getCategories: (): Category[] => getStorageItem<Category>(KEYS.CATEGORIES, SEED_CATEGORIES),
  getCategoryById: (id: string): Category | undefined => api.getCategories().find(c => c.id === id),
  saveCategory: (category: Omit<Category, "id"> & { id?: string }): Category => {
    const categories = api.getCategories();
    let saved: Category;
    if (category.id) {
      categories.forEach((c, idx) => {
        if (c.id === category.id) {
          categories[idx] = { ...c, ...category } as Category;
        }
      });
      saved = categories.find(c => c.id === category.id)!;
    } else {
      saved = {
        ...category,
        id: `cat-${Date.now()}`,
      };
      categories.push(saved);
    }
    setStorageItem(KEYS.CATEGORIES, categories);
    return saved;
  },
  deleteCategory: (id: string): boolean => {
    const categories = api.getCategories();
    const filtered = categories.filter(c => c.id !== id);
    if (filtered.length === categories.length) return false;
    setStorageItem(KEYS.CATEGORIES, filtered);
    return true;
  },

  // MATERIALS
  getMaterials: (): Material[] => getStorageItem<Material>(KEYS.MATERIALS, SEED_MATERIALS),
  getMaterialById: (id: string): Material | undefined => api.getMaterials().find(m => m.id === id),
  saveMaterial: (material: Omit<Material, "id"> & { id?: string }): Material => {
    const materials = api.getMaterials();
    let saved: Material;
    if (material.id) {
      materials.forEach((m, idx) => {
        if (m.id === material.id) {
          materials[idx] = { ...m, ...material } as Material;
        }
      });
      saved = materials.find(m => m.id === material.id)!;
    } else {
      saved = {
        ...material,
        id: `mat-${Date.now()}`,
      };
      materials.push(saved);
    }
    setStorageItem(KEYS.MATERIALS, materials);
    return saved;
  },
  deleteMaterial: (id: string): boolean => {
    const materials = api.getMaterials();
    const filtered = materials.filter(m => m.id !== id);
    if (filtered.length === materials.length) return false;
    setStorageItem(KEYS.MATERIALS, filtered);
    return true;
  },

  // USE CASES
  getUseCases: (): UseCase[] => getStorageItem<UseCase>(KEYS.USE_CASES, SEED_USE_CASES),
  getUseCaseById: (id: string): UseCase | undefined => api.getUseCases().find(u => u.id === id),
  saveUseCase: (useCase: Omit<UseCase, "id"> & { id?: string }): UseCase => {
    const useCases = api.getUseCases();
    let saved: UseCase;
    if (useCase.id) {
      useCases.forEach((u, idx) => {
        if (u.id === useCase.id) {
          useCases[idx] = { ...u, ...useCase } as UseCase;
        }
      });
      saved = useCases.find(u => u.id === useCase.id)!;
    } else {
      saved = {
        ...useCase,
        id: `uc-${Date.now()}`,
      };
      useCases.push(saved);
    }
    setStorageItem(KEYS.USE_CASES, useCases);
    return saved;
  },
  deleteUseCase: (id: string): boolean => {
    const useCases = api.getUseCases();
    const filtered = useCases.filter(u => u.id !== id);
    if (filtered.length === useCases.length) return false;
    setStorageItem(KEYS.USE_CASES, filtered);
    return true;
  },

  // ISSUES
  getIssues: (): Issue[] => getStorageItem<Issue>(KEYS.ISSUES, SEED_ISSUES),
  getIssueById: (id: string): Issue | undefined => api.getIssues().find(i => i.id === id),
  saveIssue: (issue: Omit<Issue, "id"> & { id?: string }): Issue => {
    const issues = api.getIssues();
    let saved: Issue;
    if (issue.id) {
      issues.forEach((i, idx) => {
        if (i.id === issue.id) {
          issues[idx] = { ...i, ...issue } as Issue;
        }
      });
      saved = issues.find(i => i.id === issue.id)!;
    } else {
      saved = {
        ...issue,
        id: `iss-${Date.now()}`,
      };
      issues.push(saved);
    }
    setStorageItem(KEYS.ISSUES, issues);
    return saved;
  },
  deleteIssue: (id: string): boolean => {
    const issues = api.getIssues();
    const filtered = issues.filter(i => i.id !== id);
    if (filtered.length === issues.length) return false;
    setStorageItem(KEYS.ISSUES, filtered);
    return true;
  },

  // BLOG POSTS
  getBlogPosts: (): BlogPost[] => getStorageItem<BlogPost>(KEYS.BLOG_POSTS, SEED_BLOG_POSTS),
  getBlogPostById: (id: string): BlogPost | undefined => api.getBlogPosts().find(b => b.id === id),
  saveBlogPost: (blogPost: Omit<BlogPost, "id"> & { id?: string }): BlogPost => {
    const posts = api.getBlogPosts();
    let saved: BlogPost;
    if (blogPost.id) {
      posts.forEach((b, idx) => {
        if (b.id === blogPost.id) {
          posts[idx] = { ...b, ...blogPost } as BlogPost;
        }
      });
      saved = posts.find(b => b.id === blogPost.id)!;
    } else {
      saved = {
        ...blogPost,
        id: `blog-${Date.now()}`,
      };
      posts.push(saved);
    }
    setStorageItem(KEYS.BLOG_POSTS, posts);
    return saved;
  },
  deleteBlogPost: (id: string): boolean => {
    const posts = api.getBlogPosts();
    const filtered = posts.filter(b => b.id !== id);
    if (filtered.length === posts.length) return false;
    setStorageItem(KEYS.BLOG_POSTS, filtered);
    return true;
  },

  // SEO METADATA
  getSeoMetadata: (): SeoMetadata[] => getStorageItem<SeoMetadata>(KEYS.SEO_METADATA, SEED_SEO),
  getSeoMetadataById: (id: string): SeoMetadata | undefined => api.getSeoMetadata().find(s => s.id === id),
  saveSeoMetadata: (seo: Omit<SeoMetadata, "id"> & { id?: string }): SeoMetadata => {
    const seos = api.getSeoMetadata();
    let saved: SeoMetadata;
    if (seo.id) {
      seos.forEach((s, idx) => {
        if (s.id === seo.id) {
          seos[idx] = { ...s, ...seo } as SeoMetadata;
        }
      });
      saved = seos.find(s => s.id === seo.id)!;
    } else {
      saved = {
        ...seo,
        id: `seo-${Date.now()}`,
      };
      seos.push(saved);
    }
    setStorageItem(KEYS.SEO_METADATA, seos);
    return saved;
  },
  deleteSeoMetadata: (id: string): boolean => {
    const seos = api.getSeoMetadata();
    const filtered = seos.filter(s => s.id !== id);
    if (filtered.length === seos.length) return false;
    setStorageItem(KEYS.SEO_METADATA, filtered);
    return true;
  },
};
