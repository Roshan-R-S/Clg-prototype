import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, UserCheck, Calendar, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { useAppStore } from '@/store/useAppStore';
import { Button, Input, Select, Card, Badge } from '@/components/ui';
import { ADMISSION_STEPS, STREAMS } from '@/constants';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FileText,
  CheckCircle2,
  UserCheck,
  Calendar,
};

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  course: z.string().min(1, 'Please select a course'),
  stream: z.string().min(1, 'Please select your 12th stream'),
});

type FormData = z.infer<typeof schema>;

const COURSE_OPTIONS = [
  { value: '', label: 'Select a course' },
  { value: 'bcom', label: 'B.Com (General)' },
  { value: 'bba', label: 'BBA' },
  { value: 'ba', label: 'B.A. English' },
  { value: 'bsc', label: 'B.Sc. Computer Science' },
];

export default function Admissions() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    toast.success('Application submitted successfully! Our team will contact you soon.');
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
        <AdmissionProcess />
        <ApplicationForm register={register} errors={errors} isSubmitting={isSubmitting} onSubmit={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <section className="bg-primary text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Admissions 2026</h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Start your journey towards excellence. Applications are now open for the academic year 2026-27.
        </p>
      </div>
    </section>
  );
}

function AdmissionProcess() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Admission Process</h2>
        <p className="text-slate-500">Follow these simple steps to secure your admission at Anna Adarsh.</p>
      </div>

      <div className="space-y-8">
        {ADMISSION_STEPS.map((step, idx) => {
          const Icon = iconMap[step.icon];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6"
            >
              <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Icon size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Card className="space-y-6" padding="lg">
        <div className="flex items-center gap-3 text-primary">
          <Sparkles size={24} />
          <h3 className="font-bold text-xl">Need Help?</h3>
        </div>
        <p className="text-slate-600 text-sm">
          Our AI Counsellor is available 24/7 to answer your questions about the admission process, eligibility, and
          more.
        </p>
        <Button onClick={() => useAppStore.getState().setVoiceCallOpen(true)} className="w-full">
          Talk to AI Counsellor
        </Button>
      </Card>
    </div>
  );
}

interface ApplicationFormProps {
  register: ReturnType<typeof useForm<FormData>['register']>;
  errors: ReturnType<typeof useForm<FormData>['formState']>['errors'];
  isSubmitting: boolean;
  onSubmit: (data: FormData) => void;
}

function ApplicationForm({ register, errors, isSubmitting, onSubmit }: ApplicationFormProps) {
  const streamOptions = [
    { value: '', label: 'Select your stream' },
    ...STREAMS.map((s) => ({ value: s.value, label: s.label })),
  ];

  return (
    <Card className="relative shadow-2xl shadow-slate-200/50" padding="lg">
      <div className="absolute -top-6 -right-6">
        <Badge variant="accent" size="md" className="bg-accent text-white px-6 py-3 rounded-2xl shadow-xl rotate-6">
          Apply Now
        </Badge>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Enquiry Form</h2>
          <p className="text-slate-500 text-sm">Fill in your details and we'll get back to you.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <Input {...register('name')} label="Full Name" placeholder="Enter your name" error={errors.name?.message} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              {...register('email')}
              label="Email Address"
              placeholder="email@example.com"
              error={errors.email?.message}
            />
            <Input
              {...register('phone')}
              label="Phone Number"
              placeholder="+91 00000 00000"
              error={errors.phone?.message}
            />
          </div>

          <Select {...register('course')} label="Interested Course" options={COURSE_OPTIONS} error={errors.course?.message} />

          <Select {...register('stream')} label="12th Stream" options={streamOptions} error={errors.stream?.message} />

          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </div>
    </Card>
  );
}