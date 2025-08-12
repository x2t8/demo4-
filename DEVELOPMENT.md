# 🛠️ Development Guide

> Hướng dẫn chi tiết cho developers tham gia phát triển dự án **Công Dân Số An Toàn**

## 📋 Table of Contents

- [🏗️ Project Structure](#-project-structure)
- [⚙️ Setup Development Environment](#️-setup-development-environment)
- [🎨 Component Development](#-component-development)
- [📱 Page Development](#-page-development)
- [🎯 State Management](#-state-management)
- [🎨 Styling Guidelines](#-styling-guidelines)
- [♿ Accessibility Guidelines](#-accessibility-guidelines)
- [🚀 Performance Guidelines](#-performance-guidelines)
- [🧪 Testing Guidelines](#-testing-guidelines)
- [📝 Code Standards](#-code-standards)

## 🏗️ Project Structure

### **Folder Organization**

```
client/
├── components/          # Shared components
│   ├── ui/             # Base UI components (Radix + Tailwind)
│   ├── [Feature]Modal.tsx  # Modal components
│   ├── [Feature]Toast.tsx  # Toast notifications
│   └── [Feature]Button.tsx # Action components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Route components (one per page)
└── types/              # TypeScript type definitions
```

### **Naming Conventions**

- **Components**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase with 'use' prefix (`useUserData.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Types**: PascalCase (`UserData.ts`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_ENDPOINTS.ts`)

## ⚙️ Setup Development Environment

### **Required Tools**

```bash
# Node.js (v18+)
node --version

# Package manager
npm --version

# Editor extensions (VS Code recommended)
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Importer
```

### **Environment Variables**

```bash
# .env.local
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME="Công Dân Số An Toàn"
VITE_ENABLE_DEBUG=true
```

### **Development Commands**

```bash
# Start development server
npm run dev

# Type checking in watch mode
npm run typecheck:watch

# Run tests in watch mode
npm run test:watch

# Start Storybook (component development)
npm run storybook
```

## 🎨 Component Development

### **Component Template**

```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface ExampleComponentProps {
  /** Main content to display */
  children: React.ReactNode;
  /** Visual variant of the component */
  variant?: 'primary' | 'secondary';
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * ExampleComponent - A reusable component for displaying content
 *
 * @example
 * <ExampleComponent variant="primary" onClick={handleClick}>
 *   Content goes here
 * </ExampleComponent>
 */
export default function ExampleComponent({
  children,
  variant = 'primary',
  className,
  onClick,
}: ExampleComponentProps) {
  return (
    <div
      className={cn(
        // Base classes
        'p-4 rounded-lg border',
        // Variant classes
        {
          'bg-blue-50 border-blue-200': variant === 'primary',
          'bg-gray-50 border-gray-200': variant === 'secondary',
        },
        // User overrides
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
```

### **Component Guidelines**

1. **Props Interface**: Always define TypeScript interface
2. **Default Values**: Use default parameters, not defaultProps
3. **JSDoc Comments**: Document complex components
4. **Forwarded Refs**: Use `forwardRef` for interactive components
5. **Compound Components**: Consider for complex UI patterns

### **Accessibility Requirements**

```typescript
// ✅ Good: Proper ARIA attributes
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={onClose}
>
  <X className="h-4 w-4" />
</button>

// ✅ Good: Semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><Link to="/">Home</Link></li>
  </ul>
</nav>

// ❌ Bad: Missing accessibility
<div onClick={handleClick}>Click me</div>
```

## 📱 Page Development

### **Page Component Structure**

```typescript
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * ExamplePage - Description of what this page does
 */
export default function ExamplePage() {
  // Hooks first
  useScrollReveal();
  const [data, setData] = useState(null);

  // Effects
  useEffect(() => {
    // Page-specific logic
  }, []);

  // Early returns
  if (!data) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-12">
        {/* Page content */}
      </main>

      <Footer />
    </div>
  );
}
```

### **Page Meta Requirements**

```typescript
// Add to each page component
useEffect(() => {
  document.title = "Page Title - Công Dân Số An Toàn";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", "Page description for SEO");
}, []);
```

### **Page Animation Pattern**

```typescript
// Use page-specific animation classes
<div className="page-fade-in">
  {/* Page content with staggered animations */}
  <section className="stagger-children">
    <h1>Title</h1>
    <p>Description</p>
    <div>Cards</div>
  </section>
</div>
```

## 🎯 State Management

### **Local State (useState)**

```typescript
// ✅ Good: Descriptive state names
const [isModalOpen, setIsModalOpen] = useState(false);
const [userData, setUserData] = useState<User | null>(null);
const [loading, setLoading] = useState(false);

// ❌ Bad: Generic names
const [state, setState] = useState({});
const [data, setData] = useState();
```

### **Custom Hooks**

```typescript
// hooks/useUserAuth.ts
export function useUserAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (credentials: LoginData) => {
    setLoading(true);
    try {
      const user = await authAPI.login(credentials);
      setUser(user);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading, login };
}
```

### **Context Usage**

```typescript
// contexts/ThemeContext.tsx
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
```

## 🎨 Styling Guidelines

### **Tailwind CSS Patterns**

```typescript
// ✅ Good: Responsive design
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

// ✅ Good: Semantic color usage
<button className="bg-primary text-primary-foreground hover:bg-primary/90">

// ✅ Good: Conditional classes with cn()
<div className={cn(
  'base-classes',
  {
    'conditional-class': condition,
    'another-class': anotherCondition,
  },
  className
)}>

// ❌ Bad: Hardcoded breakpoints
<div className="w-320 h-240">

// ❌ Bad: Inline styles
<div style={{ backgroundColor: '#3b82f6' }}>
```

### **Custom CSS Organization**

```css
/* global.css structure */

/* 1. CSS Variables (theme tokens) */
:root {
  --color-primary: hsl(217 91% 60%);
}

/* 2. Base styles */
@layer base {
  body {
    @apply bg-background text-foreground;
  }
}

/* 3. Component styles */
@layer components {
  .btn {
    @apply px-4 py-2 rounded font-medium;
  }
}

/* 4. Utility classes */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### **Component Styling Patterns**

```typescript
// ✅ Good: Variant-based styling
const buttonVariants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  destructive: "bg-red-600 text-white hover:bg-red-700",
};

// ✅ Good: Size variations
const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};
```

## ♿ Accessibility Guidelines

### **Keyboard Navigation**

```typescript
// ✅ Good: Keyboard support
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === " ") {
    handleClick();
  }
  if (event.key === "Escape") {
    handleClose();
  }
};

// ✅ Good: Focus management
useEffect(() => {
  if (isModalOpen) {
    const firstFocusable = modalRef.current?.querySelector('[tabindex="0"]');
    firstFocusable?.focus();
  }
}, [isModalOpen]);
```

### **Screen Reader Support**

```typescript
// ✅ Good: Proper ARIA usage
<button
  aria-label="Delete item"
  aria-describedby="delete-help"
  onClick={handleDelete}
>
  <Trash className="h-4 w-4" />
</button>
<div id="delete-help" className="sr-only">
  This action cannot be undone
</div>

// ✅ Good: Live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

### **Color and Contrast**

```css
/* ✅ Good: High contrast ratios */
.text-primary {
  color: hsl(217 91% 35%); /* 4.5:1 contrast ratio */
}

/* ✅ Good: Focus indicators */
.focus-visible:focus {
  outline: 2px solid hsl(217 91% 60%);
  outline-offset: 2px;
}
```

## 🚀 Performance Guidelines

### **Component Optimization**

```typescript
// ✅ Good: Memoization for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// ✅ Good: Callback memoization
const handleClick = useCallback(() => {
  onItemClick(item.id);
}, [item.id, onItemClick]);

// ✅ Good: Component memoization
const MemoizedComponent = React.memo(Component, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
```

### **Lazy Loading**

```typescript
// ✅ Good: Route-based code splitting
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

// ✅ Good: Component lazy loading
const HeavyChart = lazy(() => import('@/components/HeavyChart'));

// Usage with fallback
<Suspense fallback={<ComponentSkeleton />}>
  <HeavyChart data={chartData} />
</Suspense>
```

### **Bundle Optimization**

```typescript
// ✅ Good: Tree-shakable imports
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

// ❌ Bad: Barrel imports
import * as utils from "@/lib/utils";
import { Button, Input, Dialog } from "@/components/ui";
```

## 🧪 Testing Guidelines

### **Unit Testing**

```typescript
// ExampleComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ExampleComponent from './ExampleComponent';

describe('ExampleComponent', () => {
  it('renders children correctly', () => {
    render(<ExampleComponent>Test content</ExampleComponent>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(
      <ExampleComponent onClick={handleClick}>
        Click me
      </ExampleComponent>
    );

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('applies correct variant classes', () => {
    render(
      <ExampleComponent variant="secondary">
        Content
      </ExampleComponent>
    );

    const element = screen.getByText('Content').parentElement;
    expect(element).toHaveClass('bg-gray-50');
  });
});
```

### **Custom Hook Testing**

```typescript
// hooks/useUserAuth.test.ts
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useUserAuth } from "./useUserAuth";

describe("useUserAuth", () => {
  it("initializes with null user", () => {
    const { result } = renderHook(() => useUserAuth());
    expect(result.current.user).toBeNull();
    expect(result.current.loading).toBe(true);
  });

  it("handles login correctly", async () => {
    const { result } = renderHook(() => useUserAuth());

    await act(async () => {
      await result.current.login({
        email: "test@example.com",
        password: "password123",
      });
    });

    expect(result.current.user).toBeDefined();
    expect(result.current.loading).toBe(false);
  });
});
```

## 📝 Code Standards

### **TypeScript Guidelines**

```typescript
// ✅ Good: Explicit types for props
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// ✅ Good: Union types for state
type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// ✅ Good: Generic types for reusable components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

// ❌ Bad: Any types
const handleData = (data: any) => { ... };
```

### **Error Handling**

```typescript
// ✅ Good: Comprehensive error handling
const fetchUserData = async (userId: string) => {
  try {
    const response = await api.getUser(userId);
    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      console.error('API Error:', error.message);
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
    console.error('Unexpected error:', error);
    throw new Error('An unexpected error occurred');
  }
};

// ��� Good: Error boundaries for components
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### **Performance Monitoring**

```typescript
// ✅ Good: Performance measurements
const measureComponentRender = (componentName: string) => {
  return (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) => {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = method.apply(this, args);
      const end = performance.now();
      console.log(`${componentName} render time: ${end - start}ms`);
      return result;
    };
  };
};
```

## 🔧 Development Tools

### **Recommended VS Code Extensions**

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### **VS Code Settings**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

## 🚀 Deployment Checklist

### **Pre-deployment**

- [ ] All tests passing
- [ ] TypeScript compilation clean
- [ ] Bundle size analysis completed
- [ ] Performance audit passed
- [ ] Accessibility audit passed
- [ ] SEO optimization verified

### **Production Build**

```bash
# Build optimization checks
npm run build
npm run analyze-bundle
npm run lighthouse-ci
```

---

## 📞 Development Support

- **Questions**: Open a GitHub Discussion
- **Bug Reports**: Create an Issue with reproduction steps
- **Feature Requests**: Use the Feature Request template
- **Code Reviews**: Tag senior developers for review

**Happy coding! 🎉**
