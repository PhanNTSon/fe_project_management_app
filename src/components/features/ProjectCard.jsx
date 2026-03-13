import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ 
  icon, 
  iconColorClass, 
  status, 
  statusColorClass, 
  title, 
  description, 
  progress, 
  teamMembers = [] 
}) => {
  return (
    <Link to="/projects/detail" className="block bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${iconColorClass}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider ${statusColorClass}`}>
          {status}
        </span>
      </div>
      
      <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 min-h-[40px]">{description}</p>
      
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex -space-x-2">
          {teamMembers.slice(0, 3).map((member, idx) => (
             <img 
               key={idx}
               className="h-7 w-7 rounded-full border-2 border-white dark:border-slate-900" 
               alt={`Team member ${idx}`} 
               src={member.avatar}
             />
          ))}
          {teamMembers.length > 3 && (
            <div className="h-7 w-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
              +{teamMembers.length - 3}
            </div>
          )}
        </div>
        
        <div className="text-right w-24">
          <div className="flex items-center justify-end gap-1 text-[11px] font-semibold text-slate-400 mb-1">
            <span>{progress}% complete</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full">
            <div className="bg-primary h-full rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
