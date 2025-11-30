# POS System - React + TypeScript

Sistema de Punto de Venta (Point of Sale) construido con React, TypeScript y las mejores prácticas modernas.

## 🚀 Stack Tecnológico

### Frontend Framework
- **React 18+** - Biblioteca de UI con TypeScript
- **Vite** - Build tool ultrarrápido con HMR

### UI y Estilos
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes accesibles basados en Radix UI
- **Lucide React** - Iconos modernos

### Estado y Data Fetching
- **Zustand** - Gestión de estado global del cliente (ligero y simple)
- **TanStack Query (React Query)** - Server state management con caching automático
- **Axios** - Cliente HTTP con interceptors

### Routing
- **React Router v7** - Navegación declarativa

### Code Quality
- **TypeScript** - Strict mode habilitado
- **ESLint** - Linting de código
- **Prettier** - Formateo de código

## 📦 Instalación

```bash
# Clonar el repositorio (o navegar al directorio)
cd pos-system

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Iniciar servidor de desarrollo

# Build
npm run build            # Construir para producción
npm run preview          # Preview del build de producción

# Code Quality
npm run lint             # Ejecutar ESLint
npm run lint:fix         # Arreglar problemas de ESLint automáticamente
npm run format           # Formatear código con Prettier
npm run type-check       # Verificar tipos de TypeScript
```

## 🏗️ Estructura del Proyecto

```
pos-system/
├── src/
│   ├── api/              # Cliente Axios y configuración
│   │   └── client.ts     # Axios instance con interceptors
│   ├── components/       # Componentes React reutilizables
│   │   └── ui/           # Componentes de shadcn/ui
│   ├── hooks/            # Custom hooks
│   │   └── useTodos.ts   # Ejemplo de TanStack Query hooks
│   ├── lib/              # Utilidades y helpers
│   │   └── utils.ts      # Función cn() para clsx + tailwind-merge
│   ├── pages/            # Páginas/vistas de la aplicación
│   │   ├── Home.tsx      # Página principal
│   │   ├── Todos.tsx     # Demo de TanStack Query
│   │   └── About.tsx     # Información del proyecto
│   ├── store/            # Stores de Zustand
│   │   └── counterStore.ts  # Ejemplo de store con persistence
│   ├── types/            # TypeScript types e interfaces
│   │   └── index.ts      # Tipos compartidos
│   ├── App.tsx           # Componente raíz con Router y Providers
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globales (Tailwind)
├── public/               # Archivos estáticos
├── .prettierrc           # Configuración de Prettier
├── eslint.config.js      # Configuración de ESLint
├── tailwind.config.js    # Configuración de Tailwind CSS
├── tsconfig.json         # Configuración de TypeScript
├── vite.config.ts        # Configuración de Vite
└── package.json          # Dependencias y scripts
```

## ✨ Características Implementadas

### ✅ Configuración Base
- [x] TypeScript con strict mode
- [x] Path aliases (`@/*` para imports limpios)
- [x] ESLint + Prettier configurados
- [x] Dark mode ready

### ✅ Estado
- [x] Zustand con middleware de persistence (localStorage)
- [x] DevTools para debugging de Zustand
- [x] Ejemplo de counter store

### ✅ Data Fetching
- [x] TanStack Query configurado
- [x] Axios client con interceptors
- [x] Custom hooks para queries y mutations
- [x] Optimistic updates
- [x] Caching automático
- [x] React Query DevTools

### ✅ Routing
- [x] React Router v7 con múltiples rutas
- [x] Navegación entre páginas
- [x] Layouts consistentes

### ✅ UI/UX
- [x] Tailwind CSS con configuración extendida
- [x] Sistema de colores responsive
- [x] Componentes reutilizables
- [x] Gradientes y sombras modernas

## 🎯 Ejemplos Implementados

### 1. Zustand - Counter Store
Ubicación: `src/pages/Home.tsx`

Ejemplo de estado global con:
- Incrementar/decrementar contador
- Persistencia en localStorage
- DevTools habilitado

### 2. TanStack Query - CRUD de Todos
Ubicación: `src/pages/Todos.tsx`

Demuestra:
- Queries (GET)
- Mutations (POST, PUT, DELETE)
- Optimistic updates
- Loading y error states
- Cache invalidation

### 3. React Router - Navegación
Múltiples páginas:
- `/` - Home con demo de Zustand
- `/todos` - Lista de tareas con TanStack Query
- `/about` - Información del proyecto

## 📚 Documentación Consultada

Este proyecto se construyó consultando la documentación oficial actualizada vía **MCP context7**:

- ✅ React docs - Hooks y patrones modernos
- ✅ Vite docs - Configuración de React + TypeScript
- ✅ TanStack Query docs - Setup y mejores prácticas
- ✅ Zustand docs - Store creation con TypeScript
- ✅ React Router docs - Getting started

## 🔧 Configuración Destacada

### TypeScript
- Strict mode habilitado
- Path aliases configurados
- Tipos explícitos en todas las funciones exportadas

### TanStack Query
```typescript
// Configuración óptima para caching
staleTime: 5 minutos
gcTime: 10 minutos
retry: 1
refetchOnWindowFocus: false
```

### Zustand
```typescript
// Store con DevTools y Persistence
create<State>()(
  devtools(
    persist(
      (set) => ({ /* state */ }),
      { name: 'storage-key' }
    )
  )
)
```

## 🚀 Próximos Pasos

- [ ] Agregar tests con Vitest + Testing Library
- [ ] Implementar E2E tests con Playwright
- [ ] Agregar más componentes de shadcn/ui
- [ ] Implementar autenticación
- [ ] Conectar a API real de POS
- [ ] Agregar manejo de inventario
- [ ] Implementar sistema de ventas

## 📝 Mejores Prácticas Aplicadas

1. **TypeScript Strict** - Type safety en todo el código
2. **Separación de Concerns** - UI, lógica y estado separados
3. **Custom Hooks** - Lógica reutilizable encapsulada
4. **Optimistic Updates** - Mejor UX en mutations
5. **Error Boundaries** - Manejo de errores robusto
6. **Code Splitting** - Preparado para lazy loading
7. **Performance** - Memoization y caching donde corresponde

## 🤝 Contribuir

Este es un proyecto de aprendizaje. Siéntete libre de:
- Reportar bugs
- Sugerir mejoras
- Agregar features
- Mejorar documentación

## 📄 Licencia

MIT

---

**Desarrollado con Claude Code** 🤖
