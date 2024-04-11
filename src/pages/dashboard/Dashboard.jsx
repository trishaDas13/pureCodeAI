import React from 'react'
import Widget from '../../components/widgets/page';
import TopbarAdmin from '../../components/layout/admin/TopbarAdmin/index';
import Footer from '../../components/layout/Footer';
import MenuAdmin from '../../components/layout/admin/Navbar';

// import BackToTop from '../../components/layout/BackToTop'




const Dashboard = () => {
  return (
    <>
    <TopbarAdmin/>
    <MenuAdmin />
      <Widget/>
      <Footer/>
      {/* <BackToTop/> */}
    </>
  )
}

export default Dashboard