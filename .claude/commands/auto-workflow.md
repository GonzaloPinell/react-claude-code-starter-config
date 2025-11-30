---
description: "Ejecutar workflow automático: refactor → test → validate"
---

# Automated Development Workflow

Ejecuta el siguiente workflow en secuencia para asegurar calidad de código:

## 📋 Workflow Sequence

### Fase 1: Code Refactoring 🔧

**Agente**: `react-refactor-specialist`

Por favor invoca al agente de refactorización para:

1. **Revisar código modificado**:
   - Identificar code smells
   - Detectar duplicación
   - Evaluar complejidad

2. **Aplicar mejoras**:
   - Modernizar a ES2024+ features
   - Optimizar performance (React.memo, useCallback, useMemo)
   - Mejorar legibilidad y nombres
   - Extraer componentes/hooks donde sea necesario

3. **Mantener funcionalidad**:
   - No cambiar comportamiento externo
   - Preservar todas las funcionalidades existentes
   - Actualizar comentarios y documentación

**Criterios de éxito**:
- ✅ 0 errores de ESLint
- ✅ 0 warnings de TypeScript
- ✅ Código más legible y mantenible
- ✅ Funcionalidad intacta

---

### Fase 2: Testing & Quality Assurance 🧪

**Agente**: `react-qa-specialist`

Después del refactoring, invoca al agente de QA para:

1. **Actualizar tests existentes**:
   - Revisar si el refactoring afectó tests
   - Actualizar tests que fallen por cambios estructurales
   - Mantener cobertura >= 80%

2. **Agregar nuevos tests**:
   - Escribir tests para código nuevo
   - Cubrir edge cases
   - Tests de integración si es necesario

3. **Ejecutar suite de tests**:
   ```bash
   npm test
   ```

4. **Verificar cobertura**:
   ```bash
   npm run test:coverage
   ```

5. **Reportar resultados**:
   - Total de tests: X passing / Y failing
   - Cobertura: X%
   - Archivos sin cobertura adecuada

**Criterios de éxito**:
- ✅ Todos los tests pasan (100%)
- ✅ Cobertura >= 80%
- ✅ No hay tests flaky
- ✅ Tests documentan comportamiento esperado

---

### Fase 3: Validation & Security 🔒

**Validaciones automáticas**:

1. **Type checking**:
   ```bash
   npm run type-check
   ```

2. **Linting**:
   ```bash
   npm run lint
   ```

3. **Security audit** (si hay cambios en dependencias):
   ```bash
   npm audit
   ```

4. **Build verification**:
   ```bash
   npm run build
   ```

**Criterios de éxito**:
- ✅ TypeScript compila sin errores
- ✅ ESLint pasa sin errores
- ✅ 0 vulnerabilidades críticas
- ✅ Build exitoso

---

## 📊 Reporte Final

Al completar el workflow, proporciona un reporte consolidado:

```markdown
## Workflow Execution Report

### 1. Refactoring
- ✅ Código modernizado a ES2024+
- ✅ Componentes optimizados con React.memo
- ✅ Custom hooks extraídos: useCartItems, useProductFilters
- ✅ 0 errores de ESLint

### 2. Testing
- ✅ Tests actualizados: 12 archivos
- ✅ Tests nuevos agregados: 18 casos
- ✅ Suite de tests: 87/87 passing
- ✅ Cobertura: 85% (↑ desde 78%)

### 3. Validation
- ✅ TypeScript: 0 errores
- ✅ ESLint: 0 errores, 0 warnings
- ✅ npm audit: 0 vulnerabilidades
- ✅ Build: Exitoso

### Summary
🎉 Workflow completado exitosamente
📈 Mejoras: +7% cobertura, 3 componentes optimizados
⏱️ Tiempo total: ~5 minutos
```

---

## 🚨 Manejo de Errores

Si alguna fase falla:

1. **DETENER el workflow** - No continuar a la siguiente fase
2. **Reportar el error** con detalles específicos
3. **Sugerir solución** o pedir intervención del usuario
4. **Permitir retry** después de corregir

**Ejemplo de error**:
```
❌ Fase 2 (Testing) falló:

Tests failing: 3/87
- Cart.test.tsx: Expected 2 items, received 1
- Product.test.tsx: Cannot read property 'name' of undefined

🔧 Acción requerida:
Los tests fallaron debido al refactoring. Por favor revisa los tests
y actualízalos para reflejar los nuevos nombres de propiedades.

¿Quieres que los actualice automáticamente? (y/n)
```

---

## 💡 Usage Tips

### Ejecución manual
```bash
/auto-workflow
```

### Ejecución automática
El workflow se dispara automáticamente cuando:
- Se modifican archivos .ts, .tsx, .js, .jsx
- El hook PostToolUse detecta cambios
- La configuración `auto_trigger` está habilitada

### Ejecución parcial
```bash
# Solo refactoring
"Ejecuta solo la fase de refactoring del workflow"

# Solo testing
"Ejecuta solo la fase de testing del workflow"

# Refactoring + Testing (sin validation)
"Ejecuta workflow sin la fase de validación"
```

---

## ⚙️ Configuración

Para modificar el comportamiento del workflow, edita:

**`.claude/settings.json`**:
```json
{
  "automation": {
    "workflow_enabled": true,
    "auto_refactor": true,
    "auto_test": true,
    "fail_on_errors": false
  },
  "testing": {
    "coverage_threshold": 80
  }
}
```

**`CLAUDE.md`** (memoria del proyecto):
- Agrega contexto específico del proyecto
- Define estándares de código personalizados
- Documenta decisiones arquitectónicas

---

## 🎯 Best Practices

1. **Ejecuta el workflow después de features completos** - No en cada pequeño cambio
2. **Revisa los reportes** - Verifica que las mejoras son reales
3. **Mantén los tests actualizados** - El workflow es tan bueno como tus tests
4. **Configura umbrales realistas** - 80% cobertura es un buen balance
5. **Permite tiempo suficiente** - El workflow puede tomar 3-5 minutos

---

**IMPORTANTE**: Este workflow está diseñado para ejecutarse secuencialmente.
No omitas fases a menos que sea absolutamente necesario. Cada fase valida
la anterior y prepara el terreno para la siguiente.
