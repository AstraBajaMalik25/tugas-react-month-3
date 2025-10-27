import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const step1Schema = z.object({ firstName: z.string().min(1, 'Required'), lastName: z.string().min(1, 'Required') })
const step2Schema = z.object({ email: z.string().email('Invalid email'), phone: z.string().min(6, 'Too short') })


type Step1 = z.infer<typeof step1Schema>
type Step2 = z.infer<typeof step2Schema>
type All = Step1 & Step2


export default function MultiStepForm() {
const [step, setStep] = useState(1)
const methods1 = useForm<Step1>({ resolver: zodResolver(step1Schema), defaultValues: { firstName: '', lastName: '' } })
const methods2 = useForm<Step2>({ resolver: zodResolver(step2Schema), defaultValues: { email: '', phone: '' } })


const progress = (step / 2) * 100


const submitAll = () => {
const data: All = { ...methods1.getValues(), ...methods2.getValues() }
console.log('multi-step submit', data)
alert('Multi-step form submitted — cek console')
}


return (
<section className="bg-slate-800 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">Multi-Step Form</h3>
<div className="w-full bg-slate-700 h-2 rounded mb-4">
<div style={{ width: `${progress}%` }} className="h-2 rounded bg-emerald-500" />
</div>


{step === 1 && (
<form onSubmit={methods1.handleSubmit(() => setStep(2))} className="space-y-4">
<div>
<label className="block text-sm">First Name</label>
<input {...methods1.register('firstName')} className="w-full mt-1 p-2 rounded bg-slate-700" />
{methods1.formState.errors.firstName && <p className="text-red-400 text-sm">{methods1.formState.errors.firstName.message}</p>}
</div>


<div>
<label className="block text-sm">Last Name</label>
<input {...methods1.register('lastName')} className="w-full mt-1 p-2 rounded bg-slate-700" />
{methods1.formState.errors.lastName && <p className="text-red-400 text-sm">{methods1.formState.errors.lastName.message}</p>}
</div>


<div className="flex gap-2">
<button type="submit" className="px-4 py-2 bg-emerald-500 rounded">Next</button>
</div>
</form>
)}


{step === 2 && (
<form onSubmit={methods2.handleSubmit(() => submitAll())} className="space-y-4">
<div>
<label className="block text-sm">Email</label>
<input {...methods2.register('email')} className="w-full mt-1 p-2 rounded bg-slate-700" />
{methods2.formState.errors.email && <p className="text-red-400 text-sm">{methods2.formState.errors.email.message}</p>}
</div>


<div>
<label className="block text-sm">Phone</label>
<input {...methods2.register('phone')} className="w-full mt-1 p-2 rounded bg-slate-700" />
{methods2.formState.errors.phone && <p className="text-red-400 text-sm">{methods2.formState.errors.phone.message}</p>}
</div>


<div className="flex gap-2">
<button type="button" onClick={() => setStep(1)} className="px-4 py-2 bg-slate-600 rounded">Back</button>
<button type="submit" className="px-4 py-2 bg-emerald-500 rounded">Submit</button>
</div>
</form>
)}
</section>
)
}