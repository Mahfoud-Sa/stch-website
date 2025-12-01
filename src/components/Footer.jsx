import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          
          {/* Contact Phones */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">أرقام التواصل</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-medium">احمد عبدالله باعطيه:</span>
                <a href="tel:770266408" className="hover:text-blue-300">736193873</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-medium">علي عبدالله باعطيه:</span>
                <a href="tel:713643957" className="hover:text-blue-300">735578644</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-medium">مازن الغريب:</span>
                <a href="tel:778366288" className="hover:text-blue-300">780915754</a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">العنوان</h3>
            <p className="text-lg">
              حضرموت المكلا شارع الالكترونيات
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">تابعنا على</h3>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <a href="#" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-green-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} STCH. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
