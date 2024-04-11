import React from 'react'
import Widget from '../../components/widgets/page';
import TopbarAdmin from '../../components/layout/admin/TopbarAdmin/index';
import Footer from '../../components/layout/Footer';
import MenuAdmin from '../../components/layout/admin/Navbar';

import BackToTop from '../../components/layout/BackToTop'
import { LayoutProvider } from '../../context/useLayoutContext';




const Dashboard = () => {
  return (
    <>
<LayoutProvider>

    <TopbarAdmin/>
    <MenuAdmin />
      <Widget/>
      <Footer/>
      <BackToTop/>
      </LayoutProvider>
    </>
  )
}

export default Dashboard