# 🤖 Claude Code: Memoria y Workflows Automatizados

Esta carpeta contiene la configuración de automatización, memoria y agentes especializados para el proyecto.

## 📁 Estructura

```
.claude/
├── agents/              # 8 agentes especializados en React
├── commands/            # 5 comandos personalizados
├── hooks/               # Hook para automatización
├── settings.json        # Configuración principal
└── README.md           # Este archivo
```

---

## 🧠 Sistema de Memoria

### CLAUDE.md (raíz del proyecto)

Archivo principal de memoria que Claude Code carga automáticamente.

**Ubicación**: `/Users/gonzalopinell/practice/claude/CLAUDE.md`

**Contiene**:
- Stack técnico del proyecto
- Arquitectura y estructura
- Configuración de agentes
- Estándares de código
- Reglas de negocio del POS
- Decisiones arquitectónicas

**Editar memoria**:
```bash
/memory
```

---

## 📖 Principio Fundamental: MCP context7

### ⚠️ IMPORTANTE: Verificación de Documentación Oficial

**Antes de implementar cualquier feature**, SIEMPRE consulta la documentación oficial usando el MCP server **context7**.

#### ¿Por qué usar context7?

- ✅ Asegura que usas la **última versión** de las APIs
- ✅ Sigue **buenas prácticas oficiales**
- ✅ Evita usar **código deprecado**
- ✅ Accede a **ejemplos actualizados**
- ✅ Valida **compatibilidad de versiones**

#### Cómo usar

```
"Antes de crear el store con Zustand, consulta la documentación
oficial usando context7 para verificar la última versión y
mejores prácticas"
```

#### Tecnologías que requieren verificación

- React, TypeScript, TanStack Query, Zustand, React Router
- Vite, Vitest, Playwright, Testing Library
- shadcn/ui, Radix UI, Tailwind CSS, Framer Motion

**Detalles completos**: Ver sección "Verificación de Documentación (MCP context7)" en `CLAUDE.md`

---

## 👥 Agentes Especializados (8 total)

### Agentes de Desarrollo

1. **react-ui-specialist**
   - Componentes, hooks, composición
   - Uso: `"Crea un componente de búsqueda"`

2. **react-uxui-specialist**
   - UX, accesibilidad, responsive, animaciones
   - Uso: `"Mejora la accesibilidad del formulario"`

3. **react-shadcn-specialist**
   - shadcn/ui, Radix, Tailwind, theming
   - Uso: `"Implementa un modal con shadcn"`

4. **react-zustand-specialist**
   - Estado global con Zustand
   - Uso: `"Crea un store para el carrito"`

5. **react-tankstack-query-specialist**
   - Data fetching, caching, TanStack Query
   - Uso: `"Implementa queries para productos"`

6. **react-router-specialist**
   - Routing, navegación, rutas protegidas
   - Uso: `"Configura rutas con autenticación"`

### Agentes de Calidad (Auto-ejecutables)

7. **react-refactor-specialist** ⚡
   - Refactorización, código limpio
   - **Auto-trigger**: ✅ Fase 1 del workflow
   - Uso: `"Refactoriza este componente"`

8. **react-qa-specialist** ⚡
   - Testing, cobertura, validación
   - **Auto-trigger**: ✅ Fase 2 del workflow
   - Uso: `"Ejecuta los tests"`

**Ver todos los agentes**:
```bash
/agents
```

---

## 🔄 Workflow Automatizado

### Cómo Funciona

1. **Modificas código** (archivos .ts, .tsx, .js, .jsx)
2. **Hook PostToolUse se dispara** automáticamente
3. **Workflow ejecuta en secuencia**:
   ```
   Refactor → Testing → Validation
   ```

### Configuración

**Archivo**: `.claude/settings.json`

```json
{
  "hooks": {
    "PostToolUse": {
      "type": "bash",
      "command": "./.claude/hooks/post-tool-use.sh"
    }
  },
  "automation": {
    "workflow_enabled": true,
    "auto_refactor": true,
    "auto_test": true
  }
}
```

### Hook Script

**Archivo**: `.claude/hooks/post-tool-use.sh`

Detecta cambios en código y dispara el workflow automático.

**Permisos**: ✅ Ejecutable (`chmod +x`)

---

## 📋 Comandos Personalizados

### 1. `/auto-workflow`
Ejecuta workflow completo: Refactor → Test → Validate

**Uso**:
```bash
/auto-workflow
```

**Fases**:
- Fase 1: Refactorización con react-refactor-specialist
- Fase 2: Testing con react-qa-specialist
- Fase 3: Validación (ESLint, TypeScript, npm audit)

---

### 2. `/quick-refactor`
Refactorización rápida sin testing

**Uso**:
```bash
/quick-refactor
```

**Hace**:
- Moderniza sintaxis
- Optimiza imports
- Extrae constantes
- Simplifica condicionales

---

### 3. `/run-tests`
Ejecuta tests con reporte detallado

**Uso**:
```bash
/run-tests
```

**Reporta**:
- Tests passing/failing
- Cobertura por tipo (statements, branches, functions, lines)
- Tests lentos
- Archivos con cobertura baja

**Variantes**:
```bash
/run-tests unit     # Solo unitarios
/run-tests e2e      # Solo E2E
/run-tests watch    # Modo watch
```

---

### 4. `/code-review`
Revisión exhaustiva de código

**Uso**:
```bash
/code-review
```

**Revisa**:
- Seguridad (XSS, SQL injection, etc.)
- Bugs potenciales
- Code smells
- Performance
- Tests
- Accesibilidad

**Variantes**:
```bash
/code-review security      # Solo seguridad
/code-review performance   # Solo performance
/code-review testing       # Solo tests
```

---

### 5. `/status`
Dashboard de estado del proyecto

**Uso**:
```bash
/status
```

**Muestra**:
- Tests (passing/failing)
- Cobertura
- ESLint errors
- Build status
- Vulnerabilidades
- Health score general

---

## 🚀 Guía de Uso Rápida

### Desarrollo Normal

```bash
# 1. Modificas código
# (El workflow se ejecuta automáticamente)

# 2. Verificas estado
/status

# 3. Si todo está verde, haces commit
git add .
git commit -m "feat: nueva funcionalidad"
```

### Desarrollo sin Auto-workflow

```bash
# 1. Modificas código

# 2. Refactorizas manualmente
/quick-refactor

# 3. Ejecutas tests
/run-tests

# 4. Revisas código
/code-review

# 5. Commit
git commit -m "feat: nueva funcionalidad"
```

### Antes de hacer PR

```bash
# 1. Verificar estado completo
/status

# 2. Code review exhaustivo
/code-review

# 3. Workflow completo
/auto-workflow

# 4. Crear PR si todo pasa
gh pr create
```

---

## ⚙️ Configuración Avanzada

### Deshabilitar Workflow Automático

Edita `.claude/settings.json`:

```json
{
  "automation": {
    "workflow_enabled": false,
    "auto_refactor": false,
    "auto_test": false
  }
}
```

### Modificar Umbrales de Calidad

Edita `CLAUDE.md`:

```markdown
## 📐 Estándares de Código

### Testing
- ✅ Coverage mínimo: 85%  # Cambiar aquí
```

### Agregar Nuevo Agente

1. Crear archivo en `.claude/agents/`:
```bash
touch .claude/agents/mi-nuevo-agente.md
```

2. Usar template:
```markdown
---
name: mi-nuevo-agente
description: Descripción del agente
tools: Read, Glob, Grep
model: sonnet
---

# Mi Nuevo Agente

Instrucciones del agente...
```

3. Registrar en `settings.json`:
```json
{
  "agents": {
    "mi-nuevo-agente": {
      "enabled": true,
      "auto_trigger": false
    }
  }
}
```

---

## 🐛 Troubleshooting

### Workflow no se dispara automáticamente

1. Verificar permisos del hook:
```bash
ls -la .claude/hooks/post-tool-use.sh
# Debe mostrar: -rwx--x--x
```

2. Dar permisos si es necesario:
```bash
chmod +x .claude/hooks/post-tool-use.sh
```

3. Verificar settings.json:
```bash
cat .claude/settings.json | grep "workflow_enabled"
# Debe mostrar: "workflow_enabled": true
```

### Agente no responde

1. Verificar nombre del agente:
```bash
ls .claude/agents/
```

2. Invocar explícitamente:
```
"Usa react-ui-specialist para crear componente"
```

### Comandos no aparecen

1. Verificar archivos:
```bash
ls .claude/commands/
```

2. Reiniciar sesión de Claude Code

---

## 📚 Recursos

### Archivos Clave

- **Memoria**: `/Users/gonzalopinell/practice/claude/CLAUDE.md`
- **Settings**: `.claude/settings.json`
- **Hook**: `.claude/hooks/post-tool-use.sh`

### Comandos Útiles

```bash
/memory          # Editar memoria
/agents          # Gestionar agentes
/hooks           # Ver hooks configurados
/context         # Ver contexto actual
/auto-workflow   # Ejecutar workflow completo
/status          # Ver estado del proyecto
```

### Documentación

- Claude Code Docs: https://code.claude.com/docs
- Hooks Guide: https://code.claude.com/docs/en/hooks-guide.md
- Sub-agents: https://code.claude.com/docs/en/sub-agents.md

---

## 🎯 Próximos Pasos

1. **Familiarízate con los comandos**:
   ```bash
   /status
   /agents
   /memory
   ```

2. **Prueba el workflow automático**:
   - Modifica un archivo .ts
   - Observa el workflow ejecutarse
   - Revisa el reporte

3. **Personaliza según necesites**:
   - Edita CLAUDE.md con contexto específico
   - Ajusta umbrales en settings.json
   - Crea comandos personalizados adicionales

4. **Explora los agentes**:
   ```
   "Usa react-shadcn-specialist para crear un botón"
   "Invoca react-qa-specialist para escribir tests"
   ```

---

**¿Preguntas?**

Pregunta a Claude Code directamente:
```
"¿Cómo uso el workflow automatizado?"
"¿Qué hace el agente react-refactor-specialist?"
"Muéstrame ejemplos de uso de /auto-workflow"
```

---

**Última actualización**: 2025-11-30
**Versión**: 1.0.0
