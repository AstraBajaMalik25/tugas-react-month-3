
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const itemSchema = z.object({ label: z.string().min(1, 'Required') })
const schema = z.object({ items: z.array(itemSchema).min(1, 'Add at least one item') })


type FormData = z.infer<typeof schema>


export default function DynamicForm() {
const { control, register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { items: [{ label: '' }] } })
const { fields, append, remove } = useFieldArray({ control, name: 'items' })


const onSubmit = (data: FormData) => {
console.log('dynamic', data)
alert('Dynamic form submitted — cek console')
}


return (
<section className="bg-slate-800 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">Dynamic Fields (Array)</h3>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
{fields.map((f, idx) => (
<div key={f.id} className="flex gap-2 items-center">
<input {...register(`items.${idx}.label` as const)} placeholder={`Item ${idx + 1}`} className="flex-1 p-2 rounded bg-slate-700" />
<button type="button" onClick={() => remove(idx)} className="px-3 py-1 bg-red-600 rounded">Remove</button>
</div>
))}


{errors.items && <p className="text-red-400 text-sm">{(errors.items as any).message}</p>}


<div className="flex gap-2">
<button type="button" onClick={() => append({ label: '' })} className="px-4 py-2 bg-blue-600 rounded">Add Item</button>
<button type="submit" className="px-4 py-2 bg-emerald-500 rounded">Submit</button>
</div>
</form>
</section>
)
}