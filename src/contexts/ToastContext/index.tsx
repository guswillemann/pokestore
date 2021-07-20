import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import Toast, { ToastObjectType } from './Toast';

type ToastContextTypes = {
  activeToast: (toastObj: ToastObjectType) => void;
}

const ToastContext = createContext({} as ToastContextTypes);

type ToastProviderProps = {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toastObject, setToastObject] = useState<ToastObjectType | null>();
  
  function activeToast(newToastObject: ToastObjectType) {
    setToastObject(newToastObject);
  }
  
  useEffect(() => {
    if (!toastObject) return;
    const timeoutId = setTimeout(() => {setToastObject(null)}, 3000);
    return () => clearTimeout(timeoutId);
  }, [toastObject])
  
  return (
    <ToastContext.Provider value={{
      activeToast,
    }}>
      {toastObject && <Toast toastObject={toastObject} />}
      {children}
    </ToastContext.Provider>
  );
}

export default function useToast() {
  return useContext(ToastContext);
};
