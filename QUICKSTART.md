# 🚀 Quick Start - POS System

## Inicio Rápido en 3 Pasos

### 1️⃣ Instalar Dependencias

```bash
cd pos-system
npm install
```

### 2️⃣ Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

### 3️⃣ Explorar la App

- **Página Principal** (`/`) - Demo de Zustand con contador persistente
- **Todos** (`/todos`) - CRUD completo con TanStack Query
- **About** (`/about`) - Información del stack tecnológico

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con HMR

# Producción
npm run build        # Build optimizado para producción
npm run preview      # Preview del build

# Calidad de Código
npm run lint         # Verificar código con ESLint
npm run lint:fix     # Arreglar errores automáticamente
npm run format       # Formatear con Prettier
npm run type-check   # Verificar tipos de TypeScript
```

## 📦 Stack Instalado

- ✅ React 18+ con TypeScript
- ✅ Vite (build tool ultrarrápido)
- ✅ Tailwind CSS v4 + shadcn/ui
- ✅ Zustand (estado global)
- ✅ TanStack Query (data fetching)
- ✅ Axios (HTTP client)
- ✅ React Router v7
- ✅ ESLint + Prettier

## 🎯 Features Implementadas

### Zustand - Estado Global
- Contador con incremento/decremento
- Persistencia automática en localStorage
- DevTools habilitado

### TanStack Query - Data Fetching
- GET todos desde API
- CREATE nuevo todo
- UPDATE con optimistic updates
- DELETE todo
- Loading y error states
- Cache automático

### React Router - Navegación
- 3 rutas configuradas
- Navegación fluida entre páginas
- Layouts responsive

## 🔧 Configuración Destacada

### TypeScript
- ✅ Strict mode habilitado
- ✅ Path aliases configurados (`@/*`)
- ✅ Tipos explícitos en exports

### Tailwind CSS v4
- ✅ PostCSS plugin actualizado (`@tailwindcss/postcss`)
- ✅ Dark mode ready
- ✅ Custom colors y border radius

### TanStack Query
```typescript
staleTime: 5 minutos    // Cuándo considerar datos stale
gcTime: 10 minutos      // Garbage collection
retry: 1                // Reintentos en errores
refetchOnWindowFocus: false  // No refetch al hacer focus
```

## 📚 Documentación Consultada

Toda la implementación está basada en documentación oficial actualizada consultada vía **MCP context7**:

- React docs (hooks, patterns)
- Vite docs (React + TS setup)
- TanStack Query docs (v5)
- Zustand docs (TypeScript)
- React Router docs (v7)

## ⚡ Próximos Pasos Sugeridos

1. **Testing**: Agregar Vitest + Testing Library
2. **E2E**: Implementar Playwright
3. **Componentes**: Agregar más componentes de shadcn/ui
4. **Auth**: Sistema de autenticación
5. **POS Real**: Conectar a API de inventario/ventas

## 🐛 Troubleshooting

### Error: Port 5173 already in use
```bash
# Cambiar puerto en vite.config.ts
export default defineConfig({
  server: { port: 3000 }
})
```

### Error: Module not found '@/...'
```bash
# Reiniciar el servidor
npm run dev
```

### Build falla con Tailwind
```bash
# Ya está configurado correctamente con @tailwindcss/postcss
# Si persiste, verificar postcss.config.js
```

## 💡 Tips

- **DevTools**: Abre Redux DevTools para ver el estado de Zustand
- **React Query DevTools**: Visible en la esquina inferior derecha (development)
- **Hot Reload**: Los cambios se reflejan instantáneamente
- **TypeScript**: El IDE mostrará errores en tiempo real

## 📖 Aprender Más

Lee el [README.md](README.md) completo para información detallada sobre:
- Arquitectura del proyecto
- Estructura de carpetas
- Mejores prácticas aplicadas
- Ejemplos de código

---

**¡Listo para empezar! 🎉**

```bash
npm run dev
```
