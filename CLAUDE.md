# Project Memory: Practice Claude Code

## 📋 Project Overview

**Tipo de proyecto**: Web application - Point of Sale (POS) System
**Estado**: Development/Learning
**Ubicación**: `/Users/gonzalopinell/practice/claude/`

---

## 🛠️ Stack Técnico

### Frontend
- **Framework**: React 18+ con TypeScript
- **Build tool**: Vite
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### Estado y Data Fetching
- **Estado Global**: Zustand (client state)
- **Server State**: TanStack Query (React Query)
- **Routing**: React Router v6+

### Testing
- **Unit/Integration**: Vitest + Testing Library
- **E2E**: Playwright
- **Coverage goal**: 80% mínimo

### Code Quality
- **Linter**: ESLint
- **Formatter**: Prettier
- **Type checking**: TypeScript strict mode
- **Pre-commit**: Husky (opcional)

---

## 📖 Verificación de Documentación (MCP context7)

### Principio Fundamental: SIEMPRE Verificar Documentación Oficial

**IMPORTANTE**: Antes de implementar cualquier feature, componente o patrón con las tecnologías del stack, **SIEMPRE** se debe consultar la documentación oficial actualizada usando el **MCP server context7**.

### ¿Qué es context7?

context7 es un servidor MCP (Model Context Protocol) que proporciona acceso a documentación oficial actualizada de librerías y frameworks. Está configurado en este proyecto y debe usarse para:

1. **Verificar la última versión** de la librería antes de implementar
2. **Consultar buenas prácticas** oficiales
3. **Obtener ejemplos de código actualizados**
4. **Validar APIs** y métodos disponibles
5. **Conocer deprecaciones** y cambios breaking

### Cómo Usar context7

#### Paso 1: Resolver el Library ID

Antes de consultar documentación, obtén el ID de la librería:

```bash
# Ejemplo para React
mcp__context7__resolve-library-id: { libraryName: "react" }

# Ejemplo para TanStack Query
mcp__context7__resolve-library-id: { libraryName: "tanstack query" }

# Ejemplo para Zustand
mcp__context7__resolve-library-id: { libraryName: "zustand" }
```

#### Paso 2: Obtener Documentación

Usa el ID obtenido para consultar la documentación:

```bash
# Para ejemplos de código y API reference
mcp__context7__get-library-docs: {
  context7CompatibleLibraryID: "/facebook/react",
  topic: "hooks",
  mode: "code"
}

# Para guías conceptuales y arquitectura
mcp__context7__get-library-docs: {
  context7CompatibleLibraryID: "/facebook/react",
  topic: "server components",
  mode: "info"
}
```

### Workflow de Consulta Obligatorio

**Antes de implementar cualquier feature**:

1. ✅ **Identificar tecnologías involucradas**
   - Ejemplo: "Voy a crear un store con Zustand"

2. ✅ **Consultar documentación con context7**
   ```
   "Por favor consulta la documentación oficial de Zustand usando context7
   para verificar la última versión y mejores prácticas de stores"
   ```

3. ✅ **Validar versión actual del proyecto**
   - Verificar `package.json`
   - Comparar con última versión estable

4. ✅ **Implementar según documentación oficial**
   - Seguir patrones oficiales
   - Usar APIs actualizadas
   - Evitar deprecaciones

5. ✅ **Documentar decisiones**
   - Si se usa versión anterior, justificar por qué
   - Documentar breaking changes conocidos

### Tecnologías que REQUIEREN Verificación con context7

#### Críticas (SIEMPRE verificar)
- ✅ **React**: `/facebook/react` - Hooks, componentes, patrones
- ✅ **TypeScript**: `/microsoft/typescript` - Tipos, features nuevas
- ✅ **TanStack Query**: `/tanstack/query` - Queries, mutations, cache
- ✅ **Zustand**: `/pmndrs/zustand` - Stores, middleware
- ✅ **React Router**: `/remix-run/react-router` - Routing, loaders, actions
- ✅ **Vite**: `/vitejs/vite` - Configuración, plugins
- ✅ **Vitest**: `/vitest-dev/vitest` - Testing, configuración

#### Importantes (verificar cuando se usen)
- ✅ **shadcn/ui**: Componentes, variantes, theming
- ✅ **Radix UI**: Primitivos, accesibilidad
- ✅ **Tailwind CSS**: Utilidades, configuración
- ✅ **Playwright**: E2E testing, selectors
- ✅ **Testing Library**: Queries, user-event
- ✅ **Framer Motion**: Animaciones, transiciones

### Ejemplos de Consultas

#### Ejemplo 1: Crear un store con Zustand

```
"Antes de crear el store para el carrito de compras, por favor:

1. Consulta la documentación de Zustand con context7
2. Verifica cuál es la última versión y las mejores prácticas actuales
3. Valida el patrón de slices y middleware más reciente
4. Implementa el store siguiendo la documentación oficial"
```

#### Ejemplo 2: Implementar queries con TanStack Query

```
"Necesito implementar queries para obtener productos. Por favor:

1. Consulta TanStack Query con context7 para la versión más reciente
2. Verifica las mejores prácticas de cache invalidation
3. Revisa ejemplos de optimistic updates
4. Implementa siguiendo los patrones oficiales actualizados"
```

#### Ejemplo 3: Crear componente con shadcn/ui

```
"Voy a crear un modal de confirmación. Por favor:

1. Consulta shadcn/ui con context7
2. Verifica la implementación actual del componente Dialog
3. Revisa patrones de accesibilidad con Radix UI
4. Implementa usando la estructura oficial más reciente"
```

### Anti-Patrones a Evitar

❌ **NO hacer**:
- Implementar sin consultar documentación oficial
- Usar ejemplos de StackOverflow sin validar versión
- Asumir que conoces la API sin verificar
- Copiar código de versiones antiguas
- Ignorar deprecation warnings

✅ **SÍ hacer**:
- Siempre consultar context7 ANTES de implementar
- Validar que el código usa APIs actuales
- Seguir patrones oficiales de la documentación
- Documentar si usas features experimentales
- Actualizar dependencias regularmente

### Responsabilidad de los Agentes

Cada agente especializado **DEBE**:

1. **react-ui-specialist**: Consultar React docs para hooks y patrones
2. **react-zustand-specialist**: Consultar Zustand docs para stores
3. **react-tankstack-query-specialist**: Consultar TanStack Query docs
4. **react-router-specialist**: Consultar React Router docs
5. **react-shadcn-specialist**: Consultar shadcn/ui y Radix docs
6. **react-qa-specialist**: Consultar Vitest, Testing Library, Playwright docs
7. **react-refactor-specialist**: Validar que refactorings usen APIs actuales

### Actualización de Dependencias

**Cuando actualizar**:
```bash
# Verificar versiones outdated
npm outdated

# Consultar changelog con context7 ANTES de actualizar
"Consulta el changelog de React Router v7 con context7
para identificar breaking changes antes de actualizar"

# Actualizar con precaución
npm update [package-name]
```

### Documentación en Código

Cuando implementes algo basado en documentación oficial, agregar comentario:

```typescript
// Implementado según TanStack Query v5 docs (consultado con context7)
// https://tanstack.com/query/latest/docs/react/guides/optimistic-updates
export function useUpdateProduct() {
  return useMutation({
    mutationFn: updateProduct,
    onMutate: async (newProduct) => {
      // Optimistic update pattern from official docs
      await queryClient.cancelQueries(['products'])
      const previousProducts = queryClient.getQueryData(['products'])

      queryClient.setQueryData(['products'], old =>
        old.map(p => p.id === newProduct.id ? newProduct : p)
      )

      return { previousProducts }
    },
  })
}
```

### Verificación en Code Review

Durante `/code-review`, validar que:
- ✅ Se consultó documentación oficial (context7)
- ✅ El código usa APIs actuales (no deprecadas)
- ✅ Se siguen patrones oficiales
- ✅ Las versiones en package.json son compatibles
- ✅ No hay warnings de dependencias desactualizadas

---

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
practice/claude/
├── .claude/
│   ├── agents/                 # Agentes especializados
│   ├── commands/              # Comandos personalizados
│   ├── hooks/                 # Hooks de automatización
│   └── settings.json          # Configuración del proyecto
├── src/
│   ├── components/
│   │   └── ui/               # Componentes de shadcn/ui
│   ├── hooks/                # Custom hooks
│   ├── store/                # Zustand stores
│   ├── lib/                  # Utilidades
│   ├── pages/                # Páginas/vistas
│   └── types/                # TypeScript types
├── tests/                    # Tests unitarios e integración
├── e2e/                      # Tests end-to-end
└── CLAUDE.md                 # Este archivo (memoria del proyecto)
```

---

## 👥 Agentes Especializados

### react-ui-specialist
**Especialidad**: Desarrollo de componentes React, hooks, composición
**Cuándo usar**: Crear/optimizar componentes, implementar patrones React
**Herramientas**: Read, Glob, Grep, Edit, Write
**Auto-trigger**: ❌ (manual)

### react-uxui-specialist
**Especialidad**: UX, accesibilidad (a11y), diseño responsive, animaciones
**Cuándo usar**: Mejorar usabilidad, implementar Framer Motion, WCAG compliance
**Herramientas**: Read, Glob, Grep, Edit, Write
**Auto-trigger**: ❌ (manual)

### react-shadcn-specialist
**Especialidad**: shadcn/ui, Radix UI, Tailwind CSS, theming
**Cuándo usar**: Implementar componentes de shadcn, dark mode, variantes
**Herramientas**: Read, Glob, Grep, Edit, Write, Bash
**Auto-trigger**: ❌ (manual)

### react-zustand-specialist
**Especialidad**: Gestión de estado global con Zustand
**Cuándo usar**: Crear stores, implementar middleware, patrones de slices
**Herramientas**: Read, Glob, Grep, Edit, Write
**Auto-trigger**: ❌ (manual)

### react-tankstack-query-specialist
**Especialidad**: Data fetching, caching, sincronización
**Cuándo usar**: Queries, mutations, optimistic updates, invalidación de cache
**Herramientas**: Read, Glob, Grep, Edit, Write
**Auto-trigger**: ❌ (manual)

### react-router-specialist
**Especialidad**: Navegación, rutas, loaders, actions
**Cuándo usar**: Configurar routing, rutas protegidas, lazy loading de rutas
**Herramientas**: Read, Glob, Grep, Edit, Write
**Auto-trigger**: ❌ (manual)

### react-refactor-specialist
**Especialidad**: Refactorización, código limpio, eliminación de code smells
**Cuándo usar**: Mejorar calidad de código, modernizar a ES2024+, optimizar
**Herramientas**: Read, Glob, Grep, Edit
**Auto-trigger**: ✅ (después de cambios en código)
**Prioridad en workflow**: 1 (primera fase)

### react-qa-specialist
**Especialidad**: Testing, QA, cobertura de código
**Cuándo usar**: Escribir tests, validar cobertura, ejecutar suite de tests
**Herramientas**: Read, Glob, Grep, Edit, Write, Bash
**Auto-trigger**: ✅ (después de refactoring)
**Prioridad en workflow**: 2 (segunda fase)

---

## 🔄 Workflow Automatizado

### Configuración Actual

**Estado**: ✅ Habilitado
**Hook trigger**: PostToolUse (después de Edit/Write)
**Modo de ejecución**: Secuencial

### Secuencia de Automatización

```
Cambio en código (.ts, .tsx, .js, .jsx)
    ↓
PostToolUse Hook se dispara
    ↓
    ├─→ Fase 1: react-refactor-specialist
    │      ├─→ Moderniza a ES2024+
    │      ├─→ Optimiza performance
    │      ├─→ Mejora legibilidad
    │      └─→ Mantiene funcionalidad
    ↓
    ├─→ Fase 2: react-qa-specialist
    │      ├─→ Actualiza tests existentes
    │      ├─→ Agrega nuevos tests
    │      ├─→ Ejecuta: npm test
    │      └─→ Verifica cobertura >= 80%
    ↓
    └─→ Fase 3: Validación
           ├─→ TypeScript: npm run type-check
           ├─→ ESLint: npm run lint
           ├─→ Security: npm audit (si aplica)
           └─→ Build: npm run build
```

### Comandos del Workflow

```bash
# Ejecutar workflow completo manualmente
/auto-workflow

# Ver memoria del proyecto
/memory

# Gestionar agentes
/agents

# Configurar hooks
/hooks
```

---

## 📐 Estándares de Código

### TypeScript
- ✅ Strict mode habilitado
- ✅ No usar `any` (usar `unknown` si es necesario)
- ✅ Interfaces para props de componentes
- ✅ Tipos explícitos en funciones exportadas

### React
- ✅ Solo componentes funcionales (no class components)
- ✅ Hooks en orden correcto
- ✅ useEffect con dependencias correctas
- ✅ Props destructuring
- ✅ Nombres descriptivos para componentes

### Estilo y Formato
- ✅ ESLint: 0 errores, 0 warnings
- ✅ Prettier configurado
- ✅ Máximo 20 líneas por función (guía)
- ✅ No `console.log()` en código de producción
- ✅ Comentarios JSDoc para funciones complejas

### Testing
- ✅ Coverage mínimo: 80%
- ✅ Tests AAA pattern (Arrange-Act-Assert)
- ✅ Queries por accesibilidad (getByRole, getByLabelText)
- ✅ user-event sobre fireEvent
- ✅ Tests de edge cases

### Git
- ✅ Commits atómicos y descriptivos
- ✅ Mensajes en español (decisión del equipo)
- ✅ No commits directos a main (usar branches)

---

## 🎯 Reglas de Negocio (POS System)

### Flujos Críticos

#### Ventas
- Toda venta debe actualizar inventario atómicamente
- Stock debe validarse antes de completar venta
- Descuentos >20% requieren aprobación de supervisor
- Registro de auditoría para todas las transacciones

#### Inventario
- Stock no puede ser negativo
- Actualizaciones en tiempo real
- Alertas cuando stock < umbral mínimo
- Historial de movimientos de inventario

#### Usuarios y Roles
- **Cajero**: Ventas, búsqueda de productos
- **Supervisor**: Aprobaciones, devoluciones, descuentos >20%
- **Gerente**: Reportes, gestión de usuarios
- **Admin**: Configuración, todos los permisos

#### Seguridad
- Sesiones con timeout (15 minutos idle)
- JWT con refresh tokens
- Todas las transacciones financieras loggeadas
- No almacenar datos sensibles de tarjetas (usar tokenización)

---

## 💾 Contexto de Datos

### Entidades Principales

```typescript
interface Product {
  id: string
  sku: string
  name: string
  price: number
  cost: number
  stock: number
  category: string
  taxRate: number
}

interface Sale {
  id: string
  saleNumber: string
  userId: string
  customerId?: string
  items: SaleItem[]
  subtotal: number
  tax: number
  discount: number
  total: number
  paymentMethod: 'cash' | 'card' | 'transfer'
  timestamp: Date
}

interface User {
  id: string
  username: string
  role: 'admin' | 'manager' | 'supervisor' | 'cashier'
  active: boolean
}
```

---

## 🔧 Scripts Disponibles

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\""
  }
}
```

---

## 📝 Decisiones Arquitectónicas

### ¿Por qué Zustand y no Redux?
- Menos boilerplate
- API más simple
- Mejor performance (subscriptions granulares)
- Suficiente para el scope del proyecto

### ¿Por qué TanStack Query?
- Manejo automático de cache
- Deduplicación de requests
- Background refetching
- Optimistic updates out-of-the-box
- Reduce drásticamente el código de data fetching

### ¿Por qué shadcn/ui?
- Componentes copiados al proyecto (ownership completo)
- Accesibilidad garantizada (Radix UI)
- Customización total
- No vendor lock-in

### ¿Por qué Vitest sobre Jest?
- Integración nativa con Vite
- Más rápido
- Compatible con Jest API
- Mejor soporte de ESM

---

## 🚀 Workflow de Desarrollo

### Para Features Nuevos

1. **Planning**:
   - Definir requisitos
   - Diseñar interfaz (Figma opcional)
   - Identificar agente(s) a usar

2. **Development**:
   - Crear branch: `feature/nombre-feature`
   - Implementar usando agentes especializados
   - Workflow automático se dispara en cada cambio

3. **Quality Assurance**:
   - Tests pasan automáticamente (react-qa-specialist)
   - Coverage validado >= 80%
   - Code review manual (si hay equipo)

4. **Deployment**:
   - Merge a main
   - Build de producción
   - Deploy (proceso a definir)

### Para Bugs

1. **Reproducir** el bug con test
2. **Fix** el código
3. **Validar** que el test pasa
4. **Refactor** si es necesario (react-refactor-specialist)

---

## 📚 Recursos y Referencias

### Documentación Oficial
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- Zustand: https://docs.pmnd.rs/zustand
- TanStack Query: https://tanstack.com/query/latest
- React Router: https://reactrouter.com
- Vitest: https://vitest.dev
- Playwright: https://playwright.dev

### Guías de Estilo
- Airbnb React/JSX Style Guide
- Google TypeScript Style Guide
- React TypeScript Cheatsheet

---

## 🔐 Información Sensible

**IMPORTANTE**: No incluir en este archivo:
- ❌ Contraseñas
- ❌ API keys
- ❌ Tokens de acceso
- ❌ Credenciales de base de datos
- ❌ Información personal identificable (PII)

Usar variables de entorno (`.env`) para datos sensibles.

---

## 📊 Métricas de Calidad

### Objetivos Actuales
- ✅ Test coverage: >= 80%
- ✅ ESLint errors: 0
- ✅ TypeScript errors: 0
- ✅ npm audit vulnerabilities: 0 critical/high
- ✅ Lighthouse Performance: >= 90
- ✅ Lighthouse Accessibility: >= 95

### Métricas a Implementar
- ⏳ Bundle size tracking
- ⏳ Core Web Vitals monitoring
- ⏳ Error tracking (Sentry)
- ⏳ Performance monitoring

---

## 🎓 Aprendizajes y Notas

### Lecciones Aprendidas
- Los agentes especializados mejoran significativamente la productividad
- El workflow automatizado previene bugs y mantiene calidad consistente
- La memoria persistente (este archivo) es crucial para contexto entre sesiones

### TODOs del Proyecto
- [ ] Configurar CI/CD pipeline
- [ ] Implementar autenticación completa
- [ ] Integrar pasarela de pago
- [ ] Setup de producción (hosting)
- [ ] Documentación de API
- [ ] Storybook para componentes

---

## 🤝 Contribuciones y Colaboración

### Para Desarrolladores Nuevos

1. Lee este archivo completo (CLAUDE.md)
2. Revisa la estructura de agentes en `.claude/agents/`
3. Familiarízate con los comandos: `/memory`, `/agents`, `/auto-workflow`
4. Sigue los estándares de código definidos
5. Ejecuta tests antes de cada commit

### Comunicación con Claude Code

- Usa comandos slash cuando sea apropiado
- Menciona el agente específico si sabes cuál necesitas
- Confía en el workflow automatizado
- Revisa los reportes de calidad después de cambios

---

## 🔄 Actualización de Memoria

**Este archivo debe actualizarse cuando**:
- Se agregan nuevas dependencias importantes
- Cambian estándares de código
- Se toman decisiones arquitectónicas
- Se agregan nuevos agentes
- Cambia la configuración del workflow

**Comando para editar**:
```bash
/memory
```

---

**Última actualización**: 2025-11-30 (Agregada sección de MCP context7)
**Mantenido por**: Claude Code + Gonzalo Pinell
**Versión**: 1.1.0
