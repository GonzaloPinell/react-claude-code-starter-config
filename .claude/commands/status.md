---
description: "Ver estado general del proyecto: tests, cobertura, linting, build"
---

# Project Status

Muestra un dashboard rápido del estado actual del proyecto.

## Objetivo

Proporcionar una vista rápida de la salud del proyecto:
- Tests (passing/failing)
- Cobertura de código
- Errores de linting
- Estado del build
- Vulnerabilidades de seguridad

## Comandos a Ejecutar

```bash
# Tests
npm test -- --reporter=json

# Cobertura
npm run test:coverage -- --reporter=json

# Linting
npm run lint

# Type checking
npm run type-check

# Build
npm run build

# Security
npm audit --json
```

## Output Esperado

```markdown
# 📊 Project Status Dashboard

**Project**: Practice Claude Code (POS System)
**Last updated**: 2025-11-30 14:30:25
**Branch**: main

---

## ✅ Tests

```
Status: PASSING
Tests:  87 passed, 0 failed, 87 total
Time:   12.34s
```

**Coverage**:
- Statements: 85.23% ✅
- Branches: 78.45% ⚠️ (below 80%)
- Functions: 88.92% ✅
- Lines: 85.67% ✅

**Status**: ✅ PASS (threshold: 80%)

---

## 🔍 Code Quality

**ESLint**:
```
✅ 0 errors
✅ 0 warnings
```

**TypeScript**:
```
✅ 0 errors
✅ Type check passed
```

**Prettier**:
```
✅ All files formatted correctly
```

---

## 🔨 Build

```
✅ Build successful
Bundle size: 245.3 KB (gzipped: 78.2 KB)
Build time: 8.3s
```

---

## 🔒 Security

```
npm audit report
─────────────────────────────
✅ 0 vulnerabilities found
```

**Dependencies**:
- Total: 42
- Outdated: 3
- Major updates available: 1

---

## 📦 Git Status

**Branch**: main
**Commits ahead**: 0
**Commits behind**: 0
**Status**: Up to date

**Uncommitted changes**:
```
✅ Working directory clean
```

---

## 🚀 Workflow

**Automation**: ✅ Enabled
**Last workflow run**: 2 hours ago
**Status**: ✅ Success
**Agents active**:
- react-refactor-specialist ✅
- react-qa-specialist ✅

---

## 📈 Trends (Last 7 days)

**Test Coverage**:
```
78% → 82% → 83% → 85% → 85% → 85% → 85%
Trend: ↗️ +7% (Improving)
```

**Build Time**:
```
9.2s → 8.8s → 8.5s → 8.4s → 8.3s → 8.3s → 8.3s
Trend: ↘️ -0.9s (Improving)
```

**Test Count**:
```
72 → 75 → 78 → 82 → 84 → 87 → 87
Trend: ↗️ +15 tests (Growing)
```

---

## ⚠️ Action Items

### High Priority
- None 🎉

### Medium Priority
- [ ] Improve branch coverage to >= 80% (currently 78.45%)
- [ ] Update 3 outdated dependencies
- [ ] Add E2E tests for checkout flow

### Low Priority
- [ ] Optimize bundle size (target: < 200 KB)
- [ ] Document API endpoints
- [ ] Setup Storybook

---

## 💚 Overall Health Score

```
████████████████░░░░ 82/100

Breakdown:
- Tests:           ✅ 95/100
- Code Quality:    ✅ 100/100
- Security:        ✅ 100/100
- Build:           ✅ 90/100
- Coverage:        ⚠️ 78/100
- Documentation:   ⚠️ 60/100

Overall: HEALTHY ✅
```

---

## 🎯 Quick Actions

```bash
# Fix coverage
/run-tests coverage

# Update dependencies
npm update

# Fix linting issues
npm run lint:fix

# Review security
npm audit fix
```
```

## Variantes

### Status compacto (solo métricas clave)

```bash
/status compact
```

Output:
```
✅ Tests: 87/87 passing
✅ Coverage: 85%
✅ ESLint: 0 errors
✅ Build: Success
✅ Security: 0 vulnerabilities
```

### Status con detalles de CI/CD

```bash
/status ci
```

### Status de dependencias

```bash
/status deps
```

## Uso

```bash
/status
```

O simplemente:
```
"Muéstrame el estado del proyecto"
"Cómo está la salud del proyecto?"
"Status dashboard"
"Verifica que todo esté en verde"
```

## Frecuencia Recomendada

- **Diario**: Al comenzar el día de desarrollo
- **Antes de commits**: Para validar que todo pasa
- **Antes de crear PR**: Para asegurar calidad
- **Después de cambios grandes**: Para validar impacto

## Integración con CI/CD

Este comando puede ejecutarse en pipelines de CI/CD para generar
reportes automáticos del estado del proyecto.

```yaml
# .github/workflows/status.yml
name: Project Status
on: [push, pull_request]

jobs:
  status:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
      - run: npm run lint
      - run: npm run build
      - run: npm audit
```
