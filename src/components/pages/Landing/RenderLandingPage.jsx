import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  const grantGraphs = [
    {
      id: 1,
      src: GrantRatesByOfficeImg,
      alt: 'GrantRatesByOfficeImg',
      text: 'Search Grant Rates By Office',
    },
    {
      id: 2,
      src: GrantRatesByNationalityImg,
      alt: 'GrantRatesByNationalityImg',
      text: 'Search Grant Rates By Nationality',
    },
    {
      id: 3,
      src: GrantRatesOverTimeImg,
      alt: 'GrantRatesOverTimeImg',
      text: 'Search Grant Rates Over Time',
    },
  ];

  return (
    <main className="main">
      <header className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </header>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      {/* <div className="graphs-section"> */}

      <section className="graphs-section">
        {grantGraphs.map(graph => (
          <div className="grant-graphs-container">
            <img src={graph.src} alt={graph.alt} />
            <h3> {graph.text} </h3>
          </div>
        ))}
      </section>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          <span>View the Data</span>
        </Button>
        <a href="https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv">
          <div class="read-more-btn">
            <button
              type="button"
              class="ant-btn ant-btn-default"
              style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            >
              Download the Data
            </button>
          </div>
        </a>
      </div>

      <section className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </section>

      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* <div className="bottom-section">*/}
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </main>
  );
}
export default RenderLandingPage;
