// src/pages/AdvancedForm.tsx
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// Skema validasi pakai Zod
const schema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  file: z.any().optional(),
})

// Tipe data form
type FormData = z.infer<typeof schema>

export default function AdvancedForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const [preview, setPreview] = useState<string | null>(null)
  const watchedFile = watch("file") as FileList | undefined

  useEffect(() => {
    if (watchedFile && watchedFile.length > 0) {
      const file = watchedFile[0]
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file)
        setPreview(url)
        return () => URL.revokeObjectURL(url)
      }
      setPreview(null)
    } else {
      setPreview(null)
    }
  }, [watchedFile])

  const onSubmit = (data: FormData) => {
    console.log("advanced submit", data)
    alert("Advanced form submitted — cek console!")
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Advanced Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Judul</label>
          <input
            {...register("title")}
            placeholder="Masukkan judul"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          {errors.title && (
            <p className="text-red-400 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">File Gambar (optional)</label>
          <input type="file" {...register("file")} className="w-full" />
        </div>

        {preview && (
          <div className="mt-4">
            <p className="mb-1 text-gray-400">Preview:</p>
            <img
              src={preview}
              alt="preview"
              className="w-full h-48 object-cover rounded-lg border border-gray-700"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 p-2 rounded-lg font-semibold transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}