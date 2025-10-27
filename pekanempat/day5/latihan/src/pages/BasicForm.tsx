
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
name: z.string().min(1, 'Nama wajib diisi'),
email: z.string().email('Email tidak valid'),
password: z.string().min(6, 'Password minimal 6 karakter'),
})


type FormData = z.infer<typeof schema>


export default function BasicForm() {
const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
resolver: zodResolver(schema),
})


const onSubmit = (data: FormData) => {
console.log('submit basic', data)
alert('Registrasi berhasil — cek console')
}


return (
<section className="bg-slate-800 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">Basic Registration Form</h3>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
<div>
<label className="block text-sm">Name</label>
<input {...register('name')} className="w-full mt-1 p-2 rounded bg-slate-700" />
{errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
</div>


<div>
<label className="block text-sm">Email</label>
<input {...register('email')} className="w-full mt-1 p-2 rounded bg-slate-700" />
{errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
</div>


<div>
<label className="block text-sm">Password</label>
<input type="password" {...register('password')} className="w-full mt-1 p-2 rounded bg-slate-700" />
{errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
</div>


<button type="submit" className="px-4 py-2 bg-emerald-500 rounded">Register</button>
</form>
</section>
)
}