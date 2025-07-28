import React, { useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

const ToastNotification = ({ isVisible, onClose, item }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible || !item) return null;

  return (
    <div className="fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out">
      <div className={`bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex items-center gap-3">
          {/* Success Icon */}
          <div className="flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-12 h-12 object-contain rounded bg-gray-50"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-gray-800">Added to cart!</p>
            <p className="text-sm text-gray-600 truncate">{item.name}</p>
            <p className="text-sm font-medium text-green-600">${item.price}</p>
          </div>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div 
            className={`bg-green-500 h-1 rounded-full transition-all ease-linear ${
              isVisible ? 'toast-progress' : ''
            }`}
            style={{
              width: isVisible ? '100%' : '0%',
              animationDuration: '3s'
            }}
          />
        </div>
      </div>
      
      <style>
        {`
          @keyframes toast-progress {
            from { width: 100%; }
            to { width: 0%; }
          }
          
          .toast-progress {
            animation: toast-progress 3s linear forwards;
          }
        `}
      </style>
    </div>
  );
};

export default ToastNotification;