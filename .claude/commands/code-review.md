---
description: "Revisión completa de código con checklist de calidad"
---

# Code Review

Realiza una revisión exhaustiva del código siguiendo mejores prácticas y estándares del proyecto.

## Objetivo

Proporcionar feedback constructivo sobre código nuevo o modificado, identificando:
- Problemas de seguridad
- Bugs potenciales
- Oportunidades de mejora
- Violaciones de estándares

## Proceso de Revisión

### 1. Análisis Estático

**Herramientas automáticas**:
```bash
npm run lint           # ESLint
npm run type-check     # TypeScript
npm run format         # Prettier (check only)
```

### 2. Revisión de Código

Invoca a múltiples especialistas según el contexto:

#### react-refactor-specialist
Revisa:
- ✅ Code smells y anti-patrones
- ✅ Duplicación de código
- ✅ Complejidad innecesaria
- ✅ Nombres de variables/funciones
- ✅ Oportunidades de refactoring

#### react-qa-specialist
Revisa:
- ✅ Cobertura de tests del código nuevo
- ✅ Calidad de los tests
- ✅ Tests de edge cases
- ✅ Tests de regresión

#### react-uxui-specialist (si aplica)
Revisa:
- ✅ Accesibilidad (WCAG 2.1)
- ✅ Usabilidad
- ✅ Responsive design
- ✅ Performance de UI

### 3. Seguridad

Revisa:
- ✅ Vulnerabilidades conocidas (npm audit)
- ✅ Inyección SQL/XSS
- ✅ Exposición de datos sensibles
- ✅ Validación de inputs
- ✅ Autenticación/Autorización

## Checklist de Revisión

### Funcionalidad ✅
- [ ] El código hace lo que se supone que debe hacer
- [ ] Los edge cases están manejados
- [ ] No hay bugs obvios
- [ ] La lógica es correcta y clara

### Legibilidad 📖
- [ ] Nombres descriptivos (variables, funciones, componentes)
- [ ] Funciones pequeñas (< 20 líneas idealmente)
- [ ] Comentarios donde la lógica no es obvia
- [ ] Código auto-documentado (no requiere comentarios excesivos)

### Mantenibilidad 🔧
- [ ] Principio de responsabilidad única
- [ ] No hay duplicación (DRY)
- [ ] Fácil de modificar en el futuro
- [ ] Componentes/funciones reutilizables

### Performance ⚡
- [ ] No hay re-renders innecesarios
- [ ] useCallback/useMemo usados apropiadamente
- [ ] Lazy loading implementado donde hace sentido
- [ ] No hay memory leaks (useEffect cleanup)

### Testing 🧪
- [ ] Tests cubren el código nuevo
- [ ] Tests fallan cuando el código falla
- [ ] No hay tests frágiles (flaky)
- [ ] Cobertura >= 80%

### Seguridad 🔒
- [ ] Inputs validados
- [ ] No hay datos sensibles expuestos
- [ ] Autenticación/Autorización correcta
- [ ] No hay vulnerabilidades obvias

### Documentación y Buenas Prácticas 📚
- [ ] Se consultó documentación oficial con context7
- [ ] El código sigue patrones oficiales de la librería
- [ ] APIs usadas están actualizadas (no deprecadas)
- [ ] Versiones en package.json son compatibles
- [ ] No hay warnings de dependencias desactualizadas
- [ ] Código incluye comentarios referenciando docs oficiales

### TypeScript 📘
- [ ] Tipos correctos (no usar `any`)
- [ ] Interfaces bien definidas
- [ ] No hay errores de TypeScript
- [ ] Tipos importados desde archivos correctos

### React Específico ⚛️
- [ ] Props correctamente tipadas
- [ ] useEffect con dependencias correctas
- [ ] Keys únicas en listas
- [ ] No hay warnings en consola
- [ ] Hooks siguen las reglas

## Output Esperado

```markdown
## Code Review Report

### 📊 Summary
- Files reviewed: 8
- Issues found: 12 (3 critical, 5 medium, 4 low)
- Suggestions: 7
- Positive highlights: 4

---

### 🔴 Critical Issues

#### 1. Potential XSS Vulnerability
**File**: src/components/ProductCard.tsx:45
**Issue**: Using dangerouslySetInnerHTML without sanitization
```tsx
<div dangerouslySetInnerHTML={{ __html: product.description }} />
```
**Fix**: Sanitize HTML or use a safe parser
```tsx
import DOMPurify from 'dompurify'
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
```

#### 2. Missing Input Validation
**File**: src/api/products.ts:23
**Issue**: Product price not validated before saving
**Fix**: Add validation:
```typescript
if (price < 0 || price > 1000000) {
  throw new Error('Invalid price')
}
```

---

### 🟡 Medium Issues

#### 3. Missing Error Handling
**File**: src/hooks/useProducts.ts:15
**Issue**: API call doesn't handle network errors
**Suggestion**: Add error boundary or try-catch

#### 4. useEffect Missing Dependency
**File**: src/components/Cart.tsx:28
**Issue**: useEffect uses `userId` but it's not in dependencies
**Fix**: Add to dependency array or use useCallback

---

### 🟢 Low Priority Issues

#### 5. Magic Number
**File**: src/utils/formatters.ts:12
**Issue**: Hardcoded value `0.16` (tax rate?)
**Suggestion**: Extract to constant `TAX_RATE = 0.16`

#### 6. Complex Conditional
**File**: src/components/Checkout.tsx:45
**Issue**: Nested ternary operators reduce readability
**Suggestion**: Extract to separate function

---

### 💡 Suggestions

1. **Performance Optimization**
   - Consider memoizing `calculateTotal` in Cart.tsx
   - ProductList could benefit from virtualization (react-window)

2. **Code Organization**
   - Move validation logic to separate validator file
   - Extract API endpoints to constants

3. **Testing**
   - Add integration test for checkout flow
   - Cart.tsx missing tests for discount calculations

---

### ✨ Positive Highlights

1. ✅ Excellent use of TypeScript types in store/useCartStore.ts
2. ✅ Good error messages in form validation
3. ✅ Well-structured component composition in ProductCard
4. ✅ Comprehensive tests in useProducts.test.ts (95% coverage)

---

### 📈 Metrics

**Before**:
- ESLint errors: 3
- TypeScript errors: 2
- Test coverage: 76%
- Security vulnerabilities: 1 high

**After applying fixes**:
- ESLint errors: 0
- TypeScript errors: 0
- Test coverage: 82%
- Security vulnerabilities: 0

---

### 🎯 Recommended Actions

1. **High Priority** (fix before merging):
   - Fix XSS vulnerability in ProductCard
   - Add input validation in products API
   - Fix useEffect dependencies

2. **Medium Priority** (fix soon):
   - Add error handling to useProducts
   - Improve test coverage to 85%

3. **Low Priority** (nice to have):
   - Extract magic numbers
   - Refactor complex conditionals
   - Add performance optimizations

---

### ✅ Approval Status

**Status**: ⚠️ NEEDS WORK

**Reason**: Critical security issues must be fixed before merging

**Next Steps**:
1. Fix critical issues
2. Re-run code review
3. Get approval from team lead
```

## Opciones

### Review específico por tipo

```bash
# Solo revisar seguridad
/code-review security

# Solo revisar performance
/code-review performance

# Solo revisar tests
/code-review testing
```

### Review de archivos específicos

```bash
/code-review src/components/Cart.tsx
```

### Review de cambios en branch

```bash
/code-review branch feature/new-checkout
```

## Integración con Git

Para revisar un Pull Request:

```bash
# Ver diff del PR
git diff main...feature-branch

# Ejecutar code review en cambios
/code-review
```

## Uso

```bash
/code-review
```

O simplemente:
```
"Revisa el código que acabo de escribir"
"Haz un code review de los archivos modificados"
"Valida que el código cumple los estándares"
"Security review de los cambios recientes"
```

## Tips

1. **Ejecuta code review ANTES de crear PR** - Ahorra tiempo
2. **Usa para aprender** - El feedback es educativo
3. **No lo tomes personal** - Es para mejorar el código, no juzgarte
4. **Aplica las sugerencias** - Mejora continua del codebase
