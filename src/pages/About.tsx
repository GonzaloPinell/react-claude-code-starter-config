import { Link } from 'react-router-dom'

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
            >
              ← Volver al inicio
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Acerca del Proyecto
          </h1>

          <div className="space-y-6">
            {/* Stack */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Stack Tecnológico
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                    Frontend Framework
                  </h3>
                  <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• React 18+ con TypeScript</li>
                    <li>• Vite para build y desarrollo</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                    UI y Estilos
                  </h3>
                  <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Tailwind CSS para estilos</li>
                    <li>• shadcn/ui con Radix UI</li>
                    <li>• Lucide React para iconos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                    Estado y Data Fetching
                  </h3>
                  <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Zustand para estado global del cliente</li>
                    <li>• TanStack Query (React Query) para server state</li>
                    <li>• Axios para peticiones HTTP</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                    Routing
                  </h3>
                  <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• React Router v6+ para navegación</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Características Implementadas
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>✅ TypeScript con strict mode habilitado</li>
                <li>✅ Path aliases (@/* para imports limpios)</li>
                <li>✅ ESLint y Prettier configurados</li>
                <li>✅ Dark mode ready con Tailwind</li>
                <li>✅ State management con Zustand + persistence</li>
                <li>✅ Data fetching con TanStack Query + Axios</li>
                <li>✅ Optimistic updates en mutations</li>
                <li>✅ React Router con múltiples páginas</li>
                <li>✅ Estructura de carpetas escalable</li>
              </ul>
            </div>

            {/* Arquitectura */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Estructura del Proyecto
              </h2>
              <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                {`src/
├── api/          # Cliente Axios y configuración
├── components/   # Componentes React reutilizables
│   └── ui/       # Componentes de shadcn/ui
├── hooks/        # Custom hooks
├── lib/          # Utilidades y helpers
├── pages/        # Páginas/vistas de la aplicación
├── store/        # Stores de Zustand
├── types/        # TypeScript types e interfaces
└── main.tsx      # Entry point`}
              </pre>
            </div>

            {/* Mejores Prácticas */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Mejores Prácticas Aplicadas
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  📚 Documentación consultada vía context7 (MCP) para cada tecnología
                </li>
                <li>🎯 Separación de concerns (UI, estado, lógica)</li>
                <li>🔒 TypeScript strict para type safety</li>
                <li>♻️ Reutilización de componentes</li>
                <li>🎨 Sistema de diseño consistente</li>
                <li>⚡ Performance optimizations (memoization, caching)</li>
                <li>🧪 Preparado para testing (estructura modular)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
