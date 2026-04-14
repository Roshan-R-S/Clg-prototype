import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { Button, Input, Textarea, Card } from '@/components/ui';
import { CONTACT_INFO } from '@/constants';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  MapPin,
  Phone,
  Mail,
  Clock,
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
        <ContactInfo />
        <ContactForm register={register} errors={errors} isSubmitting={isSubmitting} onSubmit={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <section className="bg-secondary py-24 px-6 text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-slate-600 max-w-2xl text-lg">
          Have questions? We're here to help. Reach out to us for any queries regarding admissions, courses, or campus
          life.
        </p>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CONTACT_INFO.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={idx} className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.content}</p>
            </div>
          );
        })}
      </div>

      <div className="aspect-video rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg grayscale hover:grayscale-0 transition-all">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3886.262572535492!2d80.2134563148229!3d13.0826801907831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52642630000001%3A0x7000000000000000!2sAnna%20Adarsh%20College%20for%20Women!5e0!3m2!1sen!2sin!4v1649580000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

interface ContactFormProps {
  register: ReturnType<typeof useForm<FormData>['register']>;
  errors: ReturnType<typeof useForm<FormData>['formState']>['errors'];
  isSubmitting: boolean;
  onSubmit: (data: FormData) => void;
}

function ContactForm({ register, errors, isSubmitting, onSubmit }: ContactFormProps) {
  return (
    <Card className="shadow-2xl shadow-slate-200/50" padding="lg">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Send a Message</h2>
          <p className="text-slate-500 text-sm">We value your feedback and inquiries.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input {...register('name')} label="Full Name" placeholder="Your Name" error={errors.name?.message} />
            <Input
              {...register('email')}
              label="Email Address"
              placeholder="email@example.com"
              error={errors.email?.message}
            />
          </div>

          <Input {...register('subject')} label="Subject" placeholder="How can we help?" error={errors.subject?.message} />

          <Textarea {...register('message')} label="Message" placeholder="Your message here..." rows={5} error={errors.message?.message} />

          <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting} className="w-full" rightIcon={<Send size={18} />}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </Card>
  );
}