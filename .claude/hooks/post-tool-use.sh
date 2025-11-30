#!/bin/bash

# ============================================================================
# Post-Tool-Use Hook: Automated Workflow Trigger
# ============================================================================
# Este script detecta cambios en código fuente y dispara el workflow
# automatizado de refactoring, testing y validación.
#
# Flujo:
#   1. Detecta cambios en archivos .ts, .tsx, .js, .jsx
#   2. Notifica los archivos modificados
#   3. Señala a Claude Code para ejecutar el workflow automático
#
# Author: Claude Code Automation
# ============================================================================

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función de log
log_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

# ============================================================================
# Procesar evento del hook
# ============================================================================

# Leer evento JSON desde stdin
EVENT=$(cat)

# Extraer información del evento
TOOL_NAME=$(echo "$EVENT" | jq -r '.toolName // "unknown"')
MODIFIED_FILES=$(echo "$EVENT" | jq -r '.result.modifiedPaths[]? // empty')

# Debug: Log del evento (solo en modo verbose)
if [ "${VERBOSE:-false}" = "true" ]; then
    log_info "Tool used: $TOOL_NAME"
    log_info "Raw event: $EVENT"
fi

# ============================================================================
# Detectar cambios en archivos de código fuente
# ============================================================================

# Lista de extensiones a monitorear
CODE_EXTENSIONS="\.(ts|tsx|js|jsx|vue|svelte)$"

# Verificar si hay archivos de código modificados
CODE_CHANGES=$(echo "$MODIFIED_FILES" | grep -E "$CODE_EXTENSIONS" || true)

if [ -z "$CODE_CHANGES" ]; then
    # No hay cambios en código fuente, salir silenciosamente
    exit 0
fi

# ============================================================================
# Workflow Trigger
# ============================================================================

echo ""
echo "════════════════════════════════════════════════════════════════"
log_success "Code changes detected - Automated workflow triggered"
echo "════════════════════════════════════════════════════════════════"
echo ""

log_info "Modified files:"
echo "$CODE_CHANGES" | while read -r file; do
    if [ -n "$file" ]; then
        echo "  📄 $file"
    fi
done

echo ""
log_info "Workflow steps:"
echo "  1️⃣  Refactoring (react-refactor-specialist)"
echo "  2️⃣  Testing (react-qa-specialist)"
echo "  3️⃣  Validation (quality checks)"
echo ""

# Crear señal para que Claude Code active el workflow
# Esta salida es detectada por Claude Code y puede ser usada para
# disparar acciones automáticas
cat << 'WORKFLOW_TRIGGER'
---WORKFLOW-TRIGGER---
{
  "event": "code_changed",
  "trigger": "post_tool_use",
  "workflow": "refactor-test-validate",
  "agents_sequence": [
    "react-refactor-specialist",
    "react-qa-specialist"
  ],
  "auto_execute": true
}
---WORKFLOW-TRIGGER---
WORKFLOW_TRIGGER

log_success "Workflow trigger signal sent"
echo "════════════════════════════════════════════════════════════════"
echo ""

exit 0
