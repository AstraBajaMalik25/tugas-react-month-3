"use client";




import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  children?: React.ReactNode;
  title?: string;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children, title = "Modal Demo" }, ref) => {
    const [visible, setVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // delay unmount for animation
    useEffect(() => {
      if (visible) setShouldRender(true);
      else {
        const timeout = setTimeout(() => setShouldRender(false), 200);
        return () => clearTimeout(timeout);
      }
    }, [visible]);

    useImperativeHandle(ref, () => ({
      open: () => setVisible(true),
      close: () => setVisible(false),
    }));

    if (!shouldRender) return null;

    return (
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)} // click outside to close
          >
            <motion.div
              className="relative bg-zinc-900 text-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // prevent close on inner click
            >
              <h2 className="text-lg font-semibold text-center mb-4">
                {title}
              </h2>
              <div className="text-center">{children}</div>
              <button
                onClick={() => setVisible(false)}
                className="mt-6 w-full bg-zinc-800 hover:bg-zinc-700 py-2 rounded-lg transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
