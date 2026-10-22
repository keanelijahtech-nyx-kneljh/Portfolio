import React, { useState } from 'react';
import { Plus, Check, Clock, Tag, Sparkles, AlertCircle, RefreshCw, ChevronRight, ChevronLeft, Calendar } from 'lucide-react';

interface KanbanTask {
  id: string;
  emoji?: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'finished';
  priority: 'High' | 'Medium' | 'Low';
  tag: string;
  dueDate: string;
}

const INITIAL_TASKS: KanbanTask[] = [
  {
    id: 't-1',
    emoji: '🚀',
    title: 'Launch Project',
    description: 'Initial setup and planning',
    status: 'todo',
    priority: 'High',
    tag: 'Planning',
    dueDate: 'Oct 23 (Tomorrow)'
  },
  {
    id: 't-2',
    emoji: '📝',
    title: 'Write Documentation',
    description: 'Document API endpoints and setup guide',
    status: 'todo',
    priority: 'Medium',
    tag: 'Docs',
    dueDate: 'Add date'
  },
  {
    id: 't-3',
    emoji: '🎨',
    title: 'Design UI Mockups',
    description: 'Create high-fidelity designs in Figma',
    status: 'finished',
    priority: 'High',
    tag: 'Design',
    dueDate: 'Oct 31 (Sat)'
  }
];

export const InteractiveKanban: React.FC = () => {
  const [tasks, setTasks] = useState<KanbanTask[]>(INITIAL_TASKS);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showSyncInfo, setShowSyncInfo] = useState<boolean>(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [newTaskDueDate, setNewTaskDueDate] = useState('Upcoming');

  const moveTask = (taskId: string, direction: 'forward' | 'backward') => {
    setTasks(prev => prev.map(task => {
      if (task.id !== taskId) return task;
      if (direction === 'forward') {
        if (task.status === 'todo') return { ...task, status: 'in_progress' };
        if (task.status === 'in_progress') return { ...task, status: 'finished' };
      } else {
        if (task.status === 'finished') return { ...task, status: 'in_progress' };
        if (task.status === 'in_progress') return { ...task, status: 'todo' };
      }
      return task;
    }));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: KanbanTask = {
      id: `t-${Date.now()}`,
      emoji: '⚡',
      title: newTaskTitle.trim(),
      description: newTaskDesc.trim() || 'Custom workflow task',
      status: 'todo',
      priority: 'Medium',
      tag: 'Task',
      dueDate: newTaskDueDate || 'Upcoming'
    };

    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
    setNewTaskDesc('');
    setShowAddModal(false);
  };

  const columns = [
    { key: 'todo' as const, label: 'TO DO', count: tasks.filter(t => t.status === 'todo').length },
    { key: 'in_progress' as const, label: 'IN PROGRESS', count: tasks.filter(t => t.status === 'in_progress').length },
    { key: 'finished' as const, label: 'FINISHED', count: tasks.filter(t => t.status === 'finished').length }
  ];

  return (
    <div className="bg-[#15181C] border border-[#333942] rounded-xl overflow-hidden shadow-2xl flex flex-col text-[#F5F5F3]">
      {/* Kanban Topbar matching authentic Google Tasks Kanban */}
      <div className="px-5 py-3.5 border-b border-[#333942] bg-[#1A1E24] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
            ⊞
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-white tracking-tight">Google Tasks Kanban</span>
              <span className="text-[11px] font-mono text-[#FA5428] uppercase tracking-wider bg-[#FA5428]/10 px-2 py-0.5 rounded">
                Interactive Sandbox
              </span>
            </div>
            <p className="text-xs text-[#B4BAC2]">Try moving tasks between lanes or adding new items</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSyncInfo(!showSyncInfo)}
            className="text-xs font-mono px-3 py-1.5 rounded-lg border border-[#333942] text-[#B4BAC2] hover:text-white hover:border-[#FA5428]/40 transition-colors flex items-center gap-1.5"
            title="Inspect planned sync mechanics"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#FA5428]" />
            <span>Sync Architecture</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-[#FA5428] hover:bg-[#E1441B] text-white transition-colors flex items-center gap-1 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* Sync Architecture Notification Drawer */}
      {showSyncInfo && (
        <div className="bg-[#1C2128] border-b border-[#333942] px-5 py-3 text-xs text-[#B4BAC2] flex items-start justify-between gap-4">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#FA5428] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Planned Integration Architecture: </span>
              In this design, board actions will trigger Google Tasks API v1 endpoints. Moving a task with a scheduled date will invoke the Google Calendar Events API patch hook.
              <span className="block mt-1 text-[#FA5428]/90 font-mono text-[11px]">
                Note: External Google OAuth & sync are planned capabilities (distinguished from the active UI prototype).
              </span>
            </div>
          </div>
          <button
            onClick={() => setShowSyncInfo(false)}
            className="text-[#B4BAC2] hover:text-white text-xs font-mono"
          >
            Close
          </button>
        </div>
      )}

      {/* Kanban Columns (TO DO, IN PROGRESS, FINISHED) */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#121418] min-h-[380px]">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.key);
          return (
            <div
              key={col.key}
              className={`rounded-xl p-3.5 border flex flex-col ${
                col.key === 'finished'
                  ? 'bg-[#151D1A]/60 border-emerald-900/40'
                  : 'bg-[#171B21] border-[#2D333B]'
              }`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#282D35]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs tracking-wider uppercase text-white font-mono">
                    {col.label}
                  </span>
                  <span className="w-5 h-5 rounded-full bg-[#252B33] text-[#B4BAC2] text-[11px] font-mono flex items-center justify-center font-medium">
                    {colTasks.length}
                  </span>
                </div>
                {col.key === 'todo' && (
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="text-[#8B949E] hover:text-[#FA5428] p-1 transition-colors"
                    title="Add task to To Do"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Tasks List */}
              <div className="space-y-3 flex-1 overflow-y-auto max-h-[420px] pr-0.5">
                {colTasks.length === 0 ? (
                  <div className="h-28 border border-dashed border-[#2D333B] rounded-lg flex items-center justify-center text-xs text-[#6E7681]">
                    No tasks in this lane
                  </div>
                ) : (
                  colTasks.map(task => (
                    <div
                      key={task.id}
                      className="group bg-[#1E232B] hover:bg-[#232933] border border-[#30363D] hover:border-[#FA5428]/50 rounded-xl p-3.5 transition-all duration-150 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          {task.emoji && <span className="text-base">{task.emoji}</span>}
                          <span className="text-xs sm:text-sm font-semibold text-white leading-snug">
                            {task.title}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#B4BAC2] mb-3 pl-6">
                        {task.description}
                      </p>

                      {/* Date Badge and Lane Controls */}
                      <div className="flex items-center justify-between gap-2 text-xs pt-2.5 border-t border-[#2A303A]">
                        <div className="flex items-center gap-1.5 text-[11px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 font-mono">
                          <Calendar className="w-3 h-3" />
                          <span>{task.dueDate}</span>
                        </div>

                        {/* Move Buttons */}
                        <div className="flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                          {task.status !== 'todo' && (
                            <button
                              onClick={() => moveTask(task.id, 'backward')}
                              className="p-1 rounded bg-[#272D36] hover:bg-[#FA5428] hover:text-white text-[#B4BAC2] transition-colors"
                              title="Move back"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {task.status !== 'finished' && (
                            <button
                              onClick={() => moveTask(task.id, 'forward')}
                              className="p-1 rounded bg-[#272D36] hover:bg-[#FA5428] hover:text-white text-[#B4BAC2] transition-colors"
                              title="Move forward"
                            >
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {task.status === 'finished' && (
                            <div className="p-1 text-emerald-400">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#1C2128] border border-[#333942] rounded-xl p-5 max-w-md w-full shadow-2xl">
            <h4 className="font-semibold text-white text-sm mb-3">Add New Task to Kanban</h4>
            <form onSubmit={handleAddTask} className="space-y-3.5">
              <div>
                <label className="block text-xs font-mono text-[#B4BAC2] mb-1">Task Title</label>
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="e.g. Test Webhook Payload Integrity"
                  className="w-full bg-[#15181C] border border-[#333942] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#FA5428]"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B4BAC2] mb-1">Description</label>
                <input
                  type="text"
                  value={newTaskDesc}
                  onChange={(e) => setNewTaskDesc(e.target.value)}
                  placeholder="e.g. Document steps and testing output"
                  className="w-full bg-[#15181C] border border-[#333942] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FA5428]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B4BAC2] mb-1">Scheduled Date</label>
                <input
                  type="text"
                  value={newTaskDueDate}
                  onChange={(e) => setNewTaskDueDate(e.target.value)}
                  placeholder="e.g. Oct 28 (Mon)"
                  className="w-full bg-[#15181C] border border-[#333942] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FA5428]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-[#B4BAC2] hover:text-white border border-[#333942]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg text-xs font-medium bg-[#FA5428] hover:bg-[#E1441B] text-white"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
