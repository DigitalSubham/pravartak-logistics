import { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react'

interface LabelProps {
  htmlFor: string
  children: ReactNode
  required?: boolean
}

export function Label({ htmlFor, children, required }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-slate-700 mb-2">
      {children}
      {required && <span className="text-blue-600 ml-1">*</span>}
    </label>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export function Input({ className = '', error, ...props }: InputProps) {
  return (
    <div>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-xl border ${
          error ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500'
        } bg-white text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent hover:border-slate-300 ${className}`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export function Textarea({ className = '', error, ...props }: TextareaProps) {
  return (
    <div>
      <textarea
        {...props}
        className={`w-full px-4 py-3 rounded-xl border ${
          error ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500'
        } bg-white text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent hover:border-slate-300 resize-none ${className}`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

export function Select({ className = '', error, options, placeholder, ...props }: SelectProps) {
  return (
    <div>
      <select
        {...props}
        className={`w-full px-4 py-3 rounded-xl border ${
          error ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500'
        } bg-white text-slate-900 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent hover:border-slate-300 ${className}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}

interface FormGroupProps {
  children: ReactNode
  className?: string
}

export function FormGroup({ children, className = '' }: FormGroupProps) {
  return <div className={`space-y-2 ${className}`}>{children}</div>
}
