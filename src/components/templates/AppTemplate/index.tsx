import { FC, ReactNode } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';

interface AppTemplateProps {
  children?: ReactNode | string;
}
const AppTemplate: FC<AppTemplateProps> = ({ children }) => {
  return (
    <>
      <div className="backgroundImage">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default AppTemplate;
