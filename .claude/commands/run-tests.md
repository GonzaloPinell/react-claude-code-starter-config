---
description: "Ejecutar suite de tests con reporte detallado"
---

# Run Tests

Ejecuta la suite completa de tests y proporciona un reporte detallado de resultados.

## Objetivo

Validar que todos los tests pasan y verificar cobertura de código sin ejecutar
el workflow completo de refactoring.

## Proceso

Invoca al **react-qa-specialist** para:

### 1. Ejecutar Tests Unitarios e Integración

```bash
npm test
```

### 2. Generar Reporte de Cobertura

```bash
npm run test:coverage
```

### 3. Ejecutar Tests E2E (Opcional)

```bash
npm run test:e2e
```

## Análisis

### Métricas a Reportar

1. **Test Results**:
   - Total de tests
   - Tests pasando
   - Tests fallando
   - Tests skipped
   - Tiempo de ejecución

2. **Coverage**:
   - Statements: X%
   - Branches: X%
   - Functions: X%
   - Lines: X%
   - Archivos con cobertura < 80%

3. **Performance**:
   - Tests más lentos (top 5)
   - Tests flaky (si hay)

## Output Esperado

```markdown
## Test Execution Report

### ✅ Unit & Integration Tests
```
Tests:       87 passed, 87 total
Duration:    12.34s
Suites:      23 passed, 23 total
```

### 📊 Coverage Summary
```
Statements   : 85.23% ( 1245/1461 )
Branches     : 78.45% ( 389/496 )
Functions    : 88.92% ( 223/251 )
Lines        : 85.67% ( 1198/1398 )
```

**Status**: ✅ PASS (Threshold: 80%)

### ⚠️ Files Below Threshold
- src/utils/legacy.ts - 45% coverage
- src/components/OldComponent.tsx - 62% coverage

### 🐌 Slowest Tests
1. ProductList integration - 2.3s
2. Checkout E2E flow - 1.8s
3. Authentication flow - 1.2s
4. Cart operations - 0.9s
5. Product search - 0.7s

### 🔴 Failed Tests
None

### 💡 Recommendations
- Add tests for src/utils/legacy.ts
- Consider splitting ProductList test into smaller units
- Mock expensive API calls in integration tests
```

## Opciones

### Solo tests unitarios
```bash
/run-tests unit
```

### Solo tests E2E
```bash
/run-tests e2e
```

### Tests con watch mode (desarrollo)
```bash
/run-tests watch
```

### Tests de un archivo específico
```bash
/run-tests src/components/Cart.test.tsx
```

## Acciones Post-Test

Si hay tests fallando:
1. **Reportar** detalles del error con stack trace
2. **Sugerir** posibles causas
3. **Preguntar** si se deben corregir automáticamente

Si la cobertura es < 80%:
1. **Identificar** archivos con cobertura baja
2. **Sugerir** qué tests agregar
3. **Ofrecer** generar tests automáticamente

## Integración con Workflow

Este comando es equivalente a ejecutar solo la Fase 2 del workflow completo,
sin refactoring ni validación de seguridad.

Útil cuando:
- ✅ Ya hiciste refactoring manual
- ✅ Solo quieres validar que todo funciona
- ✅ Estás en modo TDD (Test-Driven Development)

## Uso

```bash
/run-tests
```

O simplemente:
```
"Ejecuta todos los tests y muéstrame el reporte"
"Corre los tests con cobertura"
"Valida que todos los tests pasen"
```
