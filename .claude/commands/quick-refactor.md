---
description: "Refactorización rápida sin ejecutar workflow completo"
---

# Quick Refactor

Ejecuta solo la fase de refactorización sin testing ni validación.

## Objetivo

Mejorar rápidamente la calidad del código sin el overhead del workflow completo.
Útil para iteraciones rápidas durante desarrollo activo.

## Proceso

Invoca al **react-refactor-specialist** para:

### 1. Análisis Rápido
- Identificar code smells obvios
- Detectar duplicación
- Evaluar complejidad ciclomática

### 2. Mejoras Inmediatas
- Modernizar sintaxis (const/let, arrow functions, destructuring)
- Optimizar imports (remover no usados)
- Aplicar early returns donde sea posible
- Extraer magic numbers a constantes

### 3. Formateo
- Ejecutar Prettier
- Corregir violaciones de ESLint auto-fixeables

## Criterios

**NO hacer**:
- ❌ Refactorings grandes que cambien arquitectura
- ❌ Optimizaciones prematuras sin profiling
- ❌ Cambios que requieran actualizar tests

**SÍ hacer**:
- ✅ Mejoras cosméticas que no afectan funcionalidad
- ✅ Renombrar variables para mayor claridad
- ✅ Extraer constantes
- ✅ Simplificar condicionales

## Output Esperado

```markdown
## Quick Refactor Report

### Cambios Aplicados:
- ✅ Modernizada sintaxis en 3 archivos
- ✅ Removidos 8 imports no usados
- ✅ Extraídas 5 magic numbers a constantes
- ✅ Simplificados 2 condicionales complejos

### Archivos Modificados:
- src/components/Cart.tsx
- src/hooks/useProducts.ts
- src/utils/formatters.ts

### ESLint:
- Antes: 12 warnings
- Después: 0 warnings

⏱️ Tiempo: ~30 segundos
```

## Uso

```bash
/quick-refactor
```

O simplemente:
```
"Haz un quick refactor del archivo actual"
"Refactoriza rápidamente los componentes modificados hoy"
```
