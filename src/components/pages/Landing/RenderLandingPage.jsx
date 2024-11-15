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

  //dev note: improved semantic tags of jsx below

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

      {/* dev note: created a list of objects to map over and clean up jsx */}

      <section className="graphs-section">
        {grantGraphs.map(graph => (
          <div className="grant-graphs-container" key={graph.id}>
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

        {/* dev note: added second button as an anchor, adding the download link from the deployed sight then copied over styling */}

        <a href="https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv">
          <div className="read-more-btn">
            <button
              type="button"
              className="ant-btn ant-btn-default"
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

      <section className="bottom-section">
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* <div className="bottom-section">*/}
        <h1>Systemic Disparity Insights</h1>
        <div className="data-container">
          <div className="first-data-point-container">
            <h2>36%</h2>
            <h3>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscal year 2016 to 28 percent in fiscal year 2020.
            </h3>
          </div>
          <div className="second-data-point-container">
            <h2>5%</h2>
            <h3>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </h3>
          </div>
          <div className="third-data-point-container">
            <h2>6x Lower</h2>
            <h3>
              Between fiscal year 2017 and 2020, the New York asylum office’s
              average grant rate was six times lower than the San Francisco
              asylum office.
            </h3>
          </div>
        </div>

        <a
          href="https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="read-more-btn">
            <button
              type="button"
              className="ant-btn ant-btn-default"
              style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            >
              <span>Read More</span>
            </button>
          </div>
        </a>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </section>
    </main>
  );
}
export default RenderLandingPage;
