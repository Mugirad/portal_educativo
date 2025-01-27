"use client"

export default function sd_v2() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <form className="max-w-[1000px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative bg-white border-b p-4">
          <div className="flex items-start gap-4">
            <div className="w-32 h-32 relative">
              <div
                className="absolute top-0 left-0 w-full h-full bg-[#F26522]"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              />
              <Image
                src="../public/upgch-logo.png"
                alt="UPGCH Logo"
                width={80}
                height={80}
                className="relative z-10 mt-2 ml-2"
              />
            </div>
            <div className="flex-1 pt-4">
              <h1 className="text-2xl font-semibold text-center">FORMATO DE SECUENCIA DIDÁCTICA</h1>
              <p className="text-center text-gray-600 italic">
                Modelo educativo del Sistema UPGCH Competencias para la vida
              </p>
            </div>
          </div>
        </div>

        {/* Main Form Sections */}
        <div className="p-6 space-y-6">
          {/* Program and Teacher Information */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block bg-gray-800 text-white p-2">PROGRAMA EDUCATIVO (1)</label>
              <input type="text" className="w-full border p-2 mt-2" />
            </div>
            <div className="col-span-1">
              <label className="block bg-gray-800 text-white p-2">CICLO (2)</label>
              <input type="text" className="w-full border p-2 mt-2" />
            </div>
            <div className="col-span-1">
              <label className="block bg-gray-800 text-white p-2">DOCENTE (3)</label>
              <div className="space-y-2 mt-2">
                <input type="text" placeholder="Nombre" className="w-full border p-2" />
                <input type="text" placeholder="Perfil Profesional" className="w-full border p-2" />
                <input type="text" placeholder="Posgrado" className="w-full border p-2" />
              </div>
            </div>
          </div>

          {/* Subject Information */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block bg-gray-800 text-white p-2">ASIGNATURA (4)</label>
              <input type="text" className="w-full border p-2 mt-2" />
            </div>
            <div>
              <label className="block bg-gray-800 text-white p-2">APRENDIZAJES ESPERADOS (5)</label>
              <textarea className="w-full border p-2 mt-2 h-24" />
            </div>
            <div>
              <label className="block bg-gray-800 text-white p-2">HORAS CLASE (6)</label>
              <input type="number" className="w-full border p-2 mt-2" />
            </div>
          </div>

          {/* Profile Impact and Competency */}
          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <label className="block bg-gray-800 text-white p-2">IMPACTO EN EL PERFIL DE EGRESO (7)</label>
                <Textarea className="w-full mt-2" />
              </div>
              <div>
                <label className="block bg-gray-800 text-white p-2">COMPETENCIA SELLO A LA QUE CONTRIBUYE (8)</label>
                <Textarea className="w-full mt-2" />
              </div>
            </div>
          </Card>

          {/* Evaluation Strategy */}
          <Card className="p-4">
            <h3 className="bg-gray-800 text-white p-2 mb-4">ESTRATEGIA DE EVALUACIÓN INTEGRAL (9)</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">CRITERIOS</label>
                  <Textarea className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">PORCENTAJE</label>
                  <input type="number" className="w-full border p-2" />
                </div>
              </div>
            </div>
          </Card>

          {/* Didactic Sequence */}
          <Card className="p-4">
            <h3 className="bg-gray-800 text-white p-2 mb-4">SECUENCIA DIDÁCTICA</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block bg-gray-800 text-white p-2">BIENVENIDA (10)</label>
                <Textarea className="w-full mt-2" />
              </div>
              <div>
                <label className="block bg-gray-800 text-white p-2">CONTEXTUALIZACIÓN (11)</label>
                <Textarea className="w-full mt-2" />
              </div>
              <div>
                <label className="block bg-gray-800 text-white p-2">INTRODUCCIÓN (12)</label>
                <Textarea className="w-full mt-2" />
              </div>
            </div>
          </Card>

          {/* Topics and Learning */}
          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <label className="block bg-gray-800 text-white p-2">TEMA / SUBTEMAS (13)</label>
                <Textarea className="w-full mt-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block bg-gray-800 text-white p-2">OBJETIVO DE APRENDIZAJE (14)</label>
                  <Textarea className="w-full mt-2" />
                </div>
                <div>
                  <label className="block bg-gray-800 text-white p-2">EVIDENCIA DE APRENDIZAJE (15)</label>
                  <Textarea className="w-full mt-2" />
                  <div className="mt-2">
                    <label className="block text-sm font-medium">Instrumento de evaluación:</label>
                    <input type="text" className="w-full border p-2 mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Learning Activities */}
          <Card className="p-4">
            <h3 className="bg-gray-800 text-white p-2 mb-4">ACTIVIDADES DE APRENDIZAJE (16)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">INICIO</label>
                <Textarea className="w-full h-32" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">DESARROLLO</label>
                <Textarea className="w-full h-32" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CIERRE</label>
                <Textarea className="w-full h-32" />
              </div>
            </div>
          </Card>

          {/* Final Activity and Evaluation */}
          <Card className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block bg-gray-800 text-white p-2">ACTIVIDAD FINAL (17)</label>
                <Textarea className="w-full mt-2" />
              </div>
              <div>
                <label className="block bg-gray-800 text-white p-2">EVALUACIÓN (18)</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">CRITERIOS</label>
                    <Textarea className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">INSTRUMENTOS</label>
                    <Textarea className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Teacher Signature and Authorization */}
          <Card className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block bg-gray-800 text-white p-2">NOMBRE Y FIRMA DEL DOCENTE (19)</label>
                <input type="text" className="w-full border p-2 mt-2" />
              </div>
              <div>
                <label className="block bg-gray-800 text-white p-2">AUTORIZACIÓN (20)</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">ACADEMIA</label>
                    <input type="text" className="w-full border p-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">COORDINACIÓN ACADÉMICA</label>
                    <input type="text" className="w-full border p-2" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Date */}
          <div className="text-center">
            <p className="mb-4">TUXTLA GUTIÉRREZ, CHIAPAS; A</p>
            <div className="flex justify-center gap-4">
              <input type="number" placeholder="DÍA" className="border p-2 w-20 text-center" />
              <span>DE</span>
              <input type="text" placeholder="MES" className="border p-2 w-32 text-center" />
              <span>DE 2024.</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-6 bg-gray-50 border-t">
          <button
            type="submit"
            className="w-full bg-[#F26522] text-white py-2 px-4 rounded-lg hover:bg-[#d55b1e] transition-colors"
          >
            Guardar Formato
          </button>
        </div>
      </form>
    </div>
  )
}

