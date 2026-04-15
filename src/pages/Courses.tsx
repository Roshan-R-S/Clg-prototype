import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Clock, GraduationCap } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import courseData from '@/data/courses.json';
import { Badge, Card, Section, SectionHeader } from '@/components/ui';
import { STREAMS } from '@/constants';
import type { Course } from '@/types';

export default function Courses() {
  const { stream, setStream } = useAppStore();
  const [search, setSearch] = useState('');

  const filteredCourses = (courseData as unknown as Course[]).filter((course: Course) => {
    const matchesStream = !stream || course.stream === stream;
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());
    return matchesStream && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <FilterBar stream={stream} setStream={setStream} search={search} setSearch={setSearch} />
      <CourseGrid courses={filteredCourses} setStream={setStream} setSearch={setSearch} />
    </div>
  );
}

function Header() {
  return (
    <section className="bg-secondary py-24 px-6 text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Our Programs</h1>
        <p className="text-slate-600 max-w-2xl text-lg">
          Explore our diverse range of undergraduate and postgraduate programs designed to prepare you for a successful
          career.
        </p>
      </div>
    </section>
  );
}

interface FilterBarProps {
  stream: string | null;
  setStream: (stream: string | null) => void;
  search: string;
  setSearch: (search: string) => void;
}

function FilterBar({ stream, setStream, search, setSearch }: FilterBarProps) {
  return (
    <section className="sticky top-[72px] z-30 bg-white border-b border-slate-100 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
          <button
            onClick={() => setStream(null)}
            className={`px-6 py-2 rounded-none text-sm font-medium transition-all whitespace-nowrap ${
              !stream ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Courses
          </button>
          {STREAMS.map((s) => (
            <button
              key={s.value}
              onClick={() => setStream(s.value)}
              className={`px-6 py-2 rounded-none text-sm font-medium transition-all whitespace-nowrap capitalize ${
                stream === s.value ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-100 border-none rounded-full pl-11 pr-6 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
      </div>
    </section>
  );
}

interface CourseGridProps {
  courses: Course[];
  setStream: (stream: string | null) => void;
  setSearch: (search: string) => void;
}

function CourseGrid({ courses, setStream, setSearch }: CourseGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </AnimatePresence>
      </div>

      {courses.length === 0 && (
        <EmptyState onClear={() => { setStream(null); setSearch(''); }} />
      )}
    </section>
  );
}

function CourseCard({ course }: { course: Course; key?: React.Key }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <Card hover className="group flex flex-col h-full" padding="none">
        <div className="aspect-video relative overflow-hidden rounded-none">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="primary" size="sm">
              {course.stream}
            </Badge>
          </div>
        </div>
        <div className="p-8 flex-grow space-y-6">
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{course.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{course.description}</p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock size={14} className="text-primary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <GraduationCap size={14} className="text-primary" />
              <span>Full Time</span>
            </div>
          </div>
        </div>
        <div className="p-8 pt-0">
          <button className="w-full bg-primary text-white py-4 rounded-none font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
            View Details
          </button>
        </div>
      </Card>
    </motion.div>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="text-center py-20 space-y-4">
      <div className="w-20 h-20 bg-slate-100 rounded-none flex items-center justify-center mx-auto text-slate-400">
        <Search size={32} />
      </div>
      <h3 className="text-xl font-bold">No courses found</h3>
      <p className="text-slate-500">Try adjusting your search or filters.</p>
      <button onClick={onClear} className="text-primary font-semibold">
        Clear all filters
      </button>
    </div>
  );
}